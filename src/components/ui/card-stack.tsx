'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Card = {
  id: number
  name: string
  designation: string
  content: React.ReactNode
}

export const CardStack = ({
  items,
  offset = 20,
  scaleFactor = 0.05,
}: {
  items: Card[]
  offset?: number
  scaleFactor?: number
}) => {
  const [cards, setCards] = useState<Card[]>(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev]
        newCards.unshift(newCards.pop()!) // rotate
        return newCards
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-white dark:bg-neutral-900 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col justify-between"
          style={{
            transformOrigin: 'top center',
            width: '100%',
            height: '100%',
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <div className="text-base text-neutral-700 dark:text-neutral-200">{card.content}</div>
          <div className="mt-4">
            <p className="text-lg font-semibold text-neutral-900 dark:text-white">{card.name}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
