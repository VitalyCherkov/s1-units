import {getDate} from './getDate';

describe('getDate function', () => {
  it('incorrect date', () => {
    expect(getDate('aaa')).toBeNull();
  });

  it('check date', () => {
    const ts = 943059600000;
    const res = getDate(ts);

    expect(res).toEqual('20 ноября, сб, 1999 год')
  });
});
