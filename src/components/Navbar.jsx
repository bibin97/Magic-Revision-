import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Check } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#how-it-works' },
    { name: 'Results', href: '#results' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map((link) => link.href.substring(1));
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                        break;
                    }
                }
            }
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (href) => {
        setIsOpen(false);
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300"
        >
            <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}>
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#008080] rotate-45 rounded-lg opacity-20 group-hover:rotate-90 transition-transform duration-500"></div>
                        <Check className="text-[#008080] w-6 h-6 z-10" strokeWidth={3} />
                    </div>
                    <span className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Magic <span className="text-[#008080]">Revision</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                            className={`relative text-sm font-semibold transition-colors ${activeSection === link.href.substring(1)
                                ? 'text-[#008080]'
                                : 'text-slate-600 dark:text-slate-300 hover:text-[#008080]'
                                }`}
                        >
                            {link.name}
                            {activeSection === link.href.substring(1) && (
                                <motion.span
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#008080] rounded-full"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <motion.a
                        href="#book-free-session" // Updated href for consistency
                        onClick={(e) => { e.preventDefault(); handleLinkClick('#start-now'); }}
                        whileHover={{ scale: 1.03, backgroundColor: '#FACC15' }} // slightly darker yellow
                        whileTap={{ scale: 0.97 }}
                        className="px-6 py-2.5 bg-yellow-400 text-black text-sm font-semibold rounded-full shadow-sm transition-all hover:shadow-md"
                    >
                        Book Free Session
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white dark:bg-[#0A0F0F] border-b border-gray-100 dark:border-gray-800"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                                    className={`text-base font-semibold py-2 transition-colors ${activeSection === link.href.substring(1)
                                        ? 'text-[#008080]'
                                        : 'text-slate-600 dark:text-slate-300'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <motion.a
                                href="#start-now"
                                onClick={(e) => { e.preventDefault(); handleLinkClick('#start-now'); }}
                                whileTap={{ scale: 0.97 }}
                                className="mt-2 w-full text-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-sm"
                            >
                                Book Free Session
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
