import type { ReactElement, ReactNode } from 'react';
import { AuthGate } from '../../authentication';

export default function Template({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <AuthGate>{children}</AuthGate>;
}
