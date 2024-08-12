import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Flashcard Learning Tool</h1>
      <p className="text-xl text-gray-600 text-center mb-6">
        This is a website to learn using FlashCards.
      </p>
      <Link href="/categories">
        <div className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-300">
          Start Learning
        </div>
      </Link>
    </div>
  );
}
