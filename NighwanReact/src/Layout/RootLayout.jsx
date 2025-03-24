// import React from 'react'
// import { Outlet } from "react-router-dom";
// import Header from '../components/Navbar';
// import Footer from '../components/Footer';
// import Chat from '../Pages/Chat';

// const RootLayout = () => {
//   return (
//     <>
//     <Header/>
//     <main>
//         <Outlet/>
//     </main>
//     <Chat/> 
//     <Footer/>
//     </>
//   )
// }

// export default RootLayout

import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import Chat from '../Pages/Chat';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Chat />
      <Footer />
    </>
  );
}

export default RootLayout;
