import React from 'react';
import Image from 'next/image';
import AnimatedSection from './utils/AnimatedSection';

const features = [
    {
        title: 'Event Metrics',
        description: 'Track your ticket sales, attendees count and more with much ease.',
        icon: '/assets/images/icons/event-metrics.svg',
    },
    {
        title: 'Registration & Ticketing',
        description: 'Manage your Event registrations and ticket sales easier and receive payments instantly.',
        icon: '/assets/images/icons/registration-ticketing.svg',
    },
    {
        title: 'Branded Badges',
        description: 'Create your custom branded badges for your events and get them printed.',
        icon: '/assets/images/icons/branded-badges.svg',
    },
    {
        title: 'Oragniser App',
        description: 'Manage your events at the palm of your hand with our Oragniser App.',
        icon: '/assets/images/icons/organiser-app.svg',
    },
    {
        title: 'Attendee Engagement',
        description: 'Engage with your attendees via email, surveys and much more.',
        icon: '/assets/images/icons/attendee-engagement.svg',
    },
    {
        title: 'Add to Calendar',
        description: 'Effortless way to add your events to registered users calendars by 1-click.',
        icon: '/assets/images/icons/add-to-calendar.svg'
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="container mx-auto py-24">
            <AnimatedSection>
                <div className="text-center mb-28">
                    <h2 className="text-5xl font-bold text-black">All-in-one Event Platform</h2>
                    <p className="mt-4 text-md text-neutral-700">Deliver an exceptional event experience</p>
                    <div className="relative mt-8 inline-block">
                        <Image
                            src="/assets/images/video-thumbnail.png"
                            alt="Video Thumbnail"
                            width={768}
                            height={432}
                            className="rounded-lg shadow-lg"
                        />
                        <button className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 button-video">
                            <Image src="/assets/images/icons/play-icon.svg" alt="Play Icon" width={24} height={24} />
                            See it in action (2 min)
                        </button>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-center text-center">
                            <Image src={feature.icon} alt={feature.title} width={64} height={64} />
                            <h3 className="mt-6 text-xl font-semibold text-black">{feature.title}</h3>
                            <p className="mt-4 text-base text-neutral-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default FeaturesSection;