import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { contests } = this.props;
    const { pageHeader } = this.state;
    return (
      <div className="App">
        <Header message={pageHeader} />
        <div>
          {contests.map(contest => <ContestPreview contest={{ ...contest }} />)}
        </div>
      </div>
    );
  }
}

export default App;
