import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Auth from './Auth/Auth'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient()
import AOS from 'aos';
import MouseParticles from 'react-mouse-particles'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='text-white  overflow-x-hidden overflow-y-hidden bg-[#040709EB] '>
    <Auth>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
        <MouseParticles g={1} num={6} color={["#7EA1FF", "#E49BFF"]} cull="stats,image-wrapper" level={6} />
      </QueryClientProvider>
    </Auth>
    <Toaster />
  </div>,
)
