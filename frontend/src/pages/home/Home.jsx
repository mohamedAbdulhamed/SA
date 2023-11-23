import "../style/Home.scss";
import Bookshelf from "../Components/BookShelf.jsx";

const Home = () => {


  return (
    <div className="home-container">
      {localStorage.getItem("loggedIn") === "true" ? (
        <header>
          {localStorage.getItem("firstTime") === "true" ? (
              <h1>Welcome aboard, {localStorage.getItem("username")}!</h1>
            ) : (
              <h1>Welcome to the Grand Library!</h1>
            )}
        </header>
      ) : (
        <header>
          <h1>Welcome to the Grand Library!</h1>
        </header>
      )}

      <p>
        Request books from the library, and check out books that you have
        requested.
      </p>
      <p>
        To get started, select login or sign up in the navigation bar above.
      </p>
      <Bookshelf />
    </div>
  );
};

export default Home;