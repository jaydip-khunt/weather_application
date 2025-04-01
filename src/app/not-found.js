// src/app/not-found.js
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-gray-800">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-center text-secondary">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been removed, renamed, or did not exist in the first place.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-primary text-white rounded-md shadow-md hover:bg-secondary transition duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
}
