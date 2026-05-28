"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const IdeaCard = () => {

  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("newest");

  useEffect(() => {

    const fetchIdeas = async () => {

      try {

        setLoading(true);

        const res = await fetch(
          `http://localhost:5000/ideas?search=${search}&category=${category}&sort=${sort}`
        );

        const data = await res.json();

        setIdeas(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    fetchIdeas();

  }, [search, category, sort]);

  return (

    <div className="max-w-7xl mx-auto px-5 py-14">

      {/* heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Browse Ideas
        </h1>

      </div>

      {/* filter section */}

      <div className="grid md:grid-cols-4 gap-4 mb-10">

        {/* search */}

        <input
          type="text"
          placeholder="Search ideas..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="
            border
            rounded-xl
            px-4
            py-3
            outline-none
            md:col-span-2
            w-full
          "
        />

        {/* category */}

        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="
            border
            rounded-xl
            px-4
            py-3
            outline-none
            w-full
          "
        >

          <option value="">
            All Categories
          </option>

          <option value="Tech">
            Tech
          </option>

          <option value="AI">
            AI
          </option>

          <option value="Health">
            Health
          </option>

          <option value="Education">
            Education
          </option>

          <option value="Finance">
            Finance
          </option>

        </select>

        {/* newest */}

        <select
          value={sort}
          onChange={(e)=>setSort(e.target.value)}
          className="
            border
            rounded-xl
            px-4
            py-3
            outline-none
            w-full
          "
        >

          <option value="newest">
            Newest
          </option>

          <option value="oldest">
            Oldest
          </option>

        </select>

      </div>

      {/* loading */}

      {
        loading && (

          <div className="text-center py-20">

            <span className="loading loading-spinner loading-lg"></span>

          </div>
        )
      }

      {/* empty state */}

      {
        !loading &&
        ideas.length === 0 && (

          <div className="text-center py-20">

            <h2 className="text-2xl font-semibold">
              No Ideas Found
            </h2>

          </div>
        )
      }

      {/* cards */}

      {
        !loading &&
        ideas.length > 0 && (

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

            {
              ideas.map((idea)=>(

                <div
                  key={idea._id}
                  className="
                    border
                    rounded-3xl
                    overflow-hidden
                    bg-white
                    shadow-sm
                    hover:shadow-2xl
                    duration-300
                    flex
                    flex-col
                    group
                  "
                >

                  {/* image */}

                  <div className="overflow-hidden">

                    <Image
                      alt={idea.title}
                      src={
                        idea?.image
                          ?.trim()
                          ?.startsWith("http")
                          ? idea.image.trim()
                          : "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
                      }
                      width={500}
                      height={300}
                      className="
                        h-56
                        w-full
                        object-cover
                        group-hover:scale-110
                        duration-700
                      "
                    />

                  </div>

                  {/* content */}

                  <div className="p-5 flex flex-col flex-grow">

                    {/* category */}

                    <div
                      className="
                        inline-block
                        bg-violet-100
                        text-violet-600
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        mb-4
                        w-fit
                      "
                    >
                      {idea.category || "Tech"}
                    </div>

                    {/* title */}

                    <h2 className="text-2xl font-bold mb-2 line-clamp-1">

                      {idea.title}

                    </h2>

                    {/* description */}

                    <p className="text-gray-500 line-clamp-2 flex-grow">

                      {
                        idea.shortDescription
                      }

                    </p>

                    {/* user */}

                    <div className="flex items-center gap-3 mt-5">

                      <Image
                        src={
                          idea?.userPhoto
                          ?.trim()
                          ?.startsWith("http")
                            ? idea.userPhoto.trim()
                            : "https://i.ibb.co/4pDNDk1/avatar.png"
                        }
                        alt="user"
                        width={40}
                        height={40}
                        className="
                          rounded-full
                          object-cover
                          w-10
                          h-10
                        "
                      />

                      <p className="text-sm text-gray-600">

                        {
                          idea.userName ||
                          "Anonymous User"
                        }

                      </p>

                    </div>

                    {/* button */}

                    <Link
                      href={`/ideas/${idea._id}`}
                      className="
                        mt-6
                        bg-violet-600
                        hover:bg-violet-700
                        text-white
                        py-3
                        rounded-xl
                        text-center
                        font-medium
                        duration-300
                      "
                    >
                      <button className="w-full h-full btn btn-primary">
                        View Details
                      </button>
                    </Link>

                  </div>

                </div>
              ))
            }

          </div>
        )
      }

    </div>
  );
};

export default IdeaCard;




// "use client";

// import Image from "next/image";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// const IdeasPage = () => {

//   const [ideas, setIdeas] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sort, setSort] = useState("newest");

//   useEffect(() => {

//     const fetchIdeas = async () => {

//       try {

//         setLoading(true);

//         const res = await fetch(
//           `http://localhost:5000/ideas?search=${search}&category=${category}&sort=${sort}`
//         );

//         const data = await res.json();

//         setIdeas(data);

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);

//       }
//     };

//     fetchIdeas();

//   }, [search, category, sort]);

//   return (

//     <div className="max-w-7xl mx-auto px-5 py-14">

//       {/* heading */}

//       <div className="mb-8">

//         <h1 className="text-4xl font-bold">
//           Browse Ideas
//         </h1>

//       </div>

//       {/* filters */}

//       <div className="grid md:grid-cols-4 gap-4 mb-10">

//         {/* search */}

//         <input
//           type="text"
//           placeholder="Search ideas..."
//           value={search}
//           onChange={(e)=>setSearch(e.target.value)}
//           className="
//             border
//             rounded-xl
//             px-4
//             py-3
//             outline-none
//             md:col-span-2
//           "
//         />

//         {/* category */}

//         <select
//           value={category}
//           onChange={(e)=>setCategory(e.target.value)}
//           className="
//             border
//             rounded-xl
//             px-4
//             py-3
//             outline-none
//           "
//         >

//           <option value="">
//             All Categories
//           </option>

//           <option value="Tech">
//             Tech
//           </option>

//           <option value="AI">
//             AI
//           </option>

//           <option value="Health">
//             Health
//           </option>

//           <option value="Education">
//             Education
//           </option>

//           <option value="Finance">
//             Finance
//           </option>

//         </select>

//         {/* sort */}

//         <select
//           value={sort}
//           onChange={(e)=>setSort(e.target.value)}
//           className="
//             border
//             rounded-xl
//             px-4
//             py-3
//             outline-none
//           "
//         >

//           <option value="newest">
//             Newest
//           </option>

//           <option value="oldest">
//             Oldest
//           </option>

//         </select>

//       </div>

//       {/* loading */}

//       {
//         loading && (

//           <div className="text-center py-20">

//             <span className="loading loading-spinner loading-lg"></span>

//           </div>
//         )
//       }

//       {/* empty state */}

//       {
//         !loading &&
//         ideas.length === 0 && (

//           <div className="text-center py-20">

//             <h2 className="text-2xl font-semibold">
//               No Ideas Found
//             </h2>

//           </div>
//         )
//       }

//       {/* cards */}

//       {
//         !loading && ideas.length > 0 && (

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

//             {
//               ideas.map((idea)=> (

//                 <div
//                   key={idea._id}
//                   className="
//                     border
//                     rounded-3xl
//                     overflow-hidden
//                     bg-white
//                     shadow-sm
//                     hover:shadow-xl
//                     duration-300
//                     flex
//                     flex-col
//                   "
//                 >

//                   {/* image */}

//                   <img
//                     src={
//                       idea.image?.trim()
//                       || "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
//                     }
//                     alt={idea.title}
//                     className="
//                       h-52
//                       w-full
//                       object-cover
//                     "
//                   />

//                   {/* content */}

//                   <div className="p-5 flex flex-col flex-grow">

//                     {/* category */}

//                     <div
//                       className="
//                         inline-block
//                         bg-violet-100
//                         text-violet-600
//                         text-xs
//                         px-3
//                         py-1
//                         rounded-full
//                         mb-4
//                         w-fit
//                       "
//                     >
//                       {idea.category || "Tech"}
//                     </div>

//                     {/* title */}

//                     <h2 className="text-2xl font-bold mb-2 line-clamp-1">

//                       {idea.title}

//                     </h2>

//                     {/* description */}

//                     <p className="text-gray-500 line-clamp-2 flex-grow">

//                       {idea.shortDescription}

//                     </p>

//                     {/* author */}

//                     <div className="flex items-center gap-3 mt-5">

//                       <img
//                         src={
//                           idea.userPhoto
//                           || "https://i.ibb.co/4pDNDk1/avatar.png"
//                         }
//                         alt=""
//                         className="
//                           w-9
//                           h-9
//                           rounded-full
//                           object-cover
//                         "
//                       />

//                       <p className="text-sm text-gray-600">

//                         {idea.userName || "Anonymous"}

//                       </p>

//                     </div>

//                     {/* button */}

//                     <Link
//                       href={`/ideas/${idea._id}`}
//                       className="
//                         mt-6
//                         bg-violet-600
//                         hover:bg-violet-700
//                         text-white
//                         py-3
//                         rounded-xl
//                         text-center
//                         font-medium
//                         duration-300
//                       "
//                     >
//                       View Details
//                     </Link>

//                   </div>

//                 </div>
//               ))
//             }

//           </div>
//         )
//       }

//     </div>
//   );
// };

// export default IdeasPage;



// 2nd term


// const IdeaCard = ({ idea }) => {
//   return (
//     <div>
//       <h2>{idea.title}</h2>
//       <p>{idea.shortDescription}</p>
// <Image
//   alt={idea.title}
//   src={
//     idea?.image?.trim()?.startsWith("http")
//       ? idea.image.trim()
//       : "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
//   }
//   width={500}
//   height={300}
// />
    
//     </div>
//   );
// };

// export default IdeaCard;



