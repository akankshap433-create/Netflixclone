import fs from "fs";
import path from "path";
import vm from "vm";

// Load Babel Standalone
const babelCode = fs.readFileSync("babel.min.js", "utf8");
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(babelCode, sandbox);
const Babel = sandbox.Babel || sandbox.window.Babel;

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist", { recursive: true });
}

console.log("Compiling files and creating single consolidated bundle...");

// Helper to remove import/export statements for standalone bundling
function stripModules(code) {
  return code
    // Remove UTF-8 BOM if present
    .replace(/^\uFEFF/, '')
    // Remove all import statements
    .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, "")
    // Remove export statements
    .replace(/export\s+const\s+/g, "const ")
    .replace(/export\s+function\s+/g, "function ")
    .replace(/export\s+class\s+/g, "class ")
    .replace(/export\s+default\s+/g, "");
}

// Ordered list of files for the bundle
const bundleOrder = [
  "src/services/avatarService.js",
  "src/services/episodesData.js",
  "src/services/movieService.js",
  "src/services/audioService.js",
  "src/services/storageService.js",
  "src/components/Common/BrandLogo.jsx",
  "src/context/AuthContext.jsx",
  "src/context/ProfileContext.jsx",
  "src/context/MovieContext.jsx",
  "src/components/Intro/TudumIntro.jsx",
  "src/components/Navbar/SearchBar.jsx",
  "src/components/Navbar/ProfileDropdown.jsx",
  "src/components/Navbar/Navbar.jsx",
  "src/components/Hero/HeroBanner.jsx",
  "src/components/Rows/MovieCard.jsx",
  "src/components/Rows/MovieRow.jsx",
  "src/components/Rows/Top10Row.jsx",
  "src/components/Rows/ContinueWatchingRow.jsx",
  "src/components/Modals/MovieDetailModal.jsx",
  "src/components/Modals/VideoPlayerModal.jsx",
  "src/components/Profiles/ManageProfilesModal.jsx",
  "src/components/Profiles/ProfileGate.jsx",
  "src/components/Auth/LoginPage.jsx",
  "src/components/Auth/PlanSelectionPage.jsx",
  "src/components/Common/Toast.jsx",
  "src/components/Common/Footer.jsx",
  "src/App.jsx",
  "src/index.js"
];

let bundleCode = `
(function() {
  const React = window.React;
  const ReactDOM = window.ReactDOM;
  const { useState, useEffect, useRef, useCallback, useContext, createContext } = React;
`;

for (const file of bundleOrder) {
  if (fs.existsSync(file)) {
    const raw = fs.readFileSync(file, "utf8");
    const stripped = stripModules(raw);
    bundleCode += `\n// --- ${file} ---\n` + stripped + "\n";
  } else {
    console.warn("File not found:", file);
  }
}

bundleCode += `\n})();\n`;

// Transpile the entire bundle with Babel
const transformedBundle = Babel.transform(bundleCode, {
  presets: ["react"],
  plugins: []
}).code;

fs.writeFileSync("dist/bundle.js", transformedBundle, "utf8");
console.log(`Created dist/bundle.js: ${transformedBundle.length} bytes`);
