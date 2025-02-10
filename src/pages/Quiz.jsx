// src/pages/Quiz.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { quizData } from '../data/quizData';
import styles from './Quiz.module.css';

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state || {};

  // 선택한 카테고리 정보가 없으면 홈으로 이동
  useEffect(() => {
    if (!category) {
      navigate('/');
    }
  }, [category, navigate]);

  const questions = category ? quizData[category.name] : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[currentIndex].answer) {
      setScore(prev => prev + 1);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  if (!category) return null;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category.name} 퀴즈</h1>
      {showResult ? (
        <div className={styles.result}>
          <p>퀴즈 종료!</p>
          <p>점수: {score} / {questions.length}</p>
          <button className={styles.homeButton} onClick={() => navigate('/')}>홈으로</button>
        </div>
      ) : (
        <div className={styles.quizCard}>
          <p className={styles.question}>
            {questions[currentIndex].question}
          </p>
          <div className={styles.options}>
            {questions[currentIndex].options.map((option, idx) => (
              <button key={idx} className={styles.optionButton} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
          <p className={styles.progress}>문제 {currentIndex + 1} / {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
