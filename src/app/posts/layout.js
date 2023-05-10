import React from 'react'
import Link from 'next/link'

async function PostLayout({ children }) {
  return (
    <div className='flex flex-col space-y-4'>
      <h1 className='text-3xl font-bold mb-4'>All Posts</h1>
      <ul className='space-y-2'>
        {children}
      </ul>
    </div>
  )
}

export default PostLayout
