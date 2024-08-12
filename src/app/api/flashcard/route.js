import connectdb from '@/db/connectdb';
import Flashcard from '@/db/flashcard';
import { NextResponse } from 'next/server';

export async function POST(request, response) {
    await connectdb();
    const {data}=await request.json();
    const topic=data.cat
    const res = await Flashcard.find({category:topic});
    return NextResponse.json({status:200,body:res});
}