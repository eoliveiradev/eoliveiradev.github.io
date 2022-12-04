import { HighLight } from "../../components/HighLight/HighLight"
import { Button } from "../../components/Button/Button"
import { useTranslation } from "../../Hooks/useTranslation"
import { Circle, Container, Square, TitleContainer } from "./styles"
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigateTo = useNavigate()
  const { t } = useTranslation()

  return (
    <Container>
      <TitleContainer>
        <HighLight
          animate={true}
          title={t('home-highlight-title')}
          subtitle={t('home-highlight-subtitle')}
          align='center'
        />

        <Button
          animate={true}
          title={`${t('about-me')}`}
          onClick={() => navigateTo('/about')}
        />
      </TitleContainer>

      <Circle />
      <Square />
    </Container>
  )
}