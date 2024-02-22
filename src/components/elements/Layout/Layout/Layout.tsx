import ILayout from "./ILayout"
import Header from "../Header/Header"

const Layout = ({ children } : ILayout) => {
  return (
    <main className="py-80 px-72 bg-light-30 w-full min-h-screen flex-col gap-24 flex">
      <Header/>
      { children }
    </main>
  )
}

export default Layout