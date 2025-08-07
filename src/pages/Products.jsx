import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Base", "Batom", "Sombra", "Máscara", "Blush"];

  const categoryBanner = {
    Todos: 'src/assets/charlotte-tilbury-virtual-appointments.jpg',
    // Foundation: 'src/assets/foundations/foundations.png',
    // Lipstick: 'src/assets/lipstick.png',
    // Eyeshadow: 'src/assets/shadow.png',
    // Powder: 'src/assets/powder.png',
    // Blush: 'src/assets/blush.png',
  };

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="page-container">
      <div className="main-content">
        <header className="products-header">
          <h1 className="products-title">Qual item você está procurando?</h1>
          <nav className="products-menu">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`menu-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </nav>
        </header>

        {selectedCategory === "Todos" && (
          <img
            src={categoryBanner["Todos"]}
            className="products-img"
            alt="All banner"
          />
        )}

        <div className="products-grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <div className="footer">
        <span>
          <strong>BEAUTYCOM</strong> Comercio e Importação de Produtos de Beleza LTDA. <br />
          contato@beautycom.com.br
        </span>
      </div>
  </div>
  );
}

