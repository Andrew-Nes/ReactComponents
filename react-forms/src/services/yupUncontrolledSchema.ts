import * as yup from 'yup';

export const yupUncontrolledSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(
      /^[A-Z][a-z]*$/,
      'Name must start with a capital letter and contain only lowercase letters after that'
    ),
  age: yup
    .number()
    .positive('Age should be a positive number')
    .integer('Age should be a whole number'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    )
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .required('Repeat password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  acceptTerms: yup
    .boolean()
    .required('Accept Terms & Conditions is required')
    .oneOf([true], 'Accept Terms & Conditions is required'),
  picture: yup
    .mixed()
    .test(
      'isImage',
      'Please upload a valid image (PNG or JPEG)',
      function (value) {
        const validTypes = ['image/png', 'image/jpeg'];
        console.log((value as FileList)[0]?.type);
        return (
          value && validTypes.includes(value && (value as FileList)[0]?.type)
        );
      }
    )
    .test('isImageSize', 'Image size should not exceed 5MB', function (value) {
      if (!value) {
        return true;
      }
      const maxSizeInBytes = 1024 * 1024; // 1MB

      return value && (value as FileList)[0]?.size <= maxSizeInBytes;
    }),
  gender: yup.string().required('Gender is required'),
  country: yup.string().required('Country is required'),
});
