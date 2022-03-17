import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const baseURL = 'http://127.0.0.1:8000/api/responsable-etablissement'

const Responsables = () => {
  const [value, setValue] = useState([])
  const getValue = async () => {
    await axios.get(baseURL).then((response) => {
      console.log(response.data.data)
      setValue(response.data.data)
    })
  }
  useEffect(() => getValue(), [])

  return (
    <div>
      <h2>Responsables des établissements</h2>
      <br />
      <CRow>
        <CCol>
          <CTable align="middle" className="mb-0 border" color="light" hover responsive small>
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell className="text-center">ID </CTableHeaderCell>
                <CTableHeaderCell className="text-center">Photo</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Nom et Prénom</CTableHeaderCell>
                <CTableHeaderCell className="text-center">CIN</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Tel</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Email</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Créé à</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Modifié à</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {value.map((item, i) => (
                <CTableRow v-for="item in tableItems" key={item.i}>
                  <CTableDataCell className="text-center">
                    <strong>{item.id}</strong>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <img
                      src={`http://127.0.0.1:8000/storage/images/responsable_etablissement/${item.photo}`}
                      height="30px"
                      width="30px"
                    />
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    {item.nom} {item.prenom}
                  </CTableDataCell>
                  <CTableDataCell className="text-center">{item.CIN}</CTableDataCell>
                  <CTableDataCell className="text-center">{item.numero_telephone}</CTableDataCell>
                  <CTableDataCell className="text-center">{item.email}</CTableDataCell>
                  <CTableDataCell className="text-center">{item.created_at}</CTableDataCell>
                  <CTableDataCell className="text-center">{item.updated_at}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>
    </div>
  )
}

export default Responsables
