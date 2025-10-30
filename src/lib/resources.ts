import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { getDb } from "./firebase";

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
  const db = getDb();
  const snap = await getDocs(collection(db, COLLECTION));
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Resource) }));
}

export async function addResource(resource: Resource) {
  const db = getDb();
  return addDoc(collection(db, COLLECTION), resource);
}


