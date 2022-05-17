import { IconButton, InputAdornment } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { setIsLogged } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/store/hooks';
import { EMAIL_REGEX, IS_LOGGED_LOCAL_STORAGE } from '../../util/constants';
import ILoginForm from './loginForm';
import { CustomForm, FormTextField, SubmitButton } from '../common/customForm/customFormStyle';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { LoginWrapper } from './loginStyle';

const Login = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const { handleSubmit, control } = useForm<ILoginForm>();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }


  const onSubmit = () => {
    dispatch(setIsLogged(true));
    localStorage.setItem(IS_LOGGED_LOCAL_STORAGE, JSON.stringify(true));
    history.push('/documents');
  }

  return (
    <LoginWrapper>
      <CustomForm
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value },
            fieldState: { error },
          }) => (
            <FormTextField
              fullWidth
              value={value}
              error={!!error}
              helperText={error ? error.message : null}
              onChange={onChange}
              type="text"
              label={'Email'}
              sx={{
                marginBottom: '15px'
              }}
            />
          )}
          rules={{
            required: 'Email required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Invalid format. Example: myName@domain.com'
            }
          }}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value },
            fieldState: { error },
          }) => (
            <FormTextField
              fullWidth
              value={value}
              error={!!error}
              helperText={error ? error.message : null}
              onChange={onChange}
              type={showPassword ? 'text' : 'password'}
              label={'Password'}
              sx={{
                marginBottom: '15px'
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      onMouseDown={toggleShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
          rules={{
            required: 'Last name required',
            minLength: {
              value: 8,
              message: 'Password must contain at least 8 characters',
            },
          }}
        />

        <SubmitButton
          type="submit"
        >
          Login
        </SubmitButton>
      </CustomForm>
    </LoginWrapper>
  )
};

export default Login;