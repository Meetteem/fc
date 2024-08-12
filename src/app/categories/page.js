"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await Axios.get('/api/categories');
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Flashcard Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link href={`/flashcard/${category}`}>
          <div key={category} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800">{category}</h2>           
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;