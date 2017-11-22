import { shallow } from 'enzyme';
import React from 'react';

import Grid from './grid';

const CHILDREN = <p>CHILDREN</p>;

test('Grid > Adds the default classNames', () => {
  const wrapper = shallow(<Grid>{CHILDREN}</Grid>, { disableLifecycleMethods: true });
  const expected = 'mdc-layout-grid';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Grid > Adds all classNames based on props', () => {
  const ALIGN = 'left';
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Grid align={ALIGN} className={CLASS_NAME}>{CHILDREN}</Grid>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-layout-grid mdc-layout-grid--align-${ALIGN} ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
