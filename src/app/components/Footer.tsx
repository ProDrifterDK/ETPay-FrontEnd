import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-900 text-white py-12">
            <div className="container mx-auto text-center">
                <div className="relative my-8">
                    <div className="border-t border-gray-600 w-full"></div>
                    <div className="absolute inset-0 flex justify-center -mt-6">
                        <div className="bg-neutral-900 px-4">
                            <Image src="/assets/images/logos/Logomark.svg" alt="RegiM Logo" width={48} height={48} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                    <span>© RegiM 2022. Made with love by Landify.</span>
                    <span>
                        For further details, drop a mail to
                        <a href="mailto:hello@landify.design" className="text-white"> hello@landify.design</a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;