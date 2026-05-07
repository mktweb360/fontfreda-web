import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  href: string;
  cta?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  href,
  cta = "Conocer Más",
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="group block bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col cursor-pointer">
        {/* Image or Icon */}
        {image ? (
          <div className="w-full h-48 overflow-hidden bg-muted">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : Icon ? (
          <div className="w-full h-32 bg-muted flex items-center justify-center">
            <Icon className="w-12 h-12 text-primary" />
          </div>
        ) : null}

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">
            {description}
          </p>

          {/* CTA - Text only, no nested button */}
          <div className="text-primary font-medium group-hover:underline">
            {cta} →
          </div>
        </div>
      </div>
    </Link>
  );
}
