"use client";

import { authClient } from "@/lib/auth-client";
import MyIdeaCard from "@/components/MyIdeaCard";

import { useEffect, useState } from "react";

export default function MyIdeas() {

    const { data: session } = authClient.useSession();

    const [ideas, setIdeas] = useState([]);

    useEffect(() => {

        if (session?.user?.email) {

            fetch(`https://ideavault-snowy.vercel.app/my-ideas/${session.user.email}`)

                .then(res => res.json())

                .then(data => setIdeas(data));

        }

    }, [session]);

    return (

        <div className="max-w-7xl mx-auto py-10 px-5">

            <h1 className="text-4xl font-bold mb-8">

                My Ideas ({ideas.length})

            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {

                    ideas.map(idea =>

                        <MyIdeaCard

                            key={idea._id}

                            idea={idea}

                            setIdeas={setIdeas}

                            ideas={ideas}

                        />

                    )

                }

            </div>

        </div>

    )

}