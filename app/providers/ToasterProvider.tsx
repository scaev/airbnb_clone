"use client";

import { Toaster } from "react-hot-toast";
//we can't directly use Toaster (it's not adjusted the next 13 app router)
const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;
