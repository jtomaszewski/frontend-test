/**
 * Temporary workaround for unwanted "Warning: ... not wrapped in act" warning
 * ( https://github.com/testing-library/react-testing-library/issues/281#issuecomment-480349256 )
 */
export function silenceActWarning() {
  const originalError = console.error;

  beforeAll(() => {
    console.error = (...args: any) => {
      if (/Warning.*not wrapped in act/.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };
  });

  afterAll(() => {
    console.error = originalError;
  });
}
