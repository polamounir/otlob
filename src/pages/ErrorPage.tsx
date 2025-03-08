import { Link } from "react-router-dom";

interface ErrorProps {
    errorCode: number | string;
    errorMessage: string
}

export default function ErrorPage({errorCode , errorMessage} : ErrorProps) {
 return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-7xl font-bold text-red-500">{errorCode}</h1>
      <h2 className="text-2xl font-semibold mt-4">{errorMessage}</h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        Oops! Something went wrong. Let's get you back on track.
      </p>

      <Link to="/" className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
        Go Back Home
      </Link>
    </div>
  );
}
