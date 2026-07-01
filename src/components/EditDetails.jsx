// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const IdeaDetails = ({ idea }) => {

//   const [comments, setComments] = useState([
//     {
//       name: "Mahmudul Hasan Nirab",
//       text: "Excellent startup concept.",
//       date: "May 19, 2026",
//     },
//     {
//       name: "MD Kudrot",
//       text: "Interesting idea.",
//       date: "May 19, 2026",
//     },
//   ]);

//   const handleComment = (e) => {

//     e.preventDefault();

//     const text = e.target.comment.value;

//     if (!text) return;

//     const newComment = {
//       name: "Yeasin",
//       text,
//       date: new Date().toLocaleDateString(),
//     };

//     setComments([newComment, ...comments]);

//     e.target.reset();
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-5 py-10">

//       {/* Idea Card */}

//       <div className="bg-white rounded-2xl shadow border p-5">

//         <Image
//           src={
//             idea?.image?.trim()?.startsWith("http")
//               ? idea.image.trim()
//               : "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
//           }
//           alt={idea.title}
//           width={1200}
//           height={500}
//           className="w-full h-[350px] object-cover rounded-xl"
//         />

//         <div className="mt-5">

//           <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-xs">
//             {idea.category}
//           </span>

//           <h1 className="text-4xl font-bold mt-4">
//             {idea.title}
//           </h1>

//           <div className="flex items-center gap-3 mt-4">

//             <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
//               {idea?.userName?.charAt(0) || "U"}
//             </div>

//             <div>
//               <h3 className="font-medium">
//                 {idea.userName || "Anonymous"}
//               </h3>

//               <p className="text-sm text-gray-500">
//                 May 19, 2026
//               </p>
//             </div>

//           </div>

//           <p className="mt-6 text-gray-600">
//             {idea.shortDescription}
//           </p>

//           <div className="mt-5">
//             <span className="bg-gray-100 px-3 py-1 rounded text-xs">
//               {idea.tags}
//             </span>
//           </div>

//           <hr className="my-6" />

//           <div className="grid md:grid-cols-2 gap-6">

//             <div>

//               <h4 className="font-semibold mb-2">
//                 Target Audience
//               </h4>

//               <p>
//                 {idea.audience}
//               </p>

//             </div>

//             <div>

//               <h4 className="font-semibold mb-2">
//                 Budget
//               </h4>

//               <p>
//                 {idea.budget}
//               </p>

//             </div>

//           </div>

//           <div className="mt-6">

//             <h4 className="font-semibold mb-2">
//               Problem Statement
//             </h4>

//             <p>
//               {idea.problem}
//             </p>

//           </div>

//           <div className="mt-6">

//             <h4 className="font-semibold mb-2">
//               Proposed Solution
//             </h4>

//             <p>
//               {idea.solution}
//             </p>

//           </div>

//           <div className="mt-6">

//             <h4 className="font-semibold mb-2">
//               Detailed Description
//             </h4>

//             <p>
//               {idea.detailedDescription}
//             </p>

//           </div>

//         </div>

//       </div>

//       {/* Comments */}

//       <div className="bg-white rounded-2xl shadow border p-5 mt-8">

//         <h2 className="text-xl font-bold mb-5">
//           Comments ({comments.length})
//         </h2>

//         <form onSubmit={handleComment}>

//           <textarea
//             name="comment"
//             placeholder="Add your comment..."
//             rows={4}
//             className="
//               w-full
//               border
//               rounded-lg
//               p-3
//               outline-none
//             "
//           />

//           <button
//             type="submit"
//             className="
//               mt-3
//               bg-violet-600
//               text-white
//               px-5
//               py-2
//               rounded-lg
//             "
//           >
//             Post Comment
//           </button>

//         </form>

//         <div className="mt-6 space-y-4">

//           {comments.map((comment, index) => (

//             <div
//               key={index}
//               className="bg-gray-50 p-4 rounded-lg"
//             >

//               <h3 className="font-semibold">
//                 {comment.name}
//               </h3>

//               <p className="text-sm text-gray-500">
//                 {comment.date}
//               </p>

//               <p className="mt-2">
//                 {comment.text}
//               </p>

//             </div>

//           ))}

//         </div>

//       </div>

//     </div>
//   );
// };

// export default IdeaDetails;
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Edit2, Trash2, Send } from "lucide-react";

const IdeaDetails = ({ idea }) => {
  const { data: session } = authClient.useSession();

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch(
        `https://ideavault-snowy.vercel.app/comments/${idea._id}`
      );

      const data = await res.json();

      setComments(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();

    if (!session?.user) {
      return toast.error("Please login first.");
    }

    const text = e.target.comment.value.trim();

    if (!text) {
      return toast.error("Write something first.");
    }

    const comment = {
      ideaId: idea._id,
      text,
      userName: session.user.name,
      userEmail: session.user.email,
      userPhoto: session.user.image,
      createdAt: new Date(),
    };

    try {
      const res = await fetch(
        "https://ideavault-snowy.vercel.app/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Comment Added");

        e.target.reset();

        fetchComments();
      }
    } catch (err) {
      console.log(err);

      toast.error("Failed");
    }
  };

  const handleDelete = async (id) => {

    if (!confirm("Delete this comment?")) return;

    const res = await fetch(

      `https://ideavault-snowy.vercel.app/comments/${id}`,

      {

        method: "DELETE",

      }

    );

    const data = await res.json();

    if (data.deletedCount) {

      toast.success("Comment Deleted");

      fetchComments();

    }

  };
  const handleUpdate = async (id) => {

    const res = await fetch(

      `https://ideavault-snowy.vercel.app/comments/${id}`,

      {

        method: "PATCH",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          text: editText,

        }),

      }

    );

    const data = await res.json();

    if (data.modifiedCount) {

      toast.success("Comment Updated");

      setEditingId(null);

      fetchComments();

    }

  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">

      {/* Main Card */}

      <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">

        <Image
          src={
            idea?.image?.startsWith("http")
              ? idea.image
              : "https://placehold.co/1200x600"
          }
          alt={idea.title}
          width={1200}
          height={600}
          className="w-full h-[420px] object-cover"
        />

        <div className="p-8">

          <span className="inline-block bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold">

            {idea.category}

          </span>

          <h1 className="text-4xl font-bold mt-5">

            {idea.title}

          </h1>

          <p className="mt-5 text-gray-600 leading-8">

            {idea.shortDescription}

          </p>

          <div className="mt-8 flex items-center gap-4">

            <img
              src={
                idea?.userPhoto ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  idea?.userName || "User"
                )}`
              }
              className="w-14 h-14 rounded-full object-cover border"
            />

            <div>

              <h3 className="font-bold">

                {idea.userName}

              </h3>

              <p className="text-sm text-gray-500">

                {idea.userEmail}

              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-gray-50 rounded-2xl p-5">

              <h4 className="font-bold mb-2">

                Target Audience

              </h4>

              <p>{idea.audience}</p>

            </div>

            <div className="bg-gray-50 rounded-2xl p-5">

              <h4 className="font-bold mb-2">

                Estimated Budget

              </h4>

              <p>{idea.budget}</p>

            </div>

          </div>

          <div className="mt-8">

            <h3 className="font-bold text-xl mb-3">

              Problem Statement

            </h3>

            <p className="text-gray-700 leading-8">

              {idea.problem}

            </p>

          </div>

          <div className="mt-8">

            <h3 className="font-bold text-xl mb-3">

              Proposed Solution

            </h3>

            <p className="text-gray-700 leading-8">

              {idea.solution}

            </p>

          </div>

          <div className="mt-8">

            <h3 className="font-bold text-xl mb-3">

              Detailed Description

            </h3>

            <p className="text-gray-700 leading-8">

              {idea.detailedDescription}

            </p>

          </div>

        </div>

      </div>

      {/* Comments Section */}

      <div className="bg-white rounded-3xl shadow-xl border mt-10 p-8">

        <h2 className="text-3xl font-bold mb-6">

          Comments ({comments.length})

        </h2>

        <form onSubmit={handleComment}>

          <textarea
            name="comment"
            rows={4}
            placeholder="Share your thoughts..."
            className="w-full border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-violet-500"
          />

          <button
            className="mt-5 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <Send size={18} />
            Post Comment
          </button>

        </form>
        <div className="mt-10 space-y-5">

          {loading ? (

            <div className="text-center py-10 text-gray-500">
              Loading comments...
            </div>

          ) : comments.length === 0 ? (

            <div className="text-center py-10 text-gray-500 border rounded-2xl">

              No comments yet.

            </div>

          ) : (

            comments.map((comment) => (

              <div
                key={comment._id}
                className="border rounded-2xl p-5 hover:shadow-md duration-300"
              >

                <div className="flex justify-between items-start">

                  <div className="flex items-center gap-3">

                    <img
                      src={
                        comment.userPhoto ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          comment.userName
                        )}`
                      }
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>

                      <h4 className="font-semibold">
                        {comment.userName}
                      </h4>

                      <p className="text-xs text-gray-500">
                        {new Date(
                          comment.createdAt
                        ).toLocaleString()}
                      </p>

                    </div>

                  </div>

                  {session?.user?.email === comment.userEmail && (

                    <div className="flex gap-2">

                      <button
                        onClick={() => {
                          setEditingId(comment._id);
                          setEditText(comment.text);
                        }}
                        className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200"
                      >
                        <Edit2 size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(comment._id)}
                        className="
p-2
rounded-lg
bg-red-100
hover:bg-red-200
"
                      >
                        <Trash2 size={16} />
                      </button>

                    </div>

                  )}

                </div>

                {editingId === comment._id ? (

                  <div className="mt-4">

                    <textarea
                      value={editText}
                      onChange={(e) =>
                        setEditText(e.target.value)
                      }
                      rows={3}
                      className="
                        w-full
                        border
                        rounded-xl
                        p-3
                        outline-none
                      "
                    />

                    <div className="flex gap-3 mt-3">

                      <button
                        onClick={() => handleUpdate(comment._id)}
                        className="
bg-green-600
hover:bg-green-700
text-white
px-5
py-2
rounded-lg
"
                      >

                        Save

                      </button>

                      <button
                        onClick={() =>
                          setEditingId(null)
                        }
                        className="
                          bg-gray-300
                          px-5
                          py-2
                          rounded-lg
                        "
                      >
                        Cancel
                      </button>

                    </div>

                  </div>

                ) : (

                  <p className="mt-4 leading-7 text-gray-700">

                    {comment.text}

                  </p>

                )}

              </div>

            ))

          )}

        </div>

      </div>

    </div>

  );
};

export default IdeaDetails;