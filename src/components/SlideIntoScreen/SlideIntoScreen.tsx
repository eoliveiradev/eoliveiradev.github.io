import { useIsVisible } from "../../Hooks/useIsVisible";
import { Slider } from "./styles";

interface ComponentProps {
  from: 'left' | 'right' | 'top' | 'bottom';
  durantion?: string;
  children: React.ReactNode;
  parentRef: React.MutableRefObject<null>;
}

export const SlideIntoScreen = (props: ComponentProps) => {
  const {
    from,
    durantion = '1s',
    children,
    parentRef
  } = props;

  const { isVisible } = useIsVisible({
    ref: parentRef,
    checkOnlyOnce: true,
  });

  return (
    <Slider
      from={from}
      duration={durantion}
      isOnScreen={isVisible}
    >
      {children}
    </Slider>
  )
}