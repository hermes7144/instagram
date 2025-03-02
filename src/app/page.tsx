import Image from 'next/image'
import FollowingBar from '../components/ui/FollowingBar'
import PostList from '../components/ui/PostList'
import Sidebar from '../components/ui/Sidebar'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const session = await getServerSession(authOptions); 
  const user = session?.user;

  if (!user) {
    redirect('/auth/signin');
  }
  return (
    <section className='w-full flex flex-col md:flex-row max-w-[850px] p-4'>
         <div className='w-full basis-3/4 min-w-0'>
          <FollowingBar />
          <PostList />
         </div>
        <div className='basis-1/4 ml-8'>
          <Sidebar user={user} />
        </div>
    </section>
  )
}
