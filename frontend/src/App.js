import React from 'react'
import { useState } from "react";
import "./App.css";

import { Table } from "./components/Table";
import { Modal } from "./components/Modal";


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
  ]);

  
  const [rowToEdit, setRowToEdit] = useState(null);
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index) => {
    setRowToEdit(index);

    setModalOpen(true);
  };


  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, index) => {
            if (index !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <>
      <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 min-h-fit bg-gray-600
        ">
        <div className="my-8 mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mb-12 text-dark-blue flex justify-center">
            {" "}
            Good Reading Bookstore{" "}
          </h1>
        </div>
        <div>
          <Table
            rows={rows}
            deleteRow={handleDeleteRow}
            editRow={handleEditRow}
          />

          {modalOpen && (
            <Modal
              closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
              }}
              onSubmit={handleSubmit}
              defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />
          )}
           
        </div>
      </div>
    </>
  );
}

export default App;

