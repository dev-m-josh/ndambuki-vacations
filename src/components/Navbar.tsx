import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Destinations", path: "/destinations" },
        { name: "Experiences", path: "/experiences" },
        { name: "Tours", path: "/tours" },
        { name: "Inspiration", path: "/inspiration" },
        { name: "About", path: "/about" },
    ];

    return (
        <header className="absolute left-0 top-0 z-50 w-full px-5 pt-3 md:px-10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-[#F5F1E8]/95 px-6 py-3 shadow-md backdrop-blur-md md:px-8">
                {/* Logo */}
                <Link to="/" className="shrink-0">
                    <img
                        src="/images/ndambuki-logo.png"
                        alt="Ndambuki Vacations"
                        className="h-14 w-14 rounded-full border border-[#D6B98C] object-cover"
                    />
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-7 lg:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `flex items-center gap-1 text-sm font-medium text-[#182C26]
                                underline-offset-8 decoration-1 transition-all
                                hover:underline hover:decoration-[#D6B98C]
                                ${isActive ? "underline decoration-[#A65D3F]" : "no-underline"}`
                            }
                        >
                            {link.name}
                            {link.name === "Destinations" && <ChevronDown size={15} />}
                        </NavLink>
                    ))}
                </div>
                {/* Booking button */}
                <Link
                    to="/contact"
                    className="hidden rounded-full bg-[#182C26] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A65D3F] lg:block"
                >
                    Plan your trip
                </Link>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[#182C26] lg:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile navigation */}
            {isOpen && (
                <div className="mx-auto mt-3 max-w-7xl rounded-2xl bg-[#F5F1E8] p-6 shadow-lg lg:hidden">
                    <div className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-sm font-medium text-[#182C26] underline-offset-8
                                    hover:underline hover:decoration-[#D6B98C]
                                    ${isActive ? "underline decoration-[#A65D3F]" : "no-underline"}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="rounded-full bg-[#182C26] px-6 py-3 text-center text-sm font-semibold text-white"
                        >
                            Plan your trip
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
