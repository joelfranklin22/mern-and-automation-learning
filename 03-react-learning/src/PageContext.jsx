import { createContext, useState, useEffect } from "react";

export const PassProps = createContext();
function PageContext({ children }) {
  const data = [
    {
      id: 1,
      name: "joel",
      role: "frontend",
      salary: "60k",
    },
    {
      id: 2,
      name: "jack",
      role: "backend",
      salary: "40k",
    },
    {
      id: 3,
      name: "john",
      role: "fullstack",
      salary: "80k",
    },
  ];
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    document.body.className = theme ? "dark" : "light";
  }, [theme]);
  return (
    <>
      <PassProps.Provider value={{ theme, setTheme, data }}>
        {children}
      </PassProps.Provider>
    </>
  );
}
export default PageContext;
