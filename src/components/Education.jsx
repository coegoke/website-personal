export default function Education() {
    return (
        <section id="education" className="py-20 bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2 font-mono">
                        <span className="text-primary mr-2">./</span>Education_&_Leadership
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-xl bg-surface-dark border border-white/5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                            <h3 className="text-xl font-bold text-white">Universitas Terbuka</h3>
                            <span className="text-primary font-mono text-sm">Jul 2020 — Oct 2025</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Graduate Mathematics Student · GPA 3.44/4.00 · Jakarta, Indonesia
                        </p>
                        <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                            <li>
                                Core coursework: Calculus I–III, Elementary Linear Algebra I–II, Statistical
                                Methods, and Introduction to Probability.
                            </li>
                            <li>
                                Co-authored articles with lecturers on machine learning in education, and
                                conducted a Systematic Literature Review (SLR) on lung cancer during the
                                COVID-19 era using Python.
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl bg-surface-dark border border-white/5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                            <h3 className="text-xl font-bold text-white">
                                Head of Curriculum Division
                            </h3>
                            <span className="text-primary font-mono text-sm">Oct 2020 — Jul 2022</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Rumah Pintar, Paguyuban Karya Salemba Empat · Universitas Indonesia, Depok
                        </p>
                        <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                            <li>
                                Managed a team, structured tasks, and assigned PICs — earned the "Best Teacher"
                                award within 2 months.
                            </li>
                            <li>
                                Developed 13 courses for UTBK 2022 preparation, taught 30+ students weekly, and
                                ran biweekly tryouts to evaluate progress.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
