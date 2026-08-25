import React, { useState } from "react";
export function Footer() {
  const [language, setLanguage] = useState("English");
  return /*#__PURE__*/React.createElement("footer", {
    className: "netflix-main-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-content-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer-contact-text"
  }, "Questions? Call ", /*#__PURE__*/React.createElement("a", {
    href: "tel:000-800-919-1694",
    className: "footer-phone"
  }, "000-800-919-1694")), /*#__PURE__*/React.createElement("div", {
    className: "footer-links-grid"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "footer-column"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#investors"
  }, "Investor Relations")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#privacy"
  }, "Privacy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#speed"
  }, "Speed Test"))), /*#__PURE__*/React.createElement("ul", {
    className: "footer-column"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#help"
  }, "Help Centre")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#jobs"
  }, "Jobs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#cookies"
  }, "Cookie Preferences")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#legal"
  }, "Legal Notices"))), /*#__PURE__*/React.createElement("ul", {
    className: "footer-column"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#account"
  }, "Account")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#ways"
  }, "Ways to Watch")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#corporate"
  }, "Corporate Information")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#only"
  }, "Only on Netflix"))), /*#__PURE__*/React.createElement("ul", {
    className: "footer-column"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#media"
  }, "Media Centre")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#terms"
  }, "Terms of Use")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Contact Us")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-language-wrapper"
  }, /*#__PURE__*/React.createElement("select", {
    value: language,
    onChange: e => setLanguage(e.target.value),
    className: "footer-lang-select"
  }, /*#__PURE__*/React.createElement("option", {
    value: "English"
  }, "\uD83C\uDF10 English"), /*#__PURE__*/React.createElement("option", {
    value: "Hindi"
  }, "\uD83C\uDF10 \u0939\u093F\u0928\u094D\u0926\u0940"), /*#__PURE__*/React.createElement("option", {
    value: "Spanish"
  }, "\uD83C\uDF10 Espa\xF1ol"))), /*#__PURE__*/React.createElement("p", {
    className: "footer-copyright"
  }, "Netflix Clone \u2022 Modern React Edition")));
}