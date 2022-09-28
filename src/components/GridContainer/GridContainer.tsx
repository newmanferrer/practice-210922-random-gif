import { ReactNode } from 'react';
import { GridContainerStyled } from './StyledComponents';

interface IGridContainerProps {
  children: ReactNode;
}

export const GridContainer = ({ children }: IGridContainerProps) => {
  return <GridContainerStyled>{children}</GridContainerStyled>;
};
