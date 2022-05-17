import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/store/hooks';
import { selectCommon } from '../../../redux/store/store';
import { closeSnackbar } from '../../../redux/slices/commonSlice';
import { SnackbarCloseIcon, SnackbarText, SnackbarWrapper } from './snackbarStyle';

const SNACKBAR_HIDE_TIMEOUT = 4000;
const Snackbar = () => {
  const dispatch = useDispatch();
  const { snackbarConfig } = useAppSelector(selectCommon);
  const { snackbarText, snackbarType, showSnackbar } = snackbarConfig;
  useEffect(() => {
    if (showSnackbar) {
      setTimeout(() => { dispatch(closeSnackbar()) }, SNACKBAR_HIDE_TIMEOUT);
    };
  }, [showSnackbar]);

  return (
    <SnackbarWrapper type={snackbarType}>
      <SnackbarText>{snackbarText}</SnackbarText>
      <SnackbarCloseIcon onClick={() => { dispatch(closeSnackbar()); }}>&#x2716;</SnackbarCloseIcon>
    </SnackbarWrapper>
  )
}

export default Snackbar;