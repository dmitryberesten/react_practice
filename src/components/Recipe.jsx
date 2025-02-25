import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RecipeInfo from './RecipeInfo';
import RecipeDifficulty from './RecipeDifficulty';

const Card = styled.div`
  border-radius: 12px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  background: #fdf5dc;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
`;

const Title = styled.h2`
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  object-fit: cover;
`;

const InfoBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  font-size: 0.9em;
`;

const Recipe = ({ name, time, servings, calories, image, difficulty }) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
      <InfoBox>
        <RecipeInfo text={`${time} min`} icon="⏳" />
        <RecipeInfo text={`${servings} servings`} icon="🍽️" />
        <RecipeInfo text={`${calories} calories`} icon="📊" />
      </InfoBox>
      <RecipeDifficulty difficulty={difficulty} />
    </Card>
  );
};

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
};

export default Recipe;
