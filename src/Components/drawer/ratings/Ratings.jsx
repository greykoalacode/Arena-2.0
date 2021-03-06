import React from 'react';
import { Body2 } from '@material/react-typography';
import PropTypes from 'prop-types';
import RatingsTable from './RatingsTable';
import 'tachyons';

const Ratings = ({ users, activePageNumber, limit, ratingsUpdatedTill }) => (
  <div>
    <Body2 className="mid-gray ml1 mt2">
      Ratings have been updated till &nbsp;
      {ratingsUpdatedTill}
    </Body2>
    <RatingsTable users={users} activePageNumber={activePageNumber} limit={limit} />
  </div>
);

Ratings.propTypes = {
  users: PropTypes.array.isRequired,
  activePageNumber: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  ratingsUpdatedTill: PropTypes.string.isRequired,
};

export default Ratings;
