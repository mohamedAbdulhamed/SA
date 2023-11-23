import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Chapter.scss";

const Chapter = () => {
  const [chapters, setChapters] = useState([
    {
      id: 1,
      title: "Chapter 1",
      description: "Introduction",
      book_id: 1,
    },
    {
      id: 2,
      title: "Chapter 2",
      description: "Conflict",
      book_id: 1,
    },
    {
      id: 3,
      title: "Chapter 1",
      description: "Introduction",
      book_id: 2,
    },
    {
      id: 4,
      title: "Chapter 2",
      description: "Conflict",
      book_id: 2,
    },
  ]);

  const books = [
    {
      id: 1,
      name: "Book 1",
    },
    {
      id: 2,
      name: "Book 2",
    },
  ];

  function GetBookName(id) {
    let book = books.find((book) => book.id === id);
    return book ? book.name : "Loading...";
  }

  function handleDelete(id) {
    const confirm = window.confirm(
      "Are you sure you want to delete this chapter?"
    );
    if (confirm) {
      setChapters((prevChapters) =>
        prevChapters.filter((chapter) => chapter.id !== id)
      );
    }
  }

  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h2 className="details">Manage Chapters</h2>

        <div className="createButton">
          <Link to="/chapters/create" className="btn btn-primary">
            Create +
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Book</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {chapters.map((chapter, i) => (
            <tr key={i}>
              <td className="chtitle">{chapter.title}</td>
              <td>{chapter.description}</td>
              <td className="name">{GetBookName(chapter.book_id)}</td>
              <td className="action">
                <Link
                  className="button btn btn-success btn-ex"
                  to={`/chapters/update/${chapter.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger button"
                  onClick={(e) => handleDelete(chapter.id)}
                >
                  <span></span>
                </button>
                <Link
                  className="button btn btn-primary btn-ex"
                  to={`/chapters/view/${chapter.id}`}
                >
                  Read
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chapter;
