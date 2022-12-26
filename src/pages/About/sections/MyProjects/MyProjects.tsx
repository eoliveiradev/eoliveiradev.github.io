import { useRef } from "react"
import { FlexBox } from "../../../../components/FlexBox/FlexBox"
import { HighLight } from "../../../../components/HighLight/HighLight"
import { ImgDescription } from "../../../../components/ImgDescription/ImgDescription"
import { SlideIntoScreen } from "../../../../components/SlideIntoScreen/SlideIntoScreen"
import { Container } from "./styles"

export const MyProjects = () => {

  const ref = useRef(null)

  return (
    <Container>
      <FlexBox
        direction="column"
        gap="LG"
        fill={true}
      >
        <HighLight
          animate={true}
          align="left"
          subtitle="My projects"
        />

        <FlexBox
          ref={ref}
          justify='flex-start'
          fill={true}
        >

          <SlideIntoScreen
            parentRef={ref}
            from="left"
            durantion="0.8s"
          >
            <ImgDescription
              title='Coffee Delivery'
              description="A coffee delivery app, where you can order your favorite coffee and receive it at your door."
              img='https://avatars.githubusercontent.com/u/101813364?v=4'
            />
          </SlideIntoScreen>

        </FlexBox>
      </FlexBox>
    </Container>
  )
}