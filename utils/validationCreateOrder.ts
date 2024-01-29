import * as Yup from 'yup';

export const validationCreateOrder = Yup.object().shape({
  createOrder: Yup.boolean().required('Заповніть усі поля!').oneOf([true], 'Заповніть усі поля!'),
});
