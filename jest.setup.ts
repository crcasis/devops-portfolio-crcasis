/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: class {
    constructor(callback: any, options?: any) {}
    observe() {}
    unobserve() {}
    disconnect() {}
  },
})
