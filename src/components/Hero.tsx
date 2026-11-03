import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">
            {/* Background image */}
            <img
                src="/public/images/kenya-hero1.png"
                alt="Beautiful Kenyan safari landscape"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Hero content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 md:px-12">
                <div className="max-w-3xl">
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#D6B98C]">
                        Discover the beauty of Kenya
                    </p>

                    <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                        DISCOVER KENYA.
                        <br />
                        FIND YOUR KIND OF JOY.
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                        From wild landscapes to coastal escapes, discover Kenya through journeys made for you.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <Link
                            to="/contact"
                            className="rounded-full bg-[#182C26] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#A65D3F]"
                        >
                            Plan your trip
                        </Link>

                        <Link
                            to="/destinations"
                            className="rounded-full border border-white px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#182C26]"
                        >
                            Explore destinations
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
