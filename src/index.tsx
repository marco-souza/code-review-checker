/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

render(
  () => <App />,
  (() => {
    const app = document.createElement("div");

    app.style.flex = "1";
    app.style.position = "fixed";
    app.style.bottom = "20px";
    app.style.right = "20px";
    app.style.zIndex = "9999";

    document.body.append(app);
    return app;
  })(),
);
