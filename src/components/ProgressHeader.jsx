import PropTypes from 'prop-types';

/**
 * Componente para mostrar el encabezado con progreso
 * Responsabilidad: Mostrar título, progreso y contador
 */
export default function ProgressHeader({ 
  solved, 
  totalStages, 
  daysRemaining, 
  isAllSolved 
}) {
  const progress = Math.round((solved / totalStages) * 100);

  return (
    <div style={styles.header}>
      <h1 style={styles.title}>💌 Camino a nuestra sorpresa 💌</h1>
      <p style={styles.subtitle}>Cada paso nos acerca un poco más…</p>
      
      <div style={styles.progressContainer}>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>
        <p style={styles.progressText}>
          {solved} de {totalStages} etapas completadas
        </p>
      </div>

      {!isAllSolved && daysRemaining > 0 && (
        <div style={styles.countdown}>
          ⏰ {daysRemaining} {daysRemaining === 1 ? "día" : "días"} para el 14 de febrero
        </div>
      )}

      {isAllSolved && (
        <div style={styles.completedBanner}>
          🎊 ¡Lo lograste! Ya descubriste todo… nos vemos pronto 💕
        </div>
      )}
    </div>
  );
}

ProgressHeader.propTypes = {
  solved: PropTypes.number.isRequired,
  totalStages: PropTypes.number.isRequired,
  daysRemaining: PropTypes.number.isRequired,
  isAllSolved: PropTypes.bool.isRequired,
};

// ===== ESTILOS =====
const styles = {
  header: {
    marginBottom: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    color: "#be185d",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    color: "#9f1239",
    marginBottom: 20,
    fontSize: 16,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressBar: {
    width: "100%",
    height: 12,
    backgroundColor: "#fce7f3",
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#ec4899",
    transition: "width 0.5s ease",
    borderRadius: 20,
  },
  progressText: {
    textAlign: "center",
    fontSize: 13,
    color: "#9f1239",
    marginTop: 8,
  },
  countdown: {
    textAlign: "center",
    padding: 12,
    backgroundColor: "#fce7f3",
    borderRadius: 12,
    fontSize: 14,
    color: "#9f1239",
    fontWeight: "600",
  },
  completedBanner: {
    textAlign: "center",
    padding: 16,
    backgroundColor: "#d1fae5",
    borderRadius: 12,
    fontSize: 16,
    color: "#065f46",
    fontWeight: "bold",
  },
};
