/**
 * Componente de pantalla de carga
 * Responsabilidad: Mostrar estado de carga inicial
 */
export default function LoadingScreen() {
  return (
    <div style={styles.loadingContainer}>
      <div style={styles.spinner}>💕</div>
      <p style={styles.loadingText}>Cargando tu progreso...</p>
    </div>
  );
}

// ===== ESTILOS =====
const styles = {
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#fff0f5",
  },
  spinner: {
    fontSize: 48,
    animation: "pulse 1.5s ease-in-out infinite",
  },
  loadingText: {
    color: "#be185d",
    fontSize: 16,
    marginTop: 16,
  },
};
