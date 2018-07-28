import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map(contestId => (
      <ContestPreview
        key={contestId}
        contest={{ ...contests[contestId] }}
        onClick={onContestClick}
      />
    ))}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.object.isRequired,
  onContestClick: PropTypes.func.isRequired,
};

export default ContestList;
