import { ReactNode } from 'react';
import { FlexContainerStyled } from './StyledComponents';

interface IFlexContainerProps {
  children: ReactNode;
}

export const FlexContainer = ({ children }: IFlexContainerProps) => {
  return <FlexContainerStyled>{children}</FlexContainerStyled>;
};
