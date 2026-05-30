"use client";

import Image from "next/image";
import { useState } from "react";

const IdeaDetails = ({ idea }) => {

  const [comments, setComments] = useState([
    {
      name: "Mahmudul Hasan Nirab",
      text: "Excellent startup concept.",
      date: "May 19, 2026",
    },
    {
      name: "MD Kudrot",
      text: "Interesting idea.",
      date: "May 19, 2026",
    },
  ]);

  const handleComment = (e) => {

    e.preventDefault();

    const text = e.target.comment.value;

    if (!text) return;

    const newComment = {
      name: "Yeasin",
      text,
      date: new Date().toLocaleDateString(),
    };

    setComments([newComment, ...comments]);

    e.target.reset();
  };

  return (
    <div className="max-w-5xl mx-auto px-5 py-10">

      {/* Idea Card */}

      <div className="bg-white rounded-2xl shadow border p-5">

        <Image
          src={
            idea?.image?.trim()?.startsWith("http")
              ? idea.image.trim()
              : "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
          }
          alt={idea.title}
          width={1200}
          height={500}
          className="w-full h-[350px] object-cover rounded-xl"
        />

        <div className="mt-5">

          <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-xs">
            {idea.category}
          </span>

          <h1 className="text-4xl font-bold mt-4">
            {idea.title}
          </h1>

          <div className="flex items-center gap-3 mt-4">

            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
              {idea?.userName?.charAt(0) || "U"}
            </div>

            <div>
              <h3 className="font-medium">
                {idea.userName || "Anonymous"}
              </h3>

              <p className="text-sm text-gray-500">
                May 19, 2026
              </p>
            </div>

          </div>

          <p className="mt-6 text-gray-600">
            {idea.shortDescription}
          </p>

          <div className="mt-5">
            <span className="bg-gray-100 px-3 py-1 rounded text-xs">
              {idea.tags}
            </span>
          </div>

          <hr className="my-6" />

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <h4 className="font-semibold mb-2">
                Target Audience
              </h4>

              <p>
                {idea.audience}
              </p>

            </div>

            <div>

              <h4 className="font-semibold mb-2">
                Budget
              </h4>

              <p>
                {idea.budget}
              </p>

            </div>

          </div>

          <div className="mt-6">

            <h4 className="font-semibold mb-2">
              Problem Statement
            </h4>

            <p>
              {idea.problem}
            </p>

          </div>

          <div className="mt-6">

            <h4 className="font-semibold mb-2">
              Proposed Solution
            </h4>

            <p>
              {idea.solution}
            </p>

          </div>

          <div className="mt-6">

            <h4 className="font-semibold mb-2">
              Detailed Description
            </h4>

            <p>
              {idea.detailedDescription}
            </p>

          </div>

        </div>

      </div>

      {/* Comments */}

      <div className="bg-white rounded-2xl shadow border p-5 mt-8">

        <h2 className="text-xl font-bold mb-5">
          Comments ({comments.length})
        </h2>

        <form onSubmit={handleComment}>

          <textarea
            name="comment"
            placeholder="Add your comment..."
            rows={4}
            className="
              w-full
              border
              rounded-lg
              p-3
              outline-none
            "
          />

          <button
            type="submit"
            className="
              mt-3
              bg-violet-600
              text-white
              px-5
              py-2
              rounded-lg
            "
          >
            Post Comment
          </button>

        </form>

        <div className="mt-6 space-y-4">

          {comments.map((comment, index) => (

            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg"
            >

              <h3 className="font-semibold">
                {comment.name}
              </h3>

              <p className="text-sm text-gray-500">
                {comment.date}
              </p>

              <p className="mt-2">
                {comment.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default IdeaDetails;