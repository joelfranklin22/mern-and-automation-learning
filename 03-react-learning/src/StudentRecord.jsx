import Student from "./Student";
import { useEffect, useState } from "react";
import "./App.css";
import useApi from "./hooks/useApi";

function StudentRecord({ onIncrement, onDecrement, onReset }) {
  const users = [
    {
      id: 1,
      name: "Smith",
      work: "unemployed",
      personalDetails: {
        city: "London",
        mark: 86,
      },
    },
    {
      id: 2,
      name: "Nancy",
      work: "unemployed",
      personalDetails: {
        mark: 92,
      },
    },
    {
      id: 3,
      name: "Taylor",
      work: "Employed",
      personalDetails: {
        city: "New York",
        mark: 80,
      },
    },
    {
      id: 4,
      name: "Aaron",
      work: "Employed",
      personalDetails: {
        city: "Australia",
        mark: 77,
      },
    },
  ];

  const [isSorted, setIsSorted] = useState(false);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [isFilter, setFilter] = useState(false);
  const [search, setSearch] = useState("");

  const [Sorted, setSorted] = useState(false);
  const {
    data: post,
    loading: userLoading,
    error: userError,
  } = useApi("https://jsonplaceholder.typicode.com/users");

  const {
    data: product,
    loading: productLoading,
    error: productError,
  } = useApi("https://fakestoreapi.com/products");

  // Sort Users
  const displayUser = isSorted
    ? [...users].sort((a, b) => b.personalDetails.mark - a.personalDetails.mark)
    : users;

  // Update Browser Title
  useEffect(() => {
    document.title = count > 5 ? `Count is ${count}` : "React Learning";
  }, [count]);

  // Theme Change
  useEffect(() => {
    console.log("Theme Changed");
  }, [theme]);

  // Digital Clock
  useEffect(() => {
    const timer = setInterval(() => {
      setSec((prevSec) => {
        if (prevSec < 59) {
          return prevSec + 1;
        }

        setMin((prevMin) => {
          if (prevMin < 59) {
            return prevMin + 1;
          }

          setHour((prevHour) => prevHour + 1);
          return 0;
        });

        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fetch Users

  // Search by Name OR Email
  const filteredPost = post.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Original Product
  let displayProduct = [...product];

  // Sorted Product
  if (Sorted) {
    displayProduct.sort((x, y) => {
      return x.price - y.price;
    });
  }
  if (isFilter) {
    displayProduct = displayProduct.filter((product) => product.price < 500);
  }
  if (search) {
    displayProduct = displayProduct.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (userError) return <h2>{userError}</h2>;
  if (productError) return <h2>{productError}</h2>;
  return (
    <>
      {/* Clock */}
      <h1>
        {hour.toString().padStart(2, "0")} :{min.toString().padStart(2, "0")} :
        {sec.toString().padStart(2, "0")}
      </h1>

      {/* Student List */}
      {displayUser.map((user) => (
        <Student
          key={user.id}
          id={user.id}
          name={user.name}
          work={user.work}
          city={user.personalDetails.city}
          mark={user.personalDetails.mark}
        />
      ))}

      <button onClick={() => setIsSorted((prev) => !prev)}>
        {isSorted ? "Unsort" : "Sort By Mark"}
      </button>

      <hr />

      {/* Counter */}
      <h2>Count : {count}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <button
        onClick={() => setCount((prev) => prev - 1)}
        disabled={count === 0}
      >
        Decrement
      </button>

      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      {/* Theme Toggle */}
      <div className={theme ? "dark" : "light"}>
        <button onClick={() => setTheme((prev) => !prev)}>
          {theme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <hr />

      {/* Methods as Props */}
      <button onClick={onIncrement}>Parent Increment</button>

      <button onClick={onDecrement}>Parent Decrement</button>

      <button onClick={onReset}>Parent Reset</button>

      <hr />

      {/* Search Users */}
      <div className="search">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Product Search Input and Button */}
      <div className="searchProduct">
        <input
          type="text"
          placeholder="Search an Product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setFilter((prev) => !prev)}>
          {isFilter ? "Show All" : "Filter under 500"}
        </button>
        <button onClick={() => setSorted((prev) => !prev)}>
          {Sorted ? "unsort" : "sort by price"}
        </button>
      </div>

      {/* Loading */}
      {userLoading && <h2>Loading...</h2>}

      {!productLoading && (
        <div className="product-container">
          {displayProduct.length > 0 ? (
            displayProduct.map((product) => (
              <div className="product-card" key={product.id}>
                <span className="product-id">{product.id}</span>
                <div className="title">{product.title}</div>
                <div className="price">Price :${product.price}</div>
                <div className="category">{product.category}</div>
              </div>
            ))
          ) : (
            <h2>No Users Found in product session</h2>
          )}
        </div>
      )}

      {/* User Cards */}
      {!userLoading && (
        <div className="posts-container">
          {filteredPost.length > 0 ? (
            filteredPost.map((user) => (
              <div key={user.id} className="post-card">
                <span className="post-id">#{user.id}</span>

                <h3>{user.name}</h3>

                <p>{user.email}</p>

                <p>{user.phone}</p>
              </div>
            ))
          ) : (
            <h3>No users found</h3>
          )}
        </div>
      )}
    </>
  );
}

export default StudentRecord;
