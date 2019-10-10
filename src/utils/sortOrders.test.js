import React from 'react'
import {
	sortTypes,
	sortOrders,
	sortByItemCount, sortByItemNames, sortByDate
} from './sortOrders';

describe('sortOrders function', () => {
	it('sorted by DATE', () => {
		const order1 = {
			date: 1,
		};

		const order2 = {
			date: 2,
		};

		const orders = [order1, order2];
		const expectedOrders = [order2, order1];

		sortOrders(orders, sortTypes.DATE);
		expect(orders).toEqual(expectedOrders);
	});

	it('sorted by COUNT', () => {
		const order1 = {
			items: [1, 2, 3],
		};

		const order2 = {
			items: [1, 2],
		};

		const orders = [order1, order2];
		const expectedOrders = [order2, order1];

		sortOrders(orders, sortTypes.COUNT);
		expect(orders).toEqual(expectedOrders);
	});

	it('sorted by ITEM_NAMES', () => {
		const order1 = {
			items: ['aa', 'bb', 'cc'],
		};

		const order2 = {
			items: ['cc', 'bb', 'aa'],
		};

		const orders = [order1, order2];
		const expectedOrders = [order2, order1];

		sortOrders(orders, sortTypes.ITEM_NAMES);
		expect(orders).toEqual(expectedOrders);
	});

	it('nothing changed', () => {
		const orders = [];
		const expectedOrders = [];

		sortOrders(orders, sortTypes.ITEM_NAMES);
		expect(orders).toEqual(expectedOrders);
	});
});

describe('sortByItemNames function', () => {
	it('orders are numbers', () => {
		const result = sortByItemNames(1, 2);
		expect(result).toEqual(0);
	});

	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('has no items', () => {
		const order1 = {};

		const order2 = {};

		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});

	it('orders equal', () => {
		const order1 = {
			items: ['aa', 'bb'],
		};

		const order2 = {
			items: ['aa', 'bb'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});

	it('orders first is greater', () => {
		const order1 = {
			items: ['aa', 'cc'],
		};

		const order2 = {
			items: ['bb', 'aa'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(-1);
	});

	it('orders second is greater', () => {
		const order2 = {
			items: ['aa', 'cc'],
		};

		const order1 = {
			items: ['bb', 'aa'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(1);
	});

	it('second is grater', () => {
		const order1 = {
			items: ['aa', 'cc']
		};

		const order2 = {
			items: ['aa', 'cc', 'bb'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(1);
	});

	it('first is grater', () => {
		const order1 = {
			items: ['aa', 'cc', 'bb']
		};

		const order2 = {
			items: ['aa', 'cc'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(-1);
	});
});

describe('sortByItemCount function', () => {
	it('orders are numbers', () => {
		const result = sortByItemCount(1, 2);
		expect(result).toEqual(0);
	});

	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('has no items', () => {
		const order1 = {};

		const order2 = {};

		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('first.length > second.length', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['item1', 'item2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('first.length < second.length', () => {
		const order2 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order1 = {
			items: ['item1', 'item2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortByDate function', () => {
	it('orders are numbers', () => {
		const result = sortByDate(1, 2);
		expect(result).toEqual(0);
	});

	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('has no items', () => {
		const order1 = {};

		const order2 = {};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('zero timestamp', () => {
		const order1 = {
			date: 0,
		};

		const order2 = {
			date: -1,
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(-1);
	});

	it('equal dates', () => {
		const order1 = {
			date: 1,
		};

		const order2 = {
			date: 1,
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('first is grater', () => {
		const order1 = {
			date: 2,
		};

		const order2 = {
			date: 1,
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(-1);
	});

	it('second is grater', () => {
		const order1 = {
			date: 1,
		};

		const order2 = {
			date: 2,
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(1);
	});
});
