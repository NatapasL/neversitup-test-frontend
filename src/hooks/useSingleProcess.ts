import { useState } from 'react';

type ProcessFn = <R>(fn: () => Promise<R>) => Promise<R | undefined>;

export const useSingleProcess = (): {
  process: ProcessFn;
  isProcessing: boolean;
} => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const process = async <R>(fn: () => Promise<R>): Promise<R | undefined> => {
    if (isProcessing) return;

    setIsProcessing(true);
    const result = await fn();
    setIsProcessing(false);

    return result;
  };

  return { process, isProcessing };
};
