import { ReactElement, ReactNode } from 'react';
import { AuthGate } from '../../authentication/AuthGate';

export default function Template({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <AuthGate>{children}</AuthGate>;
}
