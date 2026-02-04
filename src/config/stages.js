// ===== CONFIGURACIÓN DE ACERTIJOS =====
// Aquí puedes agregar, editar o eliminar acertijos fácilmente

export const config = {
  startDate: "2026-02-01",
  finalDate: "2026-02-14",
};

export const stages = [
  {
    id: 1,
    title: "Una escapada juntos",
    icon: "✈️",
    question: "Cuando necesitamos desconectarnos del mundo, ¿qué es lo primero que hacemos juntos?",
    answer: "viajar",
    hint: "No es un lugar, es una acción",
    reward: "No será una simple salida… será una escapada solo para nosotros 💕",
    unlockDate: "2026-02-01",
  },
  {
    id: 2,
    title: "Momentos eternos",
    icon: "📸",
    question: "¿Qué hacemos para guardar los momentos bonitos para siempre?",
    answer: "fotos",
    hint: "No se guarda en la memoria del celular por nada",
    reward: "Habrá recuerdos que no solo viviremos… también guardaremos ✨",
    unlockDate: "2026-02-05",
  },
  {
    id: 3,
    title: "Una noche especial",
    icon: "🍷",
    question: "¿Qué prefiero más contigo: regalos o tiempo?",
    answer: "tiempo",
    hint: "No se puede envolver",
    reward: "Habrá una noche pensada con calma, amor y nosotros dos ❤️",
    unlockDate: "2026-02-08",
  },
  {
    id: 4,
    title: "Complicidad",
    icon: "🛏️🃏",
    question: "¿Qué nos hace reír incluso cuando el día ya terminó?",
    answer: "jugar",
    hint: "Incluye preguntas incómodas 😏",
    reward: "Habrá risas, pijamas cómodas y un juego solo para pareja 💘",
    unlockDate: "2026-02-11",
  },
  {
    id: 5,
    title: "El destino",
    icon: "🌊",
    question: "Si tuvieras que elegir un lugar donde el tiempo se detenga para nosotros… ¿qué elegirías?",
    answer: "playa",
    hint: "Arena, sol y mar",
    reward: "🎉 ¡Mañana despertamos con el sonido del mar! Prepara tu maleta y confía en mí ❤️",
    unlockDate: "2026-02-13",
  },
  // ============================================
  // 💡 AGREGAR MÁS ACERTIJOS AQUÍ
  // ============================================
  // Ejemplo de cómo agregar un nuevo acertijo:
  /*
  {
    id: 6,
    title: "Tu título aquí",
    icon: "🎁",
    question: "¿Tu pregunta aquí?",
    answer: "respuesta",
    hint: "Tu pista aquí",
    reward: "Tu mensaje de recompensa aquí 💕",
    unlockDate: "2026-02-14",
  },
  */
];

// ===== INSTRUCCIONES PARA PERSONALIZAR =====
/*

📝 CÓMO AGREGAR UN NUEVO ACERTIJO:

1. Copia este bloque:
   {
     id: X,
     title: "Título del acertijo",
     icon: "📍",
     question: "¿Tu pregunta?",
     answer: "respuesta",
     hint: "Tu pista",
     reward: "Mensaje de recompensa 💕",
     unlockDate: "2026-02-14",
   },

2. Pégalo después del último acertijo (antes del cierre de ]})

3. Personaliza cada campo:
   - id: Número único (6, 7, 8, etc.)
   - title: Nombre del acertijo
   - icon: Un emoji (encuentra en https://emojipedia.org)
   - question: La pregunta del acertijo
   - answer: La respuesta correcta (en minúsculas, sin tildes)
   - hint: Una pista para ayudar
   - reward: El mensaje que verá al resolver
   - unlockDate: Fecha en formato "YYYY-MM-DD"

4. Guarda el archivo

5. ¡Listo! El nuevo acertijo aparecerá automáticamente

📅 FORMATO DE FECHAS:
   - "2026-02-01" = 1 de febrero de 2026
   - "2026-02-14" = 14 de febrero de 2026

💡 CONSEJOS:
   - Las respuestas se comparan en minúsculas
   - No uses tildes en las respuestas
   - Los acertijos se ordenan por fecha de desbloqueo
   - Usa emojis para hacer los íconos más bonitos

🎨 EMOJIS SUGERIDOS:
   ❤️ 💕 💖 💗 💘 💝 💞 💓
   🌹 🌺 🌸 🌼 🌻 🌷 
   ✨ 💫 ⭐ 🌟 
   🎁 🎀 🎊 🎉 
   🍷 🍾 🥂 🍰 🎂
   🏖️ 🌊 🏝️ ⛱️
   ✈️ 🚗 🚢 
   🎵 🎶 🎸 🎹
   📸 📷 🎥 
   🍕 🍝 🍜 🍱

*/
