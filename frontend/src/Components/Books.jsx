import React from "react";
import axios from "axios";
import "../index.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Books = () => {
  const [booksData, setBooksData] = useState([]);
  const [searchBooks, setSearchBooks] = useState("");

  const updateBooks = (_id) => {

  }

  const deleteBooks = (_id) => {
    axios
      .delete(`/api/books/delete/${_id}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get(`/api/books`)
      .then((res) => setBooksData(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {}, []);

  const handleSearch = () => {
    axios
      .get(`/api/books/search/${searchBooks}`)
      .then((res) => setBooksData(res.data))
      .catch((error) => console.log(error));
  };

  console.log("books", booksData);

  return (
    <>
      <div className="App">
        <h1>Books</h1>
        <input
          type="search"
          value={searchBooks}
          onChange={(e) => setSearchBooks(e.target.value)}
        />
        <button onClick={handleSearch}>search</button>
        <Link to="/addbook">
          <button>Add Book</button>
        </Link>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>image</th>
              <th>title</th>
              <th>author</th>
              <th>publisher</th>
              <th>availabeBooks</th>
              <th>rating</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {booksData.map((booksData, index) => {
              const {
                _id,
                title,
                author,
                publisher,
                image,
                availabeBooks,
                ratings,
              } = booksData;
              return (
                <tr key={{ index, _id }}>
                  <td className="table-data">{index + 1}</td>
                  <td className="table-data">{image}</td>
                  <td className="table-data">{title}</td>
                  <td className="table-data"> {author}</td>
                  <td className="table-data">{publisher}</td>
                  <td className="table-data">{availabeBooks}</td>
                  <td className="table-data">{ratings}</td>
                  <td className="table-data">
                    <button className="btn" onClick={() => updateBooks(_id)}>update</button>
                    <button className="btn" onClick={() => deleteBooks(_id)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Books;
