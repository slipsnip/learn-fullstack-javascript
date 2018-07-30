import React from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
  handleClick = () => {
    const { onClick, contest } = this.props;
    onClick(contest._id);
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
    _id: PropTypes.string,
    categoryName: PropTypes.string,
    contestName: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContestPreview;
