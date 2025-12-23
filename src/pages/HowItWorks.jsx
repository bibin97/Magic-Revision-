import React from 'react';

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                    <p className="text-lg text-slate-600">A simple, 4-step process to exam success.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center p-6">
                        <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 bg-indigo-600 text-white rounded-full font-bold text-xl shadow-lg shadow-indigo-600/30">1</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Concept Audit</h3>
                        <p className="text-slate-600">We quickly identify what you know and where your gaps are.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 bg-indigo-600 text-white rounded-full font-bold text-xl shadow-lg shadow-indigo-600/30">2</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Plan</h3>
                        <p className="text-slate-600">Create a customized revision timetable focusing on high-weightage areas.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 bg-indigo-600 text-white rounded-full font-bold text-xl shadow-lg shadow-indigo-600/30">3</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Recall Drills</h3>
                        <p className="text-slate-600">Intensive active recall sessions to cement knowledge/formulas.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 bg-indigo-600 text-white rounded-full font-bold text-xl shadow-lg shadow-indigo-600/30">4</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Mock Tests</h3>
                        <p className="text-slate-600">Simulated exam environments to build speed and confidence.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
