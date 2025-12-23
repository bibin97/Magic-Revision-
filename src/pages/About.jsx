import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, TrendingUp, HelpCircle, AlertTriangle, BookOpen, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, cardHover, buttonHover, buttonTap, viewportConfig } from '../utils/animations';

export default function About() {
    const accentColor = "#008080";

    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* SECTION 1: INTRO / IDENTITY */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="text-center mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        What Exactly Is <span style={{ color: accentColor }}>Magic Revision?</span>
                    </h2>
                    <div className="space-y-4 text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                        <p>Not another tuition.</p>
                        <p>Not longer study hours.</p>
                        <p className="pt-4 text-slate-800 leading-normal max-w-3xl mx-auto">
                            Magic Revision is a structured <span className="font-bold">Revision & Recall System</span> that trains students to <span className="font-semibold">remember what they study</span> and apply it confidently under real exam pressure.
                        </p>
                    </div>
                </motion.div>

                {/* SECTION 2: PROBLEM AWARENESS */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="mb-16"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Most Students Forget What They Study</h3>
                        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: accentColor }}></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                icon: <BookOpen className="w-10 h-10 mb-4" style={{ color: accentColor }} />,
                                text: "Students study sincerely, but blank out during exams."
                            },
                            {
                                icon: <HelpCircle className="w-10 h-10 mb-4" style={{ color: accentColor }} />,
                                text: "Concepts feel clear while studying, but questions become confusing inside the exam hall."
                            },
                            {
                                icon: <AlertTriangle className="w-10 h-10 mb-4" style={{ color: accentColor }} />,
                                text: "Revision is repeated again and again, yet confidence never feels stable."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={cardHover}
                                className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100 shadow-sm"
                            >
                                <div className="flex justify-center">{item.icon}</div>
                                <p className="text-lg text-slate-800 font-medium">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div variants={fadeInUp} className="text-center mt-10">
                        <p className="text-xl font-bold bg-amber-50 text-amber-900 py-4 px-8 inline-block rounded-full border border-amber-100 shadow-sm">
                            Marks don’t improve — not because students don’t study — but because revision is unstructured.
                        </p>
                    </motion.div>
                </motion.div>

                {/* SECTION 3: SOLUTION – MAGIC REVISION */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="mb-16"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-slate-900">What Makes Magic Revision Different?</h3>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* CARD 1 */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={cardHover}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: accentColor }}></div>
                            <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Brain className="w-8 h-8" style={{ color: accentColor }} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Active Recall Learning</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Students are trained to actively pull answers from memory, instead of passively re-reading notes — exactly how exams demand thinking.
                            </p>
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={cardHover}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: accentColor }}></div>
                            <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Target className="w-8 h-8" style={{ color: accentColor }} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Exam-Focused Strategy</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Only high-weightage topics and frequently asked question patterns are prioritised, so students don’t feel overloaded.
                            </p>
                        </motion.div>

                        {/* CARD 3 */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={cardHover}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: accentColor }}></div>
                            <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <TrendingUp className="w-8 h-8" style={{ color: accentColor }} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Progress Tracking</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Each student’s weak areas are identified early, ensuring effort is spent where it actually matters.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* SECTION 4: WHO IS THIS FOR? */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="mb-16 text-center"
                >
                    <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-8">Who Is Magic Revision For?</motion.h3>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {[
                            "Class 8–12 students",
                            "Board exam aspirants",
                            "Students who forget in exams",
                            "Students who want clarity, not overload"
                        ].map((tag, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="flex items-center space-x-2 bg-slate-100 px-6 py-3 rounded-full text-slate-800 font-medium hover:bg-teal-50 hover:text-teal-800 transition-colors duration-300"
                            >
                                <CheckCircle className="w-5 h-5" style={{ color: accentColor }} />
                                <span>{tag}</span>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p variants={fadeInUp} className="text-slate-500 font-medium italic">If this sounds familiar, Magic Revision is built for you.</motion.p>
                </motion.div>

                {/* SECTION 5: TRUST LINE */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="text-center mb-16"
                >
                    <p className="text-2xl font-serif italic text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        “Designed for real exam pressure and Indian exam patterns — not classroom theory.”
                    </p>
                </motion.div>

                {/* SECTION 6: SOFT CTA */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="bg-white rounded-3xl p-12 text-center text-slate-900 max-w-4xl mx-auto shadow-2xl border border-slate-100"
                >
                    <h3 className="text-3xl font-bold mb-6">Still unsure if this system is right for your child?</h3>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Book a free clarity session and understand how Magic Revision actually works before making a decision.
                    </p>
                    <motion.button
                        whileHover={buttonHover}
                        whileTap={buttonTap}
                        className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:bg-[#FACC15]"
                    >
                        Book Free Clarity Session
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
}
