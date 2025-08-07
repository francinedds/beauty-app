import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useBag } from "../context/BagContext";
import { HeartIcon, CaretLeftIcon } from "@phosphor-icons/react";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find(p => p.id === +id);
  const { addToBag } = useBag();

  const [favorite, setFavorite] = useState(false);

  if (!product) return <p>Product not found</p>;

  function handleBack() {
    navigate(-1); // retorna à página anterior
  }

  function toggleFavorite() {
    setFavorite(!favorite);
    addToBag(product); // se ainda quiser adicionar ao carrinho/favoritos
  }

  return (
    <div className="details">
      <button className="back-button" onClick={handleBack}>
        <CaretLeftIcon size={24} weight="bold" />
      </button>

      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>R$ {product.price.toFixed(2)}</strong></p>
        <button className="bag-button" onClick={toggleFavorite}>
          <HeartIcon
            size={26}
            weight={favorite ? "fill" : "regular"}
            color="red"
          />
        </button>
      </div>
    </div>
  );
}

