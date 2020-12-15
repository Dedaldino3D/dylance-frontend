export const makeConstant = (root) => (key) => `${root}/${key}`;
export const makeAction = (type) => (...args) => ({ type, ...args });
