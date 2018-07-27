import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests }) => (
  <div className="ContestList">
    {contests.map(contest => <ContestPreview key={contest.id} contest={{ ...contest }} />)}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ContestList;
