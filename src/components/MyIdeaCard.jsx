"use client";

import Link from "next/link";

export default function MyIdeaCard({

    idea,

    ideas,

    setIdeas

}) {

    const handleDelete = async () => {

        if (!confirm("Delete this idea?")) return;

        await fetch(

            `https://ideavault-snowy.vercel.app/ideas/${idea._id}`,

            {

                method: "DELETE"

            }

        );

        setIdeas(

            ideas.filter(

                i => i._id !== idea._id

            )

        );

    }

    return (

        <div className="bg-white rounded-2xl shadow border overflow-hidden">

            <img

                src={idea.image}

                className="w-full h-48 object-cover"

            />

            <div className="p-5">

                <h2 className="font-bold text-xl">

                    {idea.title}

                </h2>

                <p className="text-gray-500 line-clamp-2 mt-2">

                    {idea.shortDescription}

                </p>

                <div className="flex gap-2 mt-5">

                    <Link

                        href={`/ideas/${idea._id}`}

                        className="bg-violet-600 text-white px-4 py-2 rounded-lg"

                    >

                        Details

                    </Link>

                    <Link

                        href={`/ideas/${idea._id}/edit`}

                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"

                    >

                        Update

                    </Link>

                    <button

                        onClick={handleDelete}

                        className="bg-red-600 text-white px-4 py-2 rounded-lg"

                    >

                        Delete

                    </button>

                </div>

            </div>

        </div>

    )

}