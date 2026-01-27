"use client";

import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

function ToastifyProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}

export default ToastifyProvider;
