import { useBag } from "../context/BagContext";
import { CaretLeftIcon, TrashIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export default function Bag() { 
  const navigate = useNavigate();
  const { bag, removeFromBag } = useBag();
 
  const total = bag.reduce((sum, product) => sum + product.price, 0);

  function handleBack() {
    navigate(-1); // retorna à página anterior
  }
  
  return (
    <div className="bag">
      <h2>Sua sacola</h2>

      {bag.length === 0 ? (
        <p>Você ainda não adicionou itens.</p>
      ) : (
        bag.map((item) => (
          <div key={item.id} className="item">
            <span>
              {item.name} – R$ {item.price.toFixed(2)}
            </span>
            <button className="trash-button" onClick={() => removeFromBag(item.id)}>
              <TrashIcon size={24} />
            </button>
          </div>
        ))
      )}

      {bag.length > 0 && <h3>Total: R$ {total.toFixed(2)}</h3>}

      <button className="back-button" onClick={handleBack}>
        <CaretLeftIcon size={24} weight="bold" />
      </button>
    </div>
  );
}
