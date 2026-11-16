// Gets the total quantity of the items in the carts
export function getCartItems(cart) {
  let cartItems = 0;

  cart.forEach((cartItem) => {
    cartItems += cartItem.quantity;
  });

  return cartItems;
}
