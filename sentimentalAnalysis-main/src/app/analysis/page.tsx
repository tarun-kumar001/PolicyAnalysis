"use client";

import { useState } from "react";
import { PolicyInput } from "@/components/analysis/PolicyInput";
import { SentimentResult } from "@/components/analysis/SentimentResult";
import { motion } from "framer-motion";

export default function AnalysisPage() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async (text: string) => {
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch("/api/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });

            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error("Analysis failed", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 md:p-8 h-full overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-foreground">New Policy Analysis</h1>
                        <p className="text-secondary-foreground mt-2 font-light">
                            Paste the full text of the proposed legislation or upload a file to predict public sentiment impact.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl shadow-lg border border-border p-6 md:p-8 mb-8">
                        <PolicyInput onAnalyze={handleAnalyze} isLoading={loading} />
                    </div>

                    <SentimentResult result={result} />

                </motion.div>
            </div>
        </div>
    );
}
