import { Compass, Heart, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
    {
        number: "01",
        icon: Compass,
        title: "Curated Kenyan Experiences",
        description: "Discover thoughtfully selected destinations and experiences that reveal the very best of Kenya.",
    },
    {
        number: "02",
        icon: Heart,
        title: "Journeys Made for You",
        description: "Your interests, travel style and budget shape an experience that feels uniquely yours.",
    },
    {
        number: "03",
        icon: ShieldCheck,
        title: "Travel With Confidence",
        description:
            "Get guidance and support throughout your planning journey, from your first enquiry to your adventure.",
    },
    {
        number: "04",
        icon: Sparkles,
        title: "Something for Every Budget",
        description: "From affordable getaways to exceptional luxury escapes, discover Kenya your way.",
    },
];

function WhyChooseUs() {
    return (
        <section className="bg-[#F5F1E8] px-6 py-20 md:px-12 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#A65D3F]">
                        The Ndambuki difference
                    </p>

                    <h2 className="text-4xl font-bold leading-tight text-[#182C26] md:text-5xl">
                        Your journey.
                        <br />
                        Your kind of joy.
                    </h2>

                    <p className="mt-6 max-w-lg leading-relaxed text-[#252525]/70">
                        We believe exploring Kenya should feel exciting from the very beginning. That's why we make
                        discovering, planning and experiencing your next getaway simpler and more personal.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <article key={benefit.number} className="border-t border-[#D6B98C] pt-6">
                                <div className="mb-5 flex items-center justify-between">
                                    <Icon size={26} className="text-[#A65D3F]" />
                                    <span className="text-sm text-[#252525]/40">{benefit.number}</span>
                                </div>

                                <h3 className="text-xl font-semibold text-[#182C26]">{benefit.title}</h3>

                                <p className="mt-3 text-sm leading-relaxed text-[#252525]/70">{benefit.description}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
