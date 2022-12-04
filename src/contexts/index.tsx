import { ReactNode } from "react";
import { LanguageContextProvider } from "./LanguageContext";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../styles/themes/default";
import { HashRouter } from "react-router-dom";

interface ComponentProps {
  children?: ReactNode;
}

export const Providers = ({ children }: ComponentProps) => {
  return (
    <LanguageContextProvider>
      <ThemeProvider theme={DefaultTheme}>
        <HashRouter>
          {children}
        </HashRouter>
      </ThemeProvider>
    </LanguageContextProvider>
  )
}