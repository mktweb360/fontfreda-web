import { Link } from "wouter";
import ServicePromoBanner from "@/components/ServicePromoBanner";
import { categoryList } from "@/pages/Blog";

interface BlogSidebarProps {
  language: "es" | "en";
  activeCategory?: string;
}

export default function BlogSidebar({ language, activeCategory }: BlogSidebarProps) {
  const blogPrefix = language === "en" ? "/en/blog" : "/blog";

  return (
    <aside className="space-y-8">
      {/* Categories menu */}
      <nav aria-label={language === "es" ? "Categorías del blog" : "Blog categories"}>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
          {language === "es" ? "Categorías" : "Categories"}
        </h3>
        <ul className="flex flex-col border border-border rounded-lg overflow-hidden divide-y divide-border">
          {categoryList.map((cat) => {
            const label = language === "en" ? cat.en : cat.es;
            const isActive = activeCategory === label;
            return (
              <li key={cat.es}>
                <Link
                  href={`${blogPrefix}?categoria=${encodeURIComponent(label)}`}
                  className={`block px-4 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Service cards */}
      <div className="space-y-6">
        <ServicePromoBanner variant="dentro-de-casa" language={language} layout="vertical" />
        <ServicePromoBanner variant="larga-estancia" language={language} layout="vertical" />
      </div>
    </aside>
  );
}
