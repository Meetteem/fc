"use client";
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Page() {
  const [categoryInput, setCategoryInput] = useState('');
  const [categories, setCategories] = useState([]);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await Axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('/api/flashcard', { data: { cat: categoryInput } });
      setFlashcards(response.data.body);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await Axios.delete(`/api/flashcard/${id}`);
      setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
    } catch (error) {
      console.error("Error deleting flashcard:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Flashcard Manager</h1>
      
      {/* Category Selection Form */}
      <form onSubmit={handleCategorySubmit} className="mb-4">
        <select
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          className="border p-2 mr-2 text-gray-700"
        >
          <option value="" disabled>Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Fetch Flashcards</button>
      </form>

      {/* Flashcards Display */}
      {flashcards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flashcards.map((flashcard) => (
            <div key={flashcard.id} className="border p-4 rounded shadow-lg bg-white">
              <div className="mb-2">
                <h2 className="text-lg font-semibold mb-1">Question:</h2>
                <p className="text-gray-700 text-sm">{flashcard.question}</p>
              </div>
              <div className="mb-2">
                <h2 className="text-lg font-semibold mb-1">Answer:</h2>
                <p className="text-gray-700 text-sm">{flashcard.content}</p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleDelete(flashcard._id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No flashcards found for this category.</p>
      )}
    </div>
  );
}

export default Page;
