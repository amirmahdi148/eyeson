import { useState, useCallback } from "react"

export type PriceMap = Record<string, number>

export function usePricingCalculator(initialPrices: PriceMap) {
  const [prices, setPrices] = useState<PriceMap>(initialPrices)

  const calculateTotal = useCallback(
    (keys: string[]): number =>
      keys.reduce((total, key) => total + (prices[key] ?? 0), 0),
    [prices],
  )

  const updatePrices = useCallback((newPrices: PriceMap) => {
    setPrices(newPrices)
  }, [])

  return { prices, calculateTotal, updatePrices }
}
