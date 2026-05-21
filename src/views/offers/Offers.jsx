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

const Offers = () => {
  const [offers, setOffers] = useState([])

  const [supplier, setSupplier] = useState('')
  const [price, setPrice] = useState('')

  const fetchOffers = async () => {
    const res = await axios.get(
      'https://smartprocure-api.onrender.com/offers'
    )

    setOffers(res.data)
  }

  useEffect(() => {
    fetchOffers()
  }, [])

  const addOffer = async () => {
    if (!supplier || !price) return

    await axios.post(
      'https://smartprocure-api.onrender.com/offers',
      {
        supplier,
        price,
      }
    )

    setSupplier('')
    setPrice('')

    fetchOffers()
  }

  const addToCart = (offer) => {
    const existingCart =
      JSON.parse(localStorage.getItem('cart')) || []

    existingCart.push({
      supplier: offer.supplier,
      price: offer.price,
    })

    localStorage.setItem(
      'cart',
      JSON.stringify(existingCart)
    )

    alert('Offer added to cart!')
  }

  return (
    <CCard>
      <CCardHeader>Offers</CCardHeader>

      <CCardBody>
        <div className="mb-4">
          <CFormInput
            className="mb-2"
            placeholder="Supplier"
            value={supplier}
            onChange={(e) =>
              setSupplier(e.target.value)
            }
          />

          <CFormInput
            className="mb-2"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />

          <CButton color="primary" onClick={addOffer}>
            Add Offer
          </CButton>
        </div>

        <CTable hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>
                Supplier
              </CTableHeaderCell>

              <CTableHeaderCell>
                Price
              </CTableHeaderCell>

              <CTableHeaderCell>
                Actions
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {offers.map((offer) => (
              <CTableRow key={offer.id}>
                <CTableDataCell>
                  {offer.supplier}
                </CTableDataCell>

                <CTableDataCell>
                  {offer.price}€
                </CTableDataCell>

                <CTableDataCell>
                  <CButton
                    color="success"
                    size="sm"
                    onClick={() =>
                      addToCart(offer)
                    }
                  >
                    Add to Cart
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Offers