import * as Yup from 'yup';

export const validationCreateContract = Yup.object().shape({
  createContract: Yup.boolean().required('Заповніть усі поля!').oneOf([true], 'Заповніть усі поля!'),
});
