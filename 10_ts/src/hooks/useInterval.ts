import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, dalay: number) => {
  const saveCallBack = useRef<() => void>();
  useEffect(() => {
    saveCallBack.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      saveCallBack.current!();
    };
    if (dalay !== null) {
      const id = setInterval(tick, dalay);
      return () => clearInterval(id);
    }
  }, [dalay]);
};

export default useInterval;
