import React from 'react';
import {useUser} from '../../hooks';
import {useFormik} from 'formik';
import {object, string} from 'yup';
import {HeaderTitle} from '../../components';
import BackgroundImage from './assets';
import {LoginContainer, LoginButton, LoginButtonText} from './styles';
import {TextInput} from './components';
import api from '../../services/api';
import {User} from '../../@types/user.interface';

export interface LoginInput {
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
      try {
        const {data, headers} = await api.post<User>(
          '/auth/sign-in',
          formValues,
        );
        await login(data, headers.authorization);
      } catch (error) {
        console.log(error);
      }
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
