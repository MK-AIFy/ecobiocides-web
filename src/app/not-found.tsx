import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-8xl font-bold text-eco-600">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-eco-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-eco-600/30 transition-all hover:bg-eco-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
