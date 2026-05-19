import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface BlogPost {
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

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Cómo cuidar a mi perro en verano",
    excerpt:
      "El verano es la estación donde más cuidado debemos tener con nuestro perro. Descubre cómo cuidar a tu perro en verano para que disfrute con la máxima seguridad.",
    content:
      "Durante el verano, los perros enfrentan desafíos especiales como el calor extremo, la deshidratación y el agotamiento. Es fundamental mantenerlos hidratados, ofrecerles sombra constante, evitar paseos en las horas más calurosas, y estar atento a signos de golpe de calor como jadeo excesivo, debilidad o desorientación.",
    author: "admin",
    date: "16 May 2022",
    category: "Perros",
    slug: "como-cuidar-perro-verano",
  },
  {
    id: "2",
    title: "¿Es bueno convivir con mascotas durante el embarazo?",
    excerpt:
      "Las mascotas son una parte más en la casa pero, ¿es buena la convivencia entre mujeres embarazadas y mascotas?",
    content:
      "Convivir con mascotas durante el embarazo es perfectamente seguro si se toman las precauciones adecuadas. Los beneficios emocionales y de compañía que aportan las mascotas superan con creces los riesgos mínimos. Lo importante es mantener la higiene, vacunaciones al día, y adaptar la convivencia a los cambios del embarazo.",
    author: "admin",
    date: "28 March 2022",
    category: "Mascotas",
    slug: "convivencia-mascotas-embarazo",
  },
  {
    id: "3",
    title: "Cuánto tiempo puedo dejar a mi gato solo",
    excerpt:
      "A pesar de que los gatos son animales muy independientes no deben estar demasiados días solos en la casa. Todo lo que tienes que saber al dejar a tu gato solo.",
    content:
      "Los gatos pueden estar solos durante 24-48 horas máximo. Después de ese tiempo, necesitan atención, alimento fresco y cuidado de su arenero. Para ausencias más largas, es recomendable contar con alguien que los visite o utilizar servicios de cuidado profesional como la Residencia Felina.",
    author: "admin",
    date: "28 January 2022",
    category: "Gatos",
    slug: "tiempo-gato-solo",
  },
  {
    id: "4",
    title: "Síndrome de pica en mascotas, ¿qué es?",
    excerpt:
      "El síndrome de pica es un trastorno que afecta a muchas mascotas. Aprende qué es y cómo identificarlo.",
    content:
      "El síndrome de pica es la tendencia compulsiva de comer objetos no alimenticios. Puede ser causado por deficiencias nutricionales, estrés, ansiedad o problemas médicos. Si notas que tu mascota come cosas extrañas, consulta con un veterinario para descartar problemas de salud.",
    author: "admin",
    date: "15 February 2022",
    category: "Animales",
    slug: "sindrome-pica-mascotas",
  },
  {
    id: "5",
    title: "Cómo dejar a mi cachorro solo en casa",
    excerpt:
      "Dejar a un cachorro solo requiere preparación y paciencia. Descubre los mejores consejos para hacerlo de forma segura.",
    content:
      "Los cachorros necesitan gradualmente acostumbrarse a estar solos. Comienza con períodos cortos, asegura un espacio seguro, deja juguetes interactivos, y nunca lo dejes solo por más de 2-3 horas. La consistencia y la paciencia son clave para evitar ansiedad por separación.",
    author: "admin",
    date: "10 March 2022",
    category: "Perros",
    slug: "cachorro-solo-casa",
  },
  {
    id: "6",
    title: "Beneficios de la larga estancia en residencia canina",
    excerpt:
      "Descubre por qué la larga estancia en una residencia familiar es beneficiosa para tu perro.",
    content:
      "La larga estancia en una residencia familiar permite que tu perro mantenga rutinas estables, socialice con otros perros, disfrute de paseos diarios en naturaleza, y reciba atención profesional constante. Especialmente útil en situaciones de cambios en la familia, viajes prolongados o circunstancias especiales.",
    author: "admin",
    date: "07 May 2026",
    category: "Residencia",
    slug: "beneficios-larga-estancia",
  },
  {
    id: "7",
    title: "Comportamiento de perros en residencia: qué esperar",
    excerpt:
      "Conoce cómo se comportan los perros en una residencia familiar y qué cambios puedes notar al recoger a tu mascota.",
    content:
      "Es normal que los perros muestren cambios de comportamiento después de una estancia en residencia. Algunos pueden estar más cansados (lo cual es positivo), otros más sociables, y algunos necesitarán un período de readaptación. Estos cambios suelen ser temporales y reflejan el bienestar y la estimulación que han recibido.",
    author: "admin",
    date: "06 May 2026",
    category: "Perros",
    slug: "comportamiento-perros-residencia",
  },
  {
    id: "8",
    title: "Preparar a tu gato para la residencia felina",
    excerpt:
      "Consejos prácticos para preparar a tu gato antes de su estancia en una residencia felina especializada.",
    content:
      "Antes de llevar a tu gato a una residencia felina, es importante familiarizarlo con cambios gradualmente. Lleva objetos con tu olor, mantén la calma durante la entrega, y proporciona información detallada sobre sus hábitos, preferencias y necesidades especiales. Una buena comunicación con los cuidadores garantiza una experiencia positiva.",
    author: "admin",
    date: "05 May 2026",
    category: "Gatos",
    slug: "preparar-gato-residencia",
  },
  {
    id: "9",
    title: "Vacunación en perros: guía completa",
    excerpt:
      "Todo lo que necesitas saber sobre las vacunas obligatorias y recomendadas para tu perro.",
    content:
      "Las vacunas son esenciales para la salud de tu perro. La pentavalente protege contra parvovirus, moquillo y hepatitis. La heptavalente añade protección contra leptospirosis. La vacuna de la tos de perrera es recomendada para perros que socializan frecuentemente. Consulta con tu veterinario sobre el calendario de vacunación adecuado.",
    author: "admin",
    date: "04 May 2026",
    category: "Salud",
    slug: "vacunacion-perros-guia",
  },
  {
    id: "10",
    title: "Desparasitación externa: pipetas y collares",
    excerpt:
      "Guía sobre los mejores métodos para proteger a tu mascota contra parásitos externos.",
    content:
      "Los parásitos externos como pulgas y garrapatas pueden causar problemas graves. Las pipetas mensuales y los collares antiparasitarios son métodos efectivos. En verano, la doble protección es recomendada. Consulta con tu veterinario sobre las opciones más adecuadas para tu mascota según su edad y peso.",
    author: "admin",
    date: "03 May 2026",
    category: "Salud",
    slug: "desparasitacion-externa",
  },
  {
    id: "11",
    title: "Socialización de cachorros: importancia y métodos",
    excerpt:
      "Aprende por qué la socialización temprana es crucial para el desarrollo de tu cachorro.",
    content:
      "La socialización durante los primeros meses de vida es fundamental para que el cachorro desarrolle confianza y habilidades sociales. Exponerlo a diferentes personas, animales, sonidos y ambientes de forma positiva previene miedos y comportamientos agresivos. Una guardería canina es un excelente lugar para socializar.",
    author: "admin",
    date: "02 May 2026",
    category: "Perros",
    slug: "socializacion-cachorros",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-secondary border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-primary mb-4">Blog Fontfreda</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consejos, guías y artículos sobre el cuidado de perros y gatos.
              Aprende de expertos en bienestar animal.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📚</div>
                      <p className="text-xs text-muted-foreground">
                        {post.category}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6 border-t border-border pt-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <Link href={`/blog/${post.slug}`}>
                      <a className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                        Leer más
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center">
              <h2 className="text-primary mb-4">
                Recibe Consejos Sobre Cuidado de Mascotas
              </h2>
              <p className="text-muted-foreground mb-8">
                Suscríbete a nuestro newsletter para recibir artículos, guías y
                consejos directamente en tu correo.
              </p>

              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-grow px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
