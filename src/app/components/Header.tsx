import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-white flex justify-between items-center p-6">
            <div className="container mx-auto flex justify-between items-center p-6">
                <Link href="/" legacyBehavior>
                    <a className="flex items-center">
                        <Image src="/assets/images/logos/LogoRegiM.svg" alt="RegiM Logo" width={108} height={32} />
                    </a>
                </Link>
                <Link href="/" legacyBehavior>
                    <a className="bg-primary-600 text-white px-6 py-3 rounded-md text-lg font-medium relative z-20">Get Early Access</a>
                </Link>
            </div>
        </header>
    );
};

export default Header;