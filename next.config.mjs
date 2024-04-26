import withVideos from "next-videos";

const nextConfig = {
  reactStrictMode: true,
};

export default {
  ...nextConfig,
  ...withVideos(),
};
