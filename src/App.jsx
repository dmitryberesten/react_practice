import React from 'react';
import styled from 'styled-components';
import PageBoard from './components/PageBoard';
import GlobalStyles from './globalStyles';
import eventsData from './upcoming-events.json';

const Title = styled.h1`
  text-align: center;
  background: #3d405b;
  color: white;
  padding: 10px;
  margin: 0;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: eventsData,
    };
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Title>24th Core Worlds Coalition Conference</Title>
        <PageBoard events={this.state.events} />
      </>
    );
  }
}

export default App;
