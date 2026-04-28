
"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card } from "@/components/ui/Card";

const data = [
    { name: 'Positive', value: 45, color: '#10B981' }, // Green
    { name: 'Negative', value: 30, color: '#EF4444' }, // Red
    { name: 'Neutral', value: 25, color: '#F59E0B' }, // Amber
];

export function SentimentChart() {
    return (
        <Card className="p-6 h-[400px]">
            <h3 className="text-lg font-semibold text-foreground mb-4">Overall Sentiment Distribution</h3>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--card)', borderRadius: '8px', border: '1px solid var(--border)' }}
                            itemStyle={{ color: 'var(--foreground)' }}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
