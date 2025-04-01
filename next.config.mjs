const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "openweathermap.org",
			},
		]
	},
};

export default nextConfig;