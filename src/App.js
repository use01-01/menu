import React, { useState } from 'react';
import data from './data';

const App = () => {
  const [currentCategory, setCurrentCategory] = useState([]);
  const categories = data.map((item) => item.category);
  const uniqueCategories = [...new Set(categories)];

  const getItem = (category) => {
    const selectedCategory = data.filter((item) => item.category === category);
    setCurrentCategory(selectedCategory);
    return;
  };

  return (
    <div>
      <button onClick={() => setCurrentCategory(data)}>all</button>
      {uniqueCategories.map((category) => {
        return <button onClick={() => getItem(category)}>{category}</button>;
      })}
      {currentCategory.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <div key={id}>
            <img src={img} alt={title} />
            <h4>{price}</h4>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
