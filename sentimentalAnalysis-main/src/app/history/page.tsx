"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Search, Filter, Download, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const historyData = [
    { id: 1, policy: "Urban Traffic Congestion Tax", sentiment: "Negative", confidence: 82, date: "2024-02-19", author: "Admin" },
    { id: 2, policy: "Green Energy Subsidies 2026", sentiment: "Yes", confidence: 94, date: "2024-02-18", author: "J. Doe" },
    { id: 3, policy: "Digital Health Records Act", sentiment: "Neutral", confidence: 65, date: "2024-02-18", author: "K. Smith" },
    { id: 4, policy: "Public Park Renovation Fund", sentiment: "Yes", confidence: 88, date: "2024-02-17", author: "Admin" },
    { id: 5, policy: "Downtown Noise Ordinance", sentiment: "No", confidence: 76, date: "2024-02-16", author: "M. Jones" },
    { id: 6, policy: "Single-Use Plastic Ban Update", sentiment: "Yes", confidence: 91, date: "2024-02-15", author: "Admin" },
    { id: 7, policy: "AI Ethics Committee Formation", sentiment: "Neutral", confidence: 58, date: "2024-02-14", author: "J. Doe" },
];

export default function HistoryPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredData = historyData.filter(item => {
        const matchesSearch = item.policy.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === "All" || item.sentiment === filter || (filter === "Negative" && item.sentiment === "No") || (filter === "Positive" && item.sentiment === "Yes");
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="p-6 md:p-8 h-full overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Analysis History</h1>
                        <p className="text-secondary-foreground font-light mt-1">Archive of all policy evaluations and sentiment trends.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border hover:bg-muted text-foreground rounded-xl transition-all duration-200 shadow-sm font-medium">
                            <Download className="w-4 h-4 text-primary" /> Export CSV
                        </button>
                    </div>
                </div>

                <div className="glass-card rounded-2xl shadow-lg border border-border overflow-hidden">
                    {/* Toolbar */}
                    <div className="p-5 border-b border-border/40 flex flex-col sm:flex-row gap-4 justify-between items-center bg-card/50">
                        <div className="relative w-full sm:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-foreground" />
                            <Input
                                placeholder="Search policies..."
                                className="pl-10 bg-background/50 border-border h-10 rounded-xl focus:ring-primary"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <div className="flex items-center gap-2 bg-background/50 border border-border rounded-xl px-3 h-10">
                                <Filter className="w-4 h-4 text-secondary-foreground" />
                                <select
                                    className="bg-transparent text-sm text-foreground focus:outline-none min-w-[140px] cursor-pointer"
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                >
                                    <option value="All" className="bg-card">All Sentiments</option>
                                    <option value="Yes" className="bg-card">Positive</option>
                                    <option value="Negative" className="bg-card">Negative</option>
                                    <option value="Neutral" className="bg-card">Neutral</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-secondary-foreground uppercase bg-muted/20 font-semibold border-b border-border/40 tracking-wider">
                                <tr>
                                    <th className="px-6 py-5">Policy Title</th>
                                    <th className="px-6 py-5">Date</th>
                                    <th className="px-6 py-5">Sentiment</th>
                                    <th className="px-6 py-5">Confidence</th>
                                    <th className="px-6 py-5">Author</th>
                                    <th className="px-6 py-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/20">
                                {filteredData.length > 0 ? (
                                    filteredData.map((item, index) => (
                                        <tr key={item.id} className={cn(
                                            "hover:bg-primary/5 transition-colors group",
                                            index % 2 === 0 ? "bg-transparent" : "bg-muted/10"
                                        )}>
                                            <td className="px-6 py-4 font-medium text-foreground">{item.policy}</td>
                                            <td className="px-6 py-4 text-secondary-foreground">{item.date}</td>
                                            <td className="px-6 py-4">
                                                <Badge variant={
                                                    (item.sentiment === "Yes" || item.sentiment === "Positive") ? "success" :
                                                    (item.sentiment === "No" || item.sentiment === "Negative") ? "danger" :
                                                    "warning"
                                                }>
                                                    {item.sentiment === "Yes" ? "Positive" : item.sentiment === "No" ? "Negative" : item.sentiment}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                                                        <div 
                                                            className={cn("h-full rounded-full", item.confidence > 80 ? "bg-success" : item.confidence > 60 ? "bg-warning" : "bg-destructive")}
                                                            style={{ width: `${item.confidence}%` }}
                                                        />
                                                    </div>
                                                    <span className="font-medium text-xs text-secondary-foreground">
                                                        {item.confidence}%
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-secondary-foreground">{item.author}</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="p-2 text-secondary-foreground hover:text-primary hover:bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                                                    <MoreHorizontal className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-16 text-center">
                                            <div className="flex flex-col items-center gap-2 text-secondary-foreground">
                                                <Filter className="w-8 h-8 opacity-20 mb-2" />
                                                <p>No policies found matching your criteria.</p>
                                                <button 
                                                    onClick={() => {setSearchTerm(""); setFilter("All");}}
                                                    className="text-primary hover:underline text-sm mt-1"
                                                >
                                                    Clear filters
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-4 border-t border-border/40 flex items-center justify-between text-sm text-secondary-foreground bg-card/30">
                        <span>Showing <span className="font-medium text-foreground">{filteredData.length}</span> entries</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 rounded-lg border border-border text-secondary-foreground hover:bg-muted hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>Prev</button>
                            <button className="px-3 py-1.5 rounded-lg border border-border text-secondary-foreground hover:bg-muted hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>Next</button>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
