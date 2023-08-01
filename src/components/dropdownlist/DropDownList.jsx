import { useState } from "react";
import { Button } from "../button/SimpleButton";

export const DropdownList = ({ data, onRemoveItem, labels }) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const onToggleVisibility = () => setDropdownOpened((opened) => !opened);

  return (
    <div>
      <Button
        onClick={onToggleVisibility}
        label={dropdownOpened ? labels.hide : labels.show}
      />

      {dropdownOpened && (
        <ul data-testid="dropdown-ul">
          {data.map((item, index) => (
            <li key={item.value} data-testid={`dropdown-li-${item.value}`}>
              {item.label}
              <button onClick={() => onRemoveItem(item, index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
