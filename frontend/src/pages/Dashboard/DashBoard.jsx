import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AdminBoard from "./AdminBoard";
import UserBoard from "./UserBoard";

import "../style/Dashboard.css";

function Dashboard () {
  const [content, setContent] = useState(null);
  const [err, setErr] = useState('');

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      setContent(<AdminBoard />);
    } else if (role === "user") {
      setContent(<UserBoard />);
    } else {
      setContent(null);
      setErr("Please login to access this page");
    }
  }, []);

  return(
    <>
      {err && <p className="form__error">{err}</p>}
      {content}
    </>
  )
}

export default Dashboard;