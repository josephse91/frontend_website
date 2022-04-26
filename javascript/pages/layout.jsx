import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
    </div>
  );
}
