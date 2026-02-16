import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        const el = document.querySelector(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    const links = [
        { href: '#hero', label: 'Home' },
        { href: '#competencies', label: 'Competencies' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#competitions', label: 'Achievements' },
    ];

    return (
        <nav className={`fixed w-full z-50 backdrop-blur-md border-b transition-all
      ${scrolled
                ? 'bg-background-dark/90 border-white/10'
                : 'bg-transparent border-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <a
                        href="#hero"
                        onClick={(e) => handleClick(e, '#hero')}
                        className="text-primary font-mono text-xl font-bold"
                    >
                        &lt;Fauzan.Dev /&gt;
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={(e) => handleClick(e, href)}
                                className="text-sm font-medium text-gray-400 hover:text-primary transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => handleClick(e, '#contact')}
                            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-gray-400 hover:text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="material-icons">{menuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-background-dark/95 backdrop-blur-lg border-t border-white/10 px-4 py-6 space-y-4">
                    {links.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={(e) => handleClick(e, href)}
                            className="block text-base text-gray-300 hover:text-primary transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => handleClick(e, '#contact')}
                        className="block w-full text-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
