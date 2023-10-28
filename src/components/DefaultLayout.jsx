import { Outlet } from "react-router-dom"
import Header from "./Header"

const DefaultLayout = () => {
  return (
    <>
        <Header />
        <main className="defaultLayout-container">
            <Outlet/>
        </main>
    </>
  )
}

export default DefaultLayout