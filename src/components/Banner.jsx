// import { Separator } from "@heroui/react";

// const Banner = () => {
//   return (
//     <div className="bg-[url('/assets/banner.png')] text-white  flex justify-between flex-col items-center  gap-5 h-150">
//       <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
//         <h1 className="text-7xl">
//           Discover Your <br /> Next Adventure
//         </h1>

//         <p className="text-2xl">
//           Explore breathtaking destinations and create unforgettable memories
//           with our curated travel experiences.
//         </p>

//         <div className="flex gap-5">
//           <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer">
//             Explore Now
//           </button>

//           <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
//             View Destination
//           </button>
//         </div>
//       </div>

//       <div className=" bg-white/30 flex justify-between gap-5 w-full items-center">
//         <div className="px-3">
//           <h3 className="text-sm">Location</h3>
//           <p className="text-xs">Address, City or Zip</p>
//         </div>

//          <Separator variant="tertiary" orientation="vertical" />

//         <div>
//           <h3 className="text-sm">Date/Duration</h3>
//           <p className="text-xs">Anytime/3 Days</p>
//         </div>

//            <Separator variant="tertiary" orientation="vertical" />

//         <div>
//           <h3 className="text-sm">Budget</h3>
//           <p className="text-xs">$0-$3000</p>
//         </div>

//            <Separator variant="tertiary" orientation="vertical" />

//         <div>
//           <h3 className="text-sm">People</h3>
//           <p className="text-xs">5-10</p>
//         </div>



//         <div className="bg-cyan-500 py-2 px-4">
//           <h3>Search</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import {
  ArrowRight,
  Sparkles,
  BriefcaseBusiness,
  Users,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  const { data: session } = authClient.useSession();

  const role = session?.user?.role;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Blur Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-24 h-[420px] w-[420px] rounded-full bg-sky-300/30 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-300/30 blur-[120px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur-xl px-5 py-2 shadow-sm">

              <Sparkles
                size={18}
                className="text-blue-600"
              />

              <span className="text-sm font-semibold text-slate-700">
                #1 Freelance Collaboration Platform
              </span>

            </div>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">

              Turn Great
              <span className="text-blue-600">
                {" "}Ideas{" "}
              </span>

              Into
              <br />

              Successful Projects

            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-600 max-w-xl">

              Connect with talented freelancers,
              post tasks in seconds,
              receive competitive proposals,
              and finish projects faster than ever.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              {role === "client" && (

                <Link href="/dashboard/client/add-idea">

                  <Button
                    color="primary"
                    size="lg"
                    className="px-8 font-semibold shadow-xl"
                    endContent={<ArrowRight size={18} />}
                  >
                    Post Your Idea
                  </Button>

                </Link>

              )}

              {role === "freelancer" && (

                <Link href="/ideas">

                  <Button
                    color="primary"
                    size="lg"
                    className="px-8 font-semibold shadow-xl"
                    endContent={<ArrowRight size={18} />}
                  >
                    Browse Ideas
                  </Button>

                </Link>

              )}

              {!role && (
                <>
                  <Link href="/auth/register">

                    <Button
                      color="primary"
                      size="lg"
                      className="px-8 font-semibold shadow-xl"
                    >
                      Get Started
                    </Button>

                  </Link>

                  <Link href="/ideas">

                    <Button
                      variant="bordered"
                      size="lg"
                      className="px-8"
                    >
                      Explore Ideas
                    </Button>

                  </Link>
                </>
              )}

            </div>

            {/* Feature Pills */}

            <div className="mt-12 flex flex-wrap gap-5">

              <div className="flex items-center gap-2">

                <ShieldCheck className="text-green-600" />

                <span className="font-medium">
                  Secure Platform
                </span>

              </div>

              <div className="flex items-center gap-2">

                <BadgeDollarSign className="text-yellow-500" />

                <span className="font-medium">
                  Affordable Budget
                </span>

              </div>

              <div className="flex items-center gap-2">

                <Users className="text-blue-600" />

                <span className="font-medium">
                  Trusted Community
                </span>

              </div>

            </div>

          </motion.div>
                    {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .9 }}
            className="relative"
          >

            {/* Main Image */}

            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/30">

              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="IdeaVault Hero"
                width={700}
                height={700}
                priority
                className="w-full h-[650px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            </div>

            {/* Floating Card 1 */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-10 top-8 bg-white rounded-3xl shadow-2xl p-5 w-60 hidden lg:block"
            >

              <div className="flex items-center gap-3">

                <div className="bg-blue-100 p-3 rounded-2xl">

                  <BriefcaseBusiness className="text-blue-600" />

                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    12K+
                  </h3>

                  <p className="text-sm text-slate-500">
                    Ideas Submitted
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Floating Card 2 */}

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-10 bottom-12 bg-white rounded-3xl shadow-2xl p-5 w-64 hidden lg:block"
            >

              <div className="flex items-center gap-3">

                <div className="bg-green-100 p-3 rounded-2xl">

                  <Users className="text-green-600" />

                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    6.5K+
                  </h3>

                  <p className="text-sm text-slate-500">
                    Active Innovators
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Bottom Stats */}

            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="bg-white rounded-3xl p-6 shadow-xl border">

                <h2 className="text-4xl font-black text-blue-600">
                  25K+
                </h2>

                <p className="text-slate-500 mt-2">
                  Total Ideas
                </p>

              </div>

              <div className="bg-white rounded-3xl p-6 shadow-xl border">

                <h2 className="text-4xl font-black text-green-600">
                  98%
                </h2>

                <p className="text-slate-500 mt-2">
                  Success Rate
                </p>

              </div>

              <div className="bg-white rounded-3xl p-6 shadow-xl border">

                <h2 className="text-4xl font-black text-orange-500">
                  3K+
                </h2>

                <p className="text-slate-500 mt-2">
                  Active Users
                </p>

              </div>

              <div className="bg-white rounded-3xl p-6 shadow-xl border">

                <h2 className="text-4xl font-black text-purple-600">
                  24/7
                </h2>

                <p className="text-slate-500 mt-2">
                  Community Support
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}