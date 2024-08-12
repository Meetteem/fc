import connectdb from '@/db/connectdb';
import Flashcard from '@/db/flashcard';
import { NextResponse } from 'next/server';

export async function POST(request) {
    await connectdb();
    const {data}=await request.json();
    console.log(data)
    const res =await Flashcard.create(data);
    return NextResponse.json({status:200,body:res});
}

