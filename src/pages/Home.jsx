import React from 'react';
import { motion } from 'framer-motion';

const featureHighlights = [
    {
        icon: "🎯",
        title: "Exam-Focused",
        desc: "Board & entrance aligned"
    },
    {
        icon: "👨‍�",
        title: "Mentor Tracking",
        desc: "Personal 1:1 guidance"
    },
    {
        icon: "🧠",
        title: "Scientific Recall",
        desc: "Remember concepts faster"
    }
];

export default function Home() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fafafa]">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* LEFT SIDE CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-[55%] text-left"
                    >
                        {/* Top Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/50 shadow-sm mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse mr-2" />
                            <span className="text-indigo-600 font-bold text-xs tracking-widest uppercase">
                                Magic Revision Program
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                            Full Subject. Smart Revision.<br />
                            <span className="relative inline-block text-[#008080]">
                                Exam Confidence
                                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <path d="M0 5h100" stroke="#008080" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
                                </svg>
                            </span> in Just <span className="text-[#008080]">45 Hours.</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                            A science-backed 1:1 revision program covering concepts, PYQs, model questions, and tests —
                            designed for real exam results, not stress.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                            {featureHighlights.map((feat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                                    whileHover={{ y: -5 }}
                                    className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all group"
                                >
                                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform inline-block">{feat.icon}</div>
                                    <h3 className="font-bold text-slate-900 text-sm mb-1">{feat.title}</h3>
                                    <p className="text-slate-500 text-xs leading-tight">{feat.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Primary CTA & Social Proof */}
                        <div className="space-y-4">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <a
                                    href="#book-session"
                                    className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full font-bold text-lg shadow-xl shadow-indigo-200 hover:shadow-indigo-300 transition-all"
                                >
                                    Book Your Free 1:1 Revision Plan
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </motion.div>
                            <p className="text-sm text-slate-400 pl-4 font-medium italic">
                                Limited slots • First come, first served
                            </p>

                            <div className="flex items-center gap-4 pt-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-[#fafafa] bg-slate-200 overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Student" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-4 border-[#fafafa] bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                        +500
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">500+ Students Transformed</p>
                                    <p className="text-slate-500 text-xs font-medium">Trusted by parents across Kerala • Avg improvement: +40 marks</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-[45%] relative"
                    >
                        {/* Main Visual Image Container */}
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border-[10px] border-white group">
                            <img
                                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
                                alt="Student Focus"
                                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Floating Trust Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-6 lg:-right-10 z-20 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 flex items-center gap-4 min-w-[180px]"
                        >
                            <div className="w-12 h-12 bg-yellow-400/20 rounded-2xl flex items-center justify-center text-2xl">⭐</div>
                            <div>
                                <p className="font-extrabold text-slate-900 text-lg leading-none">4.9/5</p>
                                <p className="text-slate-500 text-xs mt-1 font-medium">Rating<br />Parent Approved</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-10 -left-6 lg:-left-10 z-20 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 flex items-center gap-4 min-w-[200px]"
                        >
                            <div className="w-12 h-12 bg-emerald-400/20 rounded-2xl flex items-center justify-center text-2xl">🚀</div>
                            <div>
                                <p className="font-extrabold text-slate-900 text-lg leading-none">92%</p>
                                <p className="text-slate-500 text-xs mt-1 font-medium">Improvement<br />In 10 Days</p>
                            </div>
                        </motion.div>

                        {/* Backdrop Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-indigo-100/40 rounded-full blur-[100px] -z-10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
