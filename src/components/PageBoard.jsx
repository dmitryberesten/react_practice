import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Event from './Event';

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background: #f4f1de;
  min-height: 100vh;
`;

const PageBoard = props => {
  return (
    <Board>
      {props.events.map((event, index) => (
        <Event
          key={index}
          name={event.name}
          location={event.location}
          speaker={event.speaker}
          start={event.time.start}
          end={event.time.end}
        />
      ))}
    </Board>
  );
};

PageBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      time: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default PageBoard;
