import React from 'react';
import { motion } from 'framer-motion';

const FooterBottom = () => (
    <div className="mt-12 pt-8 border-t border-slate-200 text-center">
        <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Magic Revision. All rights reserved.
        </p>
    </div>
);

const FooterLink = ({ href, children }) => (
    <motion.a
        href={href}
        className="block text-slate-600 hover:text-indigo-600 mb-3 transition-colors duration-200 relative w-fit group"
        whileHover={{ x: 2 }}
    >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-50" />
    </motion.a>
);

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.footer
            className="border-t border-slate-200 pt-16 pb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
                            Magic Revision
                        </h2>
                        <p className="text-slate-600 max-w-sm text-lg leading-relaxed">
                            The ultimate exam-focused revision system designed to help students master their subjects with confidence and clarity.
                        </p>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div variants={itemVariants} className="col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
                            Menu
                        </h3>
                        <nav className="flex flex-col">
                            <FooterLink href="#home">Home</FooterLink>
                            <FooterLink href="#about">About</FooterLink>
                            <FooterLink href="#how-it-works">How It Works</FooterLink>
                            <FooterLink href="#results">Results</FooterLink>
                        </nav>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div variants={itemVariants} className="col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
                            Get Started
                        </h3>
                        <p className="text-slate-600 mb-6 text-sm">
                            Ready to transform your revision strategy? Book a free discovery session today.
                        </p>
                        <motion.a
                            href="#"
                            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Free Session
                        </motion.a>
                    </motion.div>

                </div>

                <motion.div variants={itemVariants}>
                    <FooterBottom />
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
