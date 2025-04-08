import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category, action, label) => {
  // console.log("GA event:", category, ":", action, ":", label);
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default useAnalyticsEventTracker;
