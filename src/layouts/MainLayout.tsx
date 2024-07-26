'use client';

import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface MainLayoutProps {
  children: ReactNode | ReactNode[];
}

export const MainLayout = ({ children }: MainLayoutProps): ReactElement => {
  return (
    <StyledMainLayout>
      <div className="wrapper">{children}</div>
    </StyledMainLayout>
  );
};

const StyledMainLayout = styled.div`
  display: flex;
  justify-content: center;

  .wrapper {
    max-width: 481px;
  }
`;
