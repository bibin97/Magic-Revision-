import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { BookOpen, FileText, Target, CheckCircle } from 'lucide-react';
import { fadeInUp, buttonHover, buttonTap, viewportConfig } from '../utils/animations';

const steps = [
    {
        id: 1,
        title: "Concept Learning",
        time: "10–12 hours",
        hours: 11,
        icon: BookOpen,
        points: [
            "Full chapter explanations",
            "Doubt clearing",
            "Key formulas & summaries"
        ]
    },
    {
        id: 2,
        title: "PYQs Practice",
        time: "8–10 hours",
        hours: 9,
        icon: FileText,
        points: [
            "Past 5–10 year questions",
            "Pattern recognition",
            "Weightage awareness"
        ]
    },
    {
        id: 3,
        title: "Model Question Practice",
        time: "12–14 hours",
        hours: 13,
        icon: Target,
        points: [
            "Exam-pattern questions",
            "Mixed difficulty",
            "Time-bound drills"
        ]
    },
    {
        id: 4,
        title: "Chapter Tests & Full-Length Tests",
        time: "8–10 hours",
        hours: 9,
        icon: CheckCircle,
        points: [
            "Chapter-wise tests",
            "Final mocks",
            "Performance analysis"
        ]
    }
];

const RevisionProcess = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="py-32 bg-[#FDFDFD] dark:bg-[#080C0C] transition-colors duration-500 overflow-hidden" ref={containerRef}>
            <div className="max-w-4xl mx-auto px-6">
                {/* Academic Header */}
                <div className="text-center mb-24">
                    <motion.h2
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
                    >
                        Our Proven Revision Process
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="text-lg text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto"
                    >
                        A structured, distraction-free system designed for exam success.
                    </motion.p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Main Spine */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[1px] bg-gray-100 dark:bg-gray-800 z-0">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-[#008080] dark:bg-[#EAB308]/60"
                        />
                    </div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <StepRow key={step.id} step={step} index={index} />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="mt-32 text-center"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
                        “This structured system is designed to maximize scores without overwhelming students.”
                    </p>
                    <motion.button
                        whileHover={buttonHover}
                        whileTap={buttonTap}
                        className="bg-yellow-400 hover:bg-[#FACC15] text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 shadow-xl shadow-yellow-400/20 transform hover:-translate-y-1 border border-white/10"
                    >
                        Book a Free Strategy Session
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

const StepRow = ({ step, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: 0.6,
        margin: "-10% 0px -10% 0px"
    });

    const Icon = step.icon;

    // Relative height based on hours
    const minHeight = 280;
    const hScale = step.hours * 15;
    const height = minHeight + hScale;

    return (
        <div
            ref={ref}
            className={`relative flex flex-col md:flex-row items-start md:items-center w-full transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-40'}`}
            style={{ minHeight: `${height}px` }}
        >
            {/* Connector Circle */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 md:top-auto z-10">
                <motion.div
                    animate={{
                        scale: isInView ? 1.2 : 1,
                        backgroundColor: isInView ? "#008080" : "#fff",
                        borderColor: isInView ? "#008080" : "#E5E7EB"
                    }}
                    className={`w-12 h-12 rounded-full border-2 bg-white dark:bg-[#131C1C] flex items-center justify-center text-lg font-bold transition-colors duration-500 ${isInView ? 'text-white' : 'text-gray-400 dark:text-gray-600 dark:border-gray-800'}`}
                >
                    {step.id}
                </motion.div>
            </div>

            {/* Content Side */}
            <div className={`w-full pl-20 md:pl-0 md:w-[42%] transition-all duration-700 ${index % 2 === 0 ? 'md:mr-auto text-left' : 'md:ml-auto md:text-left'}`}>
                <motion.div
                    animate={{
                        scale: isInView ? 1.02 : 1,
                        borderColor: isInView ? "#00808060" : "transparent"
                    }}
                    className={`bg-white dark:bg-[#131C1C] p-8 rounded-3xl border border-transparent shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-none transition-all duration-700 ${isInView ? 'shadow-[0_20px_40px_-10px_rgba(0,128,128,0.1)] dark:border-[#008080]/30' : 'dark:border-white/5'}`}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`p-2 rounded-xl transition-colors duration-500 ${isInView ? 'bg-[#008080]/10 text-[#008080]' : 'bg-gray-50 text-gray-400 dark:bg-white/5 dark:text-gray-600'}`}>
                            <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <span className="text-sm font-bold tracking-wider text-[#008080]/80 dark:text-[#EAB308]/60 uppercase">
                            {step.time}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
                        {step.title}
                    </h3>

                    <ul className="space-y-4">
                        {step.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-4 text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                                <div className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500 ${isInView ? 'bg-[#008080]' : 'bg-gray-300 dark:bg-gray-700'}`} />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default RevisionProcess;
