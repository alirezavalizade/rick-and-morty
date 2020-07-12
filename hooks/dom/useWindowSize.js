import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

const useWindowSize = ({ debounceTime = 50 } = {}) => {
  const [state, setState] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleSetState = useCallback(
    debounce(() => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }, debounceTime),
    [state]
  );

  useEffect(() => {
    handleSetState();
    window.addEventListener('resize', handleSetState);

    return () => {
      window.removeEventListener('resize', handleSetState);
    };
  }, []);

  return state;
};

export default useWindowSize;
