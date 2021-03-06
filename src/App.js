import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ApplicationForm from "./Application/ApplicationForm";
import OutsideWmca from "./Application/section1/OutsideWmca";
import SubmitSuccess from "./Application/SubmitSuccess";
import SubmitError from "./Application/SubmitError";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationForm />} />
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
