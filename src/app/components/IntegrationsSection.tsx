import React from 'react';
import Image from 'next/image';

const integrations = [
    { name: 'slack', icon: '/assets/images/icons/slack-logo.svg' },
    { name: 'quickbooks', icon: '/assets/images/icons/quickbooks-logo.svg' },
    { name: 'mailchimp', icon: '/assets/images/icons/mailchimp-logo.svg' },
    { name: 'hubspot', icon: '/assets/images/icons/hubspot-logo.svg' },
    { name: 'zapier', icon: '/assets/images/icons/zapier-logo.svg' },
    { name: 'google analytics', icon: '/assets/images/icons/google-analytics-logo.svg' },
    { name: 'marketo', icon: '/assets/images/icons/marketo-logo.svg' },
];

const IntegrationsSection: React.FC = () => {
    return (
        <>
            <div className="container mx-auto -mb-12">
                <div className="divider"></div>
            </div>
            <section className="container relative py-24 bg-white overflow-hidden">
                <div className="absolute top-[-85%] left-[4.2%] w-[700px] h-[700px] bg-cyan-100 rounded-full opacity-100"></div>
                <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-start justify-between">
                    <div className="lg:w-[38%] text-left ml-10">
                        <h2 className="text-4xl font-bold text-black">Integrate with your favorite tools</h2>
                        <p className="mt-4 text-base text-neutral-700">
                            Connect RegiM with your most favorite sales and marketing tools
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex flex-col items-center mt-8 lg:mt-0">
                        <div className="grid grid-cols-4 gap-8">
                            {integrations.slice(0, 4).map((integration) => (
                                <div key={integration.name} className="flex flex-col items-center text-center">
                                    <Image src={integration.icon} alt={integration.name} width={96} height={96} />
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 gap-8 mt-8">
                            {integrations.slice(4).map((integration) => (
                                <div key={integration.name} className="flex flex-col items-center text-center">
                                    <Image src={integration.icon} alt={integration.name} width={96} height={96} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IntegrationsSection;