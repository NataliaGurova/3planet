// import { Helmet } from 'react-helmet-async';

import { Helmet } from "react-helmet-async";

export default function DocTitle({ children }) {
  return (
    <Helmet>
      <title>{children}</title>
      {/* <meta name='description' content='Beginner friendly page for learning React Helmet.' /> */}
    </Helmet>
  );
}