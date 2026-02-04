import { stages, config } from '../config/stages';
import { useValentineGame } from '../hooks/useValentineGame';
import LoadingScreen from './LoadingScreen';
import ProgressHeader from './ProgressHeader';
import StageCard from './StageCard';
import Modal from './Modal';
import Confetti from './Confetti';

/**
 * Componente principal del juego de San Valentín
 * Responsabilidad: Orquestar los componentes y el flujo general
 */
export default function ValentineJourney() {
  const {
    currentAnswers,
    modalText,
    showConfetti,
    loading,
    solved,
    attempts,
    isAllSolved,
    handleAnswerChange,
    handleSolve,
    setModalText,
    getDaysRemaining,
    isStageUnlocked,
    isStageSolved,
  } = useValentineGame(stages, config.finalDate);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div style={styles.container}>
      {showConfetti && <Confetti />}
      
      <ProgressHeader 
        solved={solved.length}
        totalStages={stages.length}
        daysRemaining={getDaysRemaining()}
        isAllSolved={isAllSolved}
      />

      <div style={styles.stagesContainer}>
        {stages.map((stage) => {
          const isUnlocked = isStageUnlocked(stage.unlockDate);
          const isSolved = isStageSolved(stage.id);

          return (
            <div
              key={stage.id}
              style={{
                ...styles.card,
                ...(isSolved ? styles.cardSolved : {}),
                ...(isUnlocked && !isSolved ? styles.cardActive : {}),
              }}
            >
              <StageCard
                stage={stage}
                isUnlocked={isUnlocked}
                isSolved={isSolved}
                currentAnswer={currentAnswers[stage.id]}
                attempts={attempts[stage.id] || 0}
                onAnswerChange={handleAnswerChange}
                onSolve={handleSolve}
              />
            </div>
          );
        })}
      </div>

      <Modal 
        message={modalText}
        onClose={() => setModalText(null)}
      />
    </div>
  );
}

// ===== ESTILOS =====
const styles = {
  container: {
    maxWidth: 480,
    margin: "0 auto",
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fff0f5",
    minHeight: "100vh",
  },
  stagesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  card: {
    border: "2px solid #fce7f3",
    borderRadius: 16,
    padding: 20,
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  },
  cardActive: {
    borderColor: "#ec4899",
    boxShadow: "0 6px 20px rgba(236,72,153,0.25)",
  },
  cardSolved: {
    backgroundColor: "#f0fdf4",
    borderColor: "#86efac",
  },
};
