import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Card = styled.div`
  border: 2px solid #e07a5f;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background: #fdf5dc;
  width: 280px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h3`
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 0.9em;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const formatDate = dateString => {
  if (!dateString) return 'No Date';
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? 'Invalid Date' : date.toDateString();
};

const formatTime = dateString => {
  if (!dateString) return 'No Time';
  const date = new Date(dateString);
  return isNaN(date.getTime())
    ? 'Invalid Time'
    : date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const Event = ({ name, location, speaker, start, end }) => {
  return (
    <Card>
      <Title>{name}</Title>
      <Info>
        <FaMapMarkerAlt color="#e07a5f" /> {location}
      </Info>
      <Info>
        <FaUser color="#3d405b" /> {speaker}
      </Info>
      <Info>
        <FaCalendarAlt color="#81b29a" /> {formatDate(start)}
      </Info>
      <Info>
        <FaClock color="#f2cc8f" /> {formatTime(start)} - {formatTime(end)}
      </Info>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Event;
