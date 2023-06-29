import React, { useState, useEffect } from "react";

export const Buy = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState({
        name: "",
        phonenumber: "",
        email: "",
        address: "",
        payment: "",
        shipment: "",
        quantity: "",
      });
      const [errors, setErrors] = useState("");
    
      useEffect(() => {
        if (defaultValue) {
          setFormState(defaultValue);
        }
      }, [defaultValue]);
    
      const validateForm = () => {
        const { name, phonenumber, email, address, shipment, quantity} = formState;
        if (name && phonenumber && email && address && shipment && quantity) {
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
    
      const handleSubmit2 = (e) => {
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
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  value={formState.name}
                  className="border border-black rounded-md p-1 text-base"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="phonenumber" className="font-semibold">
                  Phone Number
                </label>
                <input
                  name="phonenumber"
                  onChange={handleChange}
                  value={formState.phonenumber}
                  className="border border-black rounded-md p-1 text-base"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="font-semibold">
                  email
                </label>
                <textarea
                  name="email"
                  onChange={handleChange}
                  value={formState.email}
                  className="border border-black rounded-md p-1 text-base"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="address" className="font-semibold">
                  address
                </label>
                <input
                  name="address"
                  onChange={handleChange}
                  value={formState.address}
                  className="border border-black rounded-md p-1 text-base"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="quantity" className="font-semibold">
                  quantity
                </label>
                <input
                  name="quantity"
                  onChange={handleChange}
                  value={formState.quantity}
                  className="border border-black rounded-md p-1 text-base"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="shipment" className="font-semibold">
                  shipment
                </label>
                <select
                  name="shipment"
                  onChange={handleChange}
                  value={formState.shipment}
                  className="border border-black rounded-md p-1 text-base"
                >
                    <option value="-">-</option>
                    <option value="JNT">JNT</option>
                    <option value="Si Cepat">Si Cepat</option>
                </select>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="payment" className="font-semibold">
                  payment
                </label>
                <select
                  name="payment"
                  onChange={handleChange}
                  value={formState.payment}
                  className="border border-black rounded-md p-1 text-base"
                >
                    <option value="-">-</option>
                    <option value="CASH">CASH</option>
                    <option value="BRI">BRI</option>
                    <option value="BCA">BCA</option>
                    <option value="BNI">BNI</option>
                    <option value="MANDIRI">MANDIRI</option>
                    <option value="GOPAY">GOPAY</option>
                </select>
              </div>
              {errors && <div className="error">{`Please include: ${errors}`}</div>}
              <button
                type="submit"
                className="mt-4 border-none bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer shadow-md"
                onClick={handleSubmit2}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    };
    