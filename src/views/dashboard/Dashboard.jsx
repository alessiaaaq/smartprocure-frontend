import React, { useEffect, useState } from 'react'

import axios from 'axios'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CWidgetStatsA,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CBadge,
} from '@coreui/react'

const Dashboard = () => {

  const [stats, setStats] = useState({
    tenders: 0,
    offers: 0,
    suppliers: 0,
  })

  const [tenders, setTenders] = useState([])

  const [updates, setUpdates] = useState([])

  /* ================= FETCH ================= */

  useEffect(() => {

    fetchData()

  }, [])

  const fetchData = async () => {

    /* ================= STATS ================= */

    const statsRes = await axios.get(
      'http://localhost:5000/stats'
    )

    setStats(statsRes.data)

    /* ================= TENDERS ================= */

    const tendersRes = await axios.get(
      'http://localhost:5000/tenders'
    )

    setTenders(
      tendersRes.data.reverse()
    )

    /* ================= UPDATES ================= */

    const updatesRes = await axios.get(
      'http://localhost:5000/updates'
    )

    setUpdates(
      updatesRes.data.slice(-5).reverse()
    )
  }

  /* ================= STATUS COLOR ================= */

  const getStatusColor = (status) => {

    switch (status) {

      case 'Open':
        return 'success'

      case 'In Review':
        return 'warning'

      case 'Closed':
        return 'danger'

      default:
        return 'secondary'
    }
  }

  return (

    <>

      {/* ================= STATS ================= */}

      <CRow>

        <CCol sm={6} xl={3}>

          <CWidgetStatsA
            className="mb-4"
            color="primary"
            value={stats.tenders}
            title="Active Tenders"
          />

        </CCol>

        <CCol sm={6} xl={3}>

          <CWidgetStatsA
            className="mb-4"
            color="success"
            value={stats.offers}
            title="Submitted Offers"
          />

        </CCol>

        <CCol sm={6} xl={3}>

          <CWidgetStatsA
            className="mb-4"
            color="warning"
            value={stats.suppliers}
            title="Suppliers"
          />

        </CCol>

        <CCol sm={6} xl={3}>

          <CWidgetStatsA
            className="mb-4"
            color="danger"
            value={
              tenders.filter(
                (t) =>
                  t.status === 'Closed'
              ).length
            }
            title="Completed Contracts"
          />

        </CCol>

      </CRow>

      {/* ================= RECENT TENDERS ================= */}

      <CCard className="mb-4">

        <CCardHeader>
          Recent Tenders
        </CCardHeader>

        <CCardBody>

          <CTable hover responsive>

            <CTableHead>

              <CTableRow>

                <CTableHeaderCell>
                  Title
                </CTableHeaderCell>

                <CTableHeaderCell>
                  Budget
                </CTableHeaderCell>

                <CTableHeaderCell>
                  Deadline
                </CTableHeaderCell>

                <CTableHeaderCell>
                  Status
                </CTableHeaderCell>

              </CTableRow>

            </CTableHead>

            <CTableBody>

              {tenders.map((tender) => (

                <CTableRow key={tender.id}>

                  <CTableDataCell>
                    {tender.title}
                  </CTableDataCell>

                  <CTableDataCell>
                    {tender.budget} €
                  </CTableDataCell>

                  <CTableDataCell>
                    {tender.deadline}
                  </CTableDataCell>

                  <CTableDataCell>

                    <CBadge
                      color={getStatusColor(
                        tender.status,
                      )}
                    >

                      {tender.status}

                    </CBadge>

                  </CTableDataCell>

                </CTableRow>

              ))}

            </CTableBody>

          </CTable>

        </CCardBody>

      </CCard>

      {/* ================= RECENT ACTIVITY ================= */}

      <CCard>

        <CCardHeader>
          Recent Activity
        </CCardHeader>

        <CCardBody>

          {updates.map((update, index) => (

            <div
              key={index}
              className="mb-3"
            >

              • {update.text}

            </div>

          ))}

        </CCardBody>

      </CCard>

    </>
  )
}

export default Dashboard