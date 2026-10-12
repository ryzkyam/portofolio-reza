import { supabase } from "@/lib/supabaseClient";

// Ambil semua data project dari Supabase
export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error.message);
    return [];
  }
  return data;
}

// Ambil data sertifikat (bisa difilter berdasarkan kategori)
export async function getCertificates(category?: string) {
  let query = supabase.from("certificates").select("*");

  if (category && category !== "All") {
    query = query.eq("category", category);
  }

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching certificates:", error.message);
    return [];
  }
  return data;
}

// Kirim pesan contact form ke Supabase
export async function submitContactMessage(contact: {
  name: string;
  email: string;
  message: string;
}) {
  const { data, error } = await supabase
    .from("contacts")
    .insert([contact])
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
