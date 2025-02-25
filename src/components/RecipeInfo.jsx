import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RecipeInfo = ({ text, icon }) => {
  return (
    <InfoWrapper>
      <span>{icon}</span> {text}
    </InfoWrapper>
  );
};

RecipeInfo.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default RecipeInfo;
