import { useEffect, useState } from "react"
import { LanguageType } from "../../contexts/LanguageContext"
import { useTranslation } from "../../Hooks/useTranslation"
import { Select } from "../Select/Select"

interface LanguageOptionType {
  name: string;
  value: LanguageType;
}

const options: LanguageOptionType[] = [
  {
    name: 'Português',
    value: 'pt-br'
  },
  {
    name: 'English',
    value: 'en'
  }
]

export const LanguageSelector = () => {
  const { language, setLanguage } = useTranslation()

  return (
    <Select
      options={options}
      selectedOption={language}
      setSelectedOption={
        setLanguage as React.Dispatch<React.SetStateAction<string | number>>
      }
    />
  )
}