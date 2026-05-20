import React, { useEffect, useState } from 'react'
import axios from 'axios'

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

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const fetchSuppliers = async () => {
    const res = await axios.get('https://smartprocure-api.onrender.com/suppliers')
    setSuppliers(res.data)
  }

  useEffect(() => {
    fetchSuppliers()
  }, [])

  const addSupplier = async () => {
    if (!name || !email) return

    await axios.post('https://smartprocure-api.onrender.com/suppliers', {
      name,
      email,
    })

    setName('')
    setEmail('')

    fetchSuppliers()
  }

  return (
    <CCard>
      <CCardHeader>Suppliers</CCardHeader>

      <CCardBody>
        <div className="mb-4">
          <CFormInput
            className="mb-2"
            placeholder="Supplier Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <CFormInput
            className="mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <CButton color="primary" onClick={addSupplier}>
            Add Supplier
          </CButton>
        </div>

        <CTable hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Email</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {suppliers.map((supplier) => (
              <CTableRow key={supplier.id}>
                <CTableDataCell>{supplier.name}</CTableDataCell>

                <CTableDataCell>
                  {supplier.email}
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Suppliers