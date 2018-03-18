import React from "react";
import ReactDOM from "react-dom";
import App from "./src/containers/App";
import { AppContainer } from "react-hot-loader";

if (module.hot) {
  module.hot.accept("./src/containers/App", () => {
    const NextApp = require("./src/containers/App").default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById("app")
    )
  })
}
ReactDOM.render(
  <App />,
  document.getElementById("app")
)