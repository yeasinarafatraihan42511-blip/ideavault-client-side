
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X, Lightbulb } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Ideas", path: "/ideas" },
//     { name: "Add Idea", path: "/add-idea" },
//     { name: "My Ideas", path: "/my-ideas" },
//     { name: "My Interactions", path: "/my-interactions" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-gray-800 text-white">

//       <div className="max-w-7xl mx-auto px-5">

//         <div className="h-16 flex justify-between items-center">

//           {/* Logo */}
//           <Link
//             href="/"
//             className="flex items-center gap-2"
//           >
//             <div className="bg-blue-600 p-2 rounded-xl">
//               <Lightbulb size={18}/>
//             </div>

//             <h2 className="text-2xl font-bold">
//               IdeaVault
//             </h2>
//           </Link>

//           {/* Desktop */}
//           <div className="hidden lg:flex items-center gap-8">

//             {
//               navItems.map(item=>(
//                 <Link
//                   key={item.path}
//                   href={item.path}
//                   className="hover:text-blue-400 duration-300"
//                 >
//                   {item.name}
//                 </Link>
//               ))
//             }

//           </div>

//           <div className="hidden lg:flex gap-3">

//             <Link
//               href="/login"
//               className="px-5 py-2 rounded-full border border-gray-700 hover:border-blue-500"
//             >
//               Login
//             </Link>

//             <Link
//               href="/register"
//               className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700"
//             >
//               Register
//             </Link>

//           </div>

//           {/* Mobile button */}

//           <button
//             className="lg:hidden"
//             onClick={()=>setOpen(!open)}
//           >
//             {
//               open
//               ? <X size={28}/>
//               : <Menu size={28}/>
//             }
//           </button>

//         </div>

//         {/* Mobile menu */}

//         {
//           open && (
//             <div className="lg:hidden py-5 flex flex-col gap-4">

//               {
//                 navItems.map(item=>(
//                   <Link
//                     key={item.path}
//                     href={item.path}
//                   >
//                     {item.name}
//                   </Link>
//                 ))
//               }

//               <Link href="/login">
//                 Login
//               </Link>

//               <Link href="/register">
//                 Register
//               </Link>

//             </div>
//           )
//         }

//       </div>

//     </nav>
//   );
// };

// export default Navbar;
"use client";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import {
  Menu,
  X,
  Lightbulb,
  Plus,
  FolderOpen,
  MessageCircle,
  LogOut,
  User,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  if (isPending) return null;

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Browse Ideas",
      href: "/ideas",
    },
  ];

  const privateLinks = [
    {
      name: "Add Idea",
      href: "/add-idea",
      icon: <Plus size={16} />,
    },
    {
      name: "My Ideas",
      href: "/my-ideas",
      icon: <FolderOpen size={16} />,
    },
    {
      name: "My Interactions",
      href: "/my-interactions",
      icon: <MessageCircle size={16} />,
    },
  ];

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-5">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="bg-violet-600 p-2 rounded-xl text-white">
              <Lightbulb size={22} />
            </div>

            <h1 className="font-black text-2xl">
              Idea
              <span className="text-violet-600">
                Vault
              </span>
            </h1>
          </Link>

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition ${pathname === item.href
                    ? "text-violet-600"
                    : "hover:text-violet-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {user &&
              privateLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition ${pathname === item.href
                      ? "text-violet-600"
                      : "hover:text-violet-600"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
          </div>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="border px-5 py-2 rounded-xl hover:border-violet-600"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="bg-violet-600 text-white px-5 py-2 rounded-xl hover:bg-violet-700"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative group">

                <button className="flex items-center gap-3">

                  <img
                    src={
                      user.image ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user.name
                      )}`
                    }
                    className="w-11 h-11 rounded-full object-cover border-2 border-violet-600"
                  />

                  <div className="text-left">

                    <h4 className="font-semibold text-sm">
                      {user.name}
                    </h4>

                    <p className="text-xs text-gray-500">
                      {user.email}
                    </p>

                  </div>

                </button>

                {/* Dropdown */}

                <div
                  className="
                  absolute
                  right-0
                  mt-3
                  w-64
                  rounded-2xl
                  bg-white
                  dark:bg-slate-900
                  border
                  shadow-2xl
                  opacity-0
                  invisible
                  group-hover:visible
                  group-hover:opacity-100
                  transition-all
                "
                >

                  <div className="p-5 border-b">

                    <img
                      src={
                        user.image ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user.name
                        )}`
                      }
                      className="w-16 h-16 rounded-full mx-auto"
                    />

                    <h3 className="font-bold text-center mt-3">
                      {user.name}
                    </h3>

                    <p className="text-sm text-center text-gray-500">
                      {user.email}
                    </p>

                  </div>

                  <div className="p-3 space-y-1">

                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                    >
                      <User size={18} />
                      My Profile
                    </Link>

                    <Link
                      href="/add-idea"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                    >
                      <Plus size={18} />
                      Add Idea
                    </Link>

                    <Link
                      href="/my-ideas"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                    >
                      <FolderOpen size={18} />
                      My Ideas
                    </Link>

                    <Link
                      href="/my-interactions"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                    >
                      <MessageCircle size={18} />
                      My Interactions
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>

                  </div>

                </div>

              </div>
            )}

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {/* <div className="flex items-center justify-between">
          <span>Theme</span>
          <ThemeToggle />
        </div> */}

        {open && (
          <div className="lg:hidden border-t py-5 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b pb-3 mb-3">
  <span>Theme</span>
  <ThemeToggle />
</div>

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {user &&
              privateLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

            {!user ? (
              <>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="text-left text-red-600"
              >
                Logout
              </button>
            )}

          </div>
        )}

      </div>

    </header>
  );
}
