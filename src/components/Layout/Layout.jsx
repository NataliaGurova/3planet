import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';


export const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Footer/>
    </div>
  );
};