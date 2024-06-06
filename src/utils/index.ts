export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.prices && currentItem.prices.current) {
      return (accumulator += currentItem.prices.current)
    }
    return accumulator
  }, 0)
}
