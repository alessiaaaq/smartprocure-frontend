import React from 'react'

import CIcon from '@coreui/icons-react'

import {
  cilSpeedometer,
  cilBriefcase,
  cilDescription,
  cilPeople,
  cilBell,
  cilUser,
  cilCreditCard,
} from '@coreui/icons'

import {
  CNavItem,
} from '@coreui/react'

const _nav = [

  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Tenders',
    to: '/tenders',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Offers',
    to: '/offers',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Suppliers',
    to: '/suppliers',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Updates',
    to: '/updates',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Profile',
    to: '/profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Premium',
    to: '/premium',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
  },

]

export default _nav