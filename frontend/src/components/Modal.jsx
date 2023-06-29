import React, { useState, useEffect } from "react";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState({
    title: "",
    author: "",
    status: "",
    stock: "",
    price: "",
  });
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (defaultValue) {
      setFormState(defaultValue);
    }
  }, [defaultValue]);

  const validateForm = () => {
    const { title, genre, author, publisher, stock, price, status } = formState;
    if (title && genre && author && publisher && stock && price && status) {
      setErrors("");
      return true;
    } else {
      const errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-40"
      onClick={(e) => {
        if (
          e.target.className ===
          "fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-40"
        )
          closeModal();
      }}
    >
      <div className="bg-white p-8 rounded-md w-64">
        <form>
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              name="title"
              onChange={handleChange}
              value={formState.title}
              className="border border-black rounded-md p-1 text-base"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="genre" className="font-semibold">
              genre
            </label>
            <input
              name="genre"
              onChange={handleChange}
              value={formState.genre}
              className="border border-black rounded-md p-1 text-base"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="author" className="font-semibold">
              Author
            </label>
            <textarea
              name="author"
              onChange={handleChange}
              value={formState.author}
              className="border border-black rounded-md p-1 text-base"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="publisher" className="font-semibold">
              publisher
            </label>
            <input
              name="publisher"
              onChange={handleChange}
              value={formState.publisher}
              className="border border-black rounded-md p-1 text-base"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="stock" className="font-semibold">
              stock
            </label>
            <input
              name="stock"
              onChange={handleChange}
              value={formState.stock}
              className="border border-black rounded-md p-1 text-base"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="price" className="font-semibold">
              price
            </label>
            <input
              name="price"
              onChange={handleChange}
              value={formState.price}
              className="border border-black rounded-md p-1 text-base"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="status" className="font-semibold">
              Status
            </label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
              className="border border-black rounded-md p-1 text-base"
            >
              <option value="-">-</option>
              <option value="Available">Available</option>
              <option value="Non Available">Non Available</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button
            type="submit"
            className="mt-4 border-none bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer shadow-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
