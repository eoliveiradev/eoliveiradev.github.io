import { useRef } from "react"
import { Divider } from "../../components/Divider/Divider"
import { FlexBox } from "../../components/FlexBox/FlexBox"
import { HighLight } from "../../components/HighLight/HighLight"
import { ImgTitleCard } from "../../components/ImgTitleCard/ImgTitleCard"
import { SlideIntoScreen } from "../../components/SlideIntoScreen/SlideIntoScreen"
import { ContactWidget } from "../../components/widgets/ContactWidget/ContactWidget"
import { ScrollIndicator } from "../../components/widgets/ScrollIndicator/ScrollIndicator"
import { mySkills } from "../../content/mySkills"
import { useTranslation } from "../../Hooks/useTranslation"
import { MyProjects } from "./sections/MyProjects/MyProjects"
import { MySkills } from "./sections/MySkills/MySkills"
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

      <FlexBox
        direction="column"
        gap="DIVIDER"
        fill={true}
      >

        <MySkills />

        <MyProjects />

      </FlexBox>

      <ContactWidget />
      <ScrollIndicator />
    </Container>
  )
}