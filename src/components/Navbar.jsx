// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes";
// import { useSession } from "@/lib/auth-client";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const { theme, setTheme } = useTheme();

//   const { data: session } = useSession();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Ideas", path: "/ideas" },
//   ];

//   const privateLinks = [
//     { name: "Add Idea", path: "/add-idea" },
//     { name: "My Ideas", path: "/my-ideas" },
//     { name: "My Interactions", path: "/my-interactions" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 border-b bg-background">
//       <div className="max-w-7xl mx-auto px-5">

//         <div className="flex justify-between items-center h-16">

//           <Link
//             href="/"
//             className="text-2xl font-bold"
//           >
//             IdeaVault
//           </Link>

//           <div className="hidden md:flex items-center gap-6">

//             {navLinks.map(link=>(
//               <Link
//                 key={link.path}
//                 href={link.path}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {session &&
//               privateLinks.map(link=>(
//                 <Link
//                   key={link.path}
//                   href={link.path}
//                 >
//                   {link.name}
//                 </Link>
//               ))
//             }

//           </div>

//           <div className="flex items-center gap-3">

//             <button
//               onClick={() =>
//                 setTheme(
//                   theme === "dark"
//                     ? "light"
//                     : "dark"
//                 )
//               }
//             >
//               {theme==="dark"
//                 ? <Sun size={20}/>
//                 : <Moon size={20}/>
//               }
//             </button>

//             {!session ? (
//               <div className="hidden md:flex gap-2">
//                 <Link
//                   href="/login"
//                   className="px-4 py-2 rounded bg-blue-600 text-white"
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   href="/register"
//                   className="px-4 py-2 rounded border"
//                 >
//                   Register
//                 </Link>
//               </div>
//             ) : (
//               <img
//                 src={session.user.image}
//                 className="w-10 h-10 rounded-full"
//                 alt=""
//               />
//             )}

//             <button
//               className="md:hidden"
//               onClick={()=>setOpen(!open)}
//             >
//               {
//                 open
//                   ? <X/>
//                   : <Menu/>
//               }
//             </button>

//           </div>

//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Lightbulb } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Ideas", path: "/ideas" },
    { name: "Add Idea", path: "/add-idea" },
    { name: "My Ideas", path: "/my-ideas" },
    { name: "My Interactions", path: "/my-interactions" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-gray-800 text-white">

      <div className="max-w-7xl mx-auto px-5">

        <div className="h-16 flex justify-between items-center">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="bg-blue-600 p-2 rounded-xl">
              <Lightbulb size={18}/>
            </div>

            <h2 className="text-2xl font-bold">
              IdeaVault
            </h2>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">

            {
              navItems.map(item=>(
                <Link
                  key={item.path}
                  href={item.path}
                  className="hover:text-blue-400 duration-300"
                >
                  {item.name}
                </Link>
              ))
            }

          </div>

          <div className="hidden lg:flex gap-3">

            <Link
              href="/login"
              className="px-5 py-2 rounded-full border border-gray-700 hover:border-blue-500"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700"
            >
              Register
            </Link>

          </div>

          {/* Mobile button */}

          <button
            className="lg:hidden"
            onClick={()=>setOpen(!open)}
          >
            {
              open
              ? <X size={28}/>
              : <Menu size={28}/>
            }
          </button>

        </div>

        {/* Mobile menu */}

        {
          open && (
            <div className="lg:hidden py-5 flex flex-col gap-4">

              {
                navItems.map(item=>(
                  <Link
                    key={item.path}
                    href={item.path}
                  >
                    {item.name}
                  </Link>
                ))
              }

              <Link href="/login">
                Login
              </Link>

              <Link href="/register">
                Register
              </Link>

            </div>
          )
        }

      </div>

    </nav>
  );
};

export default Navbar;