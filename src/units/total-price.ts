export const totalPrice = (arr: any[]): number => {
  return arr.reduce((a, c) => a + c.price * c.quantity, 0)
}
