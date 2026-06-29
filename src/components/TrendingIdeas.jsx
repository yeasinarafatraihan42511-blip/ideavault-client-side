"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
    ArrowRight,
    Calendar,
    Lightbulb,
    User,
    Tag,
} from "lucide-react";

export default function TrendingIdeas() {
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/trending-ideas`)
            .then((res) => res.json())
            .then((data) => {
                setIdeas(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">

                        <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
                            Trending Ideas
                        </span>

                        <h2 className="mt-5 text-5xl font-black">
                            Latest Creative Ideas
                        </h2>

                        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                            Explore the newest innovative ideas shared by our amazing community.
                        </p>

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="rounded-3xl border bg-white p-6 animate-pulse"
                            >

                                <div className="h-56 rounded-2xl bg-slate-200"></div>

                                <div className="h-7 bg-slate-200 rounded mt-6"></div>

                                <div className="h-5 bg-slate-200 rounded mt-4"></div>

                                <div className="h-5 bg-slate-200 rounded mt-3 w-2/3"></div>

                                <div className="flex gap-3 mt-8">

                                    <div className="h-12 flex-1 rounded-xl bg-slate-200"></div>

                                    <div className="h-12 w-12 rounded-xl bg-slate-200"></div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>
        );
    }

    return (
        <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-slate-50 to-white">

            {/* Blur Background */}

            <div className="absolute inset-0 -z-10">

                <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[120px]" />

                <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-200/30 blur-[120px]" />

            </div>

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="text-center mb-16"
                >

                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">

                        <Lightbulb size={18} />

                        Trending Ideas

                    </span>

                    <h2 className="mt-6 text-5xl font-black">
                        Fresh Ideas From Our Community
                    </h2>

                    <p className="mt-5 text-slate-500 max-w-2xl mx-auto text-lg leading-8">
                        Discover the newest startup concepts, business innovations,
                        creative projects and technology ideas shared by our talented members.
                    </p>

                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {ideas.map((idea, index) => (
                        <motion.div
                            key={idea._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            whileHover={{ y: -8 }}
                            className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >

                            {/* Top Image */}

                            <div className="relative h-60 overflow-hidden">

                                <Image
                                    src={
                                        idea.image?.startsWith("http")
                                            ? idea.image
                                            : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"
                                    }
                                    alt={idea.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                <span className="absolute top-5 left-5 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-sm font-semibold text-blue-700 shadow">

                                    {idea.category}

                                </span>

                            </div>

                            <div className="p-7">

                                <h3 className="text-2xl font-bold text-slate-800 line-clamp-2 group-hover:text-blue-600 transition">

                                    {idea.title}

                                </h3>

                                <p className="mt-4 text-slate-500 line-clamp-3 leading-7">

                                    {idea.shortDescription}

                                </p>

                                <div className="mt-7 space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-slate-600">

                                        <div className="flex items-center gap-2">

                                            <User size={17} className="text-blue-600" />

                                            <span className="font-medium">
                                                {idea.userName}
                                            </span>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-slate-600">

                                        <Calendar size={17} className="text-green-600" />

                                        <span>
                                            {new Date(
                                                idea.createdAt
                                            ).toLocaleDateString()}
                                        </span>

                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-slate-600">

                                        <Tag size={17} className="text-orange-500" />

                                        <span className="line-clamp-1">
                                            {idea.tags || "General"}
                                        </span>

                                    </div>

                                </div>

                                {/* Button */}

                                <div className="mt-8">

                                    <Link
                                        href={`/ideas/${idea._id}`}
                                        className="group/button inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-blue-300 hover:scale-[1.02]"
                                    >

                                        View Details

                                        <ArrowRight
                                            size={18}
                                            className="transition group-hover/button:translate-x-1"
                                        />

                                    </Link>

                                </div>

                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}

                {ideas.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-16 rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center"
                    >
                        <Lightbulb
                            size={70}
                            className="mx-auto text-slate-300"
                        />

                        <h3 className="mt-6 text-3xl font-bold text-slate-700">
                            No Trending Ideas Found
                        </h3>

                        <p className="mt-3 text-slate-500 max-w-lg mx-auto">
                            There are no ideas available right now.
                            Be the first one to share your amazing idea.
                        </p>

                        <Link
                            href="/add-idea"
                            className="inline-flex mt-8 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
                        >
                            Share Your Idea
                        </Link>
                    </motion.div>
                )}

                {/* Bottom CTA */}

                {ideas.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                        className="text-center mt-20"
                    >
                        <Link
                            href="/ideas"
                            className="inline-flex items-center gap-3 rounded-2xl border border-blue-200 bg-white px-8 py-4 font-semibold text-blue-700 shadow hover:shadow-xl transition hover:-translate-y-1"
                        >
                            Browse All Ideas

                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                )}

            </div>
        </section>
    );
}
