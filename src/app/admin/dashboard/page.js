import Head from 'next/head';
import Link from 'next/link';
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/admin/dashboard/create" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create
              </button>
              </Link>
              {/* <Link href="/admin/dashboard/edit" className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center'>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
              </Link> */}
              <Link href="/admin/dashboard/delete" className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center'>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow py-4">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          Logged in as Admin
        </div>
      </footer>
    </div>
  );
}
