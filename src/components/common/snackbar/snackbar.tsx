import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ERROR, SUCCESS } from '../../../util/constants';
import { useAppSelector } from '../../../redux/store/hooks';
import { selectCommon } from '../../../redux/store/store';
import { closeSnackbar } from '../../../redux/slices/commonSlice';
import { SnackbarWrapper } from './snackbarStyle';

const SNACKBAR_HIDE_TIMEOUT = 4000;
const Snackbar = () => {
  const dispatch = useDispatch();
  const { snackbarText, snackbarType, showSnackbar } = useAppSelector(selectCommon);

  useEffect(() => {
    if (showSnackbar) {
      setTimeout(() => { dispatch(closeSnackbar()) }, SNACKBAR_HIDE_TIMEOUT);
    };
  }, [showSnackbar]);

  return (
    <SnackbarWrapper>
      <div>{snackbarText}</div>
      <div onClick={() => { dispatch(closeSnackbar()); }}>&#x2716;</div>
    </SnackbarWrapper>
  )
}

export default Snackbar;