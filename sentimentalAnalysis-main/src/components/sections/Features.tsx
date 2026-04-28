
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { BrainCircuit, LineChart, Lock, Zap } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Real-Time Sentiment Analysis",
        description: "Instant AI-powered analysis of policy drafts to predict public reaction before release.",
    },
    {
        icon: BrainCircuit,
        title: "Trained on Civic Data",
        description: "Our models are specifically fine-tuned on government documents and public discourse datasets.",
    },
    {
        icon: LineChart,
        title: "Impact Forecasting",
        description: "Visualize potential societal impact with predictive confidence modeling and trend analysis.",
    },
    {
        icon: Lock,
        title: "Secure &amp; Confidential",
        description: "Enterprise-grade security ensures your sensitive policy drafts remain private and protected.",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">Core Capabilities</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
                        Smarter Tools for Modern Governance
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto">
                        Leverage cutting-edge technology to bridge the gap between policy creation and public expectation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card hoverEffect className="p-6 h-full border-t-4 border-t-transparent hover:border-t-secondary transition-all">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
