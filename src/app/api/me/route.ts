import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getUserByUsername } from '@/service/user';

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  
  if (!user) {
    return new Response('Authentication Error', { status: 401})
  }

  const username = user.email?.split('@')[0];

  return getUserByUsername(username as string).then((data) => 
    NextResponse.json(data)
  )
}

