import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./users.css";
import { Table } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

function Users() {
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      status: true,
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "987-654-3210",
      status: false,
    },
    {
      id: 3,
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "555-555-5555",
      status: true,
    },
  ]);

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
      <div className="container" style={{ margin: "auto", margineft: "-68px" }}>
        <h2>Users</h2>
        <div className="table table-striped">
          <div className="add table_create_btn">
            <Link to="/users/create" className="btn btn-primary my-3 button">
              New User
            </Link>
          </div>
          <Table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status (Active, In-active)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  {user.phone ? <td>{user.phone}</td> : <td>Not Available</td>}
                  <td>
                    {user.status ? (
                      <div className="d-flex">
                        <p style={{ marginRight: "5px" }}>Active</p>
                        <FontAwesomeIcon
                          className="mt-1"
                          icon={faCheckCircle}
                          color="green"
                        />
                      </div>
                    ) : (
                      <div className="d-flex">
                        <p style={{ marginRight: "5px" }}>In-active</p>
                        <FontAwesomeIcon
                          className="mt-1"
                          icon={faTimesCircle}
                          color="red"
                        />
                      </div>
                    )}
                  </td>
                  <td className="td">
                    <Link
                      to={`/users/update/${user.id}`}
                      className="btn btn-primary button"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger button"
                      onClick={() => handleDelete(user.id)}
                    >
                      <span></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );

  function handleDelete(id) {
    const confirm = window.confirm("Are you sure to delete this user?");
    if (confirm) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }
  }
}

export default Users;
