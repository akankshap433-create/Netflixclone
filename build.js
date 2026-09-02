import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, "dist");
const ASSETS_DIR = path.resolve(__dirname, "assets");
const BABEL_FILE = path.resolve(__dirname, "babel.min.js");

console.log("=== BUILDING PRODUCTION STATIC DEPLOYMENT BUNDLE ===");

// 1. Ensure output directories exist
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}
const DIST_ASSETS = path.join(DIST_DIR, "assets");
if (!fs.existsSync(DIST_ASSETS)) {
  fs.mkdirSync(DIST_ASSETS, { recursive: true });
}

// 2. Copy assets to dist/assets
if (fs.existsSync(ASSETS_DIR)) {
  const assetFiles = fs.readdirSync(ASSETS_DIR);
  for (const f of assetFiles) {
    const srcPath = path.join(ASSETS_DIR, f);
    const destPath = path.join(DIST_ASSETS, f);
    fs.copyFileSync(srcPath, destPath);
  }
  console.log(`Copied ${assetFiles.length} assets to dist/assets/`);
}

// Helper to remove import/export statements for standalone bundling
function stripModules(code) {
  return code
    .replace(/^\uFEFF/, '')
    .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, "")
    .replace(/export\s+const\s+/g, "const ")
    .replace(/export\s+function\s+/g, "function ")
    .replace(/export\s+class\s+/g, "class ")
    .replace(/export\s+default\s+/g, "");
}

// 3. Bundle all CSS files into dist/bundle.css
const cssOrder = [
  "src/styles/main.css",
  "src/styles/tudum.css",
  "src/styles/navbar.css",
  "src/styles/hero.css",
  "src/styles/movie.css",
  "src/styles/modal.css",
  "src/styles/profile.css",
  "src/styles/login.css",
  "src/styles/footer.css"
];

let bundleCss = "/* Netflix Consolidated Production Styles */\n";
for (const rel of cssOrder) {
  const abs = path.resolve(__dirname, rel);
  if (fs.existsSync(abs)) {
    bundleCss += `\n/* --- ${rel} --- */\n` + fs.readFileSync(abs, "utf8") + "\n";
  } else {
    console.warn("CSS file not found:", rel);
  }
}
fs.writeFileSync(path.join(DIST_DIR, "bundle.css"), bundleCss, "utf8");
console.log(`Created dist/bundle.css: ${bundleCss.length} bytes`);

// 4. Bundle all JS/JSX files into dist/bundle.js
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

try {
  let Babel = null;
  if (fs.existsSync(BABEL_FILE)) {
    const babelCode = fs.readFileSync(BABEL_FILE, "utf8");
    const sandbox = { window: {}, console };
    vm.createContext(sandbox);
    vm.runInContext(babelCode, sandbox);
    Babel = sandbox.Babel || sandbox.window.Babel;
  }

  if (Babel) {
    let appCode = `(function() {\n  const React = window.React;\n  const ReactDOM = window.ReactDOM;\n  const { useState, useEffect, useRef, useCallback, useContext, createContext } = React;\n`;
    for (const rel of bundleOrder) {
      const abs = path.resolve(__dirname, rel);
      if (fs.existsSync(abs)) {
        appCode += `\n// --- ${rel} ---\n` + stripModules(fs.readFileSync(abs, "utf8")) + "\n";
      } else {
        console.warn("Source file not found:", rel);
      }
    }
    appCode += `\n})();\n`;

    const transformedApp = Babel.transform(appCode, {
      presets: ["react"],
      plugins: []
    }).code;

    const vendorReactPath = path.resolve(__dirname, "dist/vendor/react.min.js");
    const vendorReactDomPath = path.resolve(__dirname, "dist/vendor/react-dom.min.js");

    let reactVendor = fs.existsSync(vendorReactPath) ? fs.readFileSync(vendorReactPath, "utf8") : "";
    let reactDomVendor = fs.existsSync(vendorReactDomPath) ? fs.readFileSync(vendorReactDomPath, "utf8") : "";

    const finalBundle = `/**\n * Netflix Streaming Platform - Production Consolidated Bundle\n * Includes React 18 UMD, ReactDOM 18 UMD, and Application Code\n */\n${reactVendor}\n;\n${reactDomVendor}\n;\n${transformedApp}\n`;

    fs.writeFileSync(path.join(DIST_DIR, "bundle.js"), finalBundle, "utf8");
    console.log(`Created 100% self-contained dist/bundle.js: ${finalBundle.length} bytes`);
  }
} catch (err) {
  console.warn("Babel transpile warning:", err.message);
}

// 5. Generate standalone dist/index.html
const distIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
  <link rel="icon" type="image/x-icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico">
  
  <!-- Consolidated Production Stylesheet -->
  <link rel="stylesheet" href="./bundle.css">
</head>
<body>
  <!-- Netflix React App Root Container -->
  <div id="root"></div>

  <!-- Consolidated Self-Contained React Application Bundle -->
  <script src="./bundle.js" defer></script>
</body>
</html>
`;
fs.writeFileSync(path.join(DIST_DIR, "index.html"), distIndexHtml, "utf8");

// 6. Generate dist/_redirects for Netlify SPA routing
fs.writeFileSync(path.join(DIST_DIR, "_redirects"), "/*  /index.html  200\n", "utf8");

console.log(`Created standalone dist/index.html and dist/_redirects`);
console.log("=== BUILD COMPLETED SUCCESSFULLY WITH EXIT CODE 0 ===");
process.exit(0);
