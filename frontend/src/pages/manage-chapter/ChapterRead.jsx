import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../style/ViewChapter.scss";

const ChapterRead = () => {
  const { id } = useParams();

  // Mocked data for a chapter (replace with actual data or API call)
  const chapterData = {
    id: 1,
    title: "Chapter 1",
    description: "Introduction",
    book_id: 1,
  };

  // Mocked data for books (replace with actual data or API call)
  const books = [
    { id: 1, name: "Book 1" },
    { id: 2, name: "Book 2" },
    // Add more books as needed
  ];

  function GetBookName(id) {
    let book = books.find((book) => book.id === id);
    return book ? book.name : "";
  }

  return (
    <div className="offset-lg-3 col-lg-6">
      <Link to="/chapters" className="btn btn-primary">
        <FontAwesomeIcon icon={faArrowLeft} className="icon" />
        Back
      </Link>
      <div className="card">
        <div className="title">
          <h2 className="MR">Chapter Details</h2>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>title of chapter : {chapterData.title}</h3>
          </li>
          <li className="list-group-item">
            <h3>description is : {chapterData.description}</h3>
          </li>
          <li className="list-group-item">
            <h3>book : {GetBookName(chapterData.book_id)}</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChapterRead;
