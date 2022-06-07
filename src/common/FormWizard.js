import { useState, useEffect, Children } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import { Form } from "react-final-form";

import ButtonLink from "./ButtonLink";

const FormWizard = ({
  initialValues,
  children,
  onSubmit,
  goToPage,
  setGoToPage,
}) => {
  const filteredChildren = children.filter((child) => child !== undefined);
  const [page, setPage] = useState(0);
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (goToPage !== null) {
      setPage(goToPage);
    }
  }, [goToPage]);

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
      (async () => {
        const rawResponse = await fetch(
          "https://cyclewise-dev-api.azure-api.net/cyclewise/submit-form",
          {
            method: "POST",
            headers: {
              Accept: "*/*",
              "Content-Type": "text/plain",
              "Ocp-Apim-Subscription-Key": "31ce5d3186fd43aeb7a9f1dd8a6367ee",
              "Ocp-Apim-Trace": "true",
            },
            body: JSON.stringify(values.formData),
          }
        ).catch(function () {
          // if theres an error with the submission show the error page
          navigate("/error", {
            replace: true,
          });
        });
        // get application number from response
        const content = await rawResponse.json();
        navigate("/success", {
          replace: true,
        });
      })();
      return onSubmit(values);
      setLoading(false);
    } else {
      // go to next page
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
          {({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit}>
              {activePage}
              <div>
                {/* Add green start button to Introduction page */}
                {isFirstPage && (
                  <button
                    type="submit"
                    className="wmnds-btn wmnds-btn--start"
                    onClick={(e) => e.target.blur()}
                  >
                    Check if you&#39;re eligible
                    <svg className="wmnds-btn__icon wmnds-btn__icon--right ">
                      <use
                        xlinkHref="#wmnds-general-chevron-right"
                        href="#wmnds-general-chevron-right"
                      ></use>
                    </svg>
                  </button>
                )}
                {!isLastPage && !isFirstPage && (
                  <button
                    type="submit"
                    className="wmnds-btn"
                    onClick={(e) => e.target.blur()}
                  >
                    Continue
                  </button>
                )}
                {isLastPage && (
                  <button
                    className="wmnds-btn wmnds-btn--start"
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
