import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";

const packages = [
    {
        name: "Maasai Mara Safari",
        location: "Maasai Mara, Narok County",
        duration: "3 Days / 2 Nights",
        category: "WILDLIFE SAFARI",
        image: "/images/maasai-mara.jpg",
        description: "Experience Kenya’s iconic wildlife and breathtaking savannah landscapes.",
    },
    {
        name: "Diani Beach Escape",
        location: "Diani, Kwale County",
        duration: "4 Days / 3 Nights",
        category: "COASTAL GETAWAY",
        image: "/images/diani-beach.jpg",
        description: "Unwind on white sandy beaches beside the beautiful Indian Ocean.",
    },
    {
        name: "Amboseli Adventure",
        location: "Amboseli, Kajiado County",
        duration: "3 Days / 2 Nights",
        category: "NATURE & ADVENTURE",
        image: "/images/amboseli.jpg",
        description: "Discover incredible wildlife with Mount Kilimanjaro on the horizon.",
    },
];

function FeaturedPackages() {
    return (
        <section className="bg-[#F5F1E8] px-6 py-20 md:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#A65D3F]">
                            Carefully curated journeys
                        </p>

                        <h2 className="text-4xl font-bold text-[#182C26] md:text-5xl">Find your next escape.</h2>

                        <p className="mt-4 max-w-xl text-[#252525]/70">
                            Explore handpicked journeys designed to help you experience the beauty and diversity of
                            Kenya.
                        </p>
                    </div>

                    <Link
                        to="/experiences"
                        className="text-sm font-semibold text-[#182C26] underline underline-offset-8 hover:text-[#A65D3F]"
                    >
                        Explore all experiences →
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {packages.map((travelPackage) => (
                        <article key={travelPackage.name} className="group overflow-hidden rounded-xl bg-white">
                            <div className="relative h-[280px] overflow-hidden">
                                <img
                                    src={travelPackage.image}
                                    alt={travelPackage.name}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <span className="absolute left-5 top-5 rounded-full bg-[#F5F1E8] px-4 py-2 text-[10px] font-semibold tracking-widest text-[#182C26]">
                                    {travelPackage.category}
                                </span>
                            </div>

                            <div className="p-6">
                                <p className="text-xs text-[#A65D3F]">{travelPackage.location}</p>

                                <h3 className="mt-2 text-2xl font-semibold text-[#182C26]">{travelPackage.name}</h3>

                                <p className="mt-3 text-sm leading-relaxed text-[#252525]/70">
                                    {travelPackage.description}
                                </p>

                                <div className="mt-6 flex items-center justify-between border-t border-[#D6B98C]/50 pt-5">
                                    <span className="flex items-center gap-2 text-sm text-[#252525]/70">
                                        <Clock size={16} />
                                        {travelPackage.duration}
                                    </span>

                                    <Link
                                        to="/contact"
                                        className="flex items-center gap-2 text-sm font-semibold text-[#182C26] transition hover:text-[#A65D3F]"
                                    >
                                        Enquire now
                                        <ArrowUpRight size={17} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedPackages;
