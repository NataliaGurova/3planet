import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';


export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Footer/>
    </>
  );
};