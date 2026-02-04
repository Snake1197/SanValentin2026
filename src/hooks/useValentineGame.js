import { useState, useEffect } from 'react';
import { loadProgress, saveProgress } from '../services/supabase';

/**
 * Hook personalizado para manejar la lógica del juego
 * Responsabilidad: Gestionar estado y lógica de negocio
 */
export function useValentineGame(stages, finalDate) {
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [modalText, setModalText] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(true);
  const [solved, setSolved] = useState([]);
  const [attempts, setAttempts] = useState({});

  const today = new Date().toISOString().slice(0, 10);

  // Cargar progreso inicial
  useEffect(() => {
    loadProgressFromDB();
  }, []);

  const loadProgressFromDB = async () => {
    setLoading(true);
    try {
      const data = await loadProgress();
      if (data) {
        setSolved(data.solved || []);
        setAttempts(data.attempts || {});
      }
    } catch (error) {
      console.error("Error cargando progreso:", error);
      setSolved([]);
      setAttempts({});
    } finally {
      setLoading(false);
    }
  };

  const saveProgressToDB = async (newSolved, newAttempts) => {
    try {
      await saveProgress(newSolved, newAttempts);
    } catch (error) {
      console.error("Error guardando progreso:", error);
    }
  };

  const handleAnswerChange = (stageId, value) => {
    setCurrentAnswers({
      ...currentAnswers,
      [stageId]: value,
    });
  };

  const handleSolve = async (stage) => {
    const userAnswer = (currentAnswers[stage.id] || "").toLowerCase().trim();
    const correctAnswer = stage.answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      // Respuesta correcta
      const newSolved = [...solved, stage.id];
      setSolved(newSolved);
      setCurrentAnswers({ ...currentAnswers, [stage.id]: "" });
      setModalText(stage.reward);
      
      await saveProgressToDB(newSolved, attempts);
      
      // Mostrar confetti si es la última etapa
      if (stage.id === stages.length) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
    } else {
      // Respuesta incorrecta
      const newAttempts = { ...attempts };
      newAttempts[stage.id] = (newAttempts[stage.id] || 0) + 1;
      setAttempts(newAttempts);

      await saveProgressToDB(solved, newAttempts);

      if (newAttempts[stage.id] >= 3) {
        setModalText(`💭 Mmm... piénsalo bien. Pista: ${stage.hint}`);
      } else {
        setModalText("Casi… pero inténtalo otra vez 😌");
      }
    }
  };

  const getDaysRemaining = () => {
    const final = new Date(finalDate);
    const now = new Date(today);
    const diff = Math.ceil((final - now) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const isStageUnlocked = (unlockDate) => {
    return today >= unlockDate;
  };

  const isStageSolved = (stageId) => {
    return solved.includes(stageId);
  };

  const isAllSolved = solved.length === stages.length;

  return {
    currentAnswers,
    modalText,
    showConfetti,
    loading,
    solved,
    attempts,
    today,
    isAllSolved,
    handleAnswerChange,
    handleSolve,
    setModalText,
    getDaysRemaining,
    isStageUnlocked,
    isStageSolved,
  };
}
