'use client'

import { useRouter } from 'next/navigation';

const Success = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-100">
      <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
      <p className="text-lg mt-4">Thank you for your purchase.</p>
      <button
        onClick={() => router.push('/')}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
