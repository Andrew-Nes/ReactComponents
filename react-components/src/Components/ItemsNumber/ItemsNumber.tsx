import { FC, ChangeEvent } from 'react';
import './itemsNumber.css';

interface ItemsNumberProps {
  itemsNumber: number;
  setItemsNumber: (number: number) => void;
  setPage: (page: number) => void;
}

const ItemsNumber: FC<ItemsNumberProps> = (props: ItemsNumberProps) => {
  const { itemsNumber, setItemsNumber, setPage } = props;
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = () => {
      const number = Number(event.target.value);
      if (number > 50) {
        return 50;
      }
      if (number < 1) {
        return 1;
      }
      return number;
    };
    setItemsNumber(value());
    setPage(1);
  };
  return (
    <div className="items-number">
      <h3>Number of items from 1 to 50</h3>
      <input
        type="number"
        value={itemsNumber}
        onChange={onInputChange}
        className="items-number__input"
        min={1}
        max={50}
      />
    </div>
  );
};

export default ItemsNumber;
