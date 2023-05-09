'use client'
import React, { useState } from 'react'

function Modal({ children }: any) {
  const [isOpen, setIsOpen] = useState(true)

  const modalStyle = `fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${
    isOpen ? '' : 'hidden'
  }`

  const contentStyle = 'bg-white shadow-lg rounded-lg p-4 w-1/4'

  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <div className={modalStyle} onClick={handleCloseModal}>
        <div className={contentStyle} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
