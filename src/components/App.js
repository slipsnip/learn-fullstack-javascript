import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests,
  };

  componentDidMount() {

  }

  componentWillUnmount() {}

  fetchContest = (contestId) => {
    const { contests } = this.state;
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`,
    );
    this.setState({
      pageHeader: contests[contestId].contestName,
      currentContestId: contestId,
    });
  }

  currentContent() {
    const { contests, currentContestId } = this.state;
    if (currentContestId) {
      return <Contest {...contests[currentContestId]} />;
    }
    return (
      <ContestList
        onContestClick={this.fetchContest}
        contests={contests}
      />);
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
