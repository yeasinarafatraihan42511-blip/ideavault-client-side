// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   experimental: {
// serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],
// },
//   images: {
//       remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "cdn.pixabay.com",
//       },
//       {
//         protocol: "https",
//         hostname: "i.ibb.co",
//       },
//        {
//         protocol: "https",
//         hostname: "media.istockphoto.com",
//       },
//     ],

//   }
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactCompiler: true,
//   experimental: {
// serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],
// },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

export default nextConfig;