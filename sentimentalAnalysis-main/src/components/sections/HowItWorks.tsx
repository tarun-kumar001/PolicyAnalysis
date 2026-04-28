
"use client";

import { motion } from "framer-motion";
import { Copy, Brain, FileText, CheckCircle } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: Copy,
            title: "Input Policy Text",
            description: "Paste your proposed policy draft or upload the document directly into our secure analyzer.",
        },
        {
            icon: Brain,
            title: "AI Analysis",
            description: "Our advanced NLP models scan the text against millions of public sentiment data points.",
        },
        {
            icon: CheckCircle,
            title: "Get Actionable Insights",
            description: "Receive an instant report with sentiment scoring, confidence levels, and impact predictions.",
        },
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl">How It Works</h2>
                    <p className="mt-4 text-muted-foreground text-lg">Streamline your decision-making process in 3 simple steps.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-border -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 shadow-sm relative">
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
