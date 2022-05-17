import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ERROR, SUCCESS } from '../../../util/constants';
import { useAppSelector } from '../../../redux/store/hooks';
import { selectCommon } from '../../../redux/store/store';
import { closeSnackbar } from '../../../redux/slices/commonSlice';
import { SnackbarCloseIcon, SnackbarText, SnackbarWrapper } from './snackbarStyle';

const SNACKBAR_HIDE_TIMEOUT = 4000;
const Snackbar = () => {
  const dispatch = useDispatch();
  const { snackbarText, snackbarType, showSnackbar } = useAppSelector(selectCommon);

  useEffect(() => {
    if (showSnackbar) {
      setTimeout(() => { dispatch(closeSnackbar()) }, SNACKBAR_HIDE_TIMEOUT);
    };
  }, [showSnackbar]);

  console.log('showSnackbar', showSnackbar);

  return (
    <SnackbarWrapper type={snackbarType}>
      <SnackbarText>{snackbarText}</SnackbarText>
      <SnackbarCloseIcon onClick={() => { dispatch(closeSnackbar()); }}>&#x2716;</SnackbarCloseIcon>
    </SnackbarWrapper>
  )
}

export default Snackbar;