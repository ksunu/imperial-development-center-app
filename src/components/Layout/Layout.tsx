import { ReactNode } from 'react'

import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'
import 'components/Layout/Layout.scss'

const Layout = (props: { children: ReactNode }) => {
  return (
    <div className="layout">
      <Header />

      <main className="layout__main">{props.children}</main>

      <Footer />
    </div>
  )
}

export default Layout
