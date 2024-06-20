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
                <div className="absolute top-[-40%] left-[5%] w-[370px] h-[370px] bg-cyan-100 rounded-full opacity-100 
                                xl:top-[-85%] xl:left-[4.2%] xl:w-[700px] xl:h-[700px]
                                lg:top-[-50%] lg:left-[2%] lg:w-[500px] lg:h-[500px] 
                                md:top-[-40%] md:left-[2%] md:w-[400px] md:h-[400px] 
                                sm:top-[-30%] sm:left-[2%] sm:w-[300px] sm:h-[300px]"
                >
                </div>
                <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-start justify-between">
                    <div className="w-full lg:w-[38%] lg:text-left lg:ml-10 md:text-center sm:text-center sm:ml-0 md:ml-0">
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