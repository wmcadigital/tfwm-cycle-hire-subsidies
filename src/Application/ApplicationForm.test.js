import { createRenderer } from "react-test-renderer/shallow";
import { BrowserRouter } from "react-router-dom";

import ApplicationForm from "./ApplicationForm";

describe("ApplicationForm", () => {
  it("renders Registration Form as expected", () => {
    const renderer = createRenderer();

    renderer.render(
      <BrowserRouter>
        <ApplicationForm />
      </BrowserRouter>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
