import { OrderSummary } from './OrderSummary';
import { CheckoutHeader } from './CheckoutHeader';
import { PaymentSummary } from './PaymentSummary';
import './checkout-header.css';
import './CheckoutPage.css';

export function CheckoutPage({ cart, loadCart }) {
  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader/>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} loadCart={loadCart}/>

          <PaymentSummary cart={cart} loadCart={loadCart}/>
        </div>
      </div>
    </>
  );
}