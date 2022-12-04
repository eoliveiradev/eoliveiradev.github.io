import { Button, Card, CloseIcon, Container, MailIcon } from "./styles"
import { EnvelopeSimple } from 'phosphor-react'
import { useState } from "react"

export const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Container>
      {
        isOpen && (
          <Card>

          </Card>
        )
      }
      <Button
        onClick={() => setIsOpen(state => !state)}
      >
        {
          isOpen 
          ? <CloseIcon />
          : <MailIcon /> 
        }
      </Button>
    </Container>
  )

}