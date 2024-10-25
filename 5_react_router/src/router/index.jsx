import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />
    }
]);

export default router;