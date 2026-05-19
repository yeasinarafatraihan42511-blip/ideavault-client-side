// import Link from "next/link";
// import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer className="border-t mt-20">
//       <div className="max-w-7xl mx-auto px-5 py-10">

//         <div className="grid md:grid-cols-3 gap-8">

//           <div>
//             <h2 className="font-bold text-2xl">
//               IdeaVault
//             </h2>

//             <p className="mt-3 text-sm">
//               Share startup ideas and connect with innovators.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-4">
//               Platform
//             </h3>

//             <div className="flex flex-col gap-2">
//               <Link href="/">Home</Link>
//               <Link href="/ideas">Ideas</Link>
//               <Link href="/add-idea">Add Idea</Link>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-4">
//               Connect
//             </h3>

//             <div className="flex gap-4 text-xl">
//               <FaGithub/>
//               <FaLinkedin/>
//               <FaXTwitter/>
//             </div>
//           </div>

//         </div>

//         <div className="border-t mt-8 pt-5 text-center text-sm">
//           © 2026 IdeaVault. All rights reserved.
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
import Link from "next/link";
import {
FaGithub,
FaLinkedin,
FaXTwitter
} from "react-icons/fa6";

const Footer = () => {
  return (

<footer className="bg-black text-white mt-20 border-t border-gray-800">

<div className="max-w-7xl mx-auto px-5 py-14">

<div className="grid md:grid-cols-3 gap-10">

<div>

<h2 className="text-2xl font-bold">
IdeaVault
</h2>

<p className="mt-4 text-gray-400">
Discover startup ideas, validate concepts,
and connect with innovators.
</p>

</div>

<div>

<h3 className="font-semibold text-lg mb-4">
Quick Links
</h3>

<div className="flex flex-col gap-3">

<Link href="/">
Home
</Link>

<Link href="/ideas">
Ideas
</Link>

<Link href="/add-idea">
Add Idea
</Link>

</div>

</div>

<div>

<h3 className="font-semibold text-lg mb-4">
Connect
</h3>

<div className="flex gap-5 text-2xl">

<FaGithub/>

<FaLinkedin/>

<FaXTwitter/>

</div>

</div>

</div>

<div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">

© 2026 IdeaVault | All Rights Reserved

</div>

</div>

</footer>

  );
};

export default Footer;