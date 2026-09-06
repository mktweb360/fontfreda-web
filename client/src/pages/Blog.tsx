import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HrefLang } from "@/components/HrefLang";
import { SEO } from "@/components/SEO";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";

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
  titleEn?: string;
  excerptEn?: string;
  contentEn?: string;
  categoryEn?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Cómo cuidar a mi perro en verano",
    titleEn: "How to care for my dog in summer",
    excerpt: "El verano es la estación donde más cuidado debemos tener con nuestro perro. Descubre cómo cuidar a tu perro en verano para que disfrute con la máxima seguridad.",
    excerptEn: "Summer is the season where we must take extra care of our dog. Discover how to care for your dog in summer so it enjoys maximum safety.",
    content: "Durante el verano, los perros enfrentan desafíos especiales como el calor extremo, la deshidratación y el agotamiento. Es fundamental mantenerlos hidratados, ofrecerles sombra constante, evitar paseos en las horas más calurosas, y estar atento a signos de golpe de calor como jadeo excesivo, debilidad o desorientación.",
    contentEn: "During summer, dogs face special challenges such as extreme heat, dehydration and exhaustion. It is essential to keep them hydrated, offer constant shade, avoid walks during the hottest hours, and watch for signs of heatstroke such as excessive panting, weakness or disorientation.",
    author: "admin",
    date: "16 May 2022",
    category: "Perros",
    categoryEn: "Dogs",
    slug: "como-cuidar-perro-verano",
    image: "/images/canina/area-recreo-caninos-5.jpg",
  },
  {
    id: "2",
    title: "¿Es bueno convivir con perros y gatos durante el embarazo?",
    titleEn: "Is it good to live with dogs and cats during pregnancy?",
    excerpt: "Los perros y gatos son una parte más en la casa pero, ¿es buena la convivencia entre mujeres embarazadas y nuestros animales de compañía?",
    excerptEn: "Dogs and cats are part of the family, but is it good for pregnant women to live with them?",
    content: "Convivir con perros y gatos durante el embarazo es perfectamente seguro si se toman las precauciones adecuadas. Los beneficios emocionales y de compañía que aportan superan con creces los riesgos mínimos. Lo importante es mantener la higiene, vacunaciones al día, y adaptar la convivencia a los cambios del embarazo.",
    contentEn: "Living with dogs and cats during pregnancy is perfectly safe with the right precautions. The emotional and companionship benefits far outweigh minimal risks. The important thing is to maintain hygiene, up-to-date vaccinations, and adapt living arrangements to pregnancy changes.",
    author: "admin",
    date: "28 March 2022",
    category: "Convivencia",
    categoryEn: "Coexistence",
    slug: "convivencia-perros-gatos-embarazo",
    image: "/images/canina/perro_suelto_recinto_recreo.jpeg",
  },
  {
    id: "3",
    title: "Cuánto tiempo puedo dejar a mi gato solo",
    titleEn: "How long can I leave my cat alone",
    excerpt: "A pesar de que los gatos son animales muy independientes no deben estar demasiados días solos en la casa. Todo lo que tienes que saber al dejar a tu gato solo.",
    excerptEn: "Even though cats are very independent animals, they shouldn't be alone at home for too many days. Everything you need to know about leaving your cat alone.",
    content: "Los gatos pueden estar solos durante 24-48 horas máximo. Después de ese tiempo, necesitan atención, alimento fresco y cuidado de su arenero. Para ausencias más largas, es recomendable contar con alguien que los visite o utilizar servicios de cuidado profesional como la Residencia Felina.",
    contentEn: "Cats can be alone for 24-48 hours maximum. After that time, they need attention, fresh food and litter box care. For longer absences, it is advisable to have someone visit them or use professional care services such as the Cat Boarding.",
    author: "admin",
    date: "28 January 2022",
    category: "Gatos",
    categoryEn: "Cats",
    slug: "tiempo-gato-solo",
    image: "/images/felina/gato-sillon-residencia.jpeg",
  },
  {
    id: "4",
    title: "Síndrome de pica en perros y gatos, ¿qué es?",
    titleEn: "Pica syndrome in dogs and cats, what is it?",
    excerpt: "El síndrome de pica es un trastorno que afecta a muchos perros y gatos. Aprende qué es y cómo identificarlo.",
    excerptEn: "Pica syndrome is a disorder that affects many dogs and cats. Learn what it is and how to identify it.",
    content: "El síndrome de pica es la tendencia compulsiva de comer objetos no alimenticios. Puede ser causado por deficiencias nutricionales, estrés, ansiedad o problemas médicos. Si notas que tu perro o gato come cosas extrañas, consulta con un veterinario para descartar problemas de salud.",
    contentEn: "Pica syndrome is the compulsive tendency to eat non-food items. It can be caused by nutritional deficiencies, stress, anxiety, or medical problems. If you notice your dog or cat eating strange things, consult a vet to rule out health issues.",
    author: "admin",
    date: "15 February 2022",
    category: "Salud",
    categoryEn: "Health",
    slug: "sindrome-pica-perros-gatos",
    image: "/images/trust/recepcion-perro-con-dueno.jpg",
  },
  {
    id: "5",
    title: "Cómo dejar a mi cachorro solo en casa",
    titleEn: "How to leave my puppy alone at home",
    excerpt: "Dejar a un cachorro solo requiere preparación y paciencia. Descubre los mejores consejos para hacerlo de forma segura.",
    excerptEn: "Leaving a puppy alone requires preparation and patience. Discover the best tips to do it safely.",
    content: "Los cachorros necesitan gradualmente acostumbrarse a estar solos. Comienza con períodos cortos, asegura un espacio seguro, deja juguetes interactivos, y nunca lo dejes solo por más de 2-3 horas. La consistencia y la paciencia son clave para evitar ansiedad por separación.",
    contentEn: "Puppies need to gradually get used to being alone. Start with short periods, secure a safe space, leave interactive toys, and never leave them alone for more than 2-3 hours. Consistency and patience are key to avoiding separation anxiety.",
    author: "admin",
    date: "10 March 2022",
    category: "Perros",
    categoryEn: "Dogs",
    slug: "cachorro-solo-casa",
    image: "/images/dentro-de-casa/teckel-inside.jpg",
  },
  {
    id: "6",
    title: "Beneficios de la larga estancia en residencia canina",
    titleEn: "Benefits of long-stay in dog boarding",
    excerpt: "Descubre por qué la larga estancia en una residencia familiar es beneficiosa para tu perro.",
    excerptEn: "Discover why long-stay in a family boarding is beneficial for your dog.",
    content: "La larga estancia en una residencia familiar permite que tu perro mantenga rutinas estables, socialice con otros perros, disfrute de paseos diarios en naturaleza, y reciba atención profesional constante. Especialmente útil en situaciones de cambios en la familia, viajes prolongados o circunstancias especiales.",
    contentEn: "Long-stay in a family boarding allows your dog to maintain stable routines, socialize with other dogs, enjoy daily walks in nature, and receive constant professional attention. Especially useful in family changes, long trips, or special circumstances.",
    author: "admin",
    date: "07 May 2026",
    category: "Residencia",
    categoryEn: "Boarding",
    slug: "beneficios-larga-estancia",
    image: "/images/dentro-de-casa/residencia-canina-12.jpg",
  },
  {
    id: "7",
    title: "Comportamiento de perros en residencia: qué esperar",
    titleEn: "Dog behavior in boarding: what to expect",
    excerpt: "Conoce cómo se comportan los perros en una residencia familiar y qué cambios puedes notar al recoger a tu perro.",
    excerptEn: "Learn how dogs behave in a family boarding and what changes you may notice when picking up your dog.",
    content: "Es normal que los perros muestren cambios de comportamiento después de una estancia en residencia. Algunos pueden estar más cansados (lo cual es positivo), otros más sociables, y algunos necesitarán un período de readaptación. Estos cambios suelen ser temporales y reflejan el bienestar y la estimulación que han recibido.",
    contentEn: "It is normal for dogs to show behavioral changes after a boarding stay. Some may be more tired (which is positive), others more sociable, and some will need a readjustment period. These changes are usually temporary and reflect the well-being and stimulation they received.",
    author: "admin",
    date: "06 May 2026",
    category: "Perros",
    categoryEn: "Dogs",
    slug: "comportamiento-perros-residencia",
    image: "/images/canina/perros_espadio_recreo.jpeg",
  },
  {
    id: "8",
    title: "Preparar a tu gato para la residencia felina",
    titleEn: "Preparing your cat for cat boarding",
    excerpt: "Consejos prácticos para preparar a tu gato antes de su estancia en una residencia felina especializada.",
    excerptEn: "Practical tips to prepare your cat before its stay at a specialized cat boarding.",
    content: "Antes de llevar a tu gato a una residencia felina, es importante familiarizarlo con cambios gradualmente. Lleva objetos con tu olor, mantén la calma durante la entrega, y proporciona información detallada sobre sus hábitos, preferencias y necesidades especiales. Una buena comunicación con los cuidadores garantiza una experiencia positiva.",
    contentEn: "Before taking your cat to a cat boarding, it is important to familiarize them with changes gradually. Bring objects with your scent, stay calm during delivery, and provide detailed information about habits, preferences and special needs. Good communication with caregivers ensures a positive experience.",
    author: "admin",
    date: "05 May 2026",
    category: "Gatos",
    categoryEn: "Cats",
    slug: "preparar-gato-residencia",
    image: "/images/felina/gato-2-residencia-felina.jpeg",
  },
  {
    id: "9",
    title: "Vacunación en perros: guía completa",
    titleEn: "Dog vaccination: complete guide",
    excerpt: "Todo lo que necesitas saber sobre las vacunas obligatorias y recomendadas para tu perro.",
    excerptEn: "Everything you need to know about mandatory and recommended vaccines for your dog.",
    content: "Las vacunas son esenciales para la salud de tu perro. La pentavalente protege contra parvovirus, moquillo y hepatitis. La heptavalente añade protección contra leptospirosis. La vacuna de la tos de perrera es recomendada para perros que socializan frecuentemente. Consulta con tu veterinario sobre el calendario de vacunación adecuado.",
    contentEn: "Vaccines are essential for your dog's health. Pentavalent protects against parvovirus, distemper and hepatitis. Heptavalent adds protection against leptospirosis. Kennel cough vaccine is recommended for dogs that socialize frequently. Consult your vet about the appropriate vaccination schedule.",
    author: "admin",
    date: "04 May 2026",
    category: "Salud",
    categoryEn: "Health",
    slug: "vacunacion-perros-guia",
    image: "/images/canina/residencia-canina-8.jpg",
  },
  {
    id: "10",
    title: "Desparasitación externa: pipetas y collares",
    titleEn: "External deworming: pipettes and collars",
    excerpt: "Guía sobre los mejores métodos para proteger a tu perro o gato contra parásitos externos.",
    excerptEn: "Guide on the best methods to protect your dog or cat against external parasites.",
    content: "Los parásitos externos como pulgas y garrapatas pueden causar problemas graves. Las pipetas mensuales y los collares antiparasitarios son métodos efectivos. En verano, la doble protección es recomendada. Consulta con tu veterinario sobre las opciones más adecuadas para tu perro o gato según su edad y peso.",
    contentEn: "External parasites like fleas and ticks can cause serious problems. Monthly pipettes and antiparasitic collars are effective methods. In summer, double protection is recommended. Consult your vet about the best options for your dog or cat based on age and weight.",
    author: "admin",
    date: "03 May 2026",
    category: "Salud",
    categoryEn: "Health",
    slug: "desparasitacion-externa",
    image: "/images/felina/gato-8.jpg",
  },
  {
    id: "11",
    title: "Socialización de cachorros: importancia y métodos",
    titleEn: "Puppy socialization: importance and methods",
    excerpt: "Aprende por qué la socialización temprana es crucial para el desarrollo de tu cachorro.",
    excerptEn: "Learn why early socialization is crucial for your puppy's development.",
    content: "La socialización durante los primeros meses de vida es fundamental para que el cachorro desarrolle confianza y habilidades sociales. Exponerlo a diferentes personas, animales, sonidos y ambientes de forma positiva previene miedos y comportamientos agresivos. Una guardería canina es un excelente lugar para socializar.",
    contentEn: "Socialization during the first months of life is essential for the puppy to develop confidence and social skills. Exposing them to different people, animals, sounds and environments positively prevents fears and aggressive behaviors. A dog daycare is an excellent place to socialize.",
    author: "admin",
    date: "02 May 2026",
    category: "Perros",
    categoryEn: "Dogs",
    slug: "socializacion-cachorros",
    image: "/images/guarderia/guarderia-canina-4.jpg",
  },
    {
    id: "12",
    title: "Perro senior en residencia canina: cuidados especiales para mascotas mayores",
    excerpt: "Tu perro mayor se merece una residencia que entienda su edad. Te contamos qué cuidados necesita un perro senior y cómo los cubrimos en Fontfreda.",
    content: `# Perro senior en residencia canina: cuidados especiales para mascotas mayores

En Fontfreda sabemos que un perro mayor no es un perro cualquiera. Con los años, su salud, su alimentación y su forma de relacionarse cambian, y dejarlo en una residencia exige elegir un centro que de verdad entienda esas diferencias. Por eso hemos diseñado nuestros cuidados pensando también en mascotas senior. En esta guía te contamos qué necesita un perro mayor y cómo lo cubrimos.

## Cuándo se considera que un perro es senior o geriátrico

Un perro se considera **senior** a partir de los 7-8 años en razas medianas, antes en razas grandes y más tarde en razas pequeñas. Se habla de fase **geriátrica** cuando el animal supera aproximadamente el 75% de su esperanza de vida estimada; en perros pequeños esto ocurre a partir de los 11-12 años.

Esto significa que un perro mayor puede presentar artrosis, pérdida de visión o audición, problemas dentales o enfermedades crónicas que requieren medicación diaria. Su estancia en una residencia debe tener en cuenta estas particularidades, y por eso en Fontfreda tomamos nota de cada detalle desde el primer contacto.

## Necesidades especiales del perro senior

Un perro mayor no es un perro joven al que simplemente se le da menos ejercicio. Sus cuidados giran en torno a varios ejes que en Fontfreda cuidamos con especial atención:

- **Articulaciones y movilidad:** la artrosis es muy frecuente y requiere suelos antideslizantes, paseos moderados y evitar saltos bruscos.
- **Alimentación adaptada:** necesita dietas de mayor calidad proteica, control del peso y, en muchos casos, aportes de omega-3 para las articulaciones.
- **Medicación:** muchos perros seniors reciben tratamiento para dolor crónico, insuficiencia renal o cardiopatías; la residencia debe poder administrarlo con rigor.
- **Revisiones veterinarias:** conveniencia de chequeos más frecuentes y control de la condición corporal.
- **Manejo del estrés:** los cambios de entorno pueden afectar más a un perro mayor, por lo que la adaptación debe ser progresiva.
- **Salud dental:** los problemas bucodentales son más prevalentes en perros mayores y pueden dificultar la alimentación.

## Qué debe ofrecer una residencia para perros mayores

No todas las residencias están preparadas para un perro senior. Antes de reservar, conviene comprobar que el centro ofrezca:

1. **Atención de necesidades especiales y administración de medicación** por personal formado, con visita veterinaria disponible.
2. **Habitaciones individuales con calefacción**, fundamentales para perros mayores que toleran peor el frío y las corrientes de aire.
3. **Paseos adaptados** en cantidad y intensidad, no rutinas agotadoras.
4. **Trato personalizado** que tenga en cuenta la anatomía y la salud del animal, no un manejo estándar para todos.
5. **Espacio natural** donde el perro pueda moverse con seguridad sin agresiones de otros animales.
6. **Seguimiento** de alimentación, medicación y evolución durante la estancia.

En Fontfreda cumplimos todos estos puntos. Porque tu perro mayor no es un número más, es parte de nuestra familia durante su estancia.

## Por qué Fontfreda es la residencia ideal para tu perro senior

La **Residencia Canina y Felina Fontfreda**, ubicada en el entorno natural del Alt Penedès, ofrece un servicio pensado también para mascotas que necesitan un segundo hogar de forma habitual o por periodos largos. Entre nuestros servicios destacan la atención de necesidades especiales, la administración de medicamentos y la visita del veterinario, junto con habitaciones individuales cubiertas con calefacción y cinco paseos diarios en amplias zonas de recreo.

Para perros mayores con artrosis o problemas de movilidad, el hecho de disponer de un entorno natural y paseos regulares y controlados es un beneficio claro frente a estancias prolongadas en pisos o en espacios reducidos. Además, el servicio de residencia dentro de la casa está pensado para los animales que requieren un trato más cercano y cariñoso.

## Checklist para preparar a tu perro senior antes del ingreso

- Visita al veterinario unos días antes para revisar su estado general y ajustar la medicación.
- Lleva su dieta habitual y las instrucciones de administración de fármacos (dosis, horarios, vía).
- Comunica a nuestro equipo cualquier limitación de movilidad, alergia o comportamiento.
- Si es posible, realiza una visita previa para que el perro conozca el entorno.
- Deja un objeto con tu olor para reducir el estrés.
- Informa de la pauta de ejercicio habitual para que la respetemos.
- Entrega la cartilla de vacunación y desparasitación al día.

## Qué comunicarnos sobre tu perro senior

Al reservar la estancia, cuéntanos toda la información relevante para el cuidado de tu perro mayor:

- La medicación que toma, con dosis, horarios y vía de administración.
- La dieta habitual y cualquier alergia o intolerancia alimentaria.
- Problemas de movilidad o dolor articular, para adaptar los paseos.
- Problemas sensoriales (pérdida de visión o audición).
- Comportamientos especiales (miedo a ruidos, agresividad por dolor).
- El contacto de tu veterinario habitual.

En Fontfreda cubrimos necesidades especiales y administramos medicación durante la estancia, por lo que esta información es clave para una estancia segura y tranquila.

## Errores frecuentes al dejar a un perro mayor en residencia

- No informar de la medicación completa o de los horarios exactos.
- Cambiar la dieta días antes del ingreso, lo que provoca trastornos digestivos.
- Elegir un centro sin calefacción ni habitaciones individuales.
- Exigir el mismo nivel de ejercicio que a un perro joven.
- No dejar objetos conocidos que reduzcan el estrés.

## Cuándo consultar al veterinario antes de la estancia

Antes de reservar, conviene una revisión veterinaria si el perro presenta dificultad respiratoria, cojera reciente, pérdida de peso inexplicada, aumento de la ingesta de agua o cambios de comportamiento. Estas señales pueden indicar un problema de salud que debe estabilizarse antes del ingreso.

## Preguntas frecuentes

**¿Puedo dejar a mi perro mayor con medicación en Fontfreda?**
Sí. Disponemos de personal formado y servicio veterinario. En Fontfreda administramos medicación y cubrimos necesidades especiales con trato personalizado.

**¿A partir de qué edad un perro necesita cuidados de senior?**
Depende del tamaño: en razas grandes a partir de los 6-7 años y en razas pequeñas a partir de los 8-10 años.

**¿La residencia es segura para un perro con artrosis?**
Sí. Ofrecemos paseos adaptados, habitaciones con calefacción y un entorno natural donde moverse con seguridad. Te invitamos a visitar las instalaciones antes de reservar.

**¿Mi perro senior se estresará en la residencia?**
Con una preparación adecuada, objetos con olor familiar y nuestro equipo de paseos y compañía, la mayoría de perros mayores se adaptan bien e incluso disfrutan de la estancia.

## Conclusión

Un perro senior necesita una residencia canina que entienda su edad y su salud. Elegir un centro con atención veterinaria, medicación, habitaciones con calefacción y paseos adaptados marca la diferencia entre una estancia tranquila y una experiencia estresante. En Fontfreda cuidamos de tu perro mayor como lo harías tú. Si necesitas alojamiento para tu perro senior, **contacta con la Residencia Fontfreda** y te explicamos las opciones de larga estancia y residencia dentro de casa.

---
*Aviso: este artículo es informativo. Para cualquier decisión sobre la salud de tu mascota senior, consulta siempre con tu veterinario.*`,
    author: "Mkt Web 360",
    date: "06 September 2026",
    category: "Perros",
    slug: "perro-senior-residencia-canina-cuidados",
  },
];

export { blogPosts };

export default function Blog() {
  const [location] = useLocation();
  const isEnglish = location.startsWith("/en");
  const currentPath = "/blog";

  const t = isEnglish ? {
    title: "Fontfreda Blog",
    subtitle: "Tips, guides and articles about dog and cat care. Learn from animal welfare experts.",
    readMore: "Read more",
    blogPrefix: "/en/blog",
  } : {
    title: "Blog Fontfreda",
    subtitle: "Consejos, guías y artículos sobre el cuidado de perros y gatos. Aprende de expertos en bienestar animal.",
    readMore: "Leer más",
    blogPrefix: "/blog",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={isEnglish ? "Fontfreda Blog | Tips on Dog and Cat Care" : "Blog Fontfreda | Consejos sobre Cuidado de Perros y Gatos"}
        description={isEnglish ? "Blog with articles on dog and cat care. Tips on behavior, health, nutrition, travel, adoption and animal welfare. By industry professionals." : "Blog con artículos sobre cuidado de perros y gatos. Consejos de comportamiento, salud, alimentación, viajes, adopción y bienestar animal. Por profesionales del sector."}
        keywords={isEnglish ? "dog and cat blog, dog tips, cat care, dog behavior, cat welfare, veterinary blog" : "blog perros y gatos, consejos perros, cuidado gatos, comportamiento canino, bienestar felino, blog veterinario"}
        canonical={isEnglish ? "https://www.fontfreda.net/en/blog" : "https://www.fontfreda.net/blog"}
        language={isEnglish ? "en" : "es"}
      />
      <HrefLang currentPath={currentPath} />
      <Header />

      <main className="flex-grow">
        <section className="py-20 bg-secondary border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-primary mb-4">{t.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => {
                const displayTitle = isEnglish && post.titleEn ? post.titleEn : post.title;
                const displayExcerpt = isEnglish && post.excerptEn ? post.excerptEn : post.excerpt;
                const displayCategory = isEnglish && post.categoryEn ? post.categoryEn : post.category;

                return (
                  <article
                    key={post.id}
                    className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                  >
                    {post.image ? (
                      <div className="w-full h-48 overflow-hidden bg-muted">
                        <img
                          src={post.image}
                          alt={displayTitle}
                          title={displayTitle}
                          loading="lazy"
                          decoding="async"
                          width="400"
                          height="192"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📚</div>
                          <p className="text-xs text-muted-foreground">{displayCategory}</p>
                        </div>
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-grow">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                        {displayCategory}
                      </span>

                      <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">{displayTitle}</h2>

                      <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">{displayExcerpt}</p>

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

                      <Link
                        href={`${t.blogPrefix}/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                      >
                        {t.readMore}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
