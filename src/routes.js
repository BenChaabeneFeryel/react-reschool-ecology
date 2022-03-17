import Dashboard from './views/dashboard/Dashboard'
import Poubelles from './components/admin/Poubelles'
import Map from './components/admin/Map'
import Login from './components/Login'
import Camions from './components/admin/Camions'
import Ouvriers from './components/admin/Ouvriers'
import Reparateurs from './components/admin/Reparateurs'
import Responsables from './components/admin/Responsables'
import Acheteurs from './components/admin/Acheteurs'
import Fournisseurs from './components/admin/Fournisseurs'

const routes = [
  { path: '/', exact: true, name: 'Accueil', element: Dashboard },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/map', name: 'Map', element: Map },
  { path: '/poubelles', name: 'Poubelles', element: Poubelles },
  { path: '/camions', name: 'Camions', element: Camions },
  { path: '/ouvriers', name: 'Ouvriers', element: Ouvriers },
  { path: '/reparateurs', name: 'Reparateurs', element: Reparateurs },
  { path: '/responsables-etablissements', name: 'Responsables', element: Responsables },
  { path: '/acheteurs-dechets', name: 'Acheteurs', element: Acheteurs },
  { path: '/fournisseurs', name: 'Fournisseurs', element: Fournisseurs },
  { path: '/login', name: 'Login', element: Login },
]

export default routes
