import { describe, it, expect } from '@jest/globals'

describe('🧪 Unique Example Test Suite', () => {
  it('calculates Fibonacci numbers correctly', () => {
    const fib = (n: number): number => (n <= 1 ? n : fib(n - 1) + fib(n - 2))

    expect(fib(5)).toBe(5)
    expect(fib(7)).toBe(13)
  })

  it('filters even numbers from an array', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const evens = arr.filter((n) => n % 2 === 0)

    expect(evens).toEqual([2, 4, 6])
  })

  it('capitalizes a string', () => {
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

    expect(capitalize('ashlok')).toBe('Ashlok')
  })

  it('resolves an async function', async () => {
    const fetchData = async (): Promise<string> => {
      return Promise.resolve('Hello from async test!')
    }

    await expect(fetchData()).resolves.toBe('Hello from async test!')
  })
})
