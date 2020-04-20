import { sum, anyLessThanZero, max, Tuple, Sum, Product } from './';

it('Expect Sum Monoid to hold 6', () => {
	const result = String(sum([1, 2, 3]));
	expect(result).toBe('Sum(6)');
});

it('Ex2: anyLessThanZero', () => {
	expect(String(anyLessThanZero([-2, 0, 4]))).toBe('Any(true)');
	expect(String(anyLessThanZero([2, 0, 4]))).toBe('Any(false)');
});

it('Ex3: max', () => {
	expect(String(max([-2, 0, 4]))).toBe('Max(4)');
	expect(String(max([12, 0, 4]))).toBe('Max(12)');
});

it('Ex4: tuple', () => {
	const t1 = Tuple(Sum(1), Product(2));
	const t2 = Tuple(Sum(5), Product(2));
	const t3 = t1.concat(t2);
	expect(String(t3._1)).toBe('Sum(6)');
	expect(String(t3._2)).toBe('Product(4)');
});
