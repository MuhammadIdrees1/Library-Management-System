
import React from "react";
import { useState } from "react";
import axios from "axios";
 

const UpdateBook = () => {
  
  const [input, setInput] = useState({
    title: "",
    author: "",
    publisher: "",
    image: "",
    // stock: "",
    availabeBooks: "",
    ratings: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
        
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(input);
    const updateBook={
      title: input.title,
    author: input.author ,
    publisher:  input.publisher,
    image:  input.image,
    // stock:  input.atock,
    availabeBooks: input.availabeBooks,
    ratings:  input.ratings,
    }



  

    axios
      .put(`/api/books/update/${_id}`,updateBook)
      .then((res) => console.log('res',res))
      .catch((error) => console.log(error));
  }

  return (
    <>

      <label htmlFor="">
        <input
          type="text"
          name="title"
          placeholder="title"
          value={input.title}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        <input
          type="text"
          name="author"
          placeholder="author"
          value={input.author}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        <input
          type="text"
          name="publisher"
          placeholder="publisher"
          value={input.publisher}
          onChange={handleChange}
        />
      </label>
      {/* <label htmlFor="">
        <input
          type="text"
          name="stock"
          placeholder="stock"
          value={input.stock}
          onChange={handleChange}
        />
      </label> */}
      <label htmlFor="">
        <input
          type="number"
          name="availabeBooks"
          placeholder="availabeBooks"
          value={input.availabeBooks}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        <input
          type="number"
          name="ratings"
          placeholder="ratings"
          value={input.ratings}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        <input
          type="file"
          name="image"
          placeholder="image"
          value={input.image}
          onChange={handleChange}
        />
      
      </label>
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
   </>
  );
};

export default UpdateBook;