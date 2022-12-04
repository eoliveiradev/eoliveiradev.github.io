import { useState } from "react";
import { Button } from "../Button/Button";
import { Container, Options, Option, OptionButton } from "./styles";

interface OptionType {
  name: string;
  value: string | number;
}

interface ComponentProps {
  options: OptionType[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | number>>;
}

export const Select = (props: ComponentProps) => {
  const { options, selectedOption, setSelectedOption } = props

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <Button
        onClick={() => setIsOpen(state => !state)}
        title={options.find(option => option.value === selectedOption)?.name || ''}
        fontSize="SM"
      />

      {isOpen && (
        <Options>
          {
            options.map(option => (
              <Option key={option.value}>
                <OptionButton
                  value={option.value}
                  onClick={() => {
                    setSelectedOption(option.value)
                    setIsOpen(false)
                  }}
                >
                  {option.name}
                </OptionButton>
              </Option>
            ))
          }
        </Options>
      )}
    </Container>
  )
}