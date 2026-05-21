import React, { useEffect, useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem('cart')) || []

    setCart(savedCart)
  }, [])

  const generateContract = () => {
    const contractText = `
SMARTPROCURE CONTRACT

Supplier: ${cart[0]?.supplier || 'N/A'}

Offers included: ${cart.length}

Status: Approved
    `

    const blob = new Blob([contractText], {
      type: 'text/plain',
    })

    const link = document.createElement('a')

    link.href = URL.createObjectURL(blob)
    link.download = 'contract.txt'

    link.click()
  }

  return (
    <CCard>
      <CCardHeader>Selected Offers</CCardHeader>

      <CCardBody>
        <CTable hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Supplier</CTableHeaderCell>
              <CTableHeaderCell>Price</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {cart.map((offer, index) => (
              <CTableRow key={index}>
                <CTableDataCell>
                  {offer.supplier}
                </CTableDataCell>

                <CTableDataCell>
                  {offer.price}€
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>

        <CButton
          color="success"
          onClick={generateContract}
        >
          Generate Contract
        </CButton>
      </CCardBody>
    </CCard>
  )
}

export default Cart