// import IdeasCard from "@/components/IdeaCard";
// import IdeaCard from "@/components/IdeaCard";


// const ideaPage = async () => {
//     const res = await fetch('http://localhost:5000/ideas');
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
import IdeaCard from "@/components/IdeaCard";

const IdeaPage = async () => {
  const res = await fetch("http://localhost:5000/ideas", {
    cache: "no-store",
  });

  const ideas = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-10">
        Browse Ideas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {ideas.map((idea) => (
          <IdeaCard
            key={idea._id}
            idea={idea}
          />
        ))}
      </div>
    </div>
  );
};

export default IdeaPage;