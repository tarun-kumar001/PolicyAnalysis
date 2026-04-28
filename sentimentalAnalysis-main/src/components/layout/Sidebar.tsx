"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, LayoutDashboard, History, FileText, Settings, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    const links = [
        { name: "Home", href: "/", icon: Home },
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "New Analysis", href: "/analysis", icon: FileText },
        { name: "History", href: "/history", icon: History },
    ];

    return (
        <motion.aside
            className={cn(
                "glass-card border-r border-border h-[calc(100vh-4rem)] sticky top-16 hidden md:flex flex-col transition-all duration-300 z-40",
                collapsed ? "w-20" : "w-64"
            )}
            initial={false}
            animate={{ width: collapsed ? 80 : 256 }}
        >
            <div className="flex-1 py-6 flex flex-col gap-2 overflow-y-auto">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 mx-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                    : "text-secondary-foreground hover:bg-muted hover:text-foreground",
                                collapsed && "justify-center px-2 mx-2"
                            )}
                        >
                            <Icon className={cn("w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110", isActive ? "text-white" : "")} />
                            {!collapsed && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="whitespace-nowrap font-medium"
                                >
                                    {link.name}
                                </motion.span>
                            )}
                        </Link>
                    );
                })}
            </div>

            <div className="p-4 border-t border-border">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="w-full flex items-center justify-center p-2 mb-2 text-secondary-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors"
                >
                    {collapsed ? <ChevronRight className="w-5 h-5" /> : <div className="flex items-center gap-2"><ChevronLeft className="w-5 h-5" /> <span className="font-medium text-sm">Collapse</span></div>}
                </button>

                <button className={cn(
                    "flex items-center gap-3 w-full px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors group",
                    collapsed && "justify-center px-2"
                )}>
                    <LogOut className="w-5 h-5 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                    {!collapsed && (
                        <span className="font-medium">Logout</span>
                    )}
                </button>
            </div>
        </motion.aside>
    );
}
