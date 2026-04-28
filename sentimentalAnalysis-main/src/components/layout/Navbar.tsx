"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Bell, User } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border h-16 flex items-center px-6 transition-all duration-300">
            <div className="flex-1 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                    <span className="font-bold text-xl tracking-tight text-foreground">
                        Policy<span className="text-primary">Analysis</span>
                    </span>
                </div>

                <div className="flex items-center gap-4">
                </div>
            </div>
        </nav>
    );
}
