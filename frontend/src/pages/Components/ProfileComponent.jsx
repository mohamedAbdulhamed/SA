import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faClock,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./profile.css";
import "../style/BookSearches.scss";

const ProfileCard = (props) => {
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/dashboard");
  }
  function getStatusIcon(status) {
    if (status === 1) {
      return <FontAwesomeIcon icon={faCheck} />;
    } else if (status === -1) {
      return <FontAwesomeIcon icon={faXmark} />;
    } else {
      return <FontAwesomeIcon icon={faClock} />;
    }
  } 

  const bookSearches = [
    { name: "Search 1", date: "2022-01-01" },
    { name: "Search 2", date: "2022-01-02" },
    { name: "Search 3", date: "2022-01-03" },
  ];

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
      <div className="profile-card p-3">
        <div className="profile-card-header">
          <h3>Profile</h3>
          <button className="back-button" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </button>
        </div>
        <div className="profile-card-body">
          <h5>FullName: {props.name}</h5>
          <h5>Email: {props.email}</h5>
          <hr />
          {/* Requests History */}
          {props.type === "admin" && props.requests && props.requests.length > 0 ? (
            <>
              <h3>Your Requests</h3>
              <ul className="request-list d-flex p-3">
                {props.requests.map((request, i) => (
                  <li key={i}>
                    {getStatusIcon(request.status)}
                    <span>Book{Math.floor(Math.random() * 10) + 1}</span>
                  </li>
                ))}
              </ul>
              <hr />
              {/* Books Searches History */}
              <h3>Your Book Searches</h3>
              <div className="book-searches">
                <h2>Book Searches</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Search Name</th>
                      <th>Search Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookSearches.map((search, i) => (
                      <tr key={i}>
                        <td>{search.name}</td>
                        <td>{search.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
