import { Link } from "react-router-dom";
import { useBag } from "../context/BagContext";
import { HouseIcon, ShoppingBagIcon, UserIcon,  } from "@phosphor-icons/react";

export default function Navbar() {
  const { bag } = useBag();

  return (
    <nav className="navbar">
      <Link to="/products" aria-label="Products">
        <HouseIcon size={24} />
      </Link>

      <Link to="/bag" aria-label="Bag">
        <div style={{ position: "relative" }}>
          <ShoppingBagIcon size={24} />
          {bag.length > 0 && (
            <span
              style={{
                position: 'absolute',
                top: -4,
                right: -4,
                backgroundColor: 'red',
                color: 'white',
                fontSize: 10,
                width: 16,
                height: 16,
                borderRadius: '999px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {bag.length}
            </span>
          )}
        </div>
      </Link>

      <Link to="#" aria-label="User">
        <UserIcon size={24} />
      </Link>
    </nav>
  );
}
