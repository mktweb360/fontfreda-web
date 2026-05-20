import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  slug: string;
  image?: string;
}

interface RecentBlogPostsProps {
  posts: BlogPost[];
  limit?: number;
  category?: string;
  showViewAll?: boolean;
}

export default function RecentBlogPosts({
  posts,
  limit = 3,
  category,
  showViewAll = true,
}: RecentBlogPostsProps) {
  // Get language from URL or localStorage
  const getLanguage = () => {
    if (typeof window === "undefined") return "es";
    const path = window.location.pathname;
    return path.startsWith("/en") ? "en" : "es";
  };
  const language = getLanguage() as "es" | "en";

  // Filtrar por categoría si se proporciona
  const filteredPosts = category
    ? posts.filter((post) => post.category === category)
    : posts;

  // Ordenar por fecha más reciente y limitar
  const recentPosts = filteredPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  const content = {
    es: {
      title: "Últimos Artículos del Blog",
      viewMore: "Ver más artículos",
      readMore: "Leer más",
      relatedArticles: "Artículos Relacionados",
    },
    en: {
      title: "Latest Blog Articles",
      viewMore: "View more articles",
      readMore: "Read more",
      relatedArticles: "Related Articles",
    },
  };

  const t = content[language as keyof typeof content] || content.es;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8">
          {category ? t.relatedArticles : t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full block">
                <article className="h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  {/* Imagen del artículo */}
                  {post.image && (
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Contenido */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Categoría y Fecha */}
                    <div className="flex items-center justify-between mb-3 text-sm">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        <time>{post.date}</time>
                      </div>
                    </div>

                    {/* Título */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                      {t.readMore}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </article>
            </Link>
          ))}
        </div>

        {/* Ver más artículos */}
        {showViewAll && (
          <div className="mt-8 text-center">
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              {t.viewMore}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
