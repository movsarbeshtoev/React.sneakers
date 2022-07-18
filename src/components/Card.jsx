function Card() {
  return (
    <div className="card">
      <div className="fevorit">
        <img src="/img/heard.svg" alt="heardu" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers" />
      <h5 className="mb-40">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between ">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
