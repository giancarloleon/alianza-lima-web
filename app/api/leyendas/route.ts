import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

// GET: Obtener todas las leyendas de la base de datos
export async function GET() {
  const { data, error } = await supabase
    .from('leyendas')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}