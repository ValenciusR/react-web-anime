import React, { Children, useState } from "react";

function Main({ children }) {
  return <main className="main">{children}</main>;
}

export default Main;
