import * as Yup from 'yup';

export const validationCreateClient = Yup.object().shape({
  createClient: Yup.boolean().required('Заповніть усі поля!').oneOf([true], 'Заповніть усі поля!'),
});
