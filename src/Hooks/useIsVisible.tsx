import { useEffect, useState } from "react"

interface HookArgs {
  ref: React.MutableRefObject<null>;
  checkOnlyOnce?: boolean;
}

export const useIsVisible = (args: HookArgs) => {
  const { ref, checkOnlyOnce = false } = args

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const observer = new IntersectionObserver(([entry]) => {
    setIsVisible(state => {
      if (state && checkOnlyOnce) {
        return state
      }
      return entry.isIntersecting
    })
  })

  useEffect(() => {
    ref.current && observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  const exports = {
    isVisible,
  }

  return exports
}