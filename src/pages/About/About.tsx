import { Divider } from "../../components/Divider/Divider"
import { HighLight } from "../../components/HighLight/HighLight"
import { ContactWidget } from "../../components/widgets/ContactWidget/ContactWidget"
import { useTranslation } from "../../Hooks/useTranslation"
import { Container } from "./styles"

export const About = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <HighLight
        animate={true}
        align="center"
        title={t('about-me-highlight-title')}
      />

      <HighLight 
        animate={true}
        align="left"
        subtitle={t('my-skills-highlight-title')}
      />

      <ContactWidget />
    </Container>
  )
}