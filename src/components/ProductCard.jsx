import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  if (!product) return null;
  
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
      <Link to={`/products/${product.id}`} className="details-title">
        Ver detalhes
      </Link>
    </div>
  );
}

