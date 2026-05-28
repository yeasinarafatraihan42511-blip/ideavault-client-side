import IdeasCard from "@/components/IdeaCard";
import IdeaCard from "@/components/IdeaCard";


const ideaPage = async () => {
    const res = await fetch('http://localhost:5000/ideas');
    const ideas = await res.json();
    console.log(ideas);
    return (
        <div>
           <h1>Browse Ideas</h1>
              <div>
                {
                   
                   ideas.map(idea => (
                    <IdeaCard key={idea._id} idea={idea}/>
                   ))
                }
              </div>
        </div>
    );
};

export default ideaPage;