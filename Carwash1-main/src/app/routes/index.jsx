import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// import Searcher from "../components/Searcher";
// import BackgroundImg from "../components/Background";
// import PaymentOptions from "../components/Paymentoption";
// import AboutGuest from "../components/About";
// import Dryclean from "../components/Home/Dryclean";
// import Nav from "../partials/Nav";
// import Question from "../components/Question";
// import Footer from "../partials/Footer";
// import Rectanglefield from "../components/Rectanglefield";
// import Ourplan from "../components/Ourplan";
// import OurServices from "../components/OurServices";
// import Card1 from "../components/Card";
// import Review from "../components/Review";
// import Ourplans from "../components/Ourplans";
// import Subscribe from "../pages/users/Subscribe";
// import HomeCards from "../components/Home/HomeCards";

import Guest1 from "../pages/users/Guest1";
import Home from "../pages/users/Home";
import Guest2 from "../pages/users/Guest2";
import Services from "../pages/users/Services";
import AboutUs from "../components/Home/Homepage";
import Contactus from "../pages/users/Contactus";
import Login from "../pages/users/auth/Login";
import Email from "../pages/users/auth/Email";
import PasswordReset from "../pages/users/auth/PasswordReset";
import Profile from "../pages/users/Profile";
import ServiceLocation from "../pages/users/ServiceLocation";
import ServiceInvoice from "../pages/users/ServiceInvoice";
import RegisterPage from "../pages/users/auth/Register";
import Mobile from "../pages/users/auth/Mobile";
import Otp from "../pages/users/auth/otp";
import Subscriptions from "../pages/users/Subscription";
import Booking from "../pages/users/Booking";

import History from "../components/Table";
import EditProfile from "../pages/users/EditProfile";
import FAQs from "../components/FAQ1";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AdPaySucc from "../pages/admin/AdPaySucc";
import AdPayUnsucc from "../pages/admin/AdPayUnsucc";
import AdUserReq from "../pages/admin/AdUserReq";
import AdUserAct from "../pages/admin/AdUserAct";
import AdUserInact from "../pages/admin/AdUserDec";
import AdAllSup from "../pages/admin/AdAllSup";
import AdEditSup from "../pages/admin/AdEditSup";
import AdCreateSup from "../pages/admin/AdCreateSup";
import AdPayDetails from "../pages/admin/AdPayDetails";
import AdUserDetails from "../pages/admin/AdUserDetail";
import AdAllService from "../pages/admin/AdAllService";
import AdReqService from "../pages/admin/AdReqService";
import AdAccptService from "../pages/admin/AdAccptService";
import AdDeniedService from "../pages/admin/AdDeniedService";

import SupervisorDashboard from "../pages/supervisor/SupervisorDashboard";
import SupPaySucc from "../pages/supervisor/SupPaySucc";
import SupPayUnsucc from "../pages/supervisor/SupPayUnsucc";
import SupUserReq from "../pages/supervisor/SupUserReq";
import SupUserAct from "../pages/supervisor/SupUserAct";
import SupUserInact from "../pages/supervisor/SupUserDec";
import SupPayDetails from "../pages/supervisor/SupPayDetails";
import SupUserDetails from "../pages/supervisor/SupUserDetails";
import SupAllService from "../pages/supervisor/SupAllService";
import SupReqService from "../pages/supervisor/SupReqService";
import SupAccptService from "../pages/supervisor/SupAccptService";
import SupDeniedService from "../pages/supervisor/SupDeniedService";

import AdDash from "../components/AdDash";
import SupDash from "../components/SupDash";
import Table from "../components/Table";
import OurServices from "../components/OurServices";

function AppRouter() {
  return (
    <>
      {/*======== COMPONENTS========== */}

      {/* <Dryclean/> */}
      {/* <Card1/> */}
      {/* <HomeCards/> */}
      {/* <PaymentOptions/> */}
      {/* <Ourplan/> */}
      {/* <Nav/>  */}
      {/* <Searcher/> */}
      {/* <AboutGuest/> */}
      {/* <BackgroundImg/> */}
      {/* <Question/> */}
      {/* <Rectanglefield/> */}
      {/* <OurServices/> */}
      {/* <Footer/> */}
      {/* <Ourplans/> */}
      {/* <Subscribe/> */}
      {/* <Review/> */}

      {/*======== PAGES ========== */}
      <Routes>
        {/*======== AUTHENTICATION ========== */}
         <Route path="/registerpage" element={<RegisterPage />}></Route>
        <Route path="/mobile" element={<Mobile />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/email" element={<Email />}></Route>
        <Route path="/passwordreset" element={<PasswordReset />}></Route>

        {/*======== USERS ========== */}
        <Route path="/" element={<Guest1 />}></Route>
        <Route path="/guest2" element={<Guest2 />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/editprofile" element={<EditProfile />}></Route>
        <Route path="/servicelocation" element={<ServiceLocation />}></Route>
        <Route path="/serviceinvoice" element={<ServiceInvoice />}></Route>
        <Route path="/subscriptions" element={<Subscriptions />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/faqs" element={<FAQs />}></Route>
        <Route path="/ourservices" element={<OurServices />}></Route>
        
        {/*======== ADMIN ========== */}
        <Route path="/admindashboard" element={<AdminDashboard />}></Route>
        <Route path="/adminpaysuccessful" element={<AdPaySucc />}></Route>
        <Route path="/adminpayunsucessful" element={<AdPayUnsucc />}></Route>

        <Route path="/adminuserrequest" element={<AdUserReq />}></Route>
        <Route path="/adminuseractive" element={<AdUserAct />}></Route>
        <Route path="/adminuserinactive" element={<AdUserInact />}></Route>

        <Route path="/adminallservice" element={<AdAllService />}></Route>
        <Route path="/aminrequestedservice" element={<AdReqService />}></Route>
        <Route path="/adminacceptservice" element={<AdAccptService />}></Route>
        <Route path="/admindeniedservice" element={<AdDeniedService />}></Route>

        <Route path="/adminallsupervisor" element={<AdAllSup />}></Route>
        <Route path="/admineditsupervisor" element={<AdEditSup />}></Route>
        <Route path="/admincreatesupervisor" element={<AdCreateSup />}></Route>

        <Route path="/adminpaymentdetails" element={<AdPayDetails />}></Route>
        <Route path="/adminuserdetails" element={<AdUserDetails />}></Route>
        {/* <Route path="/adminuserdec" element={<AdUserDec />}></Route> */}


        {/*======== SUPERVISOR ========== */}
        <Route path="/supervisordashboard" element={<SupervisorDashboard />}></Route>
        <Route path="/supervisorpaysuccessful" element={<SupPaySucc />}></Route>
        <Route path="/supervisorpayunsuccessful" element={<SupPayUnsucc />}></Route>

        <Route path="/supervisoruserrequest" element={<SupUserReq />}></Route>
        <Route path="/supervisoruseractive" element={<SupUserAct />}></Route>
        <Route path="/supervisoruserinactive" element={<SupUserInact />}></Route>

        <Route path="/supervisorallservice" element={<SupAllService />}></Route>
        <Route path="/supervisorrequestedservice" element={<SupReqService />}></Route>
        <Route path="/supervisoracceptservice" element={<SupAccptService />}></Route>
        <Route path="/supervisordeniedservice" element={<SupDeniedService />}></Route>

        <Route path="/supervisorpaymentdetails" element={<SupPayDetails />}></Route>
        <Route path="/supervisoruserdetails" element={<SupUserDetails />}></Route>

        {/*======== EXTRA ========== */}
        <Route path="/addash" element={<AdDash />}></Route>
        <Route path="/supdash" element={<SupDash />}></Route>
        <Route path="/table" element={<Table />}></Route>
      </Routes>
    </>
  );
}

export default AppRouter;
