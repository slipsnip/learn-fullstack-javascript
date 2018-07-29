import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends React.Component {
  static propTypes = {
    initialData: PropTypes.shape({
      contests: PropTypes.object,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    const { initialData } = this.props;
    this.state = initialData;
  }

  fetchContest = (contestId) => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
    api.fetchContest(contestId).then((contest) => {
      this.setState(prevState => ({
        currentContestId: contest.id,
        contests: {
          ...prevState.contests,
          [contest.id]: contest,
        },
      }));
    });
  };

  pageHeader() {
    const { currentContestId } = this.state;
    return currentContestId ? this.currentContest().contestName : 'Naming Contests';
  }

  currentContest() {
    const { contests, currentContestId } = this.state;
    return contests[currentContestId];
  }

  currentContent() {
    const { contests, currentContestId } = this.state;
    if (currentContestId) {
      return <Contest {...this.currentContest()} />;
    }
    return <ContestList onContestClick={this.fetchContest} contests={contests} />;
  }

  render() {
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
