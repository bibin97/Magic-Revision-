import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    ShieldCheck,
    TrendingUp,
    CheckCircle2,
    Star,
    Play,
    ChevronLeft,
    ChevronRight,
    User
} from 'lucide-react';
import { fadeInUp, staggerContainer, cardHover, buttonHover, buttonTap, viewportConfig } from '../utils/animations';

// Assets (retaining existing imports)
import testimonialImg1 from '../assets/testimonial-1.jpg';
import testimonialImg2 from '../assets/testimonial-2.jpg';
import testimonialImg3 from '../assets/testimonial-3.jpg';
import t1 from '../assets/t1.mp4';
import t2 from '../assets/t2.mp4';
import t3 from '../assets/t3.mp4';

const outcomeCards = [
    {
        title: "2x Recall Speed",
        desc: "Faster answer retrieval during exams",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-50"
    },
    {
        title: "Zero Anxiety",
        desc: "Confident, panic-free exam performance",
        icon: ShieldCheck,
        color: "text-emerald-500",
        bg: "bg-emerald-50"
    },
    {
        title: "Peak Performance",
        desc: "Convert effort into higher marks",
        icon: TrendingUp,
        color: "text-blue-500",
        bg: "bg-blue-50"
    }
];

const featuredTestimonials = [
    {
        name: "Alphin Shibu",
        grade: "Grade 9th STATE",
        location: "Kerala",
        img: testimonialImg2,
        rating: 5,
        highlight: "Exceptional Clarity",
        text: "The classes were excellent, especially since I had difficulty in Mathematics. The teachers are amazing, and they took great care of me. Every concern was handled with attention."
    },
    {
        name: "BEZAL SANOJ",
        grade: "+2 CBSE",
        location: "Qatar",
        img: testimonialImg1,
        rating: 5,
        highlight: "Improved from 52% → 89%",
        text: "As I complete my final course with Magic Revision, I want to express my heartfelt gratitude. The discipline and progress helped me gain real confidence for my boards."
    },
    {
        name: "Yash Pradheep",
        grade: "Grade 10 CBSE",
        location: "UAE",
        img: testimonialImg3,
        rating: 5,
        highlight: "Confidence Boost",
        text: "Magic Revision helped me with Hindi during finals. Their mentors identified weak areas and gave detailed support. I performed much better than expected."
    }
];

const textReviews = [
    {
        quote: "He really enjoyed attending the class. If we encourage him a little, he’ll be just fine. He tends to get upset quickly when he doesn’t get something right, but when he’s appreciated for his efforts, he regains interest in learning. He’s already asking if there will be another Mash Magic class tomorrow!",
        name: "Sreeja Sunil",
        relation: "Parent",
        details: "M/O Ranadev Sunil | Grade 4 CBSE | Thrissur"
    },
    {
        quote: "A great thanks to mash magic. My hindi was not good and was worried about how i will write my exam but, thanks to both teachers i am confident now. Both the teachers have put a of effort in teaching me and helping me understand the topic. Thankyou team.",
        name: "Adiya Saji",
        relation: "Student",
        details: "D/O Saji Stanly | Grade 10 th CBSE | Kerala"
    },
    {
        quote: "A big thanks for ur amazing team. I am happy with mash magic. The class was really helpful for me I was able to clear all my doubts and the mentor was really supportive as well and gave me all the necessary resources be it pyq's.",
        name: "Stebin Biju",
        relation: "Student",
        details: "S/o Biju Sebastian | Grade 10 th CBSE | Dubai, UAE"
    },
    {
        quote: "He said was really good 🥰 All ur facultys are very good, supportive and co-operative. Thank you so much for allotting such good teachers and mentor. Thank you Mash magic.",
        name: "Adv. Sujitha.K.S",
        relation: "Parent",
        details: "M/o M.Suryadev | Grade +2 CBSE | Ernakulam"
    },
    {
        quote: "I am very satisfied with mash magic. My daughter has been very good in her studies lately after joining mash magic. I therefore show my gratitude towards the mentor and the amazing teachers. It really is a magical learning institute and I would highly recommend this to my friends.",
        name: "Sajitha i.p",
        relation: "Parent",
        details: "M/o Aamilah | Grade 7 CBSE | Dubai, UAE"
    },
    {
        quote: "Just wanted to say a big thank you for everything you do for my child. Your support, encouragement, and teaching have really helped them grow both academically and personally. You’ve made a huge difference, and we’re so grateful.",
        name: "Rifaniya & Ayaan's Parents",
        relation: "Parent",
        details: "Grade 12 & 6 | GMS Dubai"
    },
    {
        quote: "I am truly satisfied with the class at Mash Magic. The way they teach is very effective and easy to understand. They share useful tricks and tips that help me remember concepts better and study smarter. I feel more confident now.",
        name: "Siyona Ilsah Jacob",
        relation: "Student",
        details: "D/o Jacob P John | Grade 10 CBSE | Qatar"
    },
    {
        quote: "Honestly, your support made a real difference in her preparation. The teachers—Amal Sir, Shayma Ma’am, and Priyanka Ma’am—were truly amazing and helped her a lot throughout the journey. Thank you once again for being there!",
        name: "Hridhya Mariam Anish",
        relation: "Student",
        details: "D/o Mahesh amban chalil | 12 th CBSE | Bahrain"
    }
];

const videoStories = [
    {
        name: "Rudra Vinod",
        location: "Dubai/UAE",
        grade: "10 CBSE",
        duration: "00:41",
        src: t1
    },
    {
        name: "Madhav Suneej",
        location: "Qatar (Doha)",
        grade: "9th CBSE",
        duration: "00:45",
        src: t2
    },
    {
        name: "Afziya Fathima",
        location: "Kerala, India",
        grade: "5 CBSE",
        duration: "00:38",
        src: t3
    }
];

const Results = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const carouselRef = useRef(null);

    // Resize listener
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getVisibleCount = () => {
        if (windowWidth > 1024) return 3;
        if (windowWidth > 768) return 2;
        return 1;
    };

    // Carousel logic
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            const maxIndex = Math.max(0, textReviews.length - getVisibleCount());
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [isHovered, windowWidth]);

    const nextSlide = () => {
        const maxIndex = Math.max(0, textReviews.length - getVisibleCount());
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        const maxIndex = Math.max(0, textReviews.length - getVisibleCount());
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <div className="bg-[#F9FAFB] dark:bg-[#0A0F0F] transition-colors duration-500">

            {/* SECTION 1: Results Outcomes */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
                        >
                            Real Outcomes
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-gray-600 dark:text-gray-400"
                        >
                            Practical results you can measure from our Magic Revision system.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {outcomeCards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={cardHover}
                                className="bg-white dark:bg-[#131C1C] p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center h-full group"
                            >
                                <div className={`w-14 h-14 ${card.bg} dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <card.icon className={`${card.color} w-7 h-7`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: Who Is This For? */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-100 shadow-2xl overflow-hidden relative"
                    >
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#008080]/5 blur-[80px] rounded-full -mr-20 -mt-20" />

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 relative z-10">
                            Who is this for?
                        </h2>

                        <ul className="space-y-6 relative z-10">
                            {[
                                "Students in Grades 6–12 preparing for exams",
                                "Students who studied but lack confidence",
                                "Parents worried about exam anxiety"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-5 group">
                                    <div className="w-6 h-6 rounded-full bg-[#008080]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#008080]/20 transition-colors">
                                        <CheckCircle2 className="text-[#008080] w-4 h-4" />
                                    </div>
                                    <span className="text-slate-700 text-lg md:text-xl font-medium tracking-wide">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: Image + Highlight Testimonials */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                    >
                        {featuredTestimonials.map((item, idx) => {
                            const isMiddle = idx === 1;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    whileHover={cardHover}
                                    className={`relative bg-white dark:bg-[#131C1C] rounded-[2.5rem] p-8 border border-gray-100 dark:border-gray-800 transition-all ${isMiddle ? 'shadow-2xl md:scale-105 z-10 border-[#008080]/20' : 'shadow-sm'
                                        }`}
                                >
                                    {/* Rating */}
                                    <div className="flex gap-1 mb-6 justify-center md:justify-start">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Highlight Badge */}
                                    <div className="inline-block bg-yellow-400 text-gray-900 font-bold px-4 py-1.5 rounded-full text-sm mb-6 shadow-sm">
                                        {item.highlight}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic text-sm md:text-base">
                                        "{item.text}"
                                    </p>

                                    {/* Profile */}
                                    <div className="flex items-center gap-4 border-t border-gray-50 dark:border-gray-800 pt-6">
                                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-sm flex-shrink-0">
                                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white leading-tight">
                                                {item.name}
                                            </h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-500">
                                                {item.grade} | {item.location}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 4: Text Testimonials Carousel */}
            <section className="py-24 bg-gray-50 dark:bg-black/20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-2xl font-bold dark:text-white">What Parents & Students Say</h2>
                            <div className="flex gap-3">
                                <button
                                    onClick={prevSlide}
                                    className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                                >
                                    <ChevronLeft className="w-5 h-5 dark:text-white" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                                >
                                    <ChevronRight className="w-5 h-5 dark:text-white" />
                                </button>
                            </div>
                        </div>

                        <div className="overflow-hidden" ref={carouselRef}>
                            <motion.div
                                animate={{ x: `-${currentIndex * (100 / getVisibleCount())}%` }}
                                className="flex"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {textReviews.map((review, idx) => (
                                    <div key={idx} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
                                        <div className="bg-white dark:bg-[#131C1C] p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 h-full shadow-sm flex flex-col justify-between hover:border-[#008080]/30 transition-colors">
                                            <p className="text-gray-600 dark:text-gray-400 italic mb-8 leading-relaxed">
                                                "{review.quote}"
                                            </p>
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <User className="w-4 h-4 text-[#008080]" />
                                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                                                        {review.name}
                                                    </h4>
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 uppercase font-bold tracking-tighter">
                                                        {review.relation}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 ml-7">
                                                    {review.details}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-10">
                            {textReviews.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-1.5 rounded-full transition-all ${currentIndex === i ? 'w-8 bg-[#008080]' : 'w-2 bg-gray-200 dark:bg-gray-800'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Video Success Stories */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Video Success Stories</motion.h2>
                        <motion.div variants={fadeInUp} className="w-12 h-1 bg-[#008080] mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-8 no-scrollbar scroll-smooth"
                    >
                        {videoStories.map((video, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={cardHover}
                                className="min-w-[280px] md:min-w-0 group relative overflow-hidden bg-white dark:bg-[#131C1C] rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-500 cursor-pointer"
                            >
                                {/* Video Container */}
                                <div className="aspect-[3/4] relative bg-black transition-transform duration-700 group-hover:scale-105">
                                    <video
                                        src={video.src}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        muted
                                        loop
                                        playsInline
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                    {/* Play Interface */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-[#008080] group-hover:border-[#008080] transition-all duration-500"
                                        >
                                            <Play className="text-white fill-white w-6 h-6 ml-1" />
                                        </motion.div>
                                        <span className="mt-4 text-[10px] text-white/70 uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                            Watch Student Story
                                        </span>
                                    </div>

                                    {/* Duration Label */}
                                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-bold text-white border border-white/10">
                                        {video.duration}
                                    </div>
                                </div>

                                {/* Footer Info */}
                                <div className="p-6 text-center">
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                                        {video.name}
                                    </h4>
                                    <p className="text-[11px] text-gray-500 font-medium">
                                        {video.location} • {video.grade}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 6: FINAL CTA */}
            <section className="py-24 px-6 mb-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            These are real students.<br />
                            <span className="text-[#008080]">Your child can be next.</span>
                        </h2>

                        <motion.button
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            className="bg-yellow-400 text-black px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-yellow-400/20 transition-all hover:bg-[#FACC15]"
                        >
                            Book Free Session
                        </motion.button>

                        <p className="mt-8 text-sm text-gray-500 dark:text-gray-500 font-medium italic">
                            No commitment. Just clarity.
                        </p>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
};

export default Results;
