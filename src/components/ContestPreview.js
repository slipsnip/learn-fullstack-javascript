import React from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
  // { contest } = this.props;
  // { contestName, categoryName } = contest;
  contest = this.props.contest;

  handleClick = () => {
    console.log(this.contest.contestName);
  };

  render() {

    return (
      <div className="link ContestPreview" role="button" onClick={this.handleClick}>
        <div className="category-name">
          {this.contest.categoryName}
        </div>
        <div className="contest-name">
          {this.contest.contestName}
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
