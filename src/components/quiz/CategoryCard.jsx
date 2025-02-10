// src/components/quiz/CategoryCard.jsx

import styles from './CategoryCard.module.css';

const CategoryCard = ({ category, onSelect, selected }) => {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ''}`}
      onClick={() => onSelect(category)}
    >
      <img src={category.image} alt={category.name} className={styles.image} />
      <h3 className={styles.name}>{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
