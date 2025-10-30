export type Lang = "es" | "en" | "pt" | "fr";

export type LessonId =
  | "restoration"
  | "plan-of-salvation"
  | "gospel-of-jesus-christ"
  | "commandments"
  | "laws-and-ordinances";

export type LessonContent = {
  title: string;
  objective: string;
  oneLiner: string;
  tags?: string[];
  scriptures: { ref: string; text: string }[];
  outline: { title: string; bullets: string[]; icon?: string }[];
  media: { label: string; url: string; kind: "video" | "pdf" | "link" }[];
  commitments: string[];
  closing: string;
  notesHelp: string;
};

export const CONTENT: Record<LessonId, Record<Lang, LessonContent>> = {
  "plan-of-salvation": {
    es: {
      title: "Plan de Salvación",
      objective: "Enseñar el propósito de la vida, el papel central de Jesucristo y el camino de vuelta a Dios.",
      oneLiner: "Dios tiene un plan perfecto de felicidad; por Cristo hallamos propósito, paz y vida eterna.",
      tags: ["plan", "propósito", "Cristo", "vida eterna"],
      scriptures: [
        { ref: "Juan 3:16", text: "De tal manera amó Dios al mundo…" },
        { ref: "Moisés 1:39", text: "La obra y la gloria de Dios: vida eterna del hombre." },
        { ref: "Alma 34:8–9", text: "Cristo viene para redimir a Su pueblo." },
      ],
      outline: [
        { title: "Propósito de la vida", bullets: ["Somos hijos de Dios", "Tiempo de prueba y crecimiento"] },
        { title: "Cristo es el centro", bullets: ["Expiación y esperanza", "Resurrección para todos"] },
        { title: "Progresamos por convenios", bullets: ["Fe, arrepentimiento, bautismo", "Don del Espíritu Santo"] },
      ],
      media: [
        { label: "Video: El plan de Dios", url: "https://www.churchofjesuschrist.org/media?lang=spa", kind: "video" },
        { label: "Infografía (PDF)", url: "https://example.org/plan-salvacion.pdf", kind: "pdf" },
      ],
      commitments: ["¿Leerías Alma 32 y orarías?", "¿Vendrías a la reunión sacramental?"],
      closing: "Testifica del amor de Dios y del propósito eterno en Cristo.",
      notesHelp: "Notas sobre propósito, expiación y convenios:",
    },
    en: {
      title: "Plan of Salvation",
      objective: "Teach life’s purpose, Christ’s central role, and the path back to God.",
      oneLiner: "God has a plan of happiness; through Christ we find purpose, peace, and eternal life.",
      scriptures: [
        { ref: "John 3:16", text: "For God so loved the world…" },
        { ref: "Moses 1:39", text: "God’s work and glory: eternal life of man." },
        { ref: "Alma 34:8–9", text: "This life is the time to prepare to meet God." },
      ],
      outline: [
        { title: "Purpose of life", bullets: ["Children of God", "Time to learn and grow"] },
        { title: "Christ is central", bullets: ["Atonement and hope", "Resurrection for all"] },
        { title: "Covenant path", bullets: ["Faith, repentance, baptism", "Gift of the Holy Ghost"] },
      ],
      media: [
        { label: "Video: God’s Plan", url: "https://www.churchofjesuschrist.org/media?lang=eng", kind: "video" },
        { label: "Infographic (PDF)", url: "https://example.org/plan-of-salvation.pdf", kind: "pdf" },
      ],
      commitments: ["Will you read Alma 32 and pray?", "Will you attend sacrament meeting?"],
      closing: "Testify of God’s love and the eternal purpose in Christ.",
      notesHelp: "Notes on purpose, Atonement, covenants:",
    },
    pt: {
      title: "Plano de Salvação",
      objective: "Ensinar o propósito da vida, o papel central de Jesus Cristo e o caminho de volta a Deus.",
      oneLiner: "Deus tem um plano de felicidade; em Cristo encontramos propósito, paz e vida eterna.",
      scriptures: [
        { ref: "João 3:16", text: "Porque Deus amou o mundo…" },
        { ref: "Moisés 1:39", text: "Obra e glória de Deus: vida eterna do homem." },
        { ref: "Alma 34:8–9", text: "Cristo virá para redimir Seu povo." },
      ],
      outline: [
        { title: "Propósito da vida", bullets: ["Filhos de Deus", "Tempo de prova e crescimento"] },
        { title: "Cristo é central", bullets: ["Expiação e esperança", "Ressurreição para todos"] },
        { title: "Caminho dos convênios", bullets: ["Fé, arrependimento, batismo", "Dom do Espírito Santo"] },
      ],
      media: [
        { label: "Vídeo: O Plano de Deus", url: "https://www.churchofjesuschrist.org/media?lang=por", kind: "video" },
        { label: "Infográfico (PDF)", url: "https://example.org/plano-de-salvacao.pdf", kind: "pdf" },
      ],
      commitments: ["Você leria Alma 32 e oraria?", "Participaria da reunião sacramental?"],
      closing: "Testifique do amor de Deus e do propósito eterno em Cristo.",
      notesHelp: "Anotações sobre propósito, Expiação e convênios:",
    },
    fr: {
      title: "Plan du Salut",
      objective: "Enseigner le but de la vie, le rôle central de Jésus-Christ et le chemin vers Dieu.",
      oneLiner: "Dieu a un plan de bonheur; par le Christ nous trouvons but, paix et vie éternelle.",
      scriptures: [
        { ref: "Jean 3:16", text: "Car Dieu a tant aimé le monde…" },
        { ref: "Moïse 1:39", text: "Œuvre et gloire de Dieu : vie éternelle de l’homme." },
        { ref: "Alma 34:8–9", text: "Le Christ viendra racheter Son peuple." },
      ],
      outline: [
        { title: "But de la vie", bullets: ["Enfants de Dieu", "Temps d’épreuve et de croissance"] },
        { title: "Le Christ est central", bullets: ["Expiation et espérance", "Résurrection pour tous"] },
        { title: "Chemin des alliances", bullets: ["Foi, repentance, baptême", "Don du Saint-Esprit"] },
      ],
      media: [
        { label: "Vidéo : Le plan de Dieu", url: "https://www.churchofjesuschrist.org/media?lang=fra", kind: "video" },
        { label: "Infographie (PDF)", url: "https://example.org/plan-du-salut.pdf", kind: "pdf" },
      ],
      commitments: ["Lirez-vous Alma 32 et prierez-vous ?", "Viendrez-vous à la Sainte-Cène ?"],
      closing: "Témoignez de l’amour de Dieu et du but éternel en Christ.",
      notesHelp: "Notes sur le but, l’Expiation et les alliances :",
    },
  },
  "restoration": {
    es: {
      title: "La Restauración del Evangelio de Jesucristo",
      objective: "Explicar que Dios llama profetas y que por medio de José Smith restauró Su Iglesia y autoridad.",
      oneLiner: "Dios ha hablado de nuevo mediante un profeta; la Iglesia de Cristo está otra vez en la tierra.",
      tags: ["restauración", "profeta", "José Smith", "Iglesia"],
      scriptures: [
        { ref: "Efesios 4:11–14", text: "Profetas y apóstoles para perfeccionar a los santos." },
        { ref: "Santiago 1:5", text: "Si alguno tiene falta de sabiduría, pídala a Dios." },
        { ref: "JSH 1:16–17", text: "La Primera Visión: “Este es mi Hijo Amado…”" },
      ],
      outline: [
        { title: "Dios habla por profetas", bullets: ["Amor de Padre Celestial", "Patrón bíblico de revelación"] },
        { title: "Apostasía", bullets: ["Pérdida de autoridad", "Necesidad de restauración"] },
        { title: "José Smith", bullets: ["Oró con fe (Sant 1:5)", "Primera Visión y restauración"] },
      ],
      media: [
        { label: "Video: La Restauración", url: "https://www.churchofjesuschrist.org/media/video/2013-06-0010-la-restauracion?lang=spa", kind: "video" },
        { label: "Folleto PDF: La Restauración", url: "https://www.churchofjesuschrist.org/study/manual/preach-my-gospel/lesson-1-the-message-of-the-restoration?lang=spa", kind: "pdf" },
      ],
      commitments: ["¿Orarías para saber si José Smith fue un profeta?", "¿Leerías su testimonio y asistirías a la reunión sacramental?"],
      closing: "Testifica que Dios responde oraciones y que hoy hay profetas vivientes.",
      notesHelp: "Impresiones y preguntas sobre la Restauración:",
    },
    en: {
      title: "The Restoration of the Gospel of Jesus Christ",
      objective: "Teach that God calls prophets and restored His Church and priesthood through Joseph Smith.",
      oneLiner: "God speaks again through a living prophet; Christ’s Church is on the earth today.",
      scriptures: [
        { ref: "Ephesians 4:11–14", text: "Prophets and apostles to perfect the saints." },
        { ref: "James 1:5", text: "If any lack wisdom, let him ask of God." },
        { ref: "JS—H 1:16–17", text: "First Vision: “This is My Beloved Son.”" },
      ],
      outline: [
        { title: "God speaks by prophets", bullets: ["Loving Father", "Biblical pattern of revelation"] },
        { title: "Apostasy", bullets: ["Loss of authority", "Need for a restoration"] },
        { title: "Joseph Smith", bullets: ["Prayed with faith (James 1:5)", "First Vision and restoration"] },
      ],
      media: [
        { label: "Video: The Restoration", url: "https://www.churchofjesuschrist.org/media/video/2013-06-0010-the-restoration?lang=eng", kind: "video" },
        { label: "Pamphlet PDF", url: "https://www.churchofjesuschrist.org/study/manual/preach-my-gospel/lesson-1-the-message-of-the-restoration?lang=eng", kind: "pdf" },
      ],
      commitments: ["Will you pray to know that Joseph Smith was a prophet?", "Will you read his testimony and attend sacrament meeting?"],
      closing: "Bear testimony that God answers prayers and has restored His Church.",
      notesHelp: "Impressions and questions about the Restoration:",
    },
    pt: {
      title: "A Restauração do Evangelho de Jesus Cristo",
      objective: "Ensinar que Deus chama profetas e restaurou Sua Igreja e sacerdócio por meio de Joseph Smith.",
      oneLiner: "Deus fala novamente por um profeta vivo; a Igreja de Cristo está na Terra hoje.",
      scriptures: [
        { ref: "Efésios 4:11–14", text: "Profetas e apóstolos para aperfeiçoar os santos." },
        { ref: "Tiago 1:5", text: "Se alguém tem falta de sabedoria, peça a Deus." },
        { ref: "JS—H 1:16–17", text: "Primeira Visão: “Este é Meu Filho Amado.”" },
      ],
      outline: [
        { title: "Deus fala por profetas", bullets: ["Pai amoroso", "Padrão bíblico de revelação"] },
        { title: "Apostasia", bullets: ["Perda de autoridade", "Necessidade de restauração"] },
        { title: "Joseph Smith", bullets: ["Orou com fé (Tg 1:5)", "Primeira Visão e restauração"] },
      ],
      media: [
        { label: "Vídeo: A Restauração", url: "https://www.churchofjesuschrist.org/media/video/2013-06-0010-a-restauracao?lang=por", kind: "video" },
        { label: "Folheto PDF", url: "https://www.churchofjesuschrist.org/study/manual/preach-my-gospel/lesson-1-the-message-of-the-restoration?lang=por", kind: "pdf" },
      ],
      commitments: ["Você oraria para saber que Joseph Smith foi um profeta?", "Ler o testemunho dele e participar da reunião sacramental?"],
      closing: "Testifique que Deus responde orações e restaurou Sua Igreja.",
      notesHelp: "Impressões e perguntas sobre a Restauração:",
    },
    fr: {
      title: "La Restauration de l’Évangile de Jésus-Christ",
      objective: "Expliquer que Dieu appelle des prophètes et a rétabli Son Église et la prêtrise par Joseph Smith.",
      oneLiner: "Dieu parle à nouveau par un prophète vivant; l’Église du Christ est sur la terre aujourd’hui.",
      scriptures: [
        { ref: "Éphésiens 4:11–14", text: "Prophètes et apôtres pour perfectionner les saints." },
        { ref: "Jacques 1:5", text: "S’il manque de la sagesse, qu’il la demande à Dieu." },
        { ref: "JS—H 1:16–17", text: "Première Vision: «Voici Mon Fils Bien-Aimé.»" },
      ],
      outline: [
        { title: "Dieu parle par des prophètes", bullets: ["Père aimant", "Modèle biblique de révélation"] },
        { title: "Apostasie", bullets: ["Perte de l’autorité", "Besoin d’une restauration"] },
        { title: "Joseph Smith", bullets: ["A prié avec foi (Jac 1:5)", "Première Vision et restauration"] },
      ],
      media: [
        { label: "Vidéo : La Restauration", url: "https://www.churchofjesuschrist.org/media/video/2013-06-0010-la-restauration?lang=fra", kind: "video" },
        { label: "Brochure PDF", url: "https://www.churchofjesuschrist.org/study/manual/preach-my-gospel/lesson-1-the-message-of-the-restoration?lang=fra", kind: "pdf" },
      ],
      commitments: ["Prierez-vous pour savoir que Joseph Smith était un prophète ?", "Lirez-vous son témoignage et assisterez-vous à la Sainte-Cène ?"],
      closing: "Témoignez que Dieu répond aux prières et a rétabli Son Église.",
      notesHelp: "Impressions et questions sur la Restauration :",
    },
  },
  "gospel-of-jesus-christ": {
    es: {
      title: "El Evangelio de Jesucristo",
      objective: "Invitar a ejercer fe en Cristo, arrepentirse, bautizarse, recibir el Espíritu Santo y perseverar.",
      oneLiner: "El evangelio es el camino de fe, arrepentimiento, convenios y perseverar hasta el fin.",
      tags: ["evangelio", "fe", "arrepentimiento", "bautismo"],
      scriptures: [
        { ref: "2 Nefi 31:20", text: "Perseverad con firmeza en Cristo." },
        { ref: "Hechos 2:38", text: "Arrepentíos y bautícese cada uno…" },
        { ref: "Moroni 10:32", text: "Venid a Cristo y perfeccionaos en Él." },
      ],
      outline: [
        { title: "Fe en Jesucristo", bullets: ["Confianza y lealtad a Él", "La fe lleva a la acción"] },
        { title: "Arrepentimiento y Bautismo", bullets: ["Cambio de corazón", "Convenio con Dios"] },
        { title: "Espíritu Santo y Perseverar", bullets: ["Guía y consuelo", "Discípulos constantes"] },
      ],
      media: [
        { label: "Video: El Evangelio de Jesucristo", url: "https://www.churchofjesuschrist.org/media?lang=spa", kind: "video" },
        { label: "Folleto (PDF)", url: "https://example.org/evangelio-de-jesucristo.pdf", kind: "pdf" },
      ],
      commitments: ["¿Se prepararía para el bautismo?", "¿Orará y leerá diariamente?"],
      closing: "Testifica que el Espíritu confirma cuando seguimos a Cristo.",
      notesHelp: "Notas sobre fe, arrepentimiento, bautismo y perseverar:",
    },
    en: {
      title: "The Gospel of Jesus Christ",
      objective: "Invite to exercise faith in Christ, repent, be baptized, receive the Holy Ghost, and endure to the end.",
      oneLiner: "The gospel is the path of faith, repentance, covenants, and enduring discipleship.",
      scriptures: [
        { ref: "2 Nephi 31:20", text: "Press forward with a steadfastness in Christ." },
        { ref: "Acts 2:38", text: "Repent and be baptized every one…" },
        { ref: "Moroni 10:32", text: "Come unto Christ and be perfected in Him." },
      ],
      outline: [
        { title: "Faith in Christ", bullets: ["Trust and loyalty", "Faith leads to action"] },
        { title: "Repentance & Baptism", bullets: ["Change of heart", "Covenant with God"] },
        { title: "Holy Ghost & Enduring", bullets: ["Guidance and comfort", "Steady discipleship"] },
      ],
      media: [
        { label: "Video: The Gospel of Jesus Christ", url: "https://www.churchofjesuschrist.org/media?lang=eng", kind: "video" },
        { label: "Pamphlet (PDF)", url: "https://example.org/gospel-of-jesus-christ.pdf", kind: "pdf" },
      ],
      commitments: ["Will you prepare for baptism?", "Will you pray and read daily?"],
      closing: "Bear testimony that the Spirit confirms as we follow Christ.",
      notesHelp: "Notes on faith, repentance, baptism, enduring:",
    },
    pt: {
      title: "O Evangelho de Jesus Cristo",
      objective: "Convidar a exercer fé em Cristo, arrepender-se, batizar-se, receber o Espírito Santo e perseverar.",
      oneLiner: "O evangelho é o caminho de fé, arrependimento, convênios e perseverança.",
      scriptures: [
        { ref: "2 Néfi 31:20", text: "Prossegui com firmeza em Cristo." },
        { ref: "Atos 2:38", text: "Arrependei-vos e cada um seja batizado…" },
        { ref: "Morôni 10:32", text: "Vinde a Cristo e aperfeiçoai-vos Nele." },
      ],
      outline: [
        { title: "Fé em Cristo", bullets: ["Confiança e lealdade", "A fé leva à ação"] },
        { title: "Arrependimento e Batismo", bullets: ["Mudar o coração", "Convênio com Deus"] },
        { title: "Espírito Santo e Perseverar", bullets: ["Guia e consolo", "Discipulado constante"] },
      ],
      media: [
        { label: "Vídeo: O Evangelho de Jesus Cristo", url: "https://www.churchofjesuschrist.org/media?lang=por", kind: "video" },
        { label: "Folleto (PDF)", url: "https://example.org/evangelho-de-jesus-cristo.pdf", kind: "pdf" },
      ],
      commitments: ["Você se prepararia para o batismo?", "Orar e ler diariamente?"],
      closing: "Testifique que o Espírito confirma quando seguimos a Cristo.",
      notesHelp: "Anotações sobre fé, arrependimento, batismo e perseverança:",
    },
    fr: {
      title: "L’Évangile de Jésus-Christ",
      objective: "Inviter à exercer la foi en Christ, se repentir, se faire baptiser, recevoir le Saint-Esprit et persévérer.",
      oneLiner: "L’Évangile est le chemin de la foi, du repentir, des alliances et de la persévérance.",
      scriptures: [
        { ref: "2 Néphi 31:20", text: "Avancez avec fermeté en Christ." },
        { ref: "Actes 2:38", text: "Repentez-vous et que chacun soit baptisé…" },
        { ref: "Moroni 10:32", text: "Venez au Christ et soyez rendus parfaits en Lui." },
      ],
      outline: [
        { title: "Foi en Christ", bullets: ["Confiance et loyauté", "La foi mène à l’action"] },
        { title: "Repentir & Baptême", bullets: ["Changement de cœur", "Alliance avec Dieu"] },
        { title: "Saint-Esprit & Persévérer", bullets: ["Direction et réconfort", "Discipulat constant"] },
      ],
      media: [
        { label: "Vidéo : L’Évangile de Jésus-Christ", url: "https://www.churchofjesuschrist.org/media?lang=fra", kind: "video" },
        { label: "Brochure (PDF)", url: "https://example.org/evangile-de-jesus-christ.pdf", kind: "pdf" },
      ],
      commitments: ["Vous préparerez-vous pour le baptême ?", "Priez et lisez chaque jour ?"],
      closing: "Témoignez que l’Esprit confirme lorsque nous suivons le Christ.",
      notesHelp: "Notes sur la foi, le repentir, le baptême et persévérer :",
    },
  },
  "commandments": {
    es: {
      title: "Los Mandamientos",
      objective: "Presentar mandamientos clave que nos acercan a Cristo y bendicen la vida diaria.",
      oneLiner: "Guardar mandamientos trae luz, protección y poder para seguir a Cristo.",
      tags: ["mandamientos", "obediencia", "día de reposo", "diezmo"],
      scriptures: [
        { ref: "Juan 14:15", text: "Si me amáis, guardad mis mandamientos." },
        { ref: "DyC 130:20–21", text: "Ley irrevocable: bendiciones por obediencia." },
        { ref: "Mosíah 2:41", text: "Felices por guardar los mandamientos de Dios." },
      ],
      outline: [
        { title: "Principio", bullets: ["Obediencia por amor a Cristo", "Bendiciones prometidas"] },
        { title: "Prácticas", bullets: ["Oración y Escrituras", "Santidad del día de reposo"] },
        { title: "Normas", bullets: ["Ley de castidad", "Palabra de Sabiduría", "Diezmo"] },
      ],
      media: [
        { label: "Video: Vivir los mandamientos", url: "https://www.churchofjesuschrist.org/media?lang=spa", kind: "video" },
        { label: "Guía PDF", url: "https://example.org/mandamientos.pdf", kind: "pdf" },
      ],
      commitments: ["¿Guardará el día de reposo esta semana?", "¿Comenzará el diezmo fielmente?"],
      closing: "Testifica de la paz que llega al obedecer por amor.",
      notesHelp: "Notas sobre obediencia y bendiciones:",
    },
    en: {
      title: "The Commandments",
      objective: "Present key commandments that draw us to Christ and bless daily life.",
      oneLiner: "Keeping commandments brings light, protection, and power to follow Christ.",
      scriptures: [
        { ref: "John 14:15", text: "If ye love me, keep my commandments." },
        { ref: "D&C 130:20–21", text: "Irrevocable law: blessings by obedience." },
        { ref: "Mosiah 2:41", text: "Happy are they who keep the commandments of God." },
      ],
      outline: [
        { title: "Principle", bullets: ["Obedience out of love", "Promised blessings"] },
        { title: "Practices", bullets: ["Prayer & scriptures", "Sabbath holiness"] },
        { title: "Standards", bullets: ["Law of chastity", "Word of Wisdom", "Tithing"] },
      ],
      media: [
        { label: "Video: Living the Commandments", url: "https://www.churchofjesuschrist.org/media?lang=eng", kind: "video" },
        { label: "Guide (PDF)", url: "https://example.org/commandments.pdf", kind: "pdf" },
      ],
      commitments: ["Will you keep the Sabbath day this week?", "Will you begin paying tithing?"],
      closing: "Bear testimony of the peace that comes from loving obedience.",
      notesHelp: "Notes on obedience and blessings:",
    },
    pt: {
      title: "Os Mandamentos",
      objective: "Apresentar mandamentos essenciais que nos aproximam de Cristo e abençoam a vida diária.",
      oneLiner: "Guardar mandamentos traz luz, proteção e poder para seguir a Cristo.",
      scriptures: [
        { ref: "João 14:15", text: "Se me amais, guardai os meus mandamentos." },
        { ref: "D&C 130:20–21", text: "Lei irrevogável: bênçãos pela obediência." },
        { ref: "Mosias 2:41", text: "Felizes os que guardam os mandamentos de Deus." },
      ],
      outline: [
        { title: "Princípio", bullets: ["Obediência por amor", "Bênçãos prometidas"] },
        { title: "Práticas", bullets: ["Oração e escrituras", "Santificar o dia do Senhor"] },
        { title: "Padrões", bullets: ["Lei de castidade", "Palavra de Sabedoria", "Dízimo"] },
      ],
      media: [
        { label: "Vídeo: Viver os Mandamentos", url: "https://www.churchofjesuschrist.org/media?lang=por", kind: "video" },
        { label: "Guia (PDF)", url: "https://example.org/mandamentos.pdf", kind: "pdf" },
      ],
      commitments: ["Guardará o dia do Senhor nesta semana?", "Começará a pagar o dízimo?"],
      closing: "Testifique da paz que vem da obediência por amor.",
      notesHelp: "Anotações sobre obediência e bênçãos:",
    },
    fr: {
      title: "Les Commandements",
      objective: "Présenter des commandements essentiels qui nous rapprochent du Christ et bénissent la vie quotidienne.",
      oneLiner: "Observer les commandements apporte lumière, protection et force pour suivre le Christ.",
      scriptures: [
        { ref: "Jean 14:15", text: "Si vous m’aimez, gardez mes commandements." },
        { ref: "D&A 130:20–21", text: "Loi irrévocable : bénédictions par l’obéissance." },
        { ref: "Mosiah 2:41", text: "Heureux ceux qui gardent les commandements de Dieu." },
      ],
      outline: [
        { title: "Principe", bullets: ["Obéissance par amour", "Bénédictions promises"] },
        { title: "Pratiques", bullets: ["Prière & Écritures", "Sainteté du sabbat"] },
        { title: "Normes", bullets: ["Loi de chasteté", "Parole de Sagesse", "Dîme"] },
      ],
      media: [
        { label: "Vidéo : Vivre les commandements", url: "https://www.churchofjesuschrist.org/media?lang=fra", kind: "video" },
        { label: "Guide (PDF)", url: "https://example.org/commandements.pdf", kind: "pdf" },
      ],
      commitments: ["Garderez-vous le jour du sabbat cette semaine ?", "Commencerez-vous à payer la dîme ?"],
      closing: "Témoignez de la paix qui vient de l’obéissance aimante.",
      notesHelp: "Notes sur l’obéissance et les bénédictions :",
    },
  },
  "laws-and-ordinances": {
    es: {
      title: "Leyes y Ordenanzas",
      objective: "Enseñar la importancia del sacerdocio, las ordenanzas y la obra del templo y misional.",
      oneLiner: "Dios nos bendice mediante ordenanzas del sacerdocio para avanzar en el camino del convenio.",
      tags: ["sacerdocio", "ordenanzas", "templo", "servicio"],
      scriptures: [
        { ref: "Hebreos 5:4", text: "Nadie toma para sí esta honra, sino el llamado por Dios." },
        { ref: "DyC 84:20", text: "En las ordenanzas se manifiesta el poder de la divindad." },
        { ref: "Mateo 28:19–20", text: "Id y haced discípulos; bautizad y enseñad." },
      ],
      outline: [
        { title: "Sacerdocio", bullets: ["Autoridad y llaves", "Servicio semejante a Cristo"] },
        { title: "Ordenanzas y Templo", bullets: ["Bautismo y confirmación", "Endowments y sellamientos"] },
        { title: "Obra y servicio", bullets: ["Obra misional", "Ministrar y servir"] },
      ],
      media: [
        { label: "Video: El poder del sacerdocio", url: "https://www.churchofjesuschrist.org/media?lang=spa", kind: "video" },
        { label: "Guía de templo (PDF)", url: "https://example.org/templo-ordenanzas.pdf", kind: "pdf" },
      ],
      commitments: ["¿Buscará prepararse para el templo?", "¿Compartirá el evangelio con un amigo esta semana?"],
      closing: "Testifica de las promesas del convenio y del servicio en el reino.",
      notesHelp: "Notas sobre sacerdocio, templo y servicio:",
    },
    en: {
      title: "Laws and Ordinances",
      objective: "Teach the importance of priesthood, ordinances, and temple and missionary work.",
      oneLiner: "God blesses us through priesthood ordinances as we progress on the covenant path.",
      scriptures: [
        { ref: "Hebrews 5:4", text: "No man taketh this honour unto himself." },
        { ref: "D&C 84:20", text: "In the ordinances… the power of godliness is manifest." },
        { ref: "Matthew 28:19–20", text: "Go, teach, baptize, and make disciples." },
      ],
      outline: [
        { title: "Priesthood", bullets: ["Authority and keys", "Christlike service"] },
        { title: "Ordinances & Temple", bullets: ["Baptism and confirmation", "Endowment and sealing"] },
        { title: "Work & Service", bullets: ["Missionary work", "Ministering and service"] },
      ],
      media: [
        { label: "Video: Power of the Priesthood", url: "https://www.churchofjesuschrist.org/media?lang=eng", kind: "video" },
        { label: "Temple Guide (PDF)", url: "https://example.org/temple-ordinances.pdf", kind: "pdf" },
      ],
      commitments: ["Will you prepare to attend the temple?", "Will you share the gospel with a friend this week?"],
      closing: "Bear testimony of covenant blessings and service in God’s kingdom.",
      notesHelp: "Notes on priesthood, temple, and service:",
    },
    pt: {
      title: "Leis e Ordenanças",
      objective: "Ensinar a importância do sacerdócio, das ordenanças e da obra do templo e missionária.",
      oneLiner: "Deus nos abençoa por meio de ordenanças do sacerdócio no caminho do convênio.",
      scriptures: [
        { ref: "Hebreus 5:4", text: "Ninguém toma para si essa honra, senão o chamado por Deus." },
        { ref: "D&C 84:20", text: "Nas ordenanças manifesta-se o poder da divindade." },
        { ref: "Mateus 28:19–20", text: "Ide, ensinai, batizai e fazei discípulos." },
      ],
      outline: [
        { title: "Sacerdócio", bullets: ["Autoridade e chaves", "Serviço cristão"] },
        { title: "Ordenanças & Templo", bullets: ["Batismo e confirmação", "Investidura e selamento"] },
        { title: "Obra & Serviço", bullets: ["Obra missionária", "Ministrar e servir"] },
      ],
      media: [
        { label: "Vídeo: Poder do Sacerdócio", url: "https://www.churchofjesuschrist.org/media?lang=por", kind: "video" },
        { label: "Guia do Templo (PDF)", url: "https://example.org/templo-ordenancas.pdf", kind: "pdf" },
      ],
      commitments: ["Você se preparará para ir ao templo?", "Compartilhará o evangelho com um amigo?"],
      closing: "Testifique das bênçãos do convênio e do serviço no reino de Deus.",
      notesHelp: "Anotações sobre sacerdócio, templo e serviço:",
    },
    fr: {
      title: "Lois et Ordonnances",
      objective: "Enseigner l’importance de la prêtrise, des ordonnances, et du temple et de l’œuvre missionnaire.",
      oneLiner: "Dieu nous bénit par les ordonnances de la prêtrise sur le chemin de l’alliance.",
      scriptures: [
        { ref: "Hébreux 5:4", text: "Nul ne s’attribue cette dignité, si ce n’est appelé de Dieu." },
        { ref: "D&A 84:20", text: "Dans les ordonnances, le pouvoir de la divinité se manifeste." },
        { ref: "Matthieu 28:19–20", text: "Allez, enseignez, baptisez, faites des disciples." },
      ],
      outline: [
        { title: "Prêtrise", bullets: ["Autorité et clés", "Service semblable au Christ"] },
        { title: "Ordonnances & Temple", bullets: ["Baptême et confirmation", "Dotation et scellement"] },
        { title: "Œuvre & Service", bullets: ["Œuvre missionnaire", "Ministère et service"] },
      ],
      media: [
        { label: "Vidéo : Le pouvoir de la prêtrise", url: "https://www.churchofjesuschrist.org/media?lang=fra", kind: "video" },
        { label: "Guide du temple (PDF)", url: "https://example.org/temple-ordonnances.pdf", kind: "pdf" },
      ],
      commitments: ["Vous préparerez-vous pour aller au temple ?", "Partagerez-vous l’Évangile avec un ami ?"],
      closing: "Témoignez des bénédictions de l’alliance et du service dans le royaume de Dieu.",
      notesHelp: "Notes sur la prêtrise, le temple et le service :",
    },
  },
};

export function getLesson(lesson: LessonId, lang: Lang) {
  const byLang = CONTENT[lesson];
  return byLang?.[lang];
}


