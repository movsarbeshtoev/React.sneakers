import CartItem from "./CartItem";

function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between cu-p">
          Корзина
          <img
            className="RemoveBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          ></img>
        </h2>
        <div className="cartItems">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="items">
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Итого:</span>
                <div></div>
                <b>21 999 руб.</b>
              </li>
              <li className="d-flex">
                <span>Налог 5%:</span>
                <div></div>
                <b> 1070 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить Заказ <img src="/img/Arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
