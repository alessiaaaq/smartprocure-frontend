import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { useParams } from 'react-router-dom'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

const TenderDetails = () => {

  const { id } = useParams()

  const [tender, setTender] = useState(null)

  const [offers, setOffers] = useState([])

  useEffect(() => {

    fetchData()

  }, [])

  const fetchData = async () => {

    /* ================= TENDER ================= */

    const tenderRes = await axios.get(
      'http://localhost:5000/tenders'
    )

    const foundTender =
      tenderRes.data.find(
        (t) => t.id == id
      )

    setTender(foundTender)

    /* ================= OFFERS ================= */

    const offersRes = await axios.get(
      'http://localhost:5000/offers'
    )

    const filteredOffers =
      offersRes.data.filter(
        (offer) =>
          offer.tenderId == id
      )

    setOffers(filteredOffers)
  }

  if (!tender) {

    return <p>Loading...</p>
  }

  return (

    <CCard>

      <CCardHeader>
        Tender Details
      </CCardHeader>

      <CCardBody>

        {/* ================= TENDER INFO ================= */}

        <h3>
          {tender.title}
        </h3>

        <p>
          Budget:
          {' '}
          {tender.budget} €
        </p>

        <p>
          Deadline:
          {' '}
          {tender.deadline}
        </p>

        <p>
          Status:
          {' '}
          {tender.status}
        </p>

        {/* ================= OFFERS ================= */}

        <hr />

        <h4>
          Submitted Offers
        </h4>

        {offers.length === 0 ? (

          <p>
            No offers submitted yet.
          </p>

        ) : (

          <CListGroup>

            {offers.map((offer) => (

              <CListGroupItem
                key={offer.id}
              >

                <strong>
                  {offer.supplier}
                </strong>

                {' — '}

                {offer.price} €

              </CListGroupItem>

            ))}

          </CListGroup>

        )}

      </CCardBody>

    </CCard>
  )
}

export default TenderDetails