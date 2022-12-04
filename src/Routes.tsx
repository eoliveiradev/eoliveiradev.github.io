import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout"
import { About } from "./pages/About/About"
import { Home } from "./pages/Home/Home"

export const Router = () => {
  return (
    <Routes> 
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}