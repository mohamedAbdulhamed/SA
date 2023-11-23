import CardComponent from '../Components/CardComponent';


const UserBoard=()=>{

  const changeRole = () => {
    const role = localStorage.getItem("role");
    const newRole = role === "admin" ? "user" : "admin";

    localStorage.setItem("role", newRole);

    window.location.reload();
  }

	return(
    <>
      <div className="row p-3 justify-content-center cards-container">
        <CardComponent
          title="Books"
          description="See All Books We Have >"
          linkUrl="/books"
          icon="book"
        />
        <CardComponent
          title="Accepted Book Requests"
          description="Download Requested Books >"
          linkUrl="/user_requests"
          icon="request"
        />
        <CardComponent
          title="Profile"
          description="Manage your own profile >"
          linkUrl="/profile"
          icon="profile"
        />
      <button className='btn btn-primary w-50' onClick={changeRole}>Change Role</button>
      </div>

    </>
  )
}
export default UserBoard 