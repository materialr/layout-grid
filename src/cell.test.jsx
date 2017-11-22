import { shallow } from 'enzyme';
import React from 'react';

import Cell from './cell';

test('Cell > Adds default classNames', () => {
  const wrapper = shallow(<Cell />, { disableLifecycleMethods: true });
  const expected = 'mdc-layout-grid__cell';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Cell > Adds all classNames based on props', () => {
  const ALIGN = 'bottom';
  const CLASS_NAME = 'CLASS_NAME';
  const COLUMNS = 12;
  const DESKTOP = 12;
  const PHONE = 4;
  const TABLET = 8;
  const wrapper = shallow(
    <Cell
      align={ALIGN}
      className={CLASS_NAME}
      columns={COLUMNS}
      desktop={DESKTOP}
      phone={PHONE}
      tablet={TABLET}
    />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-layout-grid__cell ${CLASS_NAME} mdc-layout-grid__cell--align-${ALIGN} ` +
    `mdc-layout-grid__cell--span-${COLUMNS} mdc-layout-grid__cell--span-${DESKTOP}-desktop ` +
    `mdc-layout-grid__cell--span-${PHONE}-phone mdc-layout-grid__cell--span-${TABLET}-tablet`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
