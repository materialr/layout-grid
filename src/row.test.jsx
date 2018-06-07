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

test('Row > Passes through additional props', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <Row data-qa={DATA_QA}>{CHILDREN}</Row>,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
