import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilLocationPin,
  cilTrash,
  cilCarAlt,
  cilUser,
  cilBuilding,
  cilGroup,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Map',
    to: '/map',
    icon: <CIcon icon={cilLocationPin} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: ' ',
  },
  {
    component: CNavItem,
    name: 'Poubelles',
    to: '/poubelles',
    icon: <CIcon icon={cilTrash} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Camions',
    to: '/camions',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Ouvriers',
    to: '/ouvriers',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Réparateurs',
    to: '/reparateurs',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Clients',
  },
  {
    component: CNavItem,
    name: 'Responsables des établissements',
    to: '/responsables-etablissements',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Acheteurs de déchets',
    to: '/acheteurs-dechets',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
]

export default _nav
