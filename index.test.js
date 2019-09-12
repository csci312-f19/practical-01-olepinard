const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });
  test('Returns 10 if born was ten years ago', () => {
    expect(birthday.howOld(new Date('01 Jan 2008'))).toBe(10);
  });
  test('Returns your age', () => {
    expect(birthday.howOld(new Date('01 Jun 1997'))).toBe(20);
  });
});
