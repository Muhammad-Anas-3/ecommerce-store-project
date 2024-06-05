'use client'

import { useRouter } from 'next/navigation';

const Cancel = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-red-100">
            <h1 className="text-4xl font-bold text-red-600">Payment Cancelled</h1>
            <p className="text-lg mt-4">Your payment has been cancelled.</p>
            <button
                onClick={() => router.push('/')}
                className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default Cancel;
