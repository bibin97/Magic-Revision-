import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Problem', href: '#problem' },
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
            className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-colors duration-300"
        >
            <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}>
                    <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                        Magic <span className="text-indigo-600 transition-colors group-hover:text-indigo-500">Revision</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                            className={`relative text-sm font-medium transition-colors ${activeSection === link.href.substring(1)
                                ? 'text-indigo-600'
                                : 'text-slate-600 hover:text-indigo-600'
                                }`}
                        >
                            {link.name}
                            {activeSection === link.href.substring(1) && (
                                <motion.span
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <a
                        href="#start-now"
                        onClick={(e) => { e.preventDefault(); handleLinkClick('#start-now'); }}
                        className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full shadow-md shadow-indigo-600/20 transition-all hover:scale-105 hover:shadow-lg active:scale-95"
                    >
                        Book Free Session
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
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
                        className="md:hidden overflow-hidden bg-white border-b border-slate-200"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                                    className={`text-base font-medium py-2 transition-colors ${activeSection === link.href.substring(1)
                                        ? 'text-indigo-600'
                                        : 'text-slate-600'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#start-now"
                                onClick={(e) => { e.preventDefault(); handleLinkClick('#start-now'); }}
                                className="mt-2 w-full text-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-md transition-transform active:scale-95"
                            >
                                Book Free Session
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
