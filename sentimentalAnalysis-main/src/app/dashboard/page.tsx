"use client";

import { StatsCard } from "@/components/dashboard/StatsCard";
import { SentimentChart } from "@/components/dashboard/SentimentChart";
import { RecentActivityTable } from "@/components/dashboard/RecentActivityTable";
import { FileText, Users, ThumbsUp, ThumbsDown, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPage() {
    const stats = [
        { title: "Total Policies Analyzed", value: "1,284", icon: FileText, trend: "+12.5%", trendUp: true, description: "vs last month" },
        { title: "Positive Sentiment", value: "64%", icon: ThumbsUp, trend: "+4.2%", trendUp: true, description: "avg approval rate" },
        { title: "Negative Sentiment", value: "21%", icon: ThumbsDown, trend: "-2.1%", trendUp: true, description: "avg rejection rate" },
        { title: "Active Users", value: "342", icon: Users, trend: "+8.4%", trendUp: true, description: "this week" },
    ];

    return (
        <div className="p-6 md:p-8 h-full overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
                        <p className="text-secondary-foreground mt-1">Real-time policy sentiment analytics and trends.</p>
                    </div>
                    <div className="flex items-center text-sm font-medium text-success bg-success/10 border border-success/20 px-4 py-2 rounded-full shadow-sm">
                        <Activity className="w-4 h-4 mr-2 animate-pulse" />
                        Live Data Feed Connected
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <StatsCard key={index} {...stat} className="glass-card shadow-lg hover:-translate-y-1 transition-transform" />
                    ))}
                </div>

                {/* Charts & Table Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <RecentActivityTable />
                    </div>
                    <div className="lg:col-span-1">
                        <SentimentChart />
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
