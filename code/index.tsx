import * as React from "react";
import { render } from "react-dom";

import App from "./MainBridge";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
