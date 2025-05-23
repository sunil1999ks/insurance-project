import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage'
import Dashboard from './layouts/Dashboard'
import HealthInsuranceForm from './InsuranceDetailsPages/HealthInsuranceForm'
import BikeInsuranceForm from './InsuranceDetailsPages/BikeInsuranceForm'
import CarInsuranceForm from './InsuranceDetailsPages/CarDetails'
import PaymentPage from './pages/PaymentPage'
import PaymentSuccess from './pages/PaymentSuccess'
// import CarDetails from './InsuranceDetailsPages'
// import HealthInsuranceForm from './HealthInsuranceForm'
// import BikeInsuranceForm from './BikeInsuranceForm'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dashboard/*' element={<Dashboard/>}/>
          <Route path='/dashboard/*' element={<Dashboard/>}/>
          <Route path='/CarInsuranceForm' element={<CarInsuranceForm/>}/>
          <Route path='/HealthInsuranceForm' element={<HealthInsuranceForm/>}/>
          <Route path='/BikeInsuranceForm' element={<BikeInsuranceForm/>}/>
              <Route path="/payment" element={<PaymentPage />} />
               <Route path="/payment-success" element={<PaymentSuccess />} />
          
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App
