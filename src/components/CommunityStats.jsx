"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10K+",
    title: "Ideas Shared",
  },
  {
    number: "2K+",
    title: "Active Innovators",
  },
  {
    number: "500+",
    title: "Projects Launched",
  },
  {
    number: "4.9★",
    title: "Community Rating",
  },
];

export default function CommunityStats() {
  return (
    <section className="py-20 bg-violet-600 text-white">

      <div className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{
                once: true,
              }}
              className="text-center"
            >

              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-3 text-violet-100">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}