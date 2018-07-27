import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

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
        <ContestList contests={contests} />
      </div>
    );
  }
}

export default App;
