import { useState } from 'react';

type ThrottleFn = <A extends unknown[], R>(
  fn: (...args: A) => Promise<R>
) => (...args: A) => Promise<R | undefined>;

export const useThrottle = (): {
  throttle: ThrottleFn;
  isProcessing: boolean;
} => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const throttle =
    <A extends unknown[], R>(fn: (...args: A) => Promise<R>) =>
    async (...args: A): Promise<R | undefined> => {
      if (isProcessing) return;

      setIsProcessing(true);
      const result = await fn(...args);
      setIsProcessing(false);

      return result;
    };

  return { throttle, isProcessing };
};
