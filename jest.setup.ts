/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import '@testing-library/jest-dom'

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: class IntersectionObserver {
    constructor(callback: any, options?: any) {}
    observe(target?: Element) {
      return null
    }
    unobserve(target?: Element) {
      return null
    }
    disconnect() {
      return null
    }
    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  },
})
