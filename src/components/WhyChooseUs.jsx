"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Innovative Ideas",
    desc: "Share your creative startup ideas with the community.",
    icon: Lightbulb,
  },
  {
    title: "Community Feedback",
    desc: "Receive valuable opinions from other innovators.",
    icon: Users,
  },
  {
    title: "Secure Platform",
    desc: "Protected authentication using Better Auth.",
    icon: ShieldCheck,
  },
  {
    title: "Track Growth",
    desc: "Manage and improve your ideas efficiently.",
    icon: TrendingUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose IdeaVault?
          </h2>

          <p className="text-gray-500 mt-3">
            Everything you need to share and improve your startup ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                bg-white
                rounded-2xl
                shadow-md
                border
                p-6
                text-center
              "
              >
                <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-4">

                  <Icon
                    className="text-violet-600"
                    size={28}
                  />

                </div>

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}