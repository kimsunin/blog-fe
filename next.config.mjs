/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(wav)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: `/_next/static/sounds/`,
            outputPath: `${options.isServer ? "../" : ""}static/sounds/`,
          },
        },
      }
    );
    return config;
  },
};

export default nextConfig;
