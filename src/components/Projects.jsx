export default function Projects() {
    const projects = [
        {
            dir: 'ktp-ocr-pipeline',
            cmd: '$ cat README.md',
            title: 'KTP OCR Pipeline',
            desc: 'Advanced OCR system for Indonesian ID cards (KTP) using CNN-LSTM-RNN architecture optimized with CTC loss function for enhanced text recognition accuracy.',
            stats: [
                { label: 'Architecture:', value: 'CNN-LSTM-RNN + CTC' },
                { label: 'Detection:', value: 'YOLO v8' },
                { label: 'Stack:', value: 'PyTorch, FastAPI', highlight: true },
            ],
            badge: 'Production Ready',
        },
        {
            dir: 'sahabat-ai',
            cmd: '$ ./deploy.sh --gpu nvidia-l4',
            title: 'Sahabat AI — Healthcare LLM',
            desc: 'High-throughput healthcare content generation system deployed on NVIDIA L4 infrastructure, leveraging vLLM for low-latency AI-driven responses.',
            stats: [
                { label: 'Inference:', value: 'vLLM Engine' },
                { label: 'Hardware:', value: 'NVIDIA L4 GPU' },
                { label: 'Stack:', value: 'vLLM, Python, Docker', highlight: true },
            ],
            badge: 'Deployed',
        },
        {
            dir: 'rag-virtual-assistant',
            cmd: '$ ./run_demo.sh --mode multi-pipeline',
            title: 'RAG Virtual Assistant System',
            desc: 'Multi-pipeline virtual assistant integrating memory saving, conversation history, contextual soft-selling, product upselling, with performance monitoring via Langfuse.',
            stats: [
                { label: 'Pipelines:', value: '5 intelligent modules' },
                { label: 'Monitoring:', value: 'Langfuse + PostgreSQL' },
                { label: 'Stack:', value: 'LangChain, OpenAI, AWS Lambda', highlight: true },
            ],
            badge: 'Production Ready',
        },
        {
            dir: 'deep-research-website',
            cmd: '$ npm run dev',
            title: 'Deep Research Agent Website',
            desc: 'Full-stack AI research agent that conducts deep web search and aggregates data, streaming its live reasoning to the UI with a typewriter effect via FastAPI, LangChain, and MCP tool execution.',
            stats: [
                { label: 'Agent:', value: 'LangChain + MCP' },
                { label: 'Model:', value: 'Llama 3.3 Nemotron' },
                { label: 'Stack:', value: 'React, Vite, FastAPI, TypeScript', highlight: true },
            ],
            badge: 'Open Source',
            link: 'https://github.com/coegoke/deep-research-website',
        },
        {
            dir: 'wearables-assistant',
            cmd: '$ uvicorn main:app --reload',
            title: 'Wearables Assistant',
            desc: 'Conversational AI that lets users query and analyze wearable device data — steps, sleep, heart rate, activity — through a natural language chat interface backed by agentic query routing.',
            stats: [
                { label: 'Agent:', value: 'LangGraph + Groq' },
                { label: 'Model:', value: 'Llama 3.3 70B' },
                { label: 'Stack:', value: 'FastAPI, React, SQLite', highlight: true },
            ],
            badge: 'Open Source',
            link: 'https://github.com/coegoke/Wearables-Assistant',
            fullWidth: true,
        },
    ];

    return (
        <section id="projects" className="py-20 bg-[#0b0f17]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2 font-mono">
                        <span className="text-primary mr-2">./</span>Featured_Projects
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className={`rounded-lg overflow-hidden bg-[#1e1e1e] shadow-2xl border border-gray-800 flex flex-col h-full transform transition hover:-translate-y-1 ${p.fullWidth ? 'lg:col-span-2' : ''
                                }`}
                        >
                            {/* Terminal Header */}
                            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-gray-400 font-mono">
                                    user@server:~/projects/{p.dir}
                                </div>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-6 font-mono text-sm relative flex-grow">
                                <div className="text-green-400 mb-2">{p.cmd}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                                <p className="text-gray-400 mb-4">{p.desc}</p>

                                <div className={`${p.fullWidth ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-2'} mb-6`}>
                                    {p.fullWidth ? (
                                        <>
                                            <div className="space-y-1">
                                                {p.stats.slice(0, 2).map((s) => (
                                                    <div key={s.label} className="flex text-xs">
                                                        <span className="text-blue-400 w-24">{s.label}</span>
                                                        <span className={s.highlight ? 'text-yellow-300' : 'text-white'}>{s.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="space-y-1">
                                                {p.stats.slice(2).map((s) => (
                                                    <div key={s.label} className="flex text-xs">
                                                        <span className="text-blue-400 w-24">{s.label}</span>
                                                        <span className={s.highlight ? 'text-yellow-300' : 'text-white'}>{s.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        p.stats.map((s) => (
                                            <div key={s.label} className="flex text-xs">
                                                <span className="text-blue-400 w-24">{s.label}</span>
                                                <span className={s.highlight ? 'text-yellow-300' : 'text-white'}>{s.value}</span>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {/* Status badge */}
                                <div className="flex items-center flex-wrap gap-3">
                                    <div className="inline-flex items-center px-3 py-1 bg-black/70 text-green-400 text-xs rounded border border-green-400/30 backdrop-blur-sm">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                                        {p.badge}
                                    </div>
                                    {p.link && (
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1 bg-black/70 text-blue-400 text-xs rounded border border-blue-400/30 hover:border-blue-400/60 hover:text-blue-300 transition-colors backdrop-blur-sm"
                                        >
                                            View on GitHub &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More projects list */}
                <div className="mt-8 p-6 rounded-lg bg-[#1e1e1e] border border-gray-800">
                    <div className="font-mono text-sm text-green-400 mb-4">$ ls ./other-projects/</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { name: 'document-similarity/', desc: 'PaddleOCR + Cosine Similarity' },
                            { name: 'sirekap-ocr/', desc: 'TrOCR for election reporting' },
                            { name: 'llm-gcp-deploy/', desc: 'Llama 3 8B on GCP Cloud Run' },
                            { name: 'trida-fall-detect/', desc: 'Ensemble ML fall detection' },
                            { name: 'pharmacogenomic-search/', desc: 'Drug discovery pipeline' },
                            { name: 'rsid-ai-agent/', desc: 'Research automation agent' },
                        ].map((p) => (
                            <div key={p.name} className="flex items-start space-x-2 font-mono text-xs">
                                <span className="text-blue-400">📁</span>
                                <div>
                                    <div className="text-white">{p.name}</div>
                                    <div className="text-gray-500">{p.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
