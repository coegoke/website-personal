import { useState } from 'react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            e.target.reset();
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section id="contact" className="py-20 bg-[#0b0f17] border-t border-white/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2 font-mono">
                        <span className="text-primary mr-2">./</span>Get_In_Touch
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact form */}
                    <form
                        onSubmit={handleSubmit}
                        className="p-6 rounded-xl bg-surface-dark border border-white/5 space-y-5"
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-display text-sm"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-display text-sm"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-display text-sm resize-vertical"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={submitted}
                            className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 disabled:opacity-60"
                        >
                            {submitted ? '✓ Message Sent' : 'Send Message'}
                        </button>
                    </form>

                    {/* Contact info */}
                    <div className="space-y-4">
                        {[
                            {
                                icon: 'email',
                                label: 'Email',
                                value: 'fauzanok011101@gmail.com',
                                href: 'mailto:fauzanok011101@gmail.com',
                            },
                            {
                                icon: 'phone',
                                label: 'Phone',
                                value: '+62 896-3609-9230',
                                href: 'tel:+6289636099230',
                            },
                            {
                                icon: 'work',
                                label: 'LinkedIn',
                                value: 'linkedin.com/in/fauzanihzafajar',
                                href: 'https://www.linkedin.com/in/fauzanihzafajar',
                            },
                            {
                                icon: 'location_on',
                                label: 'Location',
                                value: 'Depok, Jawa Barat, Indonesia',
                                href: null,
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="p-5 rounded-xl bg-surface-dark border border-white/5 hover:border-primary/40 transition-colors flex items-center gap-4"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <span className="material-icons text-lg">{item.icon}</span>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider font-mono mb-1">
                                        {item.label}
                                    </div>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-white font-medium hover:text-primary transition-colors text-sm"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="text-white font-medium text-sm">{item.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
