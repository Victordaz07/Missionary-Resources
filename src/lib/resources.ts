import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { getDb, isFirebaseConfigured } from "./firebase";

export type Resource = {
  id?: string;
  title: string;
  description?: string;
  category: string; // e.g., study, languages, tools, health, culture, admin
  url?: string;
  createdAt?: Timestamp;
};

const COLLECTION = "resources";

export async function fetchResources(): Promise<Resource[]> {
  if (!isFirebaseConfigured()) {
    // Modo local: devuelve datos de ejemplo sin tocar la red
    return [
      { id: "ex1", title: "Guía de estudio", description: "Plan semanal de estudio", category: "study" },
      { id: "ex2", title: "Vocabulario básico", description: "Práctica diaria", category: "languages" },
      { id: "ex3", title: "Apps útiles", description: "Planificación y seguimiento", category: "tools" },
    ];
  }
  const db = getDb();
  const snap = await getDocs(collection(db, COLLECTION));
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Resource) }));
}

export async function addResource(resource: Resource) {
  if (!isFirebaseConfigured()) {
    // Modo local: simula escritura
    return { id: Math.random().toString(36).slice(2) } as unknown as Promise<void>;
  }
  const db = getDb();
  return addDoc(collection(db, COLLECTION), resource);
}


