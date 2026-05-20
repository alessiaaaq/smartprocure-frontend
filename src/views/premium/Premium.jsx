import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

const Premium = () => {

  return (

    <CCard>

      <CCardHeader>
        Premium Subscription
      </CCardHeader>

      <CCardBody>

        <h4>
          Upgrade Your Supplier Account
        </h4>

        <p>
          Premium suppliers benefit from additional procurement features.
        </p>

        <CListGroup className="mb-4">

          <CListGroupItem>
            Unlimited offers submission
          </CListGroupItem>

          <CListGroupItem>
            Priority listing in tenders
          </CListGroupItem>

          <CListGroupItem>
            Advanced procurement analytics
          </CListGroupItem>

          <CListGroupItem>
            Featured supplier profile
          </CListGroupItem>

        </CListGroup>

        <CButton color="warning">
          Upgrade to PRO
        </CButton>

      </CCardBody>

    </CCard>
  )
}

export default Premium