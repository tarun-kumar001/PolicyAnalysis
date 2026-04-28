
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, AlertTriangle, Scale, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SentimentResultProps {
    result: {
        sentiment: string;
        confidence: number;
        explanation: string;
    } | null;
}

export function SentimentResult({ result }: SentimentResultProps) {
    if (!result) return null;

    const isYes = result.sentiment.toLowerCase() === "yes";
    const isNo = result.sentiment.toLowerCase() === "no";
    const isNeutral = result.sentiment.toLowerCase() === "neutral";

    let statusColor = "text-gray-500";
    let bgGlow = "shadow-gray-500/20";
    let Icon = Scale;
    let badgeVariant: "success" | "danger" | "warning" = "warning";

    if (isYes) {
        statusColor = "text-green-500";
        bgGlow = "shadow-green-500/20";
        Icon = CheckCircle2;
        badgeVariant = "success";
    } else if (isNo) {
        statusColor = "text-red-500";
        bgGlow = "shadow-red-500/20";
        Icon = XCircle;
        badgeVariant = "danger";
    } else {
        statusColor = "text-amber-500";
        bgGlow = "shadow-amber-500/20";
        Icon = Scale;
        badgeVariant = "warning";
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mt-8"
        >
            <Card className={cn("p-8 border-t-4 shadow-xl", bgGlow,
                isYes ? "border-t-green-500" : isNo ? "border-t-red-500" : "border-t-amber-500"
            )}>
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Icon className={cn("w-8 h-8", statusColor)} />
                            <h2 className="text-2xl font-bold text-foreground">Analysis Result</h2>
                        </div>

                        <div className="mb-6">
                            <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Predicted Sentiment</span>
                            <div className="flex items-center gap-4 mt-1">
                                <span className={cn("text-4xl font-extrabold", statusColor)}>
                                    {result.sentiment.toUpperCase()}
                                </span>
                                <Badge variant={badgeVariant} className="text-sm px-3 py-1">
                                    {result.confidence}% Confidence
                                </Badge>
                            </div>
                        </div>

                        <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                            <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-primary" /> AI Explanation
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                "{result.explanation}"
                            </p>
                        </div>
                    </div>

                    {/* Visualization Placeholder / Confidence Meter */}
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-4 bg-muted/10 rounded-xl border border-border/30">
                        {/* Simple Circular Progress fallback if chart lib fails or for simplicity */}
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle className="text-muted stroke-current" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent"></circle>
                                <motion.circle
                                    className={cn("progress-ring__circle stroke-current", statusColor)}
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    strokeDasharray="251.2"
                                    strokeDashoffset="251.2"
                                    initial={{ strokeDashoffset: 251.2 }}
                                    animate={{ strokeDashoffset: 251.2 - (251.2 * result.confidence) / 100 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    transform="rotate(-90 50 50)"
                                ></motion.circle>
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-2xl font-bold">{result.confidence}%</span>
                                <span className="text-[10px] text-muted-foreground uppercase">Confidence</span>
                            </div>
                        </div>
                        <p className="text-xs text-center text-muted-foreground mt-4">
                            Based on {Math.floor(Math.random() * 5000) + 1000} simulated data points
                        </p>
                    </div>

                </div>
            </Card>
        </motion.div>
    );
}
