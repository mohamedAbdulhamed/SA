import React, { useState, useEffect } from "react";
import "../style/request.scss";
import { Link } from "react-router-dom";

const Request = () => {
  const [requests, ] = useState([
    {
      id: 1,
      user_id: 1,
      book_id: 1,
      status: 0, // 0 for pending, 1 for accepted, -1 for declined
    },
    {
      id: 2,
      user_id: 2,
      book_id: 2,
      status: 1, // 0 for pending, 1 for accepted, -1 for declined
    },
  ]);

  const [userNames, ] = useState({
    1: "User 1",
    2: "User 2",
  });

  const [bookNames, ] = useState({
    1: "Book 1",
    2: "Book 2",
  });

  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      // 
      setIsLoading(false);
    }, 1000);
  }, []);

  function GetUserName(id) {
    return userNames[id] || "";
  }

  function GetBookName(id) {
    return bookNames[id] || "";
  }

  function GetStatus(status) {
    if (status === 0) {
      return "Pending";
    } else if (status === 1) {
      return "Accepted";
    } else if (status === -1) {
      return "Declined";
    }
  }

  function ControlButtons(status, id) {
    if (status === 0) {
      return (
        <>
          <button
            className="text-decoration-none btn btn-sm btn-primary m-2"
            onClick={(e) => handleAccept(id)}
          >
            Accept
          </button>
          <button
            className="text-decoration-none btn btn-sm btn-danger m-2"
            onClick={(e) => handleDecline(id)}
          >
            Decline
          </button>
        </>
      );
    }
  }

  function UpdateButton(status, id) {
    if (status !== 0) {
      return (
        <Link
          className="text-decoration-none btn btn-sm btn-success"
          to={`/requests/update/${id}`}
        >
          Update
        </Link>
      );
    }
  }

  function handleAccept(id) {
    setMsgSuccess("Request accepted successfully!");
  }

  function handleDecline(id) {
    setMsgSuccess("Request declined successfully!");
  }

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      {err && (
        <div className="error fixed-top">
          <span>{err}</span>
          <button className="close-btn" onClick={() => setErr("")}>
            X
          </button>
        </div>
      )}
      {msg && (
        <div className="msg fixed-top">
          <span>{msg}</span>
          <button className="close-btn" onClick={() => setMsg("")}>
            X
          </button>
        </div>
      )}
      {msgSuccess && (
        <div className="msg-success fixed-top">
          <span>{msgSuccess}</span>
          <button className="close-btn" onClick={() => setMsgSuccess("")}>
            X
          </button>
        </div>
      )}
      <div className="container">
        <h2 className="main-title">Manage Requests</h2>
        
        {requests && requests.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Book</th>
                <th>Status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, i) => (
                <tr key={i}>
                  <td>
                    <Link to={"/users#" + request.user_id}>{GetUserName(request.user_id)}</Link>
                  </td>
                  <td>
                    <Link to={"/books/book/" + request.book_id}>
                      {GetBookName(request.book_id)}
                    </Link>
                  </td>
                  <td>{GetStatus(request.status)}</td>
                  <td>
                    {ControlButtons(request.status, request.id)}
                    {UpdateButton(request.status, request.id)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Requests Found!</p>
        )}
      </div>
    </>
  );
};

export default Request;
