import React from "react";
import { FaTimes } from 'react-icons/fa'

export function Confirm ({ open, onClose, children }) {
  return (
    <div onClick={onClose} className={`
    fixed insert-0 flex justify-center items-center
    trasition-colors
    ${open ? "visible bg-black" : "invisible"}
    `}>

      <div
      onClick={(e)=> e.stopPropagation()} 
      className={`bg-white rounded-xl shadow p-6 transition-all
      ${open ? "scale-100 opacity-100" : "sclae-25 opacity-0"}
      `}>
        <button 
        onClick={onClose}
        className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:text-gray-600 hover:bg-gray-50">
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  )}

  export default Confirm