import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import {  searchUsers } from '@/service/user';


type Context = {
  params: {keyword: string}
}
export async function GET(_: NextRequest, context: Context) {
  return searchUsers(context.params.keyword).then((data) => 
    NextResponse.json(data)
  )
}

