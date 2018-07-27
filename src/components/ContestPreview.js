import React from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
  handleClick = () => {
    const { contest } = this.props;
    console.log(contest.contestName);
  };

  render() {
    const { contest } = this.props;
    const { contestName, categoryName } = contest;
    return (
      <div className="link ContestPreview" role="button" onClick={this.handleClick}>
        <div className="category-name">
          {categoryName}
        </div>
        <div className="contest-name">
          {contestName}
        </div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  contest: PropTypes.shape({
    id: PropTypes.number,
    categoryName: PropTypes.string,
    contestName: PropTypes.string,
  }).isRequired,
};

export default ContestPreview;
