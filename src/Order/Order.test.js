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
  date: 123321,
};

configure({ adapter: new Adapter() });

describe('App component', () => {
  const wrapper = shallow(<Order order={defaultProps} />);

  it('has shop name', () => {
    const order = defaultProps;

    wrapper.setProps({ order });

    const shop = wrapper
      .find('.Order-shop')
      .contains(defaultProps.shop);
    expect(shop).toEqual(true);
  });

  it('has date', () => {
    const order = defaultProps;

    wrapper.setProps({ order });

    const correctDate = '1 января, чт, 1970 год';

    const header = wrapper
      .find('.Order-header')
      .contains(correctDate);
    (header).toEqual(true);
  });

  it('has items', () => {
    const order = defaultProps;

    wrapper.setProps({ order });


    const items = wrapper
      .find('.Order-item')
      .children();

    expect(items).toHaveLength(order.items.length);
  });

  it('has no items', () => {
    const order = {
      shop: '@SHOP@',
      items: [],
      date: 123321,
    };

    wrapper.setProps({ order });

    const items = wrapper
      .find('.Order-item')
      .length;

    expect(items).toEqual(0);
  });
});
