import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DifficultyWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 8px;
  margin-top: 12px;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Label = styled.span`
  background: ${props =>
    props.active
      ? props.level === 0
        ? '#f8d7da'
        : props.level === 1
        ? '#ffd700'
        : '#dc3545'
      : '#eee'};
  color: ${props =>
    props.active
      ? props.level === 0
        ? '#721c24'
        : props.level === 1
        ? '#856404'
        : '#fff'
      : '#999'};
  padding: 4px 12px;
  border-radius: 6px;
  margin: 5px;
  font-weight: bold;
  display: inline-block;
`;

const RecipeDifficulty = ({ difficulty }) => {
  const levels = ['Easy', 'Medium', 'Hard'];
  return (
    <DifficultyWrapper>
      <strong>Difficulty</strong>
      <div>
        {levels.map((level, index) => (
          <Label key={index} level={index} active={index === difficulty}>
            {level}
          </Label>
        ))}
      </div>
    </DifficultyWrapper>
  );
};

RecipeDifficulty.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default RecipeDifficulty;
