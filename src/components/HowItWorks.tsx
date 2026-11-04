import { Search, MessageCircle, Map, Plane } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Explore Your Options",
        description: "Discover destinations, experiences and travel packages across Kenya.",
    },
    {
        number: "02",
        icon: MessageCircle,
        title: "Tell Us What You Love",
        description: "Share your travel interests, preferred dates and budget with our team.",
    },
    {
        number: "03",
        icon: Map,
        title: "Get Your Travel Plan",
        description: "We help you shape a journey around your preferences and travel goals.",
    },
    {
        number: "04",
        icon: Plane,
        title: "Enjoy the Journey",
        description: "Get ready to discover Kenya and create memories worth keeping.",
    },
];

function HowItWorks() {
    return (
        <section className="bg-[#182C26] px-6 py-20 md:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D6B98C]">
                        Your journey starts here
                    </p>

                    <h2 className="text-4xl font-bold leading-tight text-[#F5F1E8] md:text-5xl">
                        From dreaming
                        <br />
                        to discovering.
                    </h2>

                    <p className="mt-5 leading-relaxed text-[#F5F1E8]/70">
                        Planning your next Kenyan adventure doesn't have to be complicated. We'll help you take it one
                        step at a time.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <article key={step.number} className="border-t border-[#D6B98C]/40 pt-7">
                                <div className="mb-10 flex items-center justify-between">
                                    <span className="text-sm text-[#D6B98C]">{step.number}</span>

                                    <Icon size={27} className="text-[#D6B98C]" />
                                </div>

                                <h3 className="text-xl font-semibold text-[#F5F1E8]">{step.title}</h3>

                                <p className="mt-4 text-sm leading-relaxed text-[#F5F1E8]/65">{step.description}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
