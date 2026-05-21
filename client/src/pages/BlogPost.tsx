import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecentBlogPosts from "@/components/RecentBlogPosts";
import BlogConversionBanner from "@/components/BlogConversionBanner";
import { SchemaMarkup, createBreadcrumbSchema } from "@/components/SchemaMarkup";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "./Blog";

export default function BlogPost() {
  const [location] = useLocation();
  const currentPath = location.replace(/^\/en/, "") || "/";

  // Get language from URL or localStorage
  const getLanguage = () => {
    if (typeof window === "undefined") return "es";
    const path = window.location.pathname;
    return path.startsWith("/en") ? "en" : "es";
  };
  const language = getLanguage();

  // Extract slug from URL
  const slug = currentPath.split("/").pop();

  // Find the blog post by slug
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {language === "es" ? "Artículo no encontrado" : "Article not found"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {language === "es"
              ? "Lo sentimos, el artículo que buscas no existe."
              : "Sorry, the article you are looking for does not exist."}
          </p>
          <Link href={language === "es" ? "/blog" : "/en/blog"} className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "es" ? "Volver al Blog" : "Back to Blog"}
            </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related posts by category
  const relatedPosts = blogPosts.filter(
    (p) => p.category === post.category && p.id !== post.id
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.fontfreda.net" },
    {
      name: language === "es" ? "Blog" : "Blog",
      url: `https://www.fontfreda.net${language === "en" ? "/en" : ""}/blog`,
    },
    {
      name: post.title,
      url: `https://www.fontfreda.net${language === "en" ? "/en" : ""}/blog/${post.slug}`,
    },
  ]);

  // Blog post schema
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image || "https://www.fontfreda.net/og-image.jpg",
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Fontfreda",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fontfreda.net/logo.png",
      },
    },
  };

  const translations = {
    es: {
      backToBlog: "Volver al Blog",
      relatedArticles: "Artículos Relacionados",
      noRelated: "No hay artículos relacionados",
      author: "Autor",
      published: "Publicado",
    },
    en: {
      backToBlog: "Back to Blog",
      relatedArticles: "Related Articles",
      noRelated: "No related articles",
      author: "Author",
      published: "Published",
    },
  };

  const t = translations[language as keyof typeof translations] || translations.es;

  const canonical = `https://www.fontfreda.net${language === "en" ? "/en" : ""}/blog/${post.slug}`;
  const seoKeywords = `${post.category}, ${post.title}, perros y gatos, blog Fontfreda, residencia canina, residencia felina`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${post.title} | Blog Fontfreda`}
        description={post.excerpt}
        keywords={seoKeywords}
        canonical={canonical}
        language={language as "es" | "en"}
        ogType="article"
        ogImage={post.image || "https://www.fontfreda.net/wp-content/uploads/2016/12/cat-and-dog-slide2.jpg"}
        author={post.author}
        publishedTime={post.date}
        modifiedTime={post.date}
      />
      <HrefLang currentPath={currentPath} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />
      <SchemaMarkup type="BlogPosting" data={blogPostSchema} />

      <Header />

      <main className="flex-grow">
        {/* Article Header */}
        <section className="py-12 bg-secondary border-b border-border">
          <div className="container mx-auto px-4">
            <Link href={language === "es" ? "/blog" : "/en/blog"} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.backToBlog}
              </Link>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>{post.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                title={post.title}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="800"
                height="384"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <p className="text-base text-foreground mb-6 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </p>
            </div>
          </div>
        </section>

        {/* Conversion Banner */}
        <BlogConversionBanner language={language as "es" | "en"} category={post.category} />

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <RecentBlogPosts
            posts={relatedPosts}
            limit={3}
            category={post.category}
            showViewAll={false}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
