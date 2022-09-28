import { ImgStyled } from './StyledComponents';

interface IImgProps {
  src: string;
  alt: string;
}

export const Img = ({ src, alt }: IImgProps) => {
  return <ImgStyled src={src} alt={alt} />;
};
