import React from 'react';
import {useUser} from '../../hooks';
import {useFormik} from 'formik';
import {object, string} from 'yup';
import {HeaderTitle} from '../../components';
import BackgroundImage from './assets';
import {LoginContainer, LoginButton, LoginButtonText} from './styles';
import {TextInput} from './components';

interface LoginInput {
  email: string;
  password: string;
}

export const Login = (): JSX.Element => {
  const {login} = useUser();

  const {values, handleChange, handleSubmit} = useFormik<LoginInput>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: object().shape({
      email: string().email().required(),
      password: string().required(),
    }),
    async onSubmit(formValues) {
      console.log(formValues);
      login({
        name: 'Silas Carvalho',
        email: 'desafio@ioasys.com.br',
        birthdate: '2020-07-20',
        gender: 'M',
        id: '6017163afaf5de22b804a173',
      });
    },
  });

  return (
    <LoginContainer source={BackgroundImage} resizeMode="cover">
      <HeaderTitle noPadding color="light" />
      <TextInput
        testID="emailInput"
        label="E-mail"
        value={values.email}
        onChange={handleChange('email')}
        returnKeyType="next"
      />
      <TextInput
        testID="passwordInput"
        label="Senha"
        value={values.password}
        onChange={handleChange('password')}
        secureTextEntry
        onEndEditing={handleSubmit}
        RightComponent={
          <LoginButton testID="loginButton" onPress={handleSubmit}>
            <LoginButtonText>Entrar</LoginButtonText>
          </LoginButton>
        }
      />
    </LoginContainer>
  );
};
