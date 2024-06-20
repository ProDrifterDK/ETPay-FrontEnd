'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {

    const router = useRouter();
    const handleGetEarlyAccess = () => {
        router.push('/register');
    };

    return (
        <header className="bg-white flex justify-between items-center p-6">
            <div className="container mx-auto flex justify-between items-center p-6">
                <Link href="/" legacyBehavior>
                    <a className="flex items-center">
                        <Image src="/assets/images/logos/LogoRegiM.svg" alt="RegiM Logo" width={108} height={32} />
                    </a>
                </Link>
                <button
                    type="button"
                    onClick={handleGetEarlyAccess}
                    className="bg-primary-600 text-white px-6 py-3 rounded-md text-lg font-medium relative z-20"
                >
                    Get Early Access
                </button>
            </div>
        </header>
    );
};

export default Header;