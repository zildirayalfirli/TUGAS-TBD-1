import React from "react";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { Buy } from "./Buy";


export const Table = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      title: "Jane Cooper",
      author: "Regional Paradigm Technician",
      publisher: "Optimization",
      stock: "3",
      price: "90.000",
      genre: "fiksi",
      status: "Available",
    },
    {
      title: "John Doe",
      author: "Regional Paradigm Technician",
      publisher: "Optimization",
      stock: "2",
      price: "70.000",
      genre: "horor",
      status: "Not Available",
    },
    {
      title: "Veronica Lodge",
      author: "Regional Paradigm Technician",
      publisher: "Optimization",
      stock: "1",
      price: "50.000",
      genre: "action",
      status: "Available",
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
  const [modalOpen2, setModalOpen2] = useState(false);
    const [rows2, setRows2] = useState([
        {
          name: "Zildiray Alfirli",
          email: "zildirayalfirli59@gmail.com",
          phonenumber: "0817928123",
          address: "pondok indah no 8",
          quantity: "2",
          shipment: "JNT",
          payment: "BNI"
        },
        {
          name: "Tasya Khairuna",
          email: "tasyakhairuna@gmail.com",
          phonenumber: "0817353103",
          address: "kemang no 9",
          quantity: "1",
          shipment: "SI CEPAT",
          payment: "BCA"
        },
        {
          name: "Valentinus Wastu",
          email: "ValentinusWastu@gmail.com",
          phonenumber: "0876235112",
          address: "jalan sudirman no 10",
          quantity: "3",
          shipment: "JNT",
          payment: "GOPAY"
        },
      ]);
    
    const [rowToEdit2, setRowToEdit2] = useState(null);
    const handleDeleteRow2 = (targetIndex) => {
      setRows2(rows2.filter((_, index) => index !== targetIndex));
    };
  
    const handleEditRow2 = (index) => {
      setRowToEdit2(index);
  
      setModalOpen2(true);
    };
  
    const handleSubmit2 = (newRow2) => {
      rowToEdit2 === null
        ? setRows2([...rows2, newRow2])
        : setRows2(
            rows2.map((currRow2, index) => {
              if (index !== rowToEdit2) return currRow2;
  
              return newRow2;
            })
          );
    };

    
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <h2 className='text-3xl sm:text-4xl font-bold my-8 text-dark-blue flex justify-center'>
              Book List 
            </h2>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                      Author
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                      Stock
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider"
                    >
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                       
                            <div className="text-sm text-center font-medium">
                              {row.title}
                            </div>
                            <div className="text-sm text-center text-gray-500">
                              {row.genre}
                            </div>
                          
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-center font-medium">
                          {row.author}
                        </div>
                        <div className="text-sm text-center text-gray-500">
                          {row.publisher}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium">
                        {row.stock}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium">
                        {row.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="px-1 inline-flex text-sm  font-medium rounded-full bg-green-100 text-green-800">
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => handleDeleteRow(index)}
                        >
                          Delete
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => handleEditRow(index)}
                        >
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <button
                        onClick={() => setModalOpen2(true)}
                        className="mt-4 mx-auto border-none bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer shadow-md"
                      >
                        Buy
                      </button>
                      </td>
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
                    </tr>
                  ))}
                  
                </tbody>
                <button
            onClick={() => setModalOpen(true)}
            className="mt-4 mx-auto border-none bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer shadow-md"
          >
            Add
          </button>
              </table>

              <h2 className='text-3xl sm:text-4xl font-bold my-8 text-dark-blue flex justify-center'>
                Customer List
              </h2>

              <table className="min-w-full mt-8 divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                      Nama
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                      Shipment
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                      Payment
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                    >
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rows2.map((row, index) => (
                    <tr key={index}>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center font-medium">
                                {row.name}
                            </div>
                            <div className="text-sm text-center text-gray-500">
                              {row.phonenumber}
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center font-medium">
                                {row.address}
                             </div>
                            <div className="text-sm text-center text-gray-500">
                                {row.email}
                            </div>
                         </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium">
                            {row.quantity}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-center">
                            <span className="px-1 inline-flex text-sm  font-medium">
                                {row.shipment}
                            </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-center">
                            <span className="px-1 inline-flex text-sm font-medium">
                                {row.payment}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => handleDeleteRow2(index)}
                        >
                          Delete
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => handleEditRow2(index)}
                        >
                          Edit
                        </a>
                      </td>
                
              {modalOpen2 && (
              <Buy
                closeModal={() => {
                  setModalOpen2(false);
                  setRowToEdit2(null);
                }}
                onSubmit={handleSubmit2}
                defaultValue={rowToEdit2 !== null && rows2[rowToEdit2]}
              />
            )}
            
                    </tr>
                      ))}
                    </tbody>
                  </table>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
