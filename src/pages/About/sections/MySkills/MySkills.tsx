import { useRef } from "react"
import { FlexBox } from "../../../../components/FlexBox/FlexBox"
import { HighLight } from "../../../../components/HighLight/HighLight"
import { ImgTitleCard } from "../../../../components/ImgTitleCard/ImgTitleCard"
import { SlideIntoScreen } from "../../../../components/SlideIntoScreen/SlideIntoScreen"
import { mySkills } from "../../../../content/mySkills"
import { useTranslation } from "../../../../Hooks/useTranslation"
import { Container } from "./styles"

export const MySkills = () => {
  const containerRef = useRef(null)

  const { t } = useTranslation()

  return (
    <Container
      ref={containerRef}
    >
      <FlexBox
        direction="column"
        gap="LG"
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
    </Container>
  )
}