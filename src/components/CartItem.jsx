function CartItem() {
  return (
    <div className="cartItem d-flex align-center mb-30">
      <img
        className="mr-20"
        width={70}
        height={70}
        src="/img/sneakers/1.png"
        alt="Sneakers"
      />

      <div className="mr-20">
        <p className="mp-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
        <b>1205 руб.</b>
      </div>

      <img className="RemoveBtn" src="/img/btn-remove.svg" alt="Remove"></img>
    </div>
  );
}
export default CartItem;
