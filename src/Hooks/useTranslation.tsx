import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { ITranslation } from "../@types/interfaces"

export const useTranslation = () => {
  const {
    language,
    translations,
    setLanguage
  } = useContext(LanguageContext)

  const t = (
    content: keyof ITranslation
  ) => translations[language][content]

  const exports = {
    t,
    language,
    setLanguage,
  }

  return exports
}