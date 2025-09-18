import FormSection from "../../common/FormSection";
import Header from "../../common/Header";
import BreadCrumb from "../../common/BreadCrumb";

const AppEnd = () => {
  return (
    <>
      <Header heading="Apply for Go Cycle" />
      <BreadCrumb currentPageName="Apply for Go Cycle" />
      <FormSection>
        <div className="wmnds-container wmnds-p-t-lg">
          <p>This promotion has now ended. </p>
        </div>
      </FormSection>
    </>
  );
};

export default AppEnd;
