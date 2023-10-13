import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";

import ApplicationForm from "./Application/ApplicationForm";
import OutsideWmca from "./Application/section1/OutsideWmca";
import SubmitSuccess from "./Application/SubmitSuccess";
import SubmitError from "./Application/SubmitError";
import AppEnd from "./Application/section1/AppEnd";

const TRACKING_ID = "UA-3407557-5";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppEnd />} />
        <Route path="/form" element={<ApplicationForm />} />
        <Route path="/outsideWmca" element={<OutsideWmca />} />
        <Route path="/success" element={<SubmitSuccess />} />
        <Route path="/error" element={<SubmitError />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
