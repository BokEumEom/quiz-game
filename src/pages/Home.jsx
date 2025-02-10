// src/pages/Home.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import CategoryCard from '../components/quiz/CategoryCard';
import styles from './Home.module.css';

// 예시 카테고리 데이터 (이미지는 public/images 폴더에 위치)
const categories = [
  { id: 1, name: '치킨', image: '/images/chicken.webp' },
  { id: 2, name: '햄버거', image: '/images/hamburger.webp' },
  { id: 3, name: '라면', image: '/images/ramen.webp' },
  { id: 4, name: '아이스크림', image: '/images/icecream.webp' },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleStart = () => {
    if (selectedCategory) {
      // 선택한 카테고리 정보를 Quiz 페이지로 전달
      navigate('/quiz', { state: { category: selectedCategory } });
    } else {
      alert('카테고리를 선택해주세요!');
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.categoryContainer}>
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            onSelect={handleSelectCategory}
            selected={selectedCategory && selectedCategory.id === cat.id}
          />
        ))}
      </div>
      <button className={styles.startButton} onClick={handleStart}>
        퀴즈 시작하기
      </button>
    </div>
  );
};

export default Home;
