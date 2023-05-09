'use client'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'

function ButtonPanel() {
  const router = useRouter()

  const handlePost = async () => {
    const response = await fetch('http://localhost:3005/posts', {
      method: 'POST',
      body: JSON.stringify({ title: 'Hello, world!', createdAt: new Date(), author: 'Mat' }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    router.refresh()
  }

  return (
    <div className='flex flex-col space-y-4 items-center'>
      <button
        className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline'
        onClick={handlePost}
      >
        Make POST request
      </button>
    </div>
  )
}

export default ButtonPanel
