import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='overflow-x-hidden'>
    <RouterProvider router={route}>
    </RouterProvider>
  </div>,
)
