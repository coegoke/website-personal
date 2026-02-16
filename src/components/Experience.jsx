export default function Experience() {
    const jobs = [
        {
            title: 'AI Engineer @ Asa Ren',
            date: 'Oct 2024 — Present',
            active: true,
            desc: 'Developed RAG pipeline integrating DNA reports, lab tests, and quizzes deployed on AWS Lambda. Designed Virtual Assistant with memory, contextual soft-selling, and Langfuse monitoring. Built AI Agent for RSID identification and a grounding-based search pipeline for pharmacogenomic drug discovery.',
            tags: ['AWS Lambda', 'pgvector', 'Langfuse', 'OpenAI API', 'RAG'],
        },
        {
            title: 'Lead Divisi Engineering @ Braincore',
            date: 'Jan 2024 — Present',
            active: true,
            desc: 'Monitoring and providing technical feedback on AI projects including Driving Monitoring System, Palm Oil Ripeness Detection, image classification pipelines, and more.',
            tags: ['Leadership', 'Computer Vision', 'Deep Learning'],
        },
        {
            title: 'AI Engineer @ PT Seleris MediaTekno Internasional',
            date: 'Oct 2023 — Oct 2024',
            active: false,
            desc: 'Engineered robust OCR system for KTP using YOLO + CTC loss. Designed chatbot for customer interaction. Architected queue management with RabbitMQ. Developed RAG using GPT-4o-mini for company document processing.',
            tags: ['YOLO', 'CTC Loss', 'RabbitMQ', 'GPT-4o-mini'],
        },
        {
            title: 'Teaching Assistant SQL @ Pacmann',
            date: 'May 2023 — Jan 2024',
            active: false,
            desc: 'Conducted PostgreSQL workshops covering DDL, DML, Window Functions, CTEs, and Stored Procedures. Facilitated live Zoom tutorials for 30+ participants and assessed 50+ exam participants.',
            tags: ['PostgreSQL', 'Teaching', 'SQL'],
        },
    ];

    return (
        <section id="experience" className="py-20 bg-[#0b0f17] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2 font-mono">
                        <span className="text-primary mr-2">./</span>Professional_Experience
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                <div className="space-y-8">
                    {jobs.map((job, i) => (
                        <div
                            key={i}
                            className={`relative pl-8 border-l-2 ${job.active ? 'border-primary/30' : 'border-primary/10'
                                }`}
                        >
                            <div
                                className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${job.active
                                        ? 'bg-primary shadow-[0_0_10px_rgba(43,108,238,0.8)]'
                                        : 'bg-gray-600'
                                    }`}
                            />
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                <span className="text-primary font-mono text-sm">{job.date}</span>
                            </div>
                            <p className="text-gray-400 mb-4 max-w-3xl">{job.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {job.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-[10px] font-mono rounded bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
