import { Container, ContentContainer, Description, Image, Title } from "./styles";

interface ComponentProps {
  title: string;
  description: string;
  img: any;
}

export const ImgDescription = (props: ComponentProps) => {
  const { title, description, img } = props;

  return (
    <Container>
      <Image src={img} />
      <ContentContainer>
        <Title>
          {title}
        </Title>
        <Description>
          {description}
        </Description>
      </ContentContainer>
    </Container>
  )
}