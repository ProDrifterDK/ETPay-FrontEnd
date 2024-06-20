import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from './utils/AnimatedSection';

const MainSection: React.FC = () => {
    return (
        <div className="relative">
            <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-24 relative z-10 px-4 sm:px-6">
                <div className="max-w-xl mb-8 lg:mb-32 lg:w-1/2 lg:mr-8">
                <h1 className="text-3xl sm:text-display-2xl font-bold text-black leading-tight">
                        Event Registration Reimagined
                    </h1>
                    <p className="mt-4 text-body-lg text-neutral-700">
                        Manage your event registrations hassle-free and without any dependency with the technical team. Isn’t it sounds amazing?
                    </p>
                    <Link href="/early-access" legacyBehavior>
                        <a className="mt-8 inline-block bg-primary-600 text-white px-6 py-3 rounded-md text-body-lg font-medium">Get Early Access</a>
                    </Link>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end lg:-mt-11 lg:w-1/2 relative">
                    <div className="w-full h-full">
                        <Image
                            src="/assets/images/cards.png"
                            alt="Event Preview"
                            width={710.4}
                            height={753.6}
                            quality={100}
                            priority
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>
            <AnimatedSection>
                <div className="container mx-auto">
                    <div className="divider"></div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default MainSection;
