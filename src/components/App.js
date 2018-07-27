import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests,
  };

  componentDidMount() {

  }

  componentWillUnmount() {}

  render() {
    const { pageHeader, contests } = this.state;
    return (
      <div className="App">
        <Header message={pageHeader} />
        <div>
          {contests.map(contest => <ContestPreview key={contest.id} contest={{ ...contest }} />)}
        </div>
      </div>
    );
  }
}

export default App;
