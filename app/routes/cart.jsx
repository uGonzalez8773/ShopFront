import styles from "~/styles/cart.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta(){
  return [{
    title: 'GuitarLA - shopping cart',
    description: 'guitars for sell, music, blog, shoppping cart'
  }]
}

function Cart() {
  return (
    <main className="conteiner">
      <h1 className="heading">Shopping cart</h1>
      <div className="content">
        <div className="cart">
            <h2>Articles</h2>
        </div>

        <aside className="resume">
          <h3>Details of your order</h3>
          <p>Total: $</p>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
