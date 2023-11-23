import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../style/BookList.scss";
import { Table } from "@mui/material";

function Booklist() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBooks([
        {
          id: 1,
          name: "The Catcher in the Rye",
          description: "A classic novel about teenage angst.",
          author: "J.D. Salinger",
          field: "Fiction",
          dop: "2023-01-15",
        },
        {
          id: 2,
          name: "To Kill a Mockingbird",
          description: "A powerful exploration of racism and morality.",
          author: "Harper Lee",
          field: "Classics",
          dop: "2023-02-22",
        },
        {
          id: 3,
          name: "1984",
          description: "A dystopian novel by George Orwell.",
          author: "George Orwell",
          field: "Science Fiction",
          dop: "2023-03-10",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    // Filter out the book with the specified ID
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    console.log(`Deleting book with ID: ${id}`);
  };
  const RequestBook = (id) => {
    alert("Book Requested");
    console.log(`Requesting book with ID: ${id}`);
  };

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
      <div>
        <div className="header">
          <h1>Books List</h1>
          {localStorage.getItem("role") === "admin" && (
            <button
              className="create-btn"
              onClick={() => navigate("/books/create")}
            >
              Create Book
            </button>
          )}
        </div>
        <div className="table-container">
          <Table>
            <thead>
              <tr>
                <th>Book Name</th>
                <th>Description</th>
                <th>Author</th>
                <th>Field</th>
                <th>DOP</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((d) => (
                <tr key={d.id}>
                  <td>{d.name}</td>
                  {d.description.length > 50 ? (
                    <td>{d.description.slice(0, 50) + "..."}</td>
                  ) : (
                    <td>{d.description}</td>
                  )}
                  <td>{d.author}</td>
                  <td>{d.field}</td>
                  <td>{d.dop.slice(0, 10)}</td>
                  <td className="td">
                    <div className="buttonsList">
                      {localStorage.getItem("role") === "admin" ? (
                        <>
                          <Link
                            className="myButton"
                            to={`/books/update/${d.id}`}
                          >
                            Update
                          </Link>
                          <button
                            className="btn btn-danger button"
                            onClick={() => handleDelete(d.id)}
                          >
                            <span></span>
                          </button>
                          <Link className="myButton" to={`/books/book/${d.id}`}>
                            View
                          </Link>
                        </>
                      ) : (
                        <>
                          <button onClick={() => RequestBook(d.id)}>
                            Request
                          </button>
                          <Link to={`/books/book/${d.id}`}>
                            <button>Details</button>
                          </Link>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Booklist;
