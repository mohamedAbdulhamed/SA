import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import CardComponent from '../Components/CardComponent';

const AdminBoard=()=>{
  const navigate = useNavigate();

  const changeRole = () => {
    const role = localStorage.getItem("role");
    const newRole = role === "admin" ? "user" : "admin";

    localStorage.setItem("role", newRole);

    window.location.reload();
  }

	return(
    <div className='row p-3'>
      <div className="row p-3">
        <CardComponent
          title="Books"
          description="See All Books We Have >"
          linkUrl="/books"
          icon="book"
        />
        <CardComponent
          title="Chapters"
          description="Manage Books Chapters >"
          linkUrl="/chapters"
          icon="chapter"
        />
        <CardComponent
          title={`Users | (${Math.floor(Math.random() * 100)} Users)`}
          description="Manage Users >"
          linkUrl="/users"
          icon="users"
        />

      </div>
      <div className="row p-3">
        <CardComponent
          title="Requests"
          description="Manage users requests >"
          linkUrl="/requests"
          icon="request"
        />
        <CardComponent
          title="Profile"
          description="Manage your own profile >"
          linkUrl="/profile"
          icon="profile"
        />
      </div>

      <div className="row p-3 d-flex justify-content-center">
        <button className='btn btn-primary w-50 ' onClick={changeRole}>Change Role</button>
      </div>
    </div>
  )}
export default AdminBoard 