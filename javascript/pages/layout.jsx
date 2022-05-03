import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Layout() {
  return (
    <div className="layout">
      <div className="underNav">
        <Navbar />
        <Outlet className="pageContent" />
      </div>
      <div>This will be footer</div>
    </div>
  );
}
