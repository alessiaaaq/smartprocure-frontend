import React from 'react'

const Dashboard = React.lazy(() =>
  import('./views/dashboard/Dashboard')
)

const Tenders = React.lazy(() =>
  import('./views/tenders/Tenders')
)
const Updates = React.lazy(() =>
  import('./views/updates/Updates')
)

const Premium = React.lazy(() =>
  import('./views/premium/Premium')
)

const Profile = React.lazy(() =>
  import('./views/profile/Profile')
)

const TenderDetails = React.lazy(() =>
  import('./views/tenders/TenderDetails')
)

const Offers = React.lazy(() =>
  import('./views/offers/Offers')
)

const Suppliers = React.lazy(() =>
  import('./views/suppliers/Suppliers')
)

const routes = [

  {
    path: '/',
    exact: true,
    name: 'Home',
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    element: Dashboard,
  },
  {
  path: '/updates',
  name: 'Updates',
  element: Updates,
},

{
  path: '/premium',
  name: 'Premium',
  element: Premium,
},

{
  path: '/profile',
  name: 'Profile',
  element: Profile,
},

  {
    path: '/tenders',
    name: 'Tenders',
    element: Tenders,
  },

  {
    path: '/tenders/:id',
    name: 'Tender Details',
    element: TenderDetails,
  },

  {
    path: '/offers',
    name: 'Offers',
    element: Offers,
  },

  {
    path: '/suppliers',
    name: 'Suppliers',
    element: Suppliers,
  },

]

export default routes