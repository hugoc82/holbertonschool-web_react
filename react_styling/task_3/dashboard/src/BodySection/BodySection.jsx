import React from 'react';
import PropTypes from 'prop-types';

export default function BodySection({ title, children }) {
  return (
    <div className="bodySection mb-4">
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      <div className="rounded-md bg-white p-4 shadow-sm">
        {children}
      </div>
    </div>
  );
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
