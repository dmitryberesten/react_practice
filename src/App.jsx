import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Recipe from './components/Recipe';
import recipesData from './recipies.json';
import GlobalStyles from './globalStyles';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background: #fff3cd;
  min-height: 100vh;
`;

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        {recipes.map((recipe, index) => (
          <Recipe key={index} {...recipe} />
        ))}
      </Container>
    </>
  );
};

export default App;
