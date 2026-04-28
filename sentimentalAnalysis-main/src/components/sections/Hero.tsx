"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Database, LineChart, ShieldCheck } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 hero-gradient min-h-[90vh] flex flex-col justify-center">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side: Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-semibold mb-8 backdrop-blur-md">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                            </span>
                            PolicyAnalysis Core Beta v2.0
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                            AI-Powered <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Policy Sentiment
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                            Analyze proposed policies against public sentiment in real-time. Make data-driven decisions with impact forecasting and civic data integration.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                            <Link href="/analysis" className="group">
                                <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
                                    Start Analysis
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href="/dashboard">
                                <button className="w-full sm:w-auto px-8 py-4 bg-card hover:bg-card/80 text-foreground border border-border rounded-xl font-medium transition-all duration-300 flex items-center justify-center hover:-translate-y-1">
                                    View Dashboard
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Side: Graphic/Illustration */}
                    <motion.div
                        className="flex-1 w-full max-w-lg lg:max-w-none relative"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative z-10 glass-card rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Live Analysis Overview</h3>
                                    <p className="text-sm text-secondary-foreground/60">Real-time civic impact</p>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                    <ShieldCheck className="w-5 h-5 text-primary" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-background/50 border border-white/5 flex items-center gap-4 hover:bg-background/80 transition-colors cursor-pointer">
                                    <div className="p-3 bg-primary/20 rounded-lg">
                                        <Activity className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Real-time Sentiment</h4>
                                        <p className="text-sm text-secondary-foreground/60">Instant public reaction metrics</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-background/50 border border-white/5 flex items-center gap-4 hover:bg-background/80 transition-colors cursor-pointer">
                                    <div className="p-3 bg-success/20 rounded-lg">
                                        <Database className="w-6 h-6 text-success" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Civic Data Trained</h4>
                                        <p className="text-sm text-secondary-foreground/60">Models trained on localized data</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-background/50 border border-white/5 flex items-center gap-4 hover:bg-background/80 transition-colors cursor-pointer">
                                    <div className="p-3 bg-warning/20 rounded-lg">
                                        <LineChart className="w-6 h-6 text-warning" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Impact Forecasting</h4>
                                        <p className="text-sm text-secondary-foreground/60">Predictive legislative outcomes</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative blur elements */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/30 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
