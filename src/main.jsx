import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Auth from './Auth/Auth'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='overflow-x-hidden'>
    <Auth>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
      </QueryClientProvider>
    </Auth>
    <Toaster />
  </div>,
)
