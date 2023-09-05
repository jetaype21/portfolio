import SitemapGenerator from "sitemap-generator";

// Configura la URL de tu sitio web
const url = "https://juantaypedev.netlify.app/";

// Configura el nombre del archivo sitemap
const fileName = "sitemap.xml";

// Crea una instancia de SitemapGenerator
const generator = SitemapGenerator(url, {
  stripQuerystring: false, // Cambia a true si deseas eliminar cadenas de consulta (?param=valor) de las URL
  filepath: fileName, // Especifica el nombre del archivo de salida
});

// Registra eventos para controlar el proceso de generación
generator.on("done", () => {
  console.log(`Sitemap generado en: ${generator.getSitemap().getPaths}`);
});

// Inicia el proceso de generación
generator.start();
