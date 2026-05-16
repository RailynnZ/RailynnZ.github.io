import { Outlet } from 'react-router-dom'

import { AmbientBackdrop } from '../components/AmbientBackdrop'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export function SiteLayout() {
  return (
    <div className="shell">
      <AmbientBackdrop />
      <div className="shell__main">
        <SiteHeader />
        <main id="main" className="page-main">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
