
"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FileText } from "lucide-react";

export function RecentActivityTable() {
    const activities = [
        { id: 1, policy: "Urban Traffic Congestion Tax", sentiment: "Negative", confidence: 82, date: "2 mins ago" },
        { id: 2, policy: "Green Energy Subsidies 2026", sentiment: "Yes", confidence: 94, date: "15 mins ago" },
        { id: 3, policy: "Digital Health Records Act", sentiment: "Neutral", confidence: 65, date: "1 hour ago" },
        { id: 4, policy: "Public Park Renovation Fund", sentiment: "Yes", confidence: 88, date: "2 hours ago" },
        { id: 5, policy: "Downtown Noise Ordinance", sentiment: "No", confidence: 76, date: "5 hours ago" },
    ];

    return (
        <Card className="p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Recent Analysis</h3>
                <button className="text-sm text-primary hover:underline">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                        <tr>
                            <th className="px-4 py-3 rounded-l-lg">Policy Title</th>
                            <th className="px-4 py-3">Sentiment</th>
                            <th className="px-4 py-3">Confidence</th>
                            <th className="px-4 py-3 rounded-r-lg">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map((item) => (
                            <tr key={item.id} className="border-b border-border/50 hover:bg-muted/10 transition-colors">
                                <td className="px-4 py-3 font-medium text-foreground flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-muted-foreground" />
                                    {item.policy}
                                </td>
                                <td className="px-4 py-3">
                                    <Badge variant={
                                        item.sentiment === "Yes" ? "success" :
                                            item.sentiment === "No" ? "danger" : "warning"
                                    }>
                                        {item.sentiment}
                                    </Badge>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="w-full bg-secondary/20 rounded-full h-1.5 max-w-[50px] inline-block mr-2 align-middle">
                                        <div className="bg-secondary h-1.5 rounded-full" style={{ width: `${item.confidence}%` }}></div>
                                    </div>
                                    {item.confidence}%
                                </td>
                                <td className="px-4 py-3 text-muted-foreground">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
