import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection.jsx';

export default function BodySectionWithMarginBottom({ title, children }) {
  return (
    <div className="bodySectionWithMargin mb-8">
      <BodySection title={title}>{children}</BodySection>
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
