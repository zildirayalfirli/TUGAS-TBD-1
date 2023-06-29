import React from 'react'
import { useState } from "react";
import "./App.css";

import { Table2 } from "./components/Table2";
import { Buy } from "./components/Buy";

function App1() {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
          name: "Zildiray Alfirli",
          email: "Regional Paradigm Technician",
          phonenumber: "Optimization",
          address: "3",
          quantity: "90.000",
          total: "fiksi",
          shipment: "Available",
          payment: "BNI"
        },
        {
          name: "Zildiray Alfirli",
          email: "Regional Paradigm Technician",
          phonenumber: "Optimization",
          address: "3",
          quantity: "90.000",
          total: "fiksi",
          shipment: "Available",
          payment: "BNI"
        },
        {
          name: "Zildiray Alfirli",
          email: "Regional Paradigm Technician",
          phonenumber: "Optimization",
          address: "3",
          quantity: "90.000",
          total: "fiksi",
          shipment: "Available",
          payment: "BNI"
        },
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
        <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 min-h-fit bg-neutral-700">
          <div className="text-4xl font-bold text-blue my-12 mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold mb-12 text-dark-blue flex justify-center">
              {" "}
              Good Reading Bookstore{" "}
            </h1>
          </div>
          <div>
            <Table2
              rows={rows}
              deleteRow={handleDeleteRow}
              editRow={handleEditRow}
            />
            <button
              onClick={() => setModalOpen(true)}
              className="mt-4 mx-auto border-none bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer shadow-md"
            >
              Add
            </button>
           
            {modalOpen && (
              <Buy
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
export default App1