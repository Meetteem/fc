"use client";
import { useState, useEffect } from "react";
import Axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Page() {
  const [categories, setCategories] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({
    category: "",
    question: "",
    answer: "",
  });
  const [error, setError] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await Axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);

  const handleAddFlashcard = async () => {
    try {
      const response = await Axios.post("/api/", { data: newFlashcard });

      if (response.status === 200) {
        toast.success('Flashcard added successfully!');
        setNewFlashcard({
          category: "",
          question: "",
          answer: "",
        });
        setNewCategory(""); // Reset new category input
        setShowNewCategoryInput(false); // Close new category input
      }
    } catch (error) {
      setError("Failed to add flashcard. Please try again.");
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === 'add-new') {
      setShowNewCategoryInput(true);
      setNewFlashcard({ ...newFlashcard, category: "" }); // Clear the category field
    } else {
      setNewFlashcard({ ...newFlashcard, category: value });
      setShowNewCategoryInput(false);
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewFlashcard({ ...newFlashcard, category: newCategory.trim() });
      setNewCategory(""); // Clear the input after adding
      setShowNewCategoryInput(false); // Close the new category input
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Manage Flashcards
        </h1>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Add Flashcard Form */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Add New Flashcard</h2>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <div className="relative">
              <select
                id="category"
                value={newFlashcard.category}
                onChange={handleCategoryChange}
                className="w-full px-3 py-2 border text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Select a category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
                <option value="add-new">Add New Category...</option>
              </select>
              {showNewCategoryInput && (
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="New category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3 py-2 border text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleAddCategory}
                    className="mt-2 bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-500 transition-colors duration-300"
                  >
                    Add Category
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="new-question"
            >
              Question
            </label>
            <input
              id="new-question"
              type="text"
              value={newFlashcard.question}
              onChange={(e) =>
                setNewFlashcard({ ...newFlashcard, question: e.target.value })
              }
              className="w-full text-gray-700 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="new-answer"
            >
              Answer
            </label>
            <input
              id="new-answer"
              type="text"
              value={newFlashcard.answer}
              onChange={(e) =>
                setNewFlashcard({ ...newFlashcard, answer: e.target.value })
              }
              className="w-full px-3 py-2 border text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAddFlashcard}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition-colors duration-300"
          >
            Add Flashcard
          </button>
        </div>
      </div>

      {/* Toast Container */}
      <Toaster />
    </div>
  );
}

export default Page;
