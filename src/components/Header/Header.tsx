import { Link } from "react-router-dom"
import { LanguageSelector } from "../LanguageSelector/LanguageSelector"
import { Content, Title, TitleHighlight } from "./styles"
import { Container } from "./styles"

export const Header = () => {
  return (
    <Container>
      <Content>
        <Link to='/'>
          <Title>
            eoliveira
            <TitleHighlight>
              .dev
            </TitleHighlight>
          </Title>
        </Link>
        <LanguageSelector />
      </Content>
    </Container>
  )
}