import { createContext, ReactNode, useState } from "react";
import { ITranslation } from "../@types/interfaces";
import { English } from "../languages/English";
import { Portuguese } from "../languages/Portuguese";

interface ComponentProps {
  children: ReactNode;
}

export type LanguageType = 'pt-br' | 'en'

interface ITranslations {
  'pt-br': ITranslation
  'en': ITranslation
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
    'pt-br': Portuguese,
    'en': English
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