// src/components/quiz/ResultModal.jsx

import styles from './ResultModal.module.css';

const ResultModal = ({ score, total, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>퀴즈 종료!</h2>
        <p className={styles.score}>점수: {score} / {total}</p>
        <button className={styles.button} onClick={onClose}>홈으로</button>
      </div>
    </div>
  );
};

export default ResultModal;
