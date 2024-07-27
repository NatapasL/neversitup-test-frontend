import { useState } from 'react';

type ThrottleFn = <R>(fn: () => Promise<R>) => Promise<R | undefined>;

export const useThrottle = (): {
  throttle: ThrottleFn;
  isProcessing: boolean;
} => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const throttle = async <R>(fn: () => Promise<R>): Promise<R | undefined> => {
    if (isProcessing) return;

    setIsProcessing(true);
    const result = await fn();
    setIsProcessing(false);

    return result;
  };

  return { throttle, isProcessing };
};
