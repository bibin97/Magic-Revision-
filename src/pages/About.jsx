import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is Magic Revision?</h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-12">
                        Magic Revision is NOT clearer teaching or more tuition. It is a smarter, structured <strong className="text-slate-900 font-bold">Revision & Recall System</strong>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                            <div className="text-4xl mb-4 text-indigo-600">🧠</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Active Recall</h3>
                            <p className="text-slate-600">We use scientific techniques to ensure information sticks in your long-term memory.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                            <div className="text-4xl mb-4 text-indigo-600">🎯</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Exam Strategy</h3>
                            <p className="text-slate-600">Focus on high-yield topics and question patterns that actually appear in exams.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                            <div className="text-4xl mb-4 text-indigo-600">📊</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Progress Tracking</h3>
                            <p className="text-slate-600">Personalized monitoring to identify weak spots before the exam does.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
