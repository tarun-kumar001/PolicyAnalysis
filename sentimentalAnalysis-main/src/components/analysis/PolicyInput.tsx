"use client";

import { useState, useRef } from "react";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { UploadCloud, FileText, RotateCcw, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface PolicyInputProps {
    onAnalyze: (text: string) => void;
    isLoading: boolean;
}

export function PolicyInput({ onAnalyze, isLoading }: PolicyInputProps) {
    const [text, setText] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const processFile = async (file: File) => {
        if (!file) return;
        
        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append("file", file);
            
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            
            if (!response.ok) {
                throw new Error("Failed to parse file");
            }
            
            const data = await response.json();
            if (data.text) {
                setText(data.text);
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error uploading or parsing the file. Please ensure it is a valid PDF, DOCX, or TXT file.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            processFile(e.target.files[0]);
            e.target.value = '';
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            processFile(e.dataTransfer.files[0]);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    Policy / Law Text
                </label>
                <span className="text-xs font-medium text-secondary-foreground">
                    {text.length} characters
                </span>
            </div>

            <div 
                className={cn(
                    "relative group rounded-xl overflow-hidden border-2 transition-all duration-300",
                    isDragging ? "border-primary bg-primary/5" : "border-border bg-background/50",
                    "focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10"
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <Textarea
                    placeholder="Paste your policy text here (e.g., 'New traffic regulation law...')"
                    className="min-h-[240px] text-base p-6 bg-transparent border-0 focus-visible:ring-0 resize-y rounded-xl placeholder:text-secondary-foreground/50"
                    value={text}
                    onChange={handleTextChange}
                    disabled={isLoading || isUploading}
                />
                
                <AnimatePresence>
                    {isDragging && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center border-2 border-dashed border-primary rounded-xl z-10"
                        >
                            <UploadCloud className="w-12 h-12 text-primary animate-bounce mb-4" />
                            <p className="text-lg font-semibold text-primary">Drop file here to upload</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-muted/20 p-4 rounded-xl border border-border/50">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept=".txt,.md,.json,.pdf,.docx"
                        onChange={handleFileUpload}
                        disabled={isLoading || isUploading}
                    />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className={cn(
                            "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors border border-border bg-card hover:bg-muted hover:text-foreground h-10 px-4 cursor-pointer shadow-sm",
                            (isLoading || isUploading) && "opacity-50 cursor-not-allowed pointer-events-none"
                        )}
                    >
                        <UploadCloud className={cn("w-4 h-4 text-primary", isUploading && "animate-bounce")} />
                        {isUploading ? "Uploading..." : "Upload File"}
                    </button>

                    {text.length > 0 && (
                        <button 
                            onClick={() => setText("")} 
                            disabled={isLoading} 
                            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-secondary-foreground hover:text-destructive h-10 px-3 transition-colors"
                        >
                            <RotateCcw className="w-4 h-4" /> Clear
                        </button>
                    )}
                </div>

                <button
                    onClick={() => onAnalyze(text)}
                    disabled={!text.trim() || isLoading}
                    className={cn(
                        "w-full sm:w-auto min-w-[160px] h-11 px-8 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm",
                        !text.trim() || isLoading ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-primary hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
                    )}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Analyzing...
                        </>
                    ) : (
                        "Analyze Policy"
                    )}
                </button>
            </div>
        </div>
    );
}
