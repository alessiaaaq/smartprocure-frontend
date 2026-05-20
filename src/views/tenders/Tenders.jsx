import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Tenders = () => {

  const [tenders, setTenders] = useState([])

  const [title, setTitle] = useState('')
  const [budget, setBudget] = useState('')
  const [deadline, setDeadline] = useState('')
  const [status, setStatus] = useState('Open')

  /* ================= FETCH ================= */

  const fetchTenders = async () => {

    const res = await axios.get(
      'https://smartprocure-api.onrender.com/tenders'
    )

    setTenders(res.data)
  }

  useEffect(() => {

    fetchTenders()

  }, [])

  /* ================= ADD TENDER ================= */

  const addTender = async () => {

    if (
      !title ||
      !budget ||
      !deadline
    ) return

    await axios.post(
      'https://smartprocure-api.onrender.com/tenders',
      {
        title,
        budget,
        deadline,
        status,
      }
    )

    setTitle('')
    setBudget('')
    setDeadline('')

    fetchTenders()
  }

  /* ================= UPDATE STATUS ================= */

  const updateStatus = async (
    id,
    newStatus,
  ) => {

    await fetch(
      `https://smartprocure-api.onrender.com/tenders/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      },
    )

    fetchTenders()
  }

  return (

    <CCard>

      <CCardHeader>
        Tenders
      </CCardHeader>

      <CCardBody>

        {/* ================= ADD FORM ================= */}

        <div className="mb-4">

          <CFormInput
            className="mb-2"
            placeholder="Tender Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <CFormInput
            className="mb-2"
            placeholder="Budget"
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value)
            }
          />

          <CFormInput
            className="mb-2"
            type="date"
            value={deadline}
            onChange={(e) =>
              setDeadline(e.target.value)
            }
          />

          <CButton
            color="primary"
            onClick={addTender}
          >

            Add Tender

          </CButton>

        </div>

        {/* ================= TABLE ================= */}

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

                {/* ================= TITLE ================= */}

                <CTableDataCell>

                  <Link
                    to={`/tenders/${tender.id}`}
                  >

                    {tender.title}

                  </Link>

                </CTableDataCell>

                {/* ================= BUDGET ================= */}

                <CTableDataCell>

                  {tender.budget} €

                </CTableDataCell>

                {/* ================= DEADLINE ================= */}

                <CTableDataCell>

                  {tender.deadline}

                </CTableDataCell>

                {/* ================= STATUS ================= */}

                <CTableDataCell>

                  <select
                    value={tender.status}
                    onChange={(e) =>
                      updateStatus(
                        tender.id,
                        e.target.value,
                      )
                    }
                  >

                    <option value="Open">
                      Open
                    </option>

                    <option value="In Review">
                      In Review
                    </option>

                    <option value="Closed">
                      Closed
                    </option>

                  </select>

                </CTableDataCell>

              </CTableRow>

            ))}

          </CTableBody>

        </CTable>

      </CCardBody>

    </CCard>
  )
}

export default Tenders