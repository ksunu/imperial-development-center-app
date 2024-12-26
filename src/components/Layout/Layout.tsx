import { ReactNode } from 'react'

import Header from 'components/Layout/Header/Header'
import SideMenu from 'components/Layout/SideMenu/SideMenu'
import Footer from 'components/Layout/Footer/Footer'
import 'components/Layout/Layout.scss'

const Layout = (props: { children: ReactNode }) => {
  return (
    <div className="layout">
      <Header />
      <SideMenu />
      <main className="layout__main">{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
