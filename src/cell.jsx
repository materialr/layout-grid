import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassName = (align, className, columns, desktop, phone, tablet) => classnames({
  'mdc-layout-grid__cell': true,
  [className]: !!className,
  [`mdc-layout-grid__cell--align-${align}`]: !!align,
  [`mdc-layout-grid__cell--span-${columns}`]: !!columns,
  [`mdc-layout-grid__cell--span-${desktop}-desktop`]: !!desktop,
  [`mdc-layout-grid__cell--span-${phone}-phone`]: !!phone,
  [`mdc-layout-grid__cell--span-${tablet}-tablet`]: !!tablet,
});

const Cell = ({ align, children, className, columns, desktop, phone, tablet, ...props }) => (
  <div className={getClassName(align, className, columns, desktop, phone, tablet)} {...props}>
    {children}
  </div>
);

Cell.propTypes = {
  align: PropTypes.oneOf(['bottom', 'middle', 'top']),
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  desktop: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  phone: PropTypes.oneOf([1, 2, 3, 4]),
  tablet: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
};

Cell.defaultProps = {
  align: undefined,
  children: undefined,
  className: undefined,
  columns: undefined,
  desktop: undefined,
  phone: undefined,
  tablet: undefined,
};

export default Cell;
