/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

render(
  () => <App />,
  (() => {
    const app = document.createElement("div");

    app.classList.add(
      "bg-none",
      "p-8",
      "flex-1",
      "fixed",
      "bottom-0",
      "right-2",
      "z-9999",
    );

    document.body.append(app);
    return app;
  })(),
);
