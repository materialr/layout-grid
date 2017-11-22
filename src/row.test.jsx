import { shallow } from 'enzyme';
import React from 'react';

import Row from './row';

const CHILDREN = <p>CHILDREN</p>;

test('Row > Adds the default classNames', () => {
  const wrapper = shallow(<Row>{CHILDREN}</Row>, { disableLifecycleMethods: true });
  const expected = 'mdc-layout-grid__inner';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Row > Adds all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Row className={CLASS_NAME}>{CHILDREN}</Row>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-layout-grid__inner ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
