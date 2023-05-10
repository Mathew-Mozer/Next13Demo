import ButtonPanel from '@/components/ActionComponent'
import Link from 'next/link'
export default async function AllPostsPage() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const data = await fetch('http://localhost:3005/posts', {
    cache: 'no-store',
  })
  const posts = await data.json()
  const randomNum = Math.floor(Math.random() * 6) + 1
  if (randomNum === 6) {
    //Throw an error if the random number is 4
    throw new Error('Something went wrong!')
  }

  return (
    <div>
      {posts.map((post) => {
        return (
          <li key={post.id} className='bg-gray-100 rounded p-4 m-4 shadow-md'>
            <Link href={`/posts/${post.id}`} passHref>
              Random:{randomNum}
              <div className='flex flex-col items-start'>
                <h2 className='text-lg font-bold text-blue-500 cursor-pointer hover:underline'>
                  {post.title}
                </h2>
                <p className='text-gray-500 text-sm mt-2'>
                  Author: {post.author} | ID: {post.id} | Created on{' '}
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </li>
        )
      })}
      <ButtonPanel />
    </div>
  )
}
