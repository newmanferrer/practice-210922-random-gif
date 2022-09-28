import { MessageWrapper, MessageStyled } from './StyledComponents';

interface MessageProps {
  type?: 'success' | 'warn' | 'error';
  text: string;
  role?: string;
  ariaLabel?: string;
  dataTestid?: string;
}

export const Message = ({ type, text, role, ariaLabel, dataTestid }: MessageProps) => {
  return (
    <MessageWrapper type={type} role={role} aria-label={ariaLabel} data-testid={dataTestid}>
      <MessageStyled type={type}>{text}</MessageStyled>
    </MessageWrapper>
  );
};
