
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: string;
    trendUp?: boolean;
    description?: string;
    className?: string;
}

export function StatsCard({ title, value, icon: Icon, trend, trendUp, description, className }: StatsCardProps) {
    return (
        <Card hoverEffect className={cn("p-6", className)}>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
                <div className="p-2 bg-primary/10 rounded-full">
                    <Icon className="w-4 h-4 text-primary" />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-2xl font-bold text-foreground">{value}</div>
                {(trend || description) && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                        {trend && (
                            <span className={cn("font-medium", trendUp ? "text-green-500" : "text-red-500")}>
                                {trend}
                            </span>
                        )}
                        {description}
                    </p>
                )}
            </div>
        </Card>
    );
}
