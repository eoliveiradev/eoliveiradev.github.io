import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { Container, Content } from "./styles"

export const DefaultLayout = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}