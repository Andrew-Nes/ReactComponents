import React from 'react';
import {
  useForm,
  SubmitHandler,
  Controller,
  SubmitErrorHandler,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { setFormData } from '../../state/formData/formDataSlice';
import { yupSchema } from '../../services/yupSchema';
import * as yup from 'yup';

type FormData = yup.InferType<typeof yupSchema>;

const FormComponent: React.FC = () => {
  const { handleSubmit, control, formState } = useForm<FormData>({
    resolver: yupResolver(yupSchema),
  });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(setFormData(data));
  };
  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.error(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div>
        <label htmlFor="name">Name:</label>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="text" />
              <p>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <Controller
          name="age"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="number" />
              <p>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="text" />
              <p>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="password" />
              <p>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="password" />
              <p>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <Controller
          name="gender"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="radio" value="male" />
              <label htmlFor="male">Male</label>

              <input {...field} type="radio" value="female" />
              <label htmlFor="female">Female</label>
              <p>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>

      <div>
        <label htmlFor="acceptTerms"> Accept Terms & Conditions </label>
        <Controller
          name="acceptTerms"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input
                {...field}
                type="checkbox"
                checked={field.value as boolean}
                onChange={(e) => field.onChange(e.target.checked)}
              />
              <p>{fieldState?.error?.message}</p>
            </>
          )}
        />
      </div>

      <div>
        <label htmlFor="picture">Upload Picture:</label>
        <Controller
          name="picture"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="file" multiple />
              <p>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <Controller
          name="country"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <select {...field}>
                {/* Add options dynamically from Redux store */}
                <option value="country1">Country 1</option>
                <option value="country2">Country 2</option>
              </select>
              <p>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>

      <button
        type="submit"
        disabled={
          formState.isSubmitting || Object.keys(formState.errors).length > 0
        }
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
