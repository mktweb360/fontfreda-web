import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

interface SmoothAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function SmoothAccordion({ items, allowMultiple = false }: SmoothAccordionProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      if (!allowMultiple) {
        newExpanded.clear();
      }
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-border rounded-lg overflow-hidden bg-white hover:border-primary/50 transition-colors"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full p-6 text-left hover:bg-secondary/30 transition-colors flex justify-between items-center group"
          >
            <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-primary transition-transform duration-300 ${
                expandedIds.has(item.id) ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Animated Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedIds.has(item.id) ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-6 text-muted-foreground border-t border-border pt-4">
              {typeof item.content === "string" ? (
                <p>{item.content}</p>
              ) : (
                item.content
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
