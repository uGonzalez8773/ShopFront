import { useOutletContext } from "@remix-run/react";
import { useState, useEffect } from "react";
import { ClientOnly } from "remix-utils";
import styles from "~/styles/cart.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return [
    {
      title: "GuitarLA - shopping cart",
      description: "guitars for sell, music, blog, shoppping cart",
    },
  ];
}

function Cart() {
  const [total, setTotal] = useState(0);
  const { cart, updateAmount, deleteGuitar } = useOutletContext();

  useEffect(() => {
    const totalSum = cart.reduce(
      (total, producto) => total + producto.amount * producto.price,
      0
    );
    setTotal(totalSum);
  }, [cart]);

  return (
    <ClientOnly fallback={"Loading... "}>
      {() => (
        <main className="conteiner">
          <h1 className="heading">Shopping cart</h1>
          <div className="content">
            <div className="cart">
              <h2>Articles</h2>

              {cart?.length === 0
                ? "Empty cart"
                : cart?.map((product) => (
                    <div className="product" key={product.id}>
                      <div className="">
                        <img
                          src={product.image}
                          alt={`product: ${product.name}`}
                        />
                      </div>
                      <div className="">
                        <p className="name">{product.name}</p>
                        <p>Amount: </p>
                        <select
                          value={product.amount}
                          className="select"
                          onChange={(e) =>
                            updateAmount({
                              amount: +e.target.value,
                              id: product.id,
                            })
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <p className="price">
                          $ <span>{product.price}</span>
                        </p>
                        <p className="subtotal">
                          Subtotal: ${" "}
                          <span>{product.amount * product.price}</span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn-delete"
                        onClick={() => deleteGuitar(product.id)}
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>

            <aside className="resume">
              <h3>Details of your order</h3>
              <p>Total: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
}

export default Cart;
