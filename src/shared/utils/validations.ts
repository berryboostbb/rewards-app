import * as Yup from 'yup';
import moment from 'moment';

const signUpRegularExp: any = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])';
const loginExp: any = '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Please Enter Your Email').email(),
  password: Yup.string()
    .required('Please Enter Your Password')
    .min(8, 'Password Too Short'),
});
export const AccountDetailSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Please Enter Your First Name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed'),
  // .min(2, 'Minimum 2 characters required')
  // .max(25, 'Maximum 25 characters allowed'),
  lastName: Yup.string()
    .required('Please Enter Your Last Name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed'),
  // .min(2, 'Minimum 2 characters required')
  // .max(25, 'Maximum 25 characters allowed'),
  dob: Yup.string()
    .required('Please Select Your Date of Birth')
    .test('DOB', 'You have to be 18 years or older to sign up', value => {
      return moment().diff(moment(value), 'years') >= 18;
    }),
  address: Yup.string().required('Please Enter address'),
});

export const EmailForgotSchema = Yup.object().shape({
  email: Yup.string().required('Please Enter Your Email').email(),
});

export const CodeFogotSchema = Yup.object().shape({
  code: Yup.string().required('Please Enter Your 4 digits code'),
  // .min(4, 'Enter 4 digits code'),
});

export const AddCardSchema = Yup.object().shape({
  digits: Yup.string()
    .required('Please Enter Your last 4 digits code')
    .max(4, 'Enter 4 digits code'),
  name: Yup.string().required('Please Enter Your card nickname'),
  // .min(4, 'Enter 4 digits code'),
});

export const UpdatePasswordSchema = Yup.object().shape({
  // password: Yup.string()
  //   .required('Please Enter Your Password')
  //   .min(8, 'Password Too Short'),
  newPassword: Yup.string().required('Password Required'),
  // .matches(
  //   /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
  //   'Password should include at least one uppercase letter, one lowercase letter, one number , Password should be eight characters long!',
  // ),
  confirmPassword: Yup.string()
    .required('Confirm Your Password')
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

export const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Please Enter Your Password')
    .min(8, 'Password Too Short'),
  newPassword: Yup.string()
    .required('Password Required')
    .min(
      8,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    )
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Your Password')
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('Phone Number Required')
    .min(10, 'Enter complete number')
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      'Invalid Phone Number',
    ),
});

export const ForgotPasswordEmailSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please Enter Your Email')
    .email('Please Enter Valid Email'),
  password: Yup.string()
    .required('Password Required')
    .min(
      8,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    )
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Your Password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Please Enter Your First Name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed')
    .min(2, 'Minimum 2 characters required')
    .max(25, 'Maximum 25 characters allowed'),
  lastName: Yup.string()
    .required('Please Enter Your Last Name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed')
    .min(2, 'Minimum 2 characters required')
    .max(25, 'Maximum 25 characters allowed'),
  // title: Yup.string().required('Please select Title'),
  email: Yup.string()
    .required('Please Enter Your Email')
    .email('Invalid Email'),
  dob: Yup.string()
    .required('Please Select Your Date of Birth')
    .test('DOB', 'You have to be 18 years or older to sign up', value => {
      return moment().diff(moment(value), 'years') >= 18;
    }),
  cardType: Yup.string().required('Please select the type of card you want'),
  cardNumber: Yup.string().required('Please Enter your Card number'),
  phoneNumber: Yup.string()
    .required('Please Enter your Phone number')
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      'Invalid Phone Number',
    ),
  password: Yup.string()
    .required('Password Required')
    .min(
      8,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    )
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Your Password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const CreateProfileSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password Required')
    .min(
      8,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    )
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Your Password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const AccountDetailEmail = Yup.object().shape({
  email: Yup.string()
    .required('Please Enter Your Email')
    .email('Please Enter Valid Email'),
  password: Yup.string()
    .required('Password Required')
    .matches(/^[A-Za-z0-9]*$/, 'Password should match the upper requirements'),
  confirmPassword: Yup.string()
    .required('Confirm Your Password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  phoneNumber: Yup.string()
    .required('Please Enter your Phone number')
    .min(14, 'Phone Number must be 12 numbers'),
  // cardNumber: Yup.string()
  //   .required('Please Enter your Card number')
  //   .min(21, 'Phone Number must be 16 numbers'),
});

export const AccountDetailCategory = Yup.object().shape({
  category: Yup.array()
    .required('Please choose at least one suggestion')
    .min(1, 'Please choose at least one suggestion'),
  // .max(5, 'Maximum 5 must be allowed'),
});

export const AccountDetailBrand = Yup.object().shape({
  brand: Yup.array()
    .required('Please choose at least one suggestion')
    .min(1, 'Please choose at least one suggestion'),
  // .max(5, 'Maximum 5 must be allowed'),
});

export const Profile_Contact = Yup.object().shape({
  value: Yup.array()
    .required('Please select atleast one category')
    .min(1, 'Minimum 1 must be required'),
  // .max(5, 'Maximum 5 must be allowed'),
});
