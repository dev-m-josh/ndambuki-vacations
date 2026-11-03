import { Link } from "react-router-dom";

const destinations = [
    {
        name: "Maasai Mara",
        category: "Wildlife & Safari",
        image: "/images/maasai-mara.png",
    },
    {
        name: "Diani Beach",
        category: "Coastal Escape",
        image: "/images/diani-beach.png",
    },
    {
        name: "Mount Kenya",
        category: "Nature & Adventure",
        image: "/images/mount-kenya.png",
    },
];

function DestinationsSection() {
    return (
        <section className="bg-[#F5F1E8] px-6 py-20 md:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#A65D3F]">
                            Explore Kenya
                        </p>

                        <h2 className="text-3xl font-bold text-[#182C26] md:text-5xl">Places worth discovering.</h2>

                        <p className="mt-4 max-w-xl text-[#252525]/70">
                            From breathtaking wildlife destinations to beautiful coastal escapes, find your next
                            adventure.
                        </p>
                    </div>

                    <Link
                        to="/destinations"
                        className="text-sm font-semibold text-[#182C26] underline underline-offset-8 hover:text-[#A65D3F]"
                    >
                        View all destinations →
                    </Link>
                </div>

                {/* Destination cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {destinations.map((destination) => (
                        <div key={destination.name} className="group overflow-hidden rounded-xl">
                            <div className="relative h-105 overflow-hidden">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6">
                                    <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#D6B98C]">
                                        {destination.category}
                                    </p>

                                    <h3 className="text-2xl font-semibold text-white">{destination.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DestinationsSection;
