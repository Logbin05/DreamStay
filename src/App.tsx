import { Route, Routes } from "react-router"
import { MainLayout } from "./layout/main/layout"
import { HomePage } from "@pages/home_page"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
