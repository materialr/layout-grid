import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '@material/layout-grid/mdc-layout-grid.scss';

const getClassName = (align, className) => classnames({
  'mdc-layout-grid': true,
  [`mdc-layout-grid--align-${align}`]: !!align,
  [className]: !!className,
});

const Grid = ({ align, children, className }) => (
  <div className={getClassName(align, className)}>{children}</div>
);

Grid.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Grid.defaultProps = {
  align: undefined,
  className: undefined,
};

export default Grid;
