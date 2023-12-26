import * as Yup from 'yup';

export const validationCreateTask = Yup.object().shape({
  createTask: Yup.boolean().required('Заповніть усі поля!').oneOf([true], 'Заповніть усі поля!'),
});
