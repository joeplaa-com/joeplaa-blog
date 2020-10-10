import { getAge } from './getAge'

test('Age Joep', () => {
    expect(getAge('1985/01/14', '2020/05/29')).toBe(35);
});
