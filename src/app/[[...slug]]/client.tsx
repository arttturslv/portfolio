/** @format */

"use client";

import React from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../home/index"), { ssr: false });

export function ClientOnly() {
  return <App />;
}
