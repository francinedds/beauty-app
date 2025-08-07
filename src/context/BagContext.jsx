import { createContext, useContext, useState, useEffect } from "react";

const BagContext = createContext();

// Componente de contexto
export function BagProvider({ children }) {
  const [bag, setBag] = useState(() => {
    const saved = localStorage.getItem("bag");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [bag]);

  const addToBag = (product) => setBag((prev) => [...prev, product]);
  const removeFromBag = (id) => setBag((prev) => prev.filter((p) => p.id !== id));

  return (
    <BagContext.Provider value={{ bag, addToBag, removeFromBag }}>
      {children}
    </BagContext.Provider>
  );
}

// Hook de acesso ao contexto
export const useBag = () => useContext(BagContext);
