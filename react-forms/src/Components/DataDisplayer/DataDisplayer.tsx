import { FC } from 'react';
import { yupUncontrolledSchema } from '../../services/yupUncontrolledSchema';
import * as yup from 'yup';

type FormData = yup.InferType<typeof yupUncontrolledSchema>;

interface DisplayInfo {
  info: FormData;
}
const DataDisplayer: FC<DisplayInfo> = (info) => {
  return (
    <div>
      <h2>User Information</h2>
      <img src={`${info.info.picture}`} alt="Your image" />
      <p>Name: {info.info.name}</p>
      <p>
        Age: {info.info.age !== undefined ? info.info.age : 'Not specified'}
      </p>
      <p>Email: {info.info.email}</p>
      <p>Gender: {info.info.gender}</p>
      <p>Country: {info.info.country}</p>
    </div>
  );
};

export default DataDisplayer;
