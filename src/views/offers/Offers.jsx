import React, { useEffect, useState } from 'react'

import axios from 'axios'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CFormSelect,
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

  const [tenders, setTenders] = useState([])

  const [suppliers, setSuppliers] = useState([])

  const [selectedTender, setSelectedTender] =
    useState('')

  const [selectedSupplier, setSelectedSupplier] =
    useState('')

  const [price, setPrice] = useState('')

  /* ================= FETCH ================= */

  const fetchData = async () => {

    const offersRes = await axios.get(
      'http://localhost:5000/offers'
    )

    const tendersRes = await axios.get(
      'http://localhost:5000/tenders'
    )

    const suppliersRes = await axios.get(
      'http://localhost:5000/suppliers'
    )

    setOffers(offersRes.data)

    setTenders(tendersRes.data)

    setSuppliers(suppliersRes.data)
  }

  useEffect(() => {

    fetchData()

  }, [])

  /* ================= ADD OFFER ================= */

  const addOffer = async () => {

    if (
      !selectedTender ||
      !selectedSupplier ||
      !price
    ) return

    await axios.post(
      'http://localhost:5000/offers',
      {
        tenderId: selectedTender,
        supplier: selectedSupplier,
        price,
      },
    )

    setPrice('')

    fetchData()
  }

  return (

    <CCard>

      <CCardHeader>
        Offers
      </CCardHeader>

      <CCardBody>

        {/* ================= FORM ================= */}

        <div className="mb-4">

          {/* ================= TENDER ================= */}

          <CFormSelect
            className="mb-2"
            value={selectedTender}
            onChange={(e) =>
              setSelectedTender(
                e.target.value,
              )
            }
          >

            <option value="">
              Select Tender
            </option>

            {tenders.map((tender) => (

              <option
                key={tender.id}
                value={tender.id}
              >

                {tender.title}

              </option>

            ))}

          </CFormSelect>

          {/* ================= SUPPLIER ================= */}

          <CFormSelect
            className="mb-2"
            value={selectedSupplier}
            onChange={(e) =>
              setSelectedSupplier(
                e.target.value,
              )
            }
          >

            <option value="">
              Select Supplier
            </option>

            {suppliers.map((supplier) => (

              <option
                key={supplier.id}
                value={supplier.name}
              >

                {supplier.name}

              </option>

            ))}

          </CFormSelect>

          {/* ================= PRICE ================= */}

          <CFormInput
            className="mb-2"
            placeholder="Offer Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />

          {/* ================= BUTTON ================= */}

          <CButton
            color="primary"
            onClick={addOffer}
          >

            Add Offer

          </CButton>

        </div>

        {/* ================= TABLE ================= */}

        <CTable hover responsive>

          <CTableHead>

            <CTableRow>

              <CTableHeaderCell>
                Supplier
              </CTableHeaderCell>

              <CTableHeaderCell>
                Price
              </CTableHeaderCell>

              <CTableHeaderCell>
                Tender ID
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
                  {offer.price} €
                </CTableDataCell>

                <CTableDataCell>
                  {offer.tenderId}
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