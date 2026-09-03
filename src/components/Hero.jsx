export default function Hero() {
    return (
        <section
            id="hero"
            className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#050a14] min-h-screen flex items-center"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f1c3f] via-[#050a14] to-[#050a14] pointer-events-none" />

            {/* Neural Pattern Overlay */}
            <div className="absolute inset-0 code-pattern opacity-20 pointer-events-none" />
            {/* Floating shapes */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        {/* Status badge */}
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            <span>Available for Freelance</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                            Fauzan Ihza
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                                Fajar
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-lg font-light leading-relaxed">
                            AI Engineer building scalable intelligent systems — from RAG architectures
                            and OCR pipelines to n8n automation workflows and multi-agent LLM products.
                            Bridging cutting-edge research with real-world products.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#projects"
                                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-[0_0_20px_rgba(43,108,238,0.3)] hover:shadow-[0_0_30px_rgba(43,108,238,0.5)]"
                            >
                                <span className="material-icons text-sm mr-2">terminal</span>
                                Explore Projects
                            </a>
                            <a
                                href="#experience"
                                className="inline-flex justify-center items-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 bg-transparent hover:bg-white/5 transition-all"
                            >
                                <span className="material-icons text-sm mr-2">work</span>
                                View Experience
                            </a>
                        </div>

                        {/* Tech badges */}
                        <div className="pt-8 flex items-center space-x-6 text-gray-400">
                            {['Python', 'LangGraph', 'n8n', 'AWS'].map((tech) => (
                                <div key={tech} className="flex items-center space-x-2">
                                    <span className="font-mono text-primary">&gt;&gt;&gt;</span>
                                    <span className="font-mono text-sm">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                        <div className="relative group">
                            {/* Glow border */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-surface-dark flex items-center justify-center">
                                <img
                                    src="/profile.jpg"
                                    alt="Fauzan Ihza Fajar"
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500"
                                />

                                {/* Terminal overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm border-t border-white/10">
                                    <div className="font-mono text-xs text-primary mb-1">Status:</div>
                                    <div className="font-mono text-xs text-white">AI Engineer — Teman Data</div>
                                    <div className="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-full animate-pulse" />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative icons */}
                            <div className="absolute -top-6 -right-6 text-primary/20">
                                <span className="material-icons text-6xl">memory</span>
                            </div>
                            <div className="absolute -bottom-6 -left-6 text-primary/20">
                                <span className="material-icons text-6xl">qr_code_2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
