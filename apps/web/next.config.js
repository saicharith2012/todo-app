/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
    },
    output: "standalone"
};

export default nextConfig;
