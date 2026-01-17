import { useState } from "react";
import { X, Plus, Trash2, Users, User, Mail, Phone, Briefcase, Github, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TeamMember {
    id: string;
    name: string;
    email: string;
    role: string;
    github?: string;
}

interface RegistrationFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const RegistrationForm = ({ isOpen, onClose }: RegistrationFormProps) => {
    const [teamName, setTeamName] = useState("");
    const [projectIdea, setProjectIdea] = useState("");
    const [projectTrack, setProjectTrack] = useState("");
    const [registrationType, setRegistrationType] = useState<'individual' | 'team'>('team');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [members, setMembers] = useState<TeamMember[]>([
        { id: "1", name: "", email: "", role: "Leader" },
    ]);

    // REPLACE WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE";


    const addMember = () => {
        if (members.length < 4) {
            setMembers([
                ...members,
                { id: Math.random().toString(), name: "", email: "", role: "Member" },
            ]);
        }
    };

    const removeMember = (id: string) => {
        if (members.length > 1) {
            setMembers(members.filter((m) => m.id !== id));
        }
    };

    const updateMember = (id: string, field: keyof TeamMember, value: string) => {
        setMembers(
            members.map((m) => (m.id === id ? { ...m, [field]: value } : m))
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE") {
            alert("Please set up the Google Sheet script first! See the instructions.");
            console.error("Google Script URL is not set.");
            return;
        }

        setIsSubmitting(true);

        const formData = {
            registrationType,
            teamName: registrationType === 'team' ? teamName : undefined,
            projectTrack,
            projectIdea,
            members,
            submittedAt: new Date().toISOString(),
        };

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Important for Google Apps Script
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            console.log("Registration Data Submitted:", formData);
            alert("Registration successful! Welcome to CodeKar.");
            onClose();
        } catch (error) {
            console.error("Error submitting form", error);
            alert("There was an error submitting your registration. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-card border border-primary/20 rounded-xl shadow-2xl shadow-primary/10 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-primary/10 bg-card/50">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground">
                                    Register for <span className="text-primary">CodeKar</span>
                                </h2>
                                <p className="text-muted-foreground text-sm mt-1">
                                    Join the innovation hackathon
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-8 max-h-[80vh] overflow-y-auto custom-scrollbar">

                            {/* Registration Type Toggle */}
                            <div className="flex bg-muted/20 p-1 rounded-lg border border-border">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setRegistrationType('individual');
                                        setMembers([{ id: "1", name: "", email: "", role: "Individual" }]);
                                    }}
                                    className={cn(
                                        "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                                        registrationType === 'individual'
                                            ? "bg-primary text-primary-foreground shadow-lg"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    Individual
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setRegistrationType('team');
                                        setMembers([{ id: "1", name: "", email: "", role: "Leader" }]);
                                    }}
                                    className={cn(
                                        "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                                        registrationType === 'team'
                                            ? "bg-primary text-primary-foreground shadow-lg"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    Team
                                </button>
                            </div>

                            {/* Project/Team Info */}
                            <section className="space-y-4">
                                <div className="flex items-center gap-2 text-primary mb-4">
                                    <Briefcase size={20} />
                                    <h3 className="font-semibold uppercase tracking-wider text-sm">
                                        {registrationType === 'team' ? 'Team Details' : 'Project Details'}
                                    </h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {registrationType === 'team' && (
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground">Team Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={teamName}
                                                onChange={(e) => setTeamName(e.target.value)}
                                                className="w-full bg-muted/10 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                                                placeholder="e.g. Binary Bandits"
                                            />
                                        </div>
                                    )}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">Project Track</label>
                                        <select
                                            required
                                            value={projectTrack}
                                            onChange={(e) => setProjectTrack(e.target.value)}
                                            className="w-full bg-muted/10 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                        >
                                            <option value="" disabled>Select a track</option>
                                            <option value="web3">Web3 & Blockchain</option>
                                            <option value="ai">AI & Machine Learning</option>
                                            <option value="fintech">FinTech</option>
                                            <option value="health">HealthTech</option>
                                            <option value="open">Open Innovation</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Project Idea (Brief)</label>
                                    <textarea
                                        required
                                        value={projectIdea}
                                        onChange={(e) => setProjectIdea(e.target.value)}
                                        className="w-full bg-muted/10 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors min-h-[80px] placeholder:text-muted-foreground/50"
                                        placeholder="Describe what you plan to build..."
                                    />
                                </div>
                            </section>

                            <div className="h-px bg-border" />

                            {/* Members */}
                            <section className="space-y-6">
                                <div className="flex items-center justify-between text-primary mb-4">
                                    <div className="flex items-center gap-2">
                                        <Users size={20} />
                                        <h3 className="font-semibold uppercase tracking-wider text-sm">
                                            {registrationType === 'team' ? 'Team Members' : 'Participant Details'}
                                        </h3>
                                    </div>
                                    {registrationType === 'team' && (
                                        <span className="text-xs text-muted-foreground bg-muted/20 px-3 py-1 rounded-full border border-border">
                                            {members.length} / 4 Members
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    {members.map((member, index) => (
                                        <motion.div
                                            key={member.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="relative p-5 bg-card/50 border border-border rounded-xl hover:border-primary/30 transition-colors group"
                                        >
                                            <div className="absolute top-4 right-4 text-xs font-mono text-primary/70">
                                                {registrationType === 'individual'
                                                    ? 'INDIVIDUAL PARTICIPANT'
                                                    : (index === 0 ? "TEAM LEADER" : `MEMBER ${index + 1}`)
                                                }
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4 mt-2">
                                                <div className="space-y-1">
                                                    <label className="text-xs text-muted-foreground">Full Name</label>
                                                    <div className="relative">
                                                        <User className="absolute left-3 top-3 text-muted-foreground" size={16} />
                                                        <input
                                                            required
                                                            type="text"
                                                            value={member.name}
                                                            onChange={(e) => updateMember(member.id, "name", e.target.value)}
                                                            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                                                            placeholder="John Doe"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-1">
                                                    <label className="text-xs text-muted-foreground">Email Address</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-3 top-3 text-muted-foreground" size={16} />
                                                        <input
                                                            required
                                                            type="email"
                                                            value={member.email}
                                                            onChange={(e) => updateMember(member.id, "email", e.target.value)}
                                                            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                                                            placeholder="john@example.com"
                                                        />
                                                    </div>
                                                </div>

                                                {index === 0 && (
                                                    <div className="space-y-1 md:col-span-2">
                                                        <label className="text-xs text-muted-foreground">GitHub / Project Drive Link</label>
                                                        <div className="relative">
                                                            <Github className="absolute left-3 top-3 text-muted-foreground" size={16} />
                                                            <input
                                                                required
                                                                type="url"
                                                                value={member.github || ""}
                                                                onChange={(e) => updateMember(member.id, "github", e.target.value)}
                                                                className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                                                                placeholder="https://github.com/... or Drive Link"
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {index !== 0 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeMember(member.id)}
                                                    className="absolute -right-2 -top-2 p-1.5 bg-[#ef4444] text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                {registrationType === 'team' && members.length < 4 && (
                                    <button
                                        type="button"
                                        onClick={addMember}
                                        className="w-full py-3 border-2 border-dashed border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-center gap-2 font-medium"
                                    >
                                        <Plus size={18} />
                                        Add Team Member
                                    </button>
                                )}
                            </section>

                            {/* Submit */}
                            <div className="pt-4 border-t border-border">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 rounded-lg shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Registering..." : "Confirm Registration"}
                                </Button>
                                <p className="text-center text-muted-foreground text-xs mt-3">
                                    By registering, you agree to our Code of Conduct and Terms.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
