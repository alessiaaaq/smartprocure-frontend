import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { CContainer, CSpinner } from '@coreui/react'

import routes from '../routes'

const AppContent = () => {

  return (

    <CContainer className="px-4" lg>

      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" />
          </div>
        }
      >

        <Routes>

          {routes.map((route, idx) => {

            return route.element ? (

              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />

            ) : null
          })}

        </Routes>

      </Suspense>

    </CContainer>
  )
}

export default React.memo(AppContent)