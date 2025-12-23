import React from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, cardHover, buttonHover, buttonTap, viewportConfig } from '../utils/animations';

const featureHighlights = [
    {
        icon: "🎯",
        title: "Exam-Focused",
        desc: "Board & entrance aligned"
    },
    {
        icon: "👨‍🏫",
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
        <section id="home" className="relative pt-20 pb-10 lg:pt-24 lg:pb-16 overflow-hidden bg-[#fafafa]">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#008080]/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* LEFT SIDE CONTENT */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="lg:w-1/2 text-left"
                    >
                        {/* Top Badge */}
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#008080]/5 border border-[#008080]/20 shadow-sm mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#008080] animate-pulse mr-2" />
                            <span className="text-[#008080] font-bold text-xs tracking-widest uppercase">
                                Magic Revision Program
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]"
                        >
                            Full Subject<br />
                            Smart Revision<br />
                            Exam Confidence<br />
                            <span className="text-[#008080]">in Just 45 Hours.</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg"
                        >
                            A science-backed 1:1 revision program covering concepts, PYQs, model questions, and tests —
                            designed for real exam results, not stress.
                        </motion.p>

                        {/* Primary CTA & Social Proof */}
                        <div className="space-y-6">
                            <motion.div
                                variants={fadeInUp}
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                                className="inline-block"
                            >
                                <a
                                    href="#book-session"
                                    className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg shadow-xl shadow-yellow-400/20 transition-all hover:bg-[#FACC15]"
                                >
                                    Book Your Free 1:1 Revision Plan
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Student" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-[#008080] flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                                        +500
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">500+ Students Transformed</p>
                                    <p className="text-slate-500 text-xs font-medium">Trusted by parents across Kerala</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE CONTENT */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="lg:w-1/2 relative flex justify-center"
                    >
                        {/* Main Visual Image Container */}
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-[8px] border-white group w-full max-w-md">
                            <img
                                src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1000&auto=format&fit=crop"
                                alt="Student Solving Math"
                                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Floating Trust Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-0 lg:-right-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-yellow-400/20 rounded-xl flex items-center justify-center text-xl">⭐</div>
                            <div>
                                <p className="font-extrabold text-slate-900 text-base leading-none">4.9/5</p>
                                <p className="text-slate-500 text-[10px] mt-0.5 font-medium">Parent Approved</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-10 left-0 lg:-left-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-emerald-400/20 rounded-xl flex items-center justify-center text-xl">🚀</div>
                            <div>
                                <p className="font-extrabold text-slate-900 text-base leading-none">92%</p>
                                <p className="text-slate-500 text-[10px] mt-0.5 font-medium">Avg Improvement</p>
                            </div>
                        </motion.div>

                        {/* Backdrop Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#008080]/10 rounded-full blur-[80px] -z-10" />
                    </motion.div>

                </div>

                {/* Features Strip - Compact & Below Hero */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {featureHighlights.map((feat, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            whileHover={cardHover}
                            className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
                        >
                            <div className="w-10 h-10 rounded-lg bg-[#008080]/10 text-[#008080] text-xl flex items-center justify-center flex-shrink-0">
                                {feat.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm leading-tight">{feat.title}</h3>
                                <p className="text-slate-500 text-xs mt-0.5">{feat.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
