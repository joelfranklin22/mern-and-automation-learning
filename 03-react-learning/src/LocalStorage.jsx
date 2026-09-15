import { useState } from "react";

function LocalStorage() {
  const [data] = useState([
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      category: "Mobile",
      brand: "Apple",
      stock: 15,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 74999,
      category: "Mobile",
      brand: "Samsung",
      stock: 20,
    },
    {
      id: 3,
      name: "OnePlus 12",
      price: 64999,
      category: "Mobile",
      brand: "OnePlus",
      stock: 12,
    },
    {
      id: 4,
      name: "Dell Inspiron 15",
      price: 58999,
      category: "Laptop",
      brand: "Dell",
      stock: 8,
    },
    {
      id: 5,
      name: "HP Pavilion",
      price: 62999,
      category: "Laptop",
      brand: "HP",
      stock: 10,
    },
    {
      id: 6,
      name: "Lenovo IdeaPad Slim 5",
      price: 54999,
      category: "Laptop",
      brand: "Lenovo",
      stock: 7,
    },
    {
      id: 7,
      name: "Sony WH-1000XM5",
      price: 24999,
      category: "Headphones",
      brand: "Sony",
      stock: 25,
    },
    {
      id: 8,
      name: "Boat Rockerz 550",
      price: 1999,
      category: "Headphones",
      brand: "Boat",
      stock: 50,
    },
    {
      id: 9,
      name: "Apple Watch Series 9",
      price: 41999,
      category: "Smartwatch",
      brand: "Apple",
      stock: 18,
    },
    {
      id: 10,
      name: "Noise ColorFit Pro 5",
      price: 4999,
      category: "Smartwatch",
      brand: "Noise",
      stock: 35,
    },
  ]);

  const [cart, setCart] = useState([]);

  const handleClick = (id) => {
    const product = data.find((item) => item.id === id);
    try {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const alreadyExists = existingCart.find((item) => item.id === id);

      if (alreadyExists) {
        const updated = existingCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
        localStorage.setItem("cart", JSON.stringify(updated));
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...existingCart, { ...product, quantity: 1 }]),
        );
      }
    } catch (e) {
      console.error("Storage error:", e);
    }
  };

  const handleCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  };

  // ✅ handleDelete
  const handleDelete = (id) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updated = existingCart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
  };

  const handleQuantity = (id, type) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const item = existingCart.find((i) => i.id === id);

    if (type === "dec" && item.quantity === 1) {
      handleDelete(id);
      return;
    }

    const updated = existingCart.map((i) =>
      i.id === id
        ? { ...i, quantity: type === "inc" ? i.quantity + 1 : i.quantity - 1 }
        : i,
    );
    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
  };

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="container">
        <div className="Cart">
          <button className="btn btn-info m-3" onClick={handleCart}>
            Go to Cart ({cart.length} items)
          </button>
        </div>

        <div className="row">
          {data.map((emp) => (
            <div className="col-md-4 mb-3" key={emp.id}>
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">{emp.name}</h5>
                  <p>
                    <strong>Price:</strong> ₹{emp.price}
                  </p>
                  <p>
                    <strong>Category:</strong> {emp.category}
                  </p>
                  <p>
                    <strong>Brand:</strong> {emp.brand}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleClick(emp.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-4">
            <h4>🛒 Cart</h4>
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between border-bottom py-2 align-items-center"
              >
                <span style={{ width: "200px" }}>{item.name}</span>

                {/* Quantity controls */}
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleQuantity(item.id, "dec")}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleQuantity(item.id, "inc")}
                  >
                    +
                  </button>
                </div>

                <span>₹{item.price * item.quantity}</span>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <h5 className="mt-3">Total: ₹{getTotal().toLocaleString()}</h5>
          </div>
        )}
      </div>
    </>
  );
}

export default LocalStorage;
