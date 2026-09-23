export type SectionId = 'bio' | 'projects' | 'media' | 'contact';
const publicBase = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const mediaImage = (file: string) => `${publicBase}media/images/${file}`;

export interface NavigationItem { label: string; href: string; }
export interface ArtistProfile {
  name: string; descriptor: string; introduction: string; biography: string[];
  heroImage: string; heroImageAlt: string; portraitImage: string; portraitImageAlt: string;
}
export interface Project {
  slug: string; title: string; description: string; image: string; imageAlt: string; videoUrl: string;
  details?: string[];
}
export interface DocumentItem { label: string; description: string; url?: string; }
export interface GalleryImage { src: string; alt: string; }
export interface ContactLink { label: string; url?: string; }
export interface SiteContent {
  meta: { title: string; description: string; };
  artist: ArtistProfile;
  navigation: NavigationItem[];
  sections: Record<SectionId, { eyebrow: string; title: string; description?: string }>;
  projects: Project[];
  media: { documents: DocumentItem[]; gallery: GalleryImage[]; };
  contact: {
    title: string; text: string; image: string; imageAlt: string; email: string;
    emailIsPlaceholder: boolean; links: ContactLink[];
  };
}

// All artist-specific copy, media and external links live here.
// Replace the placeholder text and paths without modifying visual components.
export const siteContent: SiteContent = {
  meta: {
    title: 'Carlos Arriezu',
    description: 'Web oficial — información, proyectos, media y contacto.',
  },
  artist: {
    name: 'Carlos Arriezu',
    descriptor: 'Músico · artista',
    introduction: 'Un espacio para descubrir proyectos, imágenes y novedades.',
    biography: [
      'Llegué al mundo una fría mañana de Enero en Pamplona, bajo la influencia de los astros de <strong>Acuario y Capricornio</strong>. Crecí en el seno de una familia culturalmente inquieta que supo transmitirme un <strong>gran amor y respeto por la música</strong>, los cuales todavía conservo. Desde muy niño recibí la influencia de <strong>grandes maestros</strong> como Bach, Vivaldi, Falla, Strauss, Karl Orff… y de otros grandes como Louis Armstrong, Pretenders o Blondie.',
      'Será por ello que algunos críticos comentan que mi estilo compositivo es <strong>ecléctico</strong>, que no responde a los cánones típicos de mi formación clásico-jazzística…',
      'Intento que los comentarios no me afecten demasiado: sigo estudiando e incorporando estilos y nuevos sentimientos a mis composiciones. La vida y la música son un continuo fluir y me siento afortunado por recorrer <em>este camino</em>:',
      '“El de una vida de música”',
    ],
    heroImage: mediaImage('Carlos1.png'),
    heroImageAlt: 'Retrato principal del artista',
    portraitImage: mediaImage('Carlos7.png'),
    portraitImageAlt: 'Retrato del artista',
  },
  navigation: [
    { label: 'Inicio', href: '/' }, { label: 'Proyectos', href: '/projects' },
    { label: 'Media', href: '/media' },
    { label: 'Contacto', href: '/contact' },
  ],
  sections: {
    bio: { eyebrow: '01 / Perfil', title: 'Bio' },
    projects: { eyebrow: '02 / Selección', title: 'Proyectos', description: 'Una selección audiovisual de proyectos.' },
    media: { eyebrow: '03 / Material', title: 'Media' },
    contact: { eyebrow: '04 / Contacto', title: 'Hablemos' },
  },
  projects: [
    {
      slug: 'ancients',
      title: 'Ancients',
      description: 'ANCIENTS nos transporta a un mundo de introspección y emocionalidad profundas. Es el mundo élfico y épico el que toma relevancia en este trabajo. Compuesto, grabado, editado e íntegramente producido por Carlos Arriezu, se trata de un trabajo claramente dirigido al mundo cinematográfico.',
      image: mediaImage('Carlos4.png'),
      imageAlt: 'Ancients',
      videoUrl: 'https://www.youtube.com/watch?v=l96YQ1t8BZ0',
      details: [
        'Las más de veinte composiciones que lo conforman, con un hilo conductor común en torno a la música celta, invitan al oyente a emprender un camino hacia su mundo interior.',
        'El título de este trabajo resume este viaje hacia lo auténtico, hacia lo más íntimo de cada uno de nosotros. Y no hay nada más íntimo que la herencia que nuestros ancestros, con el devenir de los tiempos, han ido depositando en nuestro propio ser, en nuestra esencia. Este es el sentido de este trabajo: servir de inspiración para que la persona emprenda este viaje que le permita escuchar los susurros de nuestros ancestros y descifrar en el polvo del camino las voces de quienes recorrieron estos mismos senderos, guiándonos hasta lo más profundo de nuestro ser.',
      ],
    },
    {
      slug: 'baztan',
      title: 'Baztán',
      description: 'BAZTÁN es un proyecto inspirado en la música folklórica original de este valle navarro, dedicado a mi madre. Con una alta carga emocional, pretende emular la transmisión de fábulas ancestrales, como si estas fueran susurradas al oído de la audiencia.',
      image: mediaImage('Carlos2.png'),
      imageAlt: 'Baztán',
      videoUrl: 'https://www.youtube.com/watch?v=m1zy8tR32ls',
      details: [
        'Os propongo un viaje a través de la cultura vasco navarra y pirenaica, siempre desde mi particular prisma. Está compuesto por diecinueve melodías íntimas que hablan de Naturaleza, Mitología, Ancestros y Tradiciones, trasladando al oyente hacia un lugar mágico y atemporal, e invitándole a conectar con sus emociones más profundas.',
        'Doble álbum disponible en formato usb, dentro de un bonito estuche de madera grabado. Para más información acerca del envío, por favor contacta con carlosarriezu.music@gmail.com.',
      ],
    },
    {
      slug: 'caraband',
      title: 'Caraband',
      description: 'Tres discos que nacen sin apenas presupuesto, sosteniéndose gracias a la ilusión y el buen hacer de grandes profesionales y amantes del Jazz.',
      image: mediaImage('Carlos3.png'),
      imageAlt: 'Caraband',
      videoUrl: 'https://www.youtube.com/watch?v=jEYJIqHAH1k',
      details: [
        'Carlos Arriezu Jazz Band',
        '“Nostalgic Waltz” vio la luz en 2011 y aunaba estilos jazzísticos como la Balada, el Funk y la Bossa Nova.',
        'El segundo de ellos, “Now is the time”, se estrenó solamente dos años después.',
        'Finalmente y gracias al esfuerzo de numerosos mecenas anónimos que colaboraron altruistamente con nosotros a través del crowdfunding, pudimos lanzar el último disco de este ilusionante proyecto jazzístico: “Caraband Effects”.',
        'Tras un año de pandemia y mucho tiempo para pensar y componer, en 2021 publicamos el cuarto disco de la banda titulado “A Dream of Jazz”: un proyecto creado con mucho cariño, reconocido como semifinalista en los Premios MIN del año 2022, dentro de la categoría “Mejor álbum de jazz”.',
        'Trabajo disponible en formato USB y en el canal de Spotify de Carlos Arriezu.',
      ],
    },
    {
      slug: 'equinoccio',
      title: 'Equinoccio',
      description: 'Dos culturas, dos caminos que se encuentran, dos mundos que nacen y se desarrollan en los dos extremos más alejados: así es EQUINOCCIO.',
      image: mediaImage('Carlos8.png'),
      imageAlt: 'Equinoccio',
      videoUrl: 'https://www.youtube.com/watch?v=qs-OuRt871E',
      details: [
        'Como el momento culmen de las estaciones. Como el encuentro vital de dos almas que nacieron para conocerse y mezclarse: Desde el Oeste, con una numerosa mezcla cultural, proveniente de los cantos europeos y de las danzas y tradiciones africanas, nace el Jazz. Desde el Este, recogiendo artes norteafricanas, de Europa del Este, India y lugares de Oriente Medio, nace el Flamenco.',
        'Dos ríos, dos estaciones que recogen las aguas de muy diferentes lugares y culturas, que crecen en su propio y particular mestizaje hasta encontrarse.',
        'Un repertorio totalmente original compuesto por mí y por Jesús Carbonell: una guitarra muestra el Flamenco, un piano expresa el Jazz y ambos crecen en perfecta fusión.',
        'Es en ese momento donde se produce El cenit, El encuentro: nuestro EQUINOCCIO.',
      ],
    },
    {
      slug: 'cervantes-a-traves-del-tiempo',
      title: 'Cervantes a través del tiempo',
      description: 'Concierto a Piano y Voz creado con finalidad educativo-cultural, que recorre diferentes épocas musicales en un innovador desarrollo compositivo combinado con textos originales de Cervantes, en ocasiones recitados, en ocasiones cantados.',
      image: mediaImage('Carlos5.png'),
      imageAlt: 'Cervantes a través del tiempo',
      videoUrl: 'https://youtu.be/tSmuigW-oP0',
      details: [
        'El punto de partida es la Edad Media, con su música monofónica, seguida por obras de estilos y autores clave en cada época: Barroco, Clasicismo, Romanticismo, Impresionismo, Jazz e incluso Flamenco.',
        'Todo ello en curiosa armonía con textos originales cervantinos, generando una experiencia enriquecedora y exótica.',
        'Una propuesta diferente que he tenido el honor de presentar en la mismísima Casa Natal de Cervantes junto con Melisa Fernández y que se dirige a cualquier entidad cultural que desee profundizar en la figura de nuestro más afamado escritor, a través de un enfoque diferente al que podemos encontrarnos habitualmente.',
      ],
    },
    {
      slug: 'carlos-arriezu-4-estaciones',
      title: 'Carlos Arriezu, 4 ESTACIONES',
      description: 'Es un proyecto personal con temas originales compuestos por mí, en el que pretendo plasmar las emociones y recuerdos que me provocan las diferentes estaciones del año.',
      image: mediaImage('Carlos6.png'),
      imageAlt: 'Carlos Arriezu, 4 ESTACIONES',
      videoUrl: 'https://www.youtube.com/watch?v=gnyE8r2xJjM',
      details: [
        'En un concierto estructurado sin pausas recorro mi sentir en cada una de estas estaciones, haciendo viajar al público a través de diferentes estilos compositivos: Jazz, Flamenco, Improvisación, Pop, Latin-Jazz, Blues…',
        'PRIMAVERA: Sur, flores, caballos, sol, música, cantes, aires flamencos, luz, duende. Cuatro temas para esta estación en la que renace la vida.',
        'VERANO: El Pop y el Latin nos transportan al calor, el refresco de limón, las noches de conversaciones interminables, de paseos por el mar o el campo; noches de temperatura perfecta. Nostalgia también de juventud y deseos inalcanzables…',
        'OTOÑO: Es en esta estación cuando los bosques de mi tierra natal se tiñen de una luz y energía especiales, de un color espectacular, natural, mágico. Emociones expresadas en concreto desde el Valle del Baztán, en Navarra, al cual he estado tan ligado. Cuatro temas que hacen honor a mis ancestros, definen mi cultura y reflejan mi estado de ánimo durante esta estación y desde este lugar.',
        'INVIERNO: El concierto se despide con el sentir del Nueva York o el Chicago helados, donde el Jazz nace y desde donde viaja creciendo a través de las diferentes culturas que lo saborean, lo disfrutan y lo adoptan.',
      ],
    },
    {
      slug: 'proyecto-07',
      title: 'Proyecto 07',
      description: 'Proyecto existente con video añadido para completar la selección.',
      image: mediaImage('Carlos9.png'),
      imageAlt: 'Proyecto 07',
      videoUrl: 'https://www.youtube.com/watch?v=c_LroZ2BfvI',
    },
  ],
  media: {
    documents: [
      { label: 'CV', description: 'Archivo pendiente de añadir.' },
      { label: 'Press kit', description: 'Archivo pendiente de añadir.' },
    ],
    gallery: [
      { src: mediaImage('Carlos1.png'), alt: 'Fotografía del artista' },
      { src: mediaImage('Carlos4.png'), alt: 'Fotografía de una actuación' },
      { src: mediaImage('Carlos8.png'), alt: 'Retrato del artista junto al piano' },
      { src: mediaImage('Carlos9.png'), alt: 'Retrato del artista' },
    ],
  },
  contact: {
    title: 'Contacto', text: 'Me encanta compartir mis proyectos y formar parte de los de otras personas. Estoy abierto a escuchar cualquier propuesta: ponte en contacto conmigo y juntos desarrollaremos un evento o una obra a medida de tus deseos y necesidades.',
    image: mediaImage('Carlos7.png'), imageAlt: 'Retrato del artista',
    email: 'carlosarriezu.music@gmail.com', emailIsPlaceholder: false,
    links: [
      { label: 'Facebook', url: 'https://www.facebook.com/carlos.arriezuvera' },
      { label: 'Instagram', url: 'https://www.instagram.com/arriezuvera/?hl=en' },
      { label: 'Spotify', url: 'https://open.spotify.com/artist/3ZbHQK7iHlDEze8TDJu1R4' },
      { label: 'YouTube', url: 'https://www.youtube.com/channel/UCSQYA4C9QLe2-wSVkn-sY4Q' },
    ],
  },
};
