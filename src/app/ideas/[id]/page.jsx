import { Edit } from "lucide-react";
import Image from "next/image";
import EditDetails from "@/components/EditDetails";


const DetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch(`https://idea-vault-server-side-ten.vercel.app/ideas/${id}`, {
        cache: 'no-store'
    });
    const idea = await res.json();
    const { title, description, imageUrl } = idea;

    return (
        <div className="max-w-9xl mx-auto px-5 py-10 bg-base-100 rounded-lg shadow-md">
           <EditDetails idea={idea} />
           
          



        </div>
        
    );
};


export default DetailsPage;