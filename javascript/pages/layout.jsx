import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";

export default function Layout() {
  return (
    <div className="layout">
      <div className="underNav">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
