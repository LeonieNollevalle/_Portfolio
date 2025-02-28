const path = require("path");
const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

// ➜ Liste des IDs dynamiques possibles
const workIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

// ➜ Générer les routes dynamiques
const dynamicRoutes = workIds.map(id => `/work/${id}`);

// ➜ Routes statiques
const staticRoutes = ["/"];

// ➜ Fusionner les routes
const allRoutes = [...staticRoutes, ...dynamicRoutes];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: "https://leonie-nollevalle.com" }); // Remplace avec ton URL

  allRoutes.forEach(route => {
    stream.write({ url: route, changefreq: "daily", priority: 0.8 });
  });

  stream.end();
  
  const sitemap = await streamToPromise(stream);
  fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap.toString());
  console.log("✅ Sitemap.xml généré avec succès !");
}

generateSitemap();
