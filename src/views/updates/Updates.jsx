import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

const Updates = () => {

  const [updates, setUpdates] = useState([])

  useEffect(() => {

    fetchUpdates()

  }, [])

  const fetchUpdates = async () => {

    const res = await axios.get(
      'http://localhost:5000/updates'
    )

    setUpdates(res.data)
  }

  const getColor = (type) => {

    switch (type) {

      case 'offer':
        return 'success'

      case 'supplier':
        return 'info'

      case 'tender':
        return 'warning'

      default:
        return 'secondary'
    }
  }

  return (

    <CCard>

      <CCardHeader>
        Platform Updates
      </CCardHeader>

      <CCardBody>

        <CListGroup>

          {updates.map((update, index) => (

            <CListGroupItem
              key={index}
              className="d-flex justify-content-between align-items-center"
            >

              {update.text}

              <CBadge color={getColor(update.type)}>

                {update.type}

              </CBadge>

            </CListGroupItem>

          ))}

        </CListGroup>

      </CCardBody>

    </CCard>
  )
}

export default Updates