import { TitleStyled } from './StyledComponents';

interface ITitleProps {
  text: string;
}

export const Title = ({ text }: ITitleProps) => {
  return <TitleStyled>{text}</TitleStyled>;
};
