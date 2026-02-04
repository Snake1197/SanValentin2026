import PropTypes from 'prop-types';

/**
 * Componente para mostrar una tarjeta de etapa individual
 * Responsabilidad: Renderizar el estado visual de una etapa
 */
export default function StageCard({ 
  stage, 
  isUnlocked, 
  isSolved, 
  currentAnswer,
  attempts,
  onAnswerChange, 
  onSolve 
}) {
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSolve(stage);
    }
  };

  // Estado: Bloqueado
  if (!isUnlocked) {
    return (
      <div style={styles.lockedCard}>
        <div style={styles.lockIcon}>🔒</div>
        <p style={styles.lockedText}>
          Disponible el {new Date(stage.unlockDate).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long'
          })}
        </p>
        <p style={styles.lockedTitle}>{stage.icon} {stage.title}</p>
      </div>
    );
  }

  // Estado: Resuelto
  if (isSolved) {
    return (
      <div style={styles.solvedCard}>
        <div style={styles.checkIcon}>✓</div>
        <p style={styles.solvedText}>
          {stage.icon} {stage.title}
        </p>
        <p style={styles.solvedSubtext}>¡Completado!</p>
      </div>
    );
  }

  // Estado: Activo
  return (
    <div style={styles.activeCard}>
      <h3 style={styles.cardTitle}>
        {stage.icon} {stage.title}
      </h3>
      <p style={styles.question}>{stage.question}</p>
      
      <input
        value={currentAnswer || ""}
        onChange={(e) => onAnswerChange(stage.id, e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Tu respuesta..."
        style={styles.input}
        autoComplete="off"
      />
      
      <button
        style={styles.button}
        onClick={() => onSolve(stage)}
      >
        Resolver 💝
      </button>
      
      {attempts >= 2 && (
        <p style={styles.hintBox}>💡 Pista: {stage.hint}</p>
      )}
      
      {attempts > 0 && (
        <p style={styles.attempts}>
          Intentos: {attempts}
        </p>
      )}
    </div>
  );
}

StageCard.propTypes = {
  stage: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
    reward: PropTypes.string.isRequired,
    unlockDate: PropTypes.string.isRequired,
  }).isRequired,
  isUnlocked: PropTypes.bool.isRequired,
  isSolved: PropTypes.bool.isRequired,
  currentAnswer: PropTypes.string,
  attempts: PropTypes.number,
  onAnswerChange: PropTypes.func.isRequired,
  onSolve: PropTypes.func.isRequired,
};

// ===== ESTILOS =====
const styles = {
  lockedCard: {
    textAlign: "center",
    padding: 20,
    opacity: 0.6,
  },
  lockIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  lockedText: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 8,
  },
  lockedTitle: {
    fontSize: 16,
    color: "#9ca3af",
    fontWeight: "500",
  },
  solvedCard: {
    textAlign: "center",
    padding: 20,
  },
  checkIcon: {
    fontSize: 48,
    color: "#16a34a",
    marginBottom: 12,
  },
  solvedText: {
    fontSize: 18,
    color: "#16a34a",
    fontWeight: "bold",
    marginBottom: 4,
  },
  solvedSubtext: {
    fontSize: 14,
    color: "#4ade80",
  },
  activeCard: {
    animation: "fadeIn 0.5s ease",
  },
  cardTitle: {
    fontSize: 20,
    color: "#be185d",
    marginBottom: 12,
  },
  question: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "#374151",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    padding: 12,
    fontSize: 16,
    borderRadius: 10,
    border: "2px solid #fce7f3",
    outline: "none",
    transition: "border 0.3s ease",
    boxSizing: "border-box",
  },
  button: {
    marginTop: 12,
    width: "100%",
    padding: 14,
    borderRadius: 10,
    border: "none",
    backgroundColor: "#ec4899",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  hintBox: {
    marginTop: 12,
    padding: 10,
    backgroundColor: "#fef3c7",
    borderRadius: 8,
    fontSize: 13,
    color: "#92400e",
    border: "1px solid #fbbf24",
  },
  attempts: {
    marginTop: 8,
    fontSize: 12,
    color: "#9ca3af",
    textAlign: "right",
  },
};
