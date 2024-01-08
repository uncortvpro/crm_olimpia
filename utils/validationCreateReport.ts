import * as Yup from 'yup';

export const validationCreateReport = Yup.object().shape({
  createReport: Yup.boolean().required('Заповніть усі поля!').oneOf([true], 'Заповніть усі поля!'),
});
