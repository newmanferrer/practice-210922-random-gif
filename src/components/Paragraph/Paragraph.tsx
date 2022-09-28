import { ParagraphStyled } from './StyledComponents';

interface IParagraphProps {
  text: string;
  color?: string;
  title?: string;
  role?: string;
  ariaLabel?: string;
  ariaRoleDescription?: string;
}

export const Paragraph = ({
  text,
  color,
  title,
  role,
  ariaLabel,
  ariaRoleDescription
}: IParagraphProps) => {
  return (
    <ParagraphStyled
      color={color}
      title={title}
      role={role}
      aria-roledescription={ariaRoleDescription}
      aria-label={ariaLabel}
    >
      {text}
    </ParagraphStyled>
  );
};
