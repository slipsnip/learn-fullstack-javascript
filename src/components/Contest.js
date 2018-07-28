import React from 'react';
import PropTypes from 'prop-types';

class Contest extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <div className="Contest">
        {id}
      </div>
    );
  }
}

Contest.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Contest;
