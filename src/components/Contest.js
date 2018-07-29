import React from 'react';
import PropTypes from 'prop-types';

class Contest extends React.Component {
  render() {
    const { description, contestListClick } = this.props;
    return (
      <div className="Contest">
        <div className="contest-description">{description}</div>
        <div className="home-link link"
          onClick={contestListClick}
        >
          Contest List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired,
};

export default Contest;
