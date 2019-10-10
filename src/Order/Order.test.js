import React from 'react';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Order from './Order';

const defaultProps = {
  shop: '@SHOP@',
  items: [
    '@ITEM1',
    '@ITEM2',
    '@ITEM3',
  ],
  date: 123,
};

configure({ adapter: new Adapter() });

describe('App component', () => {
  const wrapper = shallow(<Order order={defaultProps} />);

  it('', () => {
    const order = defaultProps;

    wrapper.setProps({ order });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
