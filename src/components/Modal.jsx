import PropTypes from 'prop-types';

/**
 * Componente Modal para mostrar mensajes
 * Responsabilidad: Mostrar feedback al usuario
 */
export default function Modal({ message, onClose }) {
  if (!message) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p style={styles.modalText}>{message}</p>
        <button style={styles.modalButton} onClick={onClose}>
          Continuar 💖
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

// ===== ESTILOS =====
const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    animation: "fadeIn 0.3s ease",
  },
  modal: {
    background: "white",
    padding: 32,
    borderRadius: 20,
    maxWidth: 340,
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    animation: "slideUp 0.4s ease",
  },
  modalText: {
    fontSize: 17,
    lineHeight: 1.6,
    color: "#1f2937",
    marginBottom: 20,
  },
  modalButton: {
    padding: "12px 32px",
    borderRadius: 10,
    border: "none",
    backgroundColor: "#ec4899",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    cursor: "pointer",
  },
};
