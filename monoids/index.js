import { List, Map } from 'immutable-ext';

export const Sum = x => ({
	x: x,
	concat: o => Sum(x + o.x),
	toString: () => `Sum(${x})`,
});
Sum.empty = () => Sum(0);

export const Product = x => ({
	x: x,
	concat: o => Product(x * o.x),
	toString: () => `Product(${x})`,
});
Product.empty = () => Product(1);

const Any = x => ({
	x: x,
	concat: o => Any(x || o.x),
	toString: () => `Any(${x})`,
});
Any.empty = () => Any(false);

const Max = x => ({
	x: x,
	concat: other => Max(x > other.x ? x : other.x),
	toString: () => `Max(${x})`,
});
Max.empty = () => Max(-Infinity);

// Ex1: reimplement sum using foldMap and the Sum Monoid
// =========================

export const sumBack = xs => List(xs).reduce((acc, x) => acc + x, 0);
export const sum = xs => List(xs).foldMap(Sum, Sum.empty());

// Ex2: reimplement lessThanZero using foldMap and the Any Monoid
// =========================

export const anyLessThanZeroBack = xs =>
	List(xs).reduce((acc, x) => (acc < 0 ? true : false), false);

export const anyLessThanZero = xs =>
	List(xs).foldMap(x => Any(x < 0), Any.empty());

// Ex3: Rewrite the reduce with a Max monoid (see Sum/Product/Any templates above)
// =========================

export const maxBack = xs =>
	List(xs).reduce((acc, x) => (acc > x ? acc : x), -Infinity);
export const max = xs => List(xs).foldMap(Max, Max.empty());

// Ex4 (Bonus): Write concat for Tuple
// =========================

export const Tuple = (_1, _2) => ({
	_1,
	_2,
	concat: o => Tuple(_1.concat(o._1), _2.concat(o._2))
});
