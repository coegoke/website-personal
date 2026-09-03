export default function Experience() {
    const jobs = [
        {
            title: 'AI Engineer @ Teman Data',
            date: 'Jun 2026 — Present',
            active: true,
            desc: 'Designed and built an automated social media reporting workflow on n8n combining YOLO for visual content recognition and Gemini 2.5 for multi-modal text and data analysis. Developed MVPs for Email AI Intelligence (chat knowledge base over full email content), Ordering Intelligence (raw food ingredient demand forecasting), and Procurement Intelligence.',
            tags: ['n8n', 'YOLO', 'Gemini 2.5', 'Forecasting'],
        },
        {
            title: 'AI Engineer @ Asa Ren',
            date: 'Oct 2024 — May 2026',
            active: false,
            desc: 'Architected end-to-end RAG pipelines and lab test OCR systems with OpenAI, pgvector, AWS Lambda, and SAM CLI, with PostgreSQL cost tracking. Designed a Virtual Assistant with multi-pipeline workflows (memory saving, soft-selling, upselling) monitored via Langfuse. Developed domain-specific AI agents and grounding search pipelines for RSID identification and pharmacogenomic research. Built a Multi-Agent Content System (Critic + Refiner) for self-correcting USP mini-reports and an automated avatar positioning pipeline.',
            tags: ['AWS Lambda', 'pgvector', 'Langfuse', 'OpenAI API', 'RAG'],
        },
        {
            title: 'Lead Divisi Engineering @ Braincore',
            date: 'Jan 2024 — Present',
            active: true,
            desc: 'Monitoring and providing technical feedback on AI projects including Driver Monitoring System, Palm Oil Ripeness Detection, Cartoon/Real Image Classification, and Blur/Bokeh Detection, while mentoring team members.',
            tags: ['Leadership', 'Computer Vision', 'Deep Learning'],
        },
        {
            title: 'AI Engineer @ PT Seleris MediaTekno Internasional',
            date: 'Oct 2023 — Oct 2024',
            active: false,
            desc: 'Engineered robust OCR system for KTP using YOLO + CTC loss. Designed chatbot for customer interaction. Architected queue management with RabbitMQ. Developed RAG using GPT-4o-mini for company document processing.',
            tags: ['YOLO', 'CTC Loss', 'RabbitMQ', 'GPT-4o-mini'],
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
