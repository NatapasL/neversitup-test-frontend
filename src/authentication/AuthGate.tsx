import { redirect } from 'next/navigation';
import { ReactElement, ReactNode } from 'react';
import { hasToken } from './token';

export interface AuthGateProps {
  children: ReactNode | ReactNode[];
}

export const AuthGate = ({ children }: AuthGateProps): ReactElement => {
  if (!hasToken()) {
    redirect(`/login`);
  }

  return <>{children}</>;
};
