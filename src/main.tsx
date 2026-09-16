import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import { Layout } from './Layout.tsx';
import { Home } from './pages/Home.tsx';
import { Products } from './pages/Products.tsx';
import { ProductDetail } from './pages/ProductDetail.tsx';
import { Story } from './pages/Story.tsx';
import { Partners } from './pages/Partners.tsx';
import { ESGPage } from './pages/ESGPage.tsx';
import { Team } from './pages/Team.tsx';
import { Contact } from './pages/Contact.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/san-pham", element: <Products /> },
      { path: "/san-pham/:id", element: <ProductDetail /> },
      { path: "/cau-chuyen", element: <Story /> },
      { path: "/doi-tac-luu-tru", element: <Partners /> },
      { path: "/hanh-trinh-xanh", element: <ESGPage /> },
      { path: "/ve-chung-toi", element: <Team /> },
      { path: "/lien-he", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
