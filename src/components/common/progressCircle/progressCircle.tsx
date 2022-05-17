import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { ProgressText, ProgressWrapper } from './progressCircleStyle';
import { useAppDispatch, useAppSelector } from '../../../redux/store/hooks';
import { selectCommon } from '../../../redux/store/store';
import { closeProgress } from '../../../redux/slices/commonSlice';

const STEP_SIZE = 10;
const STEPS_MAX = 100;
//this makes sure the progress "finishes" a bit sooner that the real "process"
const PROGRESS_HASTE = 500;
const PROGRESS_CLOSE_DELAY = 1000;
const ProgressCircle = () => {
  const dispatch = useAppDispatch();
  const { progressCircleConfig } = useAppSelector(selectCommon);
  const { progressText, progressSize } = progressCircleConfig;
  const [progress, setProgress] = useState(0);
  const [progressInterval, setProgressInterval] = useState(null);


  useEffect(() => {
    //reset the progress if something else wants to start before the previous progress is finished.
    setProgress(0);
    if (progressInterval) {
      clearInterval(progressInterval);
    }
    const progressTimeStep = Math.floor((progressSize - PROGRESS_HASTE) / STEP_SIZE);
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= STEPS_MAX ? STEPS_MAX : prevProgress + STEP_SIZE));
    }, progressTimeStep);

    setProgressInterval(timer);

    return () => {
      clearInterval(timer);
    };
  }, [progressSize]);

  useEffect(() => {
    if (progress === STEPS_MAX) {
      clearInterval(progressInterval);
      setTimeout(() => {
        dispatch(closeProgress());
      }, PROGRESS_CLOSE_DELAY);
    }
  }, [progress])

  return (
    <ProgressWrapper>
      <CircularProgress variant="determinate" value={progress} />
      <ProgressText>{progressText}</ProgressText>
    </ProgressWrapper >
  );
}

export default ProgressCircle;