export interface buttonProps {
  text: string;
  route: string;
  className?: string;
}

export interface FormData {
  name: string;
  age?: number | undefined;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms?: boolean | undefined;
  picture?: File | undefined;
  gender: string;
  country: string;
}
