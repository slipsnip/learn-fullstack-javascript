import React from 'react';

const ErrorList = ({ errors }) => {
  return (
    <div id="errors">
      <lh>
        There are errors!
      </lh>
      <ul className="list-group">
        {errors.map(error => (
          <li key={error.id} className="list-group-item">
            {error}
          </li>
        ))}
      </ul>
    </div>
  )
}
