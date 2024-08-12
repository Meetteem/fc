import connectdb from "@/db/connectdb";
import Flashcard from "@/db/flashcard";
import { NextResponse } from "next/server";

export async function DELETE(request){
    connectdb();
    console.log(request.url)
    const url=request.url.split('/').pop();
    const res=await Flashcard.findByIdAndDelete(url); 
    return NextResponse.json(res)
}