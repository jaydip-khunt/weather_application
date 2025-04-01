// next-sitemap.js
module.exports = {
  siteUrl: "https://hoteladmin.sasantourism.com",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 1.0, // Default priority for pages
  exclude: ["/secret-page", "/another-page"], // Exclude specific paths if needed
  transform: async (config, path) => {
    return {
      loc: path, // Use default path
      changefreq: "daily", // Override change frequency if needed
      priority: 0.7, // Override priority if needed
      lastmod: new Date().toISOString(), // Set last modified date
    };
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", disallow: "/private/" },
    ],
  },
};
