export default function Competencies() {
    const cards = [
        {
            icon: 'psychology',
            title: 'NLP & Generative AI',
            desc: 'Building RAG pipelines, multi-agent systems (Critic/Refiner), chatbots, and virtual assistants powered by LLMs. Expertise in prompt engineering, grounding search, and evaluation with Langfuse.',
            tags: ['LangGraph', 'OpenAI API', 'Gemini 2.5', 'Langfuse'],
        },
        {
            icon: 'bolt',
            title: 'Automation & Workflows',
            desc: 'Designing automated reporting and business-intelligence workflows on n8n, combining computer vision recognition with multi-modal LLM analysis for email, ordering, and procurement intelligence.',
            tags: ['n8n', 'Google Apps Script', 'YOLO', 'RabbitMQ'],
        },
        {
            icon: 'hub',
            title: 'MLOps & Cloud',
            desc: 'Deploying pipelines on AWS Lambda + SAM CLI and GCP Cloud Run, with pgvector and PostgreSQL for cost tracking and vector search, monitored end-to-end with Langfuse.',
            tags: ['AWS Lambda', 'pgvector', 'GCP Cloud Run', 'Docker'],
        },
    ];

    return (
        <section id="competencies" className="py-20 bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2 font-mono">
                        <span className="text-primary mr-2">./</span>Core_Competencies
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="group p-6 rounded-xl bg-surface-dark border border-white/5 hover:border-primary/50 transition-all duration-300 glow-hover"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <span className="material-icons">{card.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">{card.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {card.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs font-mono rounded bg-black text-gray-300"
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
