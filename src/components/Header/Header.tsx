import { Content, Title, TitleHighlight } from "./styles"
import { Container } from "./styles"

export const Header = () => {
  return (
    <Container>
      <Content>
        <Title>
          eoliveira
          <TitleHighlight>
            .dev
          </TitleHighlight>
        </Title>
      </Content>
    </Container>
  )
}