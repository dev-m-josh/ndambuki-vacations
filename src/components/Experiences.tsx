import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const experiences = [
    {
        number: "01",
        name: "The Great Migration",
        category: "Wildlife & Safari",
        description: "Witness one of nature’s most spectacular journeys.",
        image: "/public/images/great-migration.png",
    },
    {
        number: "02",
        name: "Coastal Escape",
        category: "Beach & Relaxation",
        description: "Slow down along Kenya’s beautiful Indian Ocean coast.",
        image: "/public/images/coastal-experience.png",
    },
    {
        number: "03",
        name: "Mount Kenya Adventure",
        category: "Hiking & Nature",
        description: "Discover breathtaking trails and mountain landscapes.",
        image: "/public/images/mount-kenya-adventure.png",
    },
];

function Experiences() {
    return (
        <section className="bg-[#182C26] px-6 py-20 md:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D6B98C]">
                        Find your experience
                    </p>

                    <h2 className="text-3xl font-bold text-[#F5F1E8] md:text-5xl">
                        More than places.
                        <br />
                        Moments that stay.
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {experiences.map((experience) => (
                        <article key={experience.number} className="group">
                            <div className="relative h-[380px] overflow-hidden rounded-xl">
                                <img
                                    src={experience.image}
                                    alt={experience.name}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                <span className="absolute left-5 top-5 text-sm text-white">{experience.number}</span>

                                <div className="absolute bottom-0 p-6">
                                    <p className="mb-2 text-xs uppercase tracking-widest text-[#D6B98C]">
                                        {experience.category}
                                    </p>

                                    <h3 className="text-2xl font-semibold text-white">{experience.name}</h3>

                                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                                        {experience.description}
                                    </p>

                                    <Link
                                        to="/experiences"
                                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
                                    >
                                        Discover experience
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

export default Experiences;
