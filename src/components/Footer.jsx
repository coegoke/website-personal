export default function Footer() {
    return (
        <footer className="bg-background-dark border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <span className="text-primary font-mono text-xl font-bold block mb-2">
                            &lt;Fauzan.Dev /&gt;
                        </span>
                        <p className="text-sm text-gray-400 max-w-xs">
                            Building intelligent systems, one model at a time.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://www.linkedin.com/in/fauzanihzafajar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                />
                            </svg>
                        </a>
                        <a
                            href="mailto:fauzanok011101@gmail.com"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <span className="material-icons text-2xl">email</span>
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
                    <p>© 2026 Fauzan Ihza Fajar. All rights reserved.</p>
                    <div className="flex items-center space-x-2 mt-2 md:mt-0">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>System Status: Optimal</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
