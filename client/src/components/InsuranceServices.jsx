import React from 'react'
import "./../App.css"
import { useNavigate } from 'react-router-dom'

const InsuranceServices = () => {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()


    const hanbdleOnClick = ()=>{
        if(token){
            navigate("dashboard/create-insurance")
            
        }else{
            alert("You are not logged in. Please log in to your account")
        }
        
    }
    return (
        <div>
            <div class="container card py-5 w-100 ">
                <div class="row flex g-3 row-cols-1 row-cols-sm-2 row-cols-md-4 item-center">

                    <div class="col d-flex justify-content-center" onClick={hanbdleOnClick}>
                        <div class="icon-card">
                            <span class="badge badge-custom badge-new">NEW</span>
                            <img src="https://www.insurancedekho.com/pwa/img/v2_icon_car.svg" alt="Car" />
                            <div class="icon-title">Car</div>
                            <div class="icon-subtitle">Insurance</div>
                        </div>
                    </div>


                    <div class="col d-flex justify-content-center" onClick={hanbdleOnClick}>
                        <div class="icon-card">
                            <img src="https://www.insurancedekho.com/pwa/img/v2_icon_bike.svg" alt="Bike" />
                            <div class="icon-title">Bike</div>
                            <div class="icon-subtitle">Insurance</div>
                        </div>
                    </div>


                    <div class="col d-flex justify-content-center" onClick={hanbdleOnClick}>
                        <div class="icon-card">
                            <span class="badge badge-custom badge-offer">Upto 25% Off*</span>
                            <img src="https://www.insurancedekho.com/pwa/img/v2_icon_health.svg" alt="Health" />
                            <div class="icon-title">Health</div>
                            <div class="icon-subtitle">Insurance</div>
                        </div>
                    </div>


                    <div class="col d-flex justify-content-center" onClick={hanbdleOnClick}>
                        <div class="icon-card">
                            <span class="badge badge-custom badge-offer">Save On Tax*</span>
                            <img src="https://www.insurancedekho.com/pwa/img/v2_icon_life.svg" alt="Term" />
                            <div class="icon-title">Term</div>
                            <div class="icon-subtitle">Insurance</div>
                        </div>
                    </div>


                    <div class="col d-flex justify-content-center" onClick={hanbdleOnClick}>
                        <div class="icon-card">
                            <img src="https://www.insurancedekho.com/pwa/img/v2_icon_investment.svg" alt="Investment" />
                            <div class="icon-title">Investment</div>
                            <div class="icon-subtitle">Plans</div>
                        </div>
                    </div>


                    <div class="col d-flex justify-content-center" onClick={hanbdleOnClick}>
                        <div class="icon-card">
                            <span class="badge badge-custom badge-new">NEW</span>
                            <img src="https://www.insurancedekho.com/pwa/img/business_insurance.svg" alt="Business" />
                            <div class="icon-title">Business</div>
                            <div class="icon-subtitle">Insurance</div>
                        </div>
                    </div>


                    <div class="col d-flex justify-content-center" onClick={hanbdleOnClick}>
                        <div class="icon-card">
                            <img src="https://www.insurancedekho.com/pwa/img/v2_icon_family.svg" alt="Family Health" />
                            <div class="icon-title">Family Health</div>
                            <div class="icon-subtitle">Insurance</div>
                        </div>
                    </div>


                   
                    <div class="col d-flex justify-content-center">
                        <div class="icon-card">
                            <img src="https://static.insurancedekho.com/pwa/img/v2_icon_viewmore.svg" alt="View More" />
                            <div class="icon-title">View More</div>
                        </div>
                    </div>
                </div>
            </div>


            <div>

                <div class="container my-5">

                    <h3 className='text-center font-weight-bold'>Benefits of InsuranceDekho
                    </h3>
                    <p className='text-center'> Understand your insurance policy options. Identify the best value. Enjoy peace of mind</p>
                    <div class="row g-4">


                        <div class="col-12 col-md-4">
                            <div class="shadow-sm border-0 rounded-4 p-3 h-100 w-100">
                                <img src="https://static.insurancedekho.com/pwa/img/benifitimg1.svg" class="card-img-top mx-auto pl-3" alt="5 Min Policy" style={{ width: "80px" }} />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">5 Minutes Policy Issuance*</h5>
                                    <p class="card-text text-secondary">
                                        Say no to spending hours and days in queues doing the paperwork for your insurance policy. Get your insurance issued instantly with InsuranceDekho. The entire process from selecting the best insurance policy to getting it issued takes just 5 minutes on InsuranceDekho.
                                    </p>

                                </div>
                            </div>
                        </div>


                        <div class="col-12 col-md-4">
                            <div class="shadow-sm border-0 rounded-4 p-3 h-100 w-100">
                                <img src="https://static.insurancedekho.com/pwa/img/benifitimg3.svg" class="card-img-top mx-auto pl-3" alt="Health Plans" style={{ width: "80px" }} />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">Dedicated Support Team</h5>
                                    <p class="card-text text-secondary">
                                        Our dedicated support team is available for your assistance all the 7 days. Feel free to reach out to us in case of any confusion - be it related to the purchase of an insurance policy or assistance during the settlement of a claim, our team of experts is at your service all days.
                                    </p>

                                </div>
                            </div>
                        </div>


                        <div class="col-12 col-md-4">
                            <div class=" shadow-sm border-0 rounded-4 p-3 h-100 w-100">
                                <img src="https://static.insurancedekho.com/pwa/img/benifitimg2.svg" class="card-img-top mx-auto pl-3" alt="Car Insurance" style={{ width: "80px" }} />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">Over 80 Lac Happy Customers</h5>
                                    <p class="card-text text-secondary">
                                        InsuranceDekho is becoming a household name in India. Till now we have been successful in providing a delightful experience to more than 50 lac customers with the help of our transparent and quick process, a dedicated support team along with the availability of numerous insurers.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>


            <div class="container my-5">
                <h3 className='text-center pb-5 font-weight-bold'>How InsuranceDekho Works?</h3>
                <div class="row g-4">


                    <div class="col-12 col-md-4">
                        <div class="card text-center shadow-sm border-0 rounded-4 p-3 h-100 w-100">
                            <img src="https://static.insurancedekho.com/pwa/img/HowIDwork_img1.svg" class="card-img-top mx-auto my-3" alt="Car Insurance" style={{ width: "80px" }} />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Fill in Your Details</h5>
                                <p class="card-text text-secondary">
                                    Fill in your details and get insurance policy premium quotes from top-rated insurers instantly.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <div class="card text-center shadow-sm border-0 rounded-4 p-3 h-100 w-100">
                            <img src="https://static.insurancedekho.com/pwa/img/HowIDwork_img2.svg" class="card-img-top mx-auto my-3" alt="Car Insurance" style={{ width: "80px" }} />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Select a Plan</h5>
                                <p class="card-text text-secondary">
                                    From numerous available quotes, choose the one that best suits your requirements and budget.
                                </p>

                            </div>
                        </div>
                    </div>


                    <div class="col-12 col-md-4">
                        <div class="card text-center shadow-sm border-0 rounded-4 p-3 h-100 w-100">
                            <img src="https://static.insurancedekho.com/pwa/img/HowIDwork_img3.svg" class="card-img-top mx-auto my-3" alt="Car Insurance" style={{ width: "80px" }} />
                            <div class="card-body">
                                <h5 class="card-title  font-weight-bold">Make Payment and Sit Back</h5>
                                <p class="card-text text-secondary">
                                    Pay online and get your policy right away in your inbox.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default InsuranceServices
