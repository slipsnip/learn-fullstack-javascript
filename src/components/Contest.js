import React from 'react';
import PropTypes from 'prop-types';

class Contest extends React.Component {
  render() {
    const { description } = this.props;
    return (
      <div className="Contest">
        {description}
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Contest;
