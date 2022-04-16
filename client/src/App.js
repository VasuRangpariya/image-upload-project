import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Auth from "./pages/Auth";
import ImageList from "./pages/ImageList";
import Report from "./pages/Report";
import Upload from "./pages/Upload";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth></Auth>}></Route>
      <Route path='/images' element={<ImageList />}></Route>
      <Route path='/upload' element={<Upload />}></Route>
      <Route path='/report' element={<Report />}></Route>
    </Routes>
  );
}

export default App;

// import React from "react";

// import Checkout from "./pages/Checkout";
// import GetOrders from "./pages/admin/GetOrders";
// import SignIn from "./pages/Login";
// // import Order from "./pages/order";
// import Order from "./pages/Order";
// import Register from "./pages/Register";

// import AdminOrderTrack from "./pages/admin/TrackOrder";
// import ControlOrderStatus from "./pages/admin/ControlOrderStatus";
// import Service from "./pages/Services";
// import ServiceLocation from "./pages/ServiceLocation";
// import Logout from "./pages/logout";
// import GetServices from "./pages/GetServices";
// import GetStore from "./pages/GetStores";

// export default function App() {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<SignIn></SignIn>} />
//         <Route path='/login' element={<SignIn></SignIn>} />
//         <Route path='/register' element={<Register></Register>} />
//         <Route path='/about' element={<Register />} />
//         <Route path='/checkout' element={<Checkout />} />
//         <Route path='/order' element={<Order />} />
//         <Route path='/service' element={<Service />} />
//         <Route path='/getService' element={<GetServices />} />
//         <Route path='/getStore' element={<GetStore />} />
//         <Route path='/serviceLocation' element={<ServiceLocation />} />
//         <Route path='/getOrders' element={<GetOrders />} />
//         <Route path='/logout' element={<Logout />} />
//         <Route path='/orderControl/:orderID' element={<ControlOrderStatus />} />
//       </Routes>
//     </>
//   );
// }
