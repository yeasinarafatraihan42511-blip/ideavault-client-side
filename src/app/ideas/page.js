// import IdeasCard from "@/components/IdeaCard";
// import IdeaCard from "@/components/IdeaCard";


// const ideaPage = async () => {
//     const res = await fetch('https://idea-vault-server-side-ten.vercel.app/ideas');
//     const ideas = await res.json();
//     console.log(ideas);
//     return (
//         <div>
//            <h1>Browse Ideas</h1>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5 mb-10">
//                 {
                   
//                    ideas.map(idea => (
//                     <IdeaCard key={idea._id} idea={idea}/>
//                    ))
//                 }
//               </div>
//         </div>
//     );
// };

// export default ideaPage;
// import IdeaCard from "@/components/IdeaCard";

// const IdeaPage = async () => {
//   const res = await fetch("https://idea-vault-server-side-ten.vercel.app/ideas", {
//     cache: "no-store",
//   });

//   const ideas = await res.json();

//   return (
//     <div className="max-w-7xl mx-auto px-5 py-10">
//       <h1 className="text-4xl font-bold mb-10">
//         Browse Ideas
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//         {ideas.map((idea) => (
//           <IdeaCard
//             key={idea._id}
//             idea={idea}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IdeaPage;
"use client";

import { useEffect, useMemo, useState } from "react";
import IdeaCard from "@/components/IdeaCard";

const categories = [
  "All",
  "Tech",
  "AI",
  "Health",
  "Education",
  "Business",
  "Finance",
];

export default function IdeaPage() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  useEffect(() => {
    const loadIdeas = async () => {
      try {
        const res = await fetch("https://idea-vault-server-side-ten.vercel.app/ideas", {
          cache: "no-store",
        });

        const data = await res.json();
        setIdeas(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadIdeas();
  }, []);

  const filteredIdeas = useMemo(() => {
    let data = [...ideas];

    // Search
    if (search.trim()) {
      data = data.filter((idea) =>
        idea.title?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "All") {
      data = data.filter((idea) => idea.category === category);
    }

    // Sort
    switch (sortBy) {
      case "Newest":
        data.sort(
          (a, b) =>
            new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
        );
        break;

      case "Oldest":
        data.sort(
          (a, b) =>
            new Date(a.createdAt || 0) - new Date(b.createdAt || 0)
        );
        break;

      case "A-Z":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "Z-A":
        data.sort((a, b) => b.title.localeCompare(a.title));
        break;

      default:
        break;
    }

    return data;
  }, [ideas, search, category, sortBy]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-violet-600"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">

      {/* Heading */}

      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">
          Explore Startup Ideas
        </h1>

        <p className="text-gray-500 mt-3">
          Discover innovative ideas shared by creators around the world.
        </p>
      </div>

      {/* Search & Filter */}

      <div className="bg-white shadow rounded-2xl p-5 mb-10">

        <div className="grid md:grid-cols-3 gap-5">

          {/* Search */}

          <input
            type="text"
            placeholder="🔍 Search ideas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-violet-500
            "
          />

          {/* Category */}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-violet-500
            "
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          {/* Sort */}

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-violet-500
            "
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>

        </div>

      </div>

      {/* Counter */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Browse Ideas
        </h2>

        <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold">
          {filteredIdeas.length} Ideas Found
        </span>

      </div>

      {/* No Data */}

      {filteredIdeas.length === 0 && (
        <div className="text-center py-20">

          <h2 className="text-3xl font-bold">
            No Ideas Found 😢
          </h2>

          <p className="text-gray-500 mt-3">
            Try changing the search or category.
          </p>

        </div>
      )}

      {/* Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredIdeas.map((idea) => (
          <IdeaCard
            key={idea._id}
            idea={idea}
          />
        ))}

      </div>

    </div>
  );
}