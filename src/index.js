import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

function mountApp() {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", mountApp);
      return;
    }
    let fallbackRoot = document.getElementById("root");
    if (!fallbackRoot) {
      fallbackRoot = document.createElement("div");
      fallbackRoot.id = "root";
      document.body.appendChild(fallbackRoot);
    }
    mountToElement(fallbackRoot);
    return;
  }
  mountToElement(rootElement);
}

function mountToElement(el) {
  try {
    const ReactLib = window.React || React;
    const ReactDOMLib = window.ReactDOM || ReactDOM;
    
    if (ReactDOMLib && ReactDOMLib.createRoot) {
      const root = ReactDOMLib.createRoot(el);
      root.render(
        ReactLib.createElement(ReactLib.StrictMode, null, ReactLib.createElement(App, null))
      );
    } else if (ReactDOMLib && ReactDOMLib.render) {
      ReactDOMLib.render(ReactLib.createElement(App, null), el);
    } else {
      console.error("ReactDOM is not available to mount the Netflix App.");
    }
  } catch (err) {
    console.error("Error mounting Netflix App:", err);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp);
} else {
  mountApp();
}
