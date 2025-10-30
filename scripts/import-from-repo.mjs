import fs from 'node:fs/promises'
import path from 'node:path'

const SOURCE = process.env.SOURCE_DIR ?? '../Diario-Misional-Web/content/lessons'
const OUT = path.resolve('./src/lib/lessons.ts')
const langs = ['es','en','pt','fr']
const slugs = ['restoration','plan-of-salvation','gospel-of-jesus-christ','commandments','laws-and-ordinances']

function parseMDX(mdx){
  // Muy simple: extrae títulos "##" y viñetas "- " como secciones
  const sections=[]; let cur=null
  const push=()=>{ if(cur) sections.push(cur) }
  for(const raw of mdx.split('\n')){
    const line = raw.trim()
    if(line.startsWith('## ')){ push(); cur={ title: line.slice(3), bullets: [] } }
    else if(line.startsWith('- ')){ cur ||= { title:'Sección', bullets: [] }; cur.bullets.push(line.slice(2)) }
  }
  push();
  return sections
}

const content = {}
for(const slug of slugs){
  content[slug] = {}
  for(const lang of langs){
    const file = path.resolve(SOURCE, lang, `${slug}.mdx`)
    const mdx = await fs.readFile(file,'utf8').catch(()=>null)
    if(!mdx) continue
    const secs = parseMDX(mdx)
    content[slug][lang] = {
      title: secs[0]?.title || slug,
      objective: '',
      oneLiner: '',
      scriptures: [],
      outline: secs.map(s=>({ title: s.title, bullets: s.bullets||[] })),
      media: [],
      commitments: [],
      closing: '',
      notesHelp: 'Notas…',
    }
  }
}

const header = `export type Lang = "es" | "en" | "pt" | "fr";
export type LessonId = 'restoration'|'plan-of-salvation'|'gospel-of-jesus-christ'|'commandments'|'laws-and-ordinances';
export type LessonContent = { title:string; objective:string; oneLiner:string; tags?:string[]; scriptures:{ref:string;text:string}[]; outline:{title:string;bullets:string[];icon?:string}[]; media:{label:string;url:string;kind:'video'|'pdf'|'link'}[]; commitments:string[]; closing:string; notesHelp:string };
export const CONTENT: Record<LessonId, Record<Lang, LessonContent>> = `

const out = header + JSON.stringify(content,null,2) + ` as any;\n\nexport function getLesson(lesson:LessonId, lang:Lang){ const byLang = CONTENT[lesson]; return byLang?.[lang]; }\n`

await fs.writeFile(OUT, out, 'utf8')
console.log('✔ Generado', OUT)


