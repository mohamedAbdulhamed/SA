import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../style/userreqs.css';

// Accepted Book Requests

const UserRequests = () => {
  const navigate = useNavigate();
  const user = {
    id: 1,
  };
  
  const requests = [
    {
      book_id: 1,
      status: 1,
    },
  ];

  const bookNames = {
    1: 'Sample Book', 
  };

  const handleDownload = (book_id) => {
    console.log(`Downloading book with ID ${book_id}...`);
  };

  const handleGoBack = () => {
    navigate('/user_requests');
  };

  return (
    <>
      <div className="request-card p-3">
        <div className="request-card-header">
          <h3>Accepted Requests</h3>
          <button className="back-button" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </button>
        </div>
        <div className="request-card-body">
          {/* Requests History */}
          <table className="request-table mt-3">
            <thead>
              <tr>
                <th>Book Name</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, i) => {
                if (request.status === 1) {
                  const isDownloading = false;
                  return (
                    <tr key={i}>
                      <td className="book-name">
                        {bookNames[request.book_id]
                          ? bookNames[request.book_id].substring(0, 30)
                          : 'Loading Book Name...'}
                      </td>
                      <td>
                        <span
                          className="download-button"
                          onClick={() => handleDownload(request.book_id)}
                        >
                          {isDownloading ? (
                            <FontAwesomeIcon icon={faSpinner} spin />
                          ) : (
                            'Download'
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserRequests;
