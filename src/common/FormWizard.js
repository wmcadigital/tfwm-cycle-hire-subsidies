import { useState, useEffect, Children } from "react";
import { useNavigate } from "react-router-dom";
import ReactGa from "react-ga";
import useAnalyticsEventTracker from "../Application/useAnalyticsEventTracker";

import PropTypes from "prop-types";
import { Form } from "react-final-form";

import ButtonLink from "./ButtonLink";

const FormWizard = ({
  initialValues,
  children,
  goToPage,
  setGoToPage,
}) => {
  const filteredChildren = children.filter((child) => child !== undefined);
  const [page, setPage] = useState(0);
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fieldsChanged, setFieldsChanged] = useState([]); // Track fields the user has touched/changed

  useEffect(() => {
    if (goToPage !== null) {
      setPage(goToPage);
    }
  }, [goToPage]);

  useEffect(() => {
    ReactGa.pageview(window.location.host);
  });

  // This useEffect is used to track form changes and update the fieldsChanged state as the user progresses
  useEffect(() => {
    const form = document.querySelector("form"); // Get DOM node of form
    // Function to work out last changed element in form
    const lastChangedEle = (e) => {
      // Update fields changed array with step number and last changed field name i.e. Step1: CustomerType > Step3: CardNumber
      setFieldsChanged([...fieldsChanged, `Step ${page}: ${e.target.name}`]);
    };
    // Listen to changes in form and run above function
    if (form) form.addEventListener("change", lastChangedEle);
    // On unmount, remove listener
    return () => {
      if (form) form.removeEventListener("change", lastChangedEle);
    };
  }, [page, fieldsChanged]);

  const next = (values) => {
    if (goToPage) {
      setPage(filteredChildren.length - 1);
      setGoToPage(null);
    } else {
      setPage(Math.min(page + 1, filteredChildren.length - 1));
    }
    setValues(values);
  };

  const previous = (e) => {
    if (goToPage) {
      setGoToPage(null);
    }
    e.target.blur();
    setPage(Math.max(page - 1, 0));
  };

  const validate = (values) => {
    if (activePage.props.validate) {
      return activePage.props.validate(values);
    }
    return {};
  };

  const handleSubmit = async (values) => {
    const isLastPage = page === Children.count(filteredChildren) - 1;
    if (isLastPage) {
      setLoading(true);
      try {
        const rawResponse = await fetch(process.env.REACT_APP_API_ENDPOINT, {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values.formData),
        });

        if (!rawResponse.ok) {
          throw new Error("Failed to submit the form");
        }

        const content = await rawResponse.json(); // Parse the response JSON
        // console.log("API Response:", content); // Log the response for debugging

        // Navigate to the success page and pass the response data
        navigate("/success", {
          replace: true,
          state: { apiResponse: content }, // Pass the API response to the success page
        });
      } catch (error) {
        // console.error("Error during form submission:", error);
        navigate("/error", {
          replace: true,
        });
      } finally {
        setLoading(false);
      }
    } else {
      // Go to the next page
      next(values);
    }
  };

  const activePage = Children.toArray(filteredChildren)[page];
  const isFirstPage = page === 0;
  const isLastPage = page === Children.count(filteredChildren) - 1;

  return (
    <>
      <div className="wmnds-col-1 wmnds-col-md-2-3">
        <div className="wmnds-col-1 wmnds-m-b-md">
          {page > 0 && <ButtonLink callback={previous}>{`< Back`}</ButtonLink>}
        </div>
      </div>
      <div className="wmnds-p-lg wmnds-bg-white">
        <Form
          initialValues={values}
          onSubmit={handleSubmit}
          validate={validate}
          mutators={{
            setFormAttribute: (
              [fieldName, fieldVal],
              state,
              { changeValue }
            ) => {
              changeValue(state, fieldName, () => fieldVal);
            },
          }}
        >
          {({ handleSubmit, values, form }) => (
            <form onSubmit={handleSubmit}>
              {activePage}
              <div>
                {isFirstPage && (
                  <button
                    id="form-continue"
                    type="submit"
                    className={`wmnds-btn${false ? " wmnds-btn--disabled" : ""}`}
                    onClick={useAnalyticsEventTracker.bind(
                      this,
                      "cycle-hire-subsidies",
                      "form started",
                      "true"
                    )}
                    disabled={false}
                  >
                    Continue
                  </button>
                )}
                {!isLastPage && !isFirstPage && (
                  <>
                    <button
                      type="submit"
                      className={`wmnds-btn${values.activeAccount || !values.checkEmail ? " wmnds-btn--disabled" : ""}`}
                      disabled={values.activeAccount || !values.checkEmail}
                      onClick={useAnalyticsEventTracker.bind(
                        this,
                        "cycle-hire-subsidies",
                        "form abandoned",
                        fieldsChanged
                      )}
                    >
                      Continue
                    </button>
                    {/* Show Reset Form button only on the 2nd page (page === 1) */}
                    {page === 1 && (
                      <button
                        type="button"
                        className="wmnds-btn wmnds-btn--secondary wmnds-m-l-md"
                        onClick={() => form.reset()}
                      >
                        Reset Form
                      </button>
                    )}
                  </>
                )}
                {isLastPage && (
                  <button
                    className={`wmnds-btn wmnds-btn--start${loading ? " wmnds-btn--disabled" : ""}`}
                    type="submit"
                    disabled={loading}
                  >
                    Accept and send
                    {loading ? (
                      <div
                        className="wmnds-loader wmnds-loader--btn wmnds-btn__icon wmnds-btn__icon--right"
                        role="alert"
                        aria-live="assertive"
                      >
                        <p className="wmnds-loader__content"></p>
                      </div>
                    ) : (
                      <svg className="wmnds-btn__icon wmnds-btn__icon--right ">
                        <use
                          xlinkHref="#wmnds-general-chevron-right"
                          href="#wmnds-general-chevron-right"
                        ></use>
                      </svg>
                    )}
                  </button>
                )}
              </div>

              <div style={{ marginTop: "5rem", display: "none" }}>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </div>
            </form>
          )}
        </Form>
      </div>
    </>
  );
};

FormWizard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  children: PropTypes.array,
  goToPage: PropTypes.number,
  setGoToPage: PropTypes.func,
};

FormWizard.defaultProps = {
  initialValues: {},
  children: [],
  goToPage: null,
  setGoToPage: () => {},
};

export default FormWizard;
