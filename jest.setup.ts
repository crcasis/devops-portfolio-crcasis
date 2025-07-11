/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import '@testing-library/jest-dom'
import React, { FC } from 'react'

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

Object.defineProperty(globalThis, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: class ResizeObserver {
    constructor(callback: any) {}
    observe(target?: Element) {
      return null
    }
    unobserve(target?: Element) {
      return null
    }
    disconnect() {
      return null
    }
  },
})

jest.mock('motion/react', () => ({
  useScroll: () => ({
    scrollX: { get: () => 0 },
    scrollY: { get: () => 0 },
    scrollXProgress: { get: () => 0 },
    scrollYProgress: { get: () => 0 },
  }),
  useTransform: (input: { get: () => any }, inputRange: [any, any], outputRange: [any, any]) => {
    const progress = input.get()
    const [inStart, inEnd] = inputRange
    const [outStart, outEnd] = outputRange
    const fraction = (progress - inStart) / (inEnd - inStart)
    const clamped = Math.min(Math.max(fraction, 0), 1)
    return outStart + clamped * (outEnd - outStart)
  },
  motion: {
    div: React.createElement<{ children: React.ReactNode; [key: string]: any }>,
  },
}))

beforeEach(() => {
  jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
    height: 200,
    width: 100,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0,
    toJSON: () => {},
  })
})
