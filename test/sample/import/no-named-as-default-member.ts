import foo from './dependencies/dependencies.js';


export const bar = foo.notDefault;  // eslint-disable-line @typescript-eslint/prefer-destructuring, @typescript-eslint/no-unsafe-assignment
