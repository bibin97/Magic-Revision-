import React from 'react';
import testimonialImg1 from '../assets/testimonial-1.jpg';
import testimonialImg2 from '../assets/testimonial-2.jpg';
import testimonialImg3 from '../assets/testimonial-3.jpg';
import t1 from '../assets/t1.mp4';
import t2 from '../assets/t2.mp4';
import t3 from '../assets/t3.mp4';

export default function Results() {
    const videoTestimonials = [
        {
            src: t1,
            title: "DUBAI/UAE",
            name: "RUDRA VINOD",
            details: "D/O VINOD UNNIKRISHNAN | 10 CBSE"
        },
        {
            src: t2,
            title: "QATAR (DOHA)",
            name: "MADHAV SUNEEJ",
            details: "S/O SUNEEJ SUDHAKARAN | 9TH CBSE"
        },
        {
            src: t3,
            title: "KERALA, INDIA",
            name: "AFZIYA FATHIMA CTP",
            details: "D/O UMER SALIM CTP | 5 CBSE"
        }
    ];

    return (
        <section id="results" className="py-24 font-sans">
            {/* Section 1: Outcomes */}
            <div className="container mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#008080] mb-4">Real Outcomes</h2>
                    <p className="text-lg text-slate-600">Practical results you can measure from our Magic Revision system.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Outcomes cards */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">2x Recall Speed</h3>
                        <p className="text-slate-600">Retrieve answers faster during the exam using our specialized neural mapping techniques.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-2xl">🧘</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Zero Anxiety</h3>
                        <p className="text-slate-600">Walk into the exam hall knowing you are prepared. Say goodbye to blackouts and panic.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Peak Performance</h3>
                        <p className="text-slate-600">Convert your hard work into the grades you deserve. Maximize every mark on the paper.</p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-slate-200 border border-slate-800">
                    <h3 className="text-2xl font-bold mb-8 text-center text-[#2dd4bf]">Who is this for?</h3>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 mr-4 bg-teal-500/20 rounded-full text-teal-400 font-bold">✓</span>
                            <p className="text-lg">Students in <strong className="text-teal-400 font-bold">Grades 6–12</strong> preparing for final exams.</p>
                        </div>
                        <div className="flex items-start">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 mr-4 bg-teal-500/20 rounded-full text-teal-400 font-bold">✓</span>
                            <p className="text-lg">Students who have studied the syllabus but lack confidence.</p>
                        </div>
                        <div className="flex items-start">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 mr-4 bg-teal-500/20 rounded-full text-teal-400 font-bold">✓</span>
                            <p className="text-lg">Parents seeing their child struggle with exam anxiety despite hard work.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Testimonials */}
            <div className="container mx-auto px-6 border-t border-slate-200 pt-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#008080] mb-4">Student Testimonials</h2>
                    <p className="text-lg text-slate-600">Hear from those who transformed their learning with Mash Magic.</p>
                </div>

                {/* Testimonials Part 1: Review Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 items-stretch">
                    {/* Card 1: Alphin Shibu */}
                    <div className="bg-white rounded-[2rem] p-8 text-center shadow-lg border border-slate-100 transition-transform hover:-translate-y-2 flex flex-col">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                            <img src={testimonialImg2} alt="Alphin's Family" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-1">Alphin Shibu</h4>
                        <div className="flex justify-center text-yellow-500 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-xl">★</span>)}
                        </div>
                        <div className="bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-lg inline-block mb-6 text-sm">
                            Grade 9th STATE
                        </div>
                        <p className="text-slate-700 mb-6 leading-relaxed flex-grow text-[13px]">
                            "I’m the father of Alphin. We are really happy with Mash Magic. The classes were excellent, especially since my son had difficulty in Mathematics. The teachers are amazing, and they took great care of him. Every concern was handled with attention. If he ever struggles again, I’ll definitely choose Mash Magic."
                        </p>
                        <div className="pt-6 border-t border-slate-100">
                            <p className="text-xs text-slate-600 font-bold">
                                Shibu
                            </p>
                            <p className="text-[10px] text-slate-400 italic">
                                F/o Alphin shibu
                            </p>
                        </div>
                    </div>

                    {/* Featured Card 2: Bezal Sanoj */}
                    <div className="bg-[#f0f9f9] rounded-[2rem] p-8 md:p-10 text-center shadow-xl border-2 border-teal-100 transition-transform hover:-translate-y-2 lg:-mt-6 flex flex-col">
                        <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img src={testimonialImg1} alt="Graduating Student" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-1 leading-tight">BEZAL SANOJ</h4>
                        <p className="text-xs text-slate-500 mb-2">S/O SANOJ JACO | +2 CBSE | QATAR</p>
                        <div className="flex justify-center text-yellow-500 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-2xl">★</span>)}
                        </div>
                        <div className="bg-yellow-400 text-slate-900 font-bold py-2 px-8 rounded-lg inline-block mb-6 text-base shadow-sm">
                            Improved from 52% → 89%
                        </div>
                        <div className="flex-grow">
                            <p className="text-slate-700 italic mb-6 leading-relaxed text-sm md:text-base">
                                "As I complete my final course with Mash Magic, I want to take a moment to express my heartfelt gratitude... A huge thank you to <strong>Mr. Udayn Sir</strong> and my mentor, <strong>Mrs. Nuzara Ma'am</strong>."
                            </p>
                        </div>
                        <div className="pt-6 border-t border-teal-100">
                            <p className="text-xs text-slate-500 italic font-medium">
                                Parent: "Very impressed with the discipline and progress. My child gained real confidence."
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Yash Pradheep (Dr. Arya) */}
                    <div className="bg-white rounded-[2rem] p-8 text-center shadow-lg border border-slate-100 transition-transform hover:-translate-y-2 flex flex-col">
                        <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                            <img
                                src={testimonialImg3}
                                alt="Yash's Family"
                                className="w-full h-full object-cover scale-[1.1] object-[center_35%]"
                            />
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-1">Yash Pradheep</h4>
                        <div className="flex justify-center text-yellow-500 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-xl">★</span>)}
                        </div>
                        <div className="bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-lg inline-block mb-6 text-sm">
                            Grade 10, CBSE
                        </div>
                        <p className="text-slate-700 mb-6 leading-relaxed flex-grow text-[13px]">
                            "I'm Dr. Arya. Mash Magic helped my son with Hindi during finals. Their mentors identified weak areas and gave detailed support. He performed better than expected. Now he’s in Grade 10 and I’ve confidently continued with them."
                        </p>
                        <div className="pt-6 border-t border-slate-100">
                            <p className="text-xs text-slate-600 font-bold">
                                Dr. Arya
                            </p>
                            <p className="text-[10px] text-slate-400 italic">
                                M/o Yash Pradheep
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Ranadev Sunil */}
                    <div className="bg-white rounded-[2rem] p-8 text-center shadow-lg border border-slate-100 transition-transform hover:-translate-y-2 md:col-start-1 lg:col-start-auto flex flex-col">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=256&h=256&auto=format&fit=crop" alt="Student" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-1">Ranadev Sunil</h4>
                        <div className="flex justify-center text-yellow-500 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-xl">★</span>)}
                        </div>
                        <div className="bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-lg inline-block mb-6 text-sm">
                            Grade 4 CBSE | Thrissur
                        </div>
                        <p className="text-slate-700 mb-6 leading-relaxed flex-grow text-[13px]">
                            "Thank you mash magic🥰. He really enjoyed attending the class. He tends to get upset quickly when he doesn't get something right, but when he's appreciated for his efforts, he regains interest. He's already asking for another class tomorrow!"
                        </p>
                        <div className="pt-6 border-t border-slate-100">
                            <p className="text-xs text-slate-600 font-bold">
                                Sreeja Sunil
                            </p>
                            <p className="text-[10px] text-slate-400 italic">
                                M/O Ranadev Sunil
                            </p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Part 2: Videos */}
                <div className="rounded-[3rem] p-10 md:p-16 text-center max-w-6xl mx-auto border border-slate-100 shadow-sm">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#008080] mb-4">Video Success Stories</h3>

                    <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Short highlights of our students' transformation.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {videoTestimonials.map((video, idx) => (
                            <div key={idx} className="group relative bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 transition-all hover:shadow-xl hover:-translate-y-1">
                                <div className="aspect-[4/5] relative overflow-hidden bg-black">
                                    <video
                                        src={video.src}
                                        className="w-full h-full object-cover"
                                        controls
                                        preload="metadata"
                                    />
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="p-4 text-center">
                                    <h4 className="font-bold text-slate-900 text-sm">{video.name}</h4>
                                    <p className="text-xs text-indigo-600 font-bold mb-1">{video.title}</p>
                                    <p className="text-[10px] text-slate-500 leading-tight">{video.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
