import { Container, Image, Title } from "./styles"

interface ComponentProps {
  img: any;
  title: string;
}

export const ImgTitleCard = (props: ComponentProps) => {
  const {
    img,
    title
  } = props

  return (
    <Container>
      <Image src={img} />
      <Title>
        {title}
      </Title>
    </Container>
  )
}