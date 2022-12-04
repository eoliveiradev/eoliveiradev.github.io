import { createContext, ReactNode, useState } from "react";
import { ITranslation } from "../@types/interfaces";
import { Portuguese } from "../languages/Portuguese";

interface ComponentProps {
  children: ReactNode;
}

type LanguageType = 'pt-br'

interface ITranslations {
  'pt-br': ITranslation
}

interface LanguageContextType {
  language: LanguageType;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
  translations: ITranslations;
}

export const LanguageContext = createContext({} as LanguageContextType);

export const LanguageContextProvider = ({ children }: ComponentProps) => {

  const [language, setLanguage] = useState<LanguageType>('pt-br');

  const translations: ITranslations = {
    'pt-br': Portuguese
  }

  const exports: LanguageContextType = {
    language,
    setLanguage,
    translations
  }

  return (
    <LanguageContext.Provider
      value={exports}
    >
      {children}
    </LanguageContext.Provider>
  )
}