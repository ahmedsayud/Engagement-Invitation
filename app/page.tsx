"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Only append once
    if (!document.getElementById("invitation-bundle-script")) {
      const script = document.createElement("script");
      script.id = "invitation-bundle-script";
      script.type = "module";
      script.src = "/assets/index-BNaIo4vQ.js";
      document.body.appendChild(script);
    }
  }, []);

  return <div id="root" />;
}
