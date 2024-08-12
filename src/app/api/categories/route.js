import Flashcard from "@/db/flashcard";
import { NextResponse } from "next/server";
import connectdb from "@/db/connectdb";

export async function GET(request){
    connectdb();
    const flashcards = await Flashcard.find({});
    let categories=[]
    for(let i=0;i<flashcards.length;i++){
        if(!categories.includes(flashcards[i].category)){
            categories.push(flashcards[i].category)
        }
    }
    return NextResponse.json(categories)
}