export default function Competitions() {
    const achievements = [
        {
            title: 'Finalist & Favorite Winner',
            event: 'Jabar Data Viz Festival 2022 — Jabar Digital Service',
            year: '2022',
            highlight: true,
        },
        {
            title: '2nd Winner',
            event: 'Course of Data IPB University Infographic Competition',
            year: '2022',
            highlight: true,
        },
        {
            title: '3rd Place',
            event: 'NLP Data Science Competition — Data Intelligo 2023',
            year: '2023',
            highlight: true,
        },
        {
            title: '2nd Place',
            event: 'Data Slayer ML Competition 2.0 — Telkom University Purwokerto',
            year: '2024',
            highlight: true,
        },
        {
            title: '3rd Place',
            event: 'Karya Tulis Ilmiah Academic Competition of Data Science 2024',
            year: '2024',
            highlight: false,
        },
        {
            title: 'Top 30',
            event: 'Satria Data UII 2022 — Data Science Competition',
            year: '2022',
            highlight: false,
        },
        {
            title: '4th Place — Top Preprocessing & EDA',
            event: 'Datathon ML Competition RISTEK UI 2023',
            year: '2023',
            highlight: false,
        },
        {
            title: 'Finalist',
            event: 'Datathon ML Competition RISTEK UI 2024',
            year: '2024',
            highlight: false,
        },
        {
            title: 'Finalist',
            event: 'Dataquest AIRNOLOGY FTMM UNAIR 2024',
            year: '2024',
            highlight: false,
        },
        {
            title: 'Finalist',
            event: 'Sebelas Maret Statistics Data Scientist 2024',
            year: '2024',
            highlight: false,
        },
    ];

    return (
        <section id="competitions" className="py-20 bg-background-dark relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2 font-mono">
                        <span className="text-primary mr-2">./</span>Achievements
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                <div className="space-y-4">
                    {achievements.map((a, i) => (
                        <div
                            key={i}
                            className="bg-surface-dark p-6 rounded-lg border border-white/5 hover:border-primary/40 transition-colors shadow-sm"
                        >
                            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-white leading-tight mb-2">
                                        {a.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-2">{a.event}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <span
                                        className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium font-mono ${a.highlight
                                                ? 'bg-primary/10 text-primary border border-primary/30'
                                                : 'bg-white/5 text-gray-400 border border-white/10'
                                            }`}
                                    >
                                        {a.year}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
