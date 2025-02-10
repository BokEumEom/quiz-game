// src/components/common/Header.jsx

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>초성 퀴즈 챌린지</h1>
      <p className={styles.description}>따뜻하고 밝은 도전에 참여해보세요!</p>
    </header>
  );
};

export default Header;
