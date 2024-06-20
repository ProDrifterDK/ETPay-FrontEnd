'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const CTASection: React.FC = () => {
    const router = useRouter();
    const handleGetEarlyAccess = () => {
        router.push('/register');
    };

    return (
        <section className="bg-neutral-900 text-white py-24">
            <div className="container mx-auto text-center p-12 lg:px-48 rounded-lg">
                <h2 className="text-4xl font-bold mb-4">Create your event with RegiM</h2>
                <p className="text-lg mb-8">
                    Leveraging our virtual and live event experience, Hubilo offers everything you need to set up your
                    next hybrid event from registration to executing a flawless event.
                </p>
                <button
                    type="button"
                    onClick={handleGetEarlyAccess}
                    className="bg-primary-600 text-white px-6 py-3 rounded-md text-lg font-medium relative z-20"
                >
                    Get Early Access
                </button>
            </div>
        </section>
    );
};

export default CTASection;
