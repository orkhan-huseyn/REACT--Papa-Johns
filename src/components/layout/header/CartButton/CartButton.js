import CartIcon from './CartIcon';

function CartButton(props) {
  return (
    <button className='cart-button'>
      <span className='cart-button__icon'>
        <CartIcon />
      </span>
      <span className='cart-button__text'>Səbət</span>
      <span className='cart-button__badge'>15</span>
    </button>
  );
};

export default CartButton;