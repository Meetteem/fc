"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Axios from 'axios';

function Page() {
  const params = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const getFlashCards = async () => {
      try {
        const response = await Axios.post("/api/flashcard", { data: { cat: params.category } });
        setFlashcards(response.data.body);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };
    
    getFlashCards();
  }, [params.category]);

  const handleNext = () => {
    setFlipped(false);
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    setFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      {flashcards.length > 0 ? (
        <div
          className="relative w-80 h-52"
          style={{
            perspective: '1000px',
          }}
        >
          <div
            onClick={() => setFlipped(!flipped)}
            className={`relative w-full h-full text-white p-6 rounded-xl cursor-pointer shadow-lg transform transition-transform duration-700 ${
              flipped ? 'rotate-y-180' : ''
            }`}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front Side */}
            <div
              className="absolute inset-0 flex items-center justify-center rounded-xl bg-white text-blue-600 p-6 backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              <p className="text-center text-lg font-semibold">{flashcards[currentIndex].question}</p>
            </div>

            {/* Back Side */}
            <div
              className="absolute inset-0 flex items-center justify-center rounded-xl bg-green-500 text-white p-6 backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                transform: flipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
              }}
            >
              <p className="text-center text-lg font-semibold">{flashcards[currentIndex].answer}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-white text-xl">Loading flashcards...</p>
      )}

      <div className="mt-6 flex justify-between w-80">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Page;
