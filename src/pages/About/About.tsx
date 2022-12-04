import { useRef } from "react"
import { Divider } from "../../components/Divider/Divider"
import { FlexBox } from "../../components/FlexBox/FlexBox"
import { HighLight } from "../../components/HighLight/HighLight"
import { ImgTitleCard } from "../../components/ImgTitleCard/ImgTitleCard"
import { SlideIntoScreen } from "../../components/SlideIntoScreen/SlideIntoScreen"
import { ContactWidget } from "../../components/widgets/ContactWidget/ContactWidget"
import { mySkills } from "../../content/mySkills"
import { useTranslation } from "../../Hooks/useTranslation"
import { Container } from "./styles"

export const About = () => {
  const { t } = useTranslation()

  const containerRef = useRef(null)

  return (
    <Container
      ref={containerRef}
    >
      <HighLight
        animate={true}
        align="center"
        title={t('about-me-highlight-title')}
      />

      <FlexBox
        direction="column"
        gap="XL"
        fill={true}
      >

        <HighLight
          animate={true}
          align="left"
          subtitle={t('my-skills-highlight-title')}
        />

        <FlexBox
          direction="row"
          justify="space-between"
          gap="XL"
          fill={true}
        >
          {
            mySkills.map((skill, index) => (
              <SlideIntoScreen
                from="bottom"
                parentRef={containerRef}
                durantion={`${(index + 1) / 2}s`}
              >
                <ImgTitleCard
                  img={skill.img}
                  title={skill.title}
                />
              </SlideIntoScreen>
            ))
          }
        </FlexBox>

      </FlexBox>

      <ContactWidget />
    </Container>
  )
}