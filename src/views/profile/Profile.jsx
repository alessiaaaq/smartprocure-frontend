import React, { useState } from 'react'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'

const Profile = () => {

  const [image, setImage] = useState(
    localStorage.getItem('profileImage') || null
  )

  const handleImage = (e) => {

    const file = e.target.files[0]

    if (file) {

      const imageUrl = URL.createObjectURL(file)

      setImage(imageUrl)

      localStorage.setItem(
        'profileImage',
        imageUrl,
      )

      window.location.reload()
    }
  }

  return (

    <CCard>

      <CCardHeader>
        User Profile
      </CCardHeader>

      <CCardBody>

        <CRow>

          {/* ================= LEFT ================= */}

          <CCol
            md={3}
            className="text-center"
          >

            <CAvatar
              src={
                image ||
                'https://cdn-icons-png.flaticon.com/512/149/149071.png'
              }
              size="xl"
              className="mb-3"
            />

            <CFormLabel>
              Change Profile Picture
            </CFormLabel>

            <CFormInput
              type="file"
              onChange={handleImage}
            />

          </CCol>

          {/* ================= RIGHT ================= */}

          <CCol md={9}>

            <h3 className="mb-4">

              Procurement Manager

            </h3>

            <p>
              Email:
              {' '}
              admin@smartprocure.com
            </p>

            <p>
              Role:
              {' '}
              Administrator
            </p>

            <p>
              Company:
              {' '}
              SmartProcure Solutions
            </p>

            <p className="text-muted mt-4">

              Profile information managed by administrator.

            </p>

          </CCol>

        </CRow>

      </CCardBody>

    </CCard>
  )
}

export default Profile