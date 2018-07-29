import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests,
  };

  componentDidMount() {}

  componentWillUnmount() {}

  fetchContest = (contestId) => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
    api.fetchContest(contestId).then((contest) => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest,
        },
      });
    });
  };

  currentContent() {
    const { contests, currentContestId } = this.state;
    if (currentContestId) {
      return <Contest {...contests[currentContestId]} />;
    }
    return <ContestList onContestClick={this.fetchContest} contests={contests} />;
  }

  render() {
    const { pageHeader, contests } = this.state;
    return (
      <div className="App">
        <Header message={pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
