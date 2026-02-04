import { useState } from 'react';

/**
 * Componente de animación de confetti
 * Responsabilidad: Mostrar celebración visual
 */
export default function Confetti() {
  const [confettiPieces] = useState(() => 
    [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      color: ['#ec4899', '#f472b6', '#fbbf24', '#fb923c'][Math.floor(Math.random() * 4)],
    }))
  );

  return (
    <div style={styles.confettiContainer}>
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          style={{
            ...styles.confetti,
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            backgroundColor: piece.color,
          }}
        />
      ))}
    </div>
  );
}

// ===== ESTILOS =====
const styles = {
  confettiContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 999,
  },
  confetti: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: "50%",
    animation: "fall 3s linear infinite",
  },
};
