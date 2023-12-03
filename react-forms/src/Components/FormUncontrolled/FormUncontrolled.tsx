import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormUncontrolledData } from '../../state/formUncontrolledData/formUncontrolledDataSlice';
import { yupSchema } from '../../services/yupSchema';
import { RootState } from '../../state/store';
import * as yup from 'yup';
import { yupUncontrolledSchema } from '../../services/yupUncontrolledSchema';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../services/routes';

type FormData = yup.InferType<typeof yupUncontrolledSchema>;

const FormComponent: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.countries.value);
  const redirect = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: 0,
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    picture: 'any',
    gender: '',
    country: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const { checked } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFormData((prevData) => ({
      ...prevData,
      picture: files as FileList,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    yupSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        const reader = new FileReader();
        const data = formData;
        if (!data.picture) {
          data.picture = '';
        } else {
          reader.readAsDataURL((data.picture as FileList)[0]);
          reader.onloadend = function () {
            if (!reader.result) {
              data.picture = '';
            } else {
              data.picture = reader.result as string;
            }
          };
        }
        const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
          dispatch(setFormUncontrolledData(formData));
          setErrors({});
          clearTimeout(timer);
          redirect(routes.MAIN);
        }, 5000);
      })
      .catch((validationErrors) => {
        const newErrors: Record<string, string> = {};
        validationErrors.inner.forEach(
          (error: { path: string | number; message: string }) => {
            if (!newErrors[error.path]) {
              newErrors[error.path] = error.message;
            }
          }
        );
        setErrors(newErrors);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <p>{errors.name}</p>
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <p>{errors.age}</p>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <p>{errors.email}</p>
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <p>{errors.password}</p>
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <p>{errors.confirmPassword}</p>
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleInputChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleInputChange}
        />
        <label htmlFor="female">Female</label>
        <p>{errors.gender}</p>
      </div>

      <div>
        <label htmlFor="acceptTerms"> Accept Terms & Conditions </label>
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleInputChange}
        />
        <p>{errors.acceptTerms}</p>
      </div>

      <div>
        <label htmlFor="picture">Upload Picture:</label>
        <input
          type="file"
          name="picture"
          onChange={handleFileChange}
          multiple
        />
        <p>{errors.picture}</p>
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        >
          <option value="" disabled hidden>
            Select a country
          </option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <p>{errors.country}</p>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
