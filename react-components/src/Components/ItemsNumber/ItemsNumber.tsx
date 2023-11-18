import { FC, ChangeEvent } from 'react';
import './itemsNumber.css';
import { useSelector, useDispatch } from 'react-redux';
import { setItemsNumber } from '../../state/itemsNumber/itemsNumberSlice';
import { RootState } from '../../state/store';

interface ItemsNumberProps {
  setPage: (page: number) => void;
}

const ItemsNumber: FC<ItemsNumberProps> = (props: ItemsNumberProps) => {
  const dispatch = useDispatch();
  const itemsNumber = useSelector(
    (state: RootState) => state.itemsNumber.value
  );

  const { setPage } = props;

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
    dispatch(setItemsNumber(value()));
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
