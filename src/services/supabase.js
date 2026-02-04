import { createClient } from '@supabase/supabase-js';

// En Vite, las variables de entorno se acceden con import.meta.env
// y deben empezar con VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validar que las variables existan
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Falta configurar las variables de entorno de Supabase.\n' +
    'Asegúrate de crear un archivo .env con:\n' +
    'VITE_SUPABASE_URL=tu-url\n' +
    'VITE_SUPABASE_ANON_KEY=tu-key'
  );
}

// Crear cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Funciones helper para interactuar con la base de datos

/**
 * Cargar el progreso desde la base de datos
 * @returns {Promise<{solved: number[], attempts: object}|null>}
 */
export const loadProgress = async () => {
  try {
    const { data, error } = await supabase
      .from('valentine_progress')
      .select('solved, attempts')
      .eq('id', 1)
      .single();

    if (error) throw error;
    
    return data || { solved: [], attempts: {} };
  } catch (error) {
    console.error('Error cargando progreso:', error);
    return null;
  }
};

/**
 * Guardar el progreso en la base de datos
 * @param {number[]} solved - Array de IDs de etapas resueltas
 * @param {object} attempts - Objeto con intentos por etapa
 * @returns {Promise<boolean>}
 */
export const saveProgress = async (solved, attempts) => {
  try {
    const { error } = await supabase
      .from('valentine_progress')
      .upsert({
        id: 1,
        solved,
        attempts,
        last_update: new Date().toISOString(),
      });

    if (error) throw error;
    
    return true;
  } catch (error) {
    console.error('Error guardando progreso:', error);
    return false;
  }
};

/**
 * Resetear todo el progreso (útil para testing)
 * @returns {Promise<boolean>}
 */
export const resetProgress = async () => {
  try {
    const { error } = await supabase
      .from('valentine_progress')
      .update({
        solved: [],
        attempts: {},
        last_update: new Date().toISOString(),
      })
      .eq('id', 1);

    if (error) throw error;
    
    return true;
  } catch (error) {
    console.error('Error reseteando progreso:', error);
    return false;
  }
};
