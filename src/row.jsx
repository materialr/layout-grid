import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassName = className => classnames({
  'mdc-layout-grid__inner': true,
  [className]: !!className,
});

const Row = ({ children, className, ...props }) => (
  <div className={getClassName(className)} {...props}>{children}</div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Row.defaultProps = {
  className: undefined,
};

export default Row;
