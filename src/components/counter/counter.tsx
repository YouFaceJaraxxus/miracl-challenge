import { useTheme } from '@mui/material/styles';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { add, decrement, increment, subtract } from '../../redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import Content from '../common/content/content';
import { CounterButton, CounterTextField, CounterValue, CounterWrapper, TextFieldWrapper } from './counterStyle';

const VALUE_MUST_BE_A_NUMBER_ERROR = 'Value must be a valid number!';
const Counter = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const [amount, setAmount] = useState('');
  const [inputError, setInputError] = useState(null) as [null | string, Dispatch<SetStateAction<null | string>>];

  const handleIncrementClick = () => {
    dispatch(increment());
  }

  const handleDecrementClick = () => {
    dispatch(decrement());
  }

  const handleAddClick = () => {
    const amountValue = parseInt(amount);
    if (!isNaN(amountValue)) {
      dispatch(add(amountValue));
    }
    else {
      setInputError(VALUE_MUST_BE_A_NUMBER_ERROR);
    }
  }

  const handleSubtractClick = () => {
    const amountValue = parseInt(amount);
    if (!isNaN(amountValue)) {
      dispatch(subtract(amountValue));
    }
    else {
      setInputError(VALUE_MUST_BE_A_NUMBER_ERROR);
    }
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputError(null);
    setAmount(value);
  }

  return (
    <Content title="Counter">
      <CounterWrapper>
        <CounterValue>Count: {count}</CounterValue>
        <TextFieldWrapper>
          <CounterTextField
            value={amount}
            onChange={handleAmountChange}
            type="number"
            label={'Amount to change counter'}
            error={!!inputError}
            helperText={inputError ? inputError : null}
          />
        </TextFieldWrapper>
        <CounterButton
          color={theme.palette.common.white}
          bgcolor={theme.palette.success.main}
          onClick={handleIncrementClick}
        >
          Increment!
        </CounterButton>
        <CounterButton
          color={theme.palette.common.white}
          bgcolor={theme.palette.error.main}
          onClick={handleDecrementClick}
        >
          Decrement!
        </CounterButton>
        <CounterButton
          color={theme.palette.common.white}
          bgcolor={theme.palette.success.main}
          onClick={handleAddClick}
        >
          Add!
        </CounterButton>
        <CounterButton
          color={theme.palette.common.white}
          bgcolor={theme.palette.error.main}
          onClick={handleSubtractClick}
        >
          Subtract!
        </CounterButton>
      </CounterWrapper>
    </Content>
  )
};

export default Counter;
