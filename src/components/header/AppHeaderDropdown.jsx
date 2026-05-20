import React from 'react'
import { Link } from 'react-router-dom'

import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

import {
  cilBell,
  cilEnvelopeOpen,
  cilLockLocked,
  cilSettings,
  cilUser,
  cilList,
  cilCreditCard,
} from '@coreui/icons'

import CIcon from '@coreui/icons-react'

const AppHeaderDropdown = () => {

  const logout = () => {

    localStorage.removeItem('loggedIn')

    window.location.href = '/#/login'
  }

  const profileImage = localStorage.getItem(
    'profileImage'
  )

  return (

    <CDropdown variant="nav-item">

      <CDropdownToggle
        placement="bottom-end"
        className="py-0 pe-0"
        caret={false}
      >

        <CAvatar
          src={profileImage || undefined}
          color="primary"
          textColor="white"
          size="md"
        >
          {!profileImage && 'A'}
        </CAvatar>

      </CDropdownToggle>

      <CDropdownMenu
        className="pt-0"
        placement="bottom-end"
      >

        <CDropdownHeader
          className="bg-body-secondary fw-semibold mb-2"
        >
          SmartProcure Account
        </CDropdownHeader>

        {/* ================= UPDATES ================= */}

        <CDropdownItem
          as={Link}
          to="/updates"
        >

          <CIcon
            icon={cilBell}
            className="me-2"
          />

          Updates

          <CBadge
            color="info"
            className="ms-2"
          >
            LIVE
          </CBadge>

        </CDropdownItem>

        {/* ================= MESSAGES ================= */}

        <CDropdownItem>

          <CIcon
            icon={cilEnvelopeOpen}
            className="me-2"
          />

          Messages

          <CBadge
            color="success"
            className="ms-2"
          >
            Soon
          </CBadge>

        </CDropdownItem>

        {/* ================= ACTIVE TENDERS ================= */}

        <CDropdownItem
          as={Link}
          to="/tenders"
        >

          <CIcon
            icon={cilList}
            className="me-2"
          />

          Active Tenders

          <CBadge
            color="primary"
            className="ms-2"
          >
            DB
          </CBadge>

        </CDropdownItem>

        {/* ================= PREMIUM ================= */}

        <CDropdownItem
          as={Link}
          to="/premium"
        >

          <CIcon
            icon={cilCreditCard}
            className="me-2"
          />

          Premium Subscription

          <CBadge
            color="warning"
            className="ms-2"
          >
            PRO
          </CBadge>

        </CDropdownItem>

        {/* ================= SETTINGS ================= */}

        <CDropdownHeader
          className="bg-body-secondary fw-semibold my-2"
        >
          Settings
        </CDropdownHeader>

        {/* ================= PROFILE ================= */}

        <CDropdownItem
          as={Link}
          to="/profile"
        >

          <CIcon
            icon={cilUser}
            className="me-2"
          />

          Profile

        </CDropdownItem>

        {/* ================= PLATFORM SETTINGS ================= */}

        <CDropdownItem>

          <CIcon
            icon={cilSettings}
            className="me-2"
          />

          Platform Settings

        </CDropdownItem>

        <CDropdownDivider />

        {/* ================= LOGOUT ================= */}

        <CDropdownItem
          onClick={logout}
          style={{ cursor: 'pointer' }}
        >

          <CIcon
            icon={cilLockLocked}
            className="me-2"
          />

          Logout

        </CDropdownItem>

      </CDropdownMenu>

    </CDropdown>
  )
}

export default AppHeaderDropdown