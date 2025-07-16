import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // ✅ MUST match the export name
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<div className="relative min-h-screen overflow-hidden">
  {/* Background Animation Layer */}
  <div className="absolute inset-0 z-0 bg-gradient-to-tr from-blue-200 via-purple-100 to-pink-200 animate-background blur-sm opacity-70"></div>

  {/* Content Layer */}
  <div className="relative z-10 bg-white/90 text-gray-900 p-6 md:p-12 backdrop-blur-md">
    {/* ... your existing content ... */}
  </div>
</div>
