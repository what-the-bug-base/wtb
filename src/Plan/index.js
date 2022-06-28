import { Check, ExpandMore, FacebookOutlined, LinkedIn, Twitter } from "@mui/icons-material"
import React from "react"
import "./styles.css"

export default function Plan(){
    return(
        <div className="plan-cont">
        <div className="plan-cont-inner">
          <div className="plan-cont-img">
            <img src="/icon-dev.png">
            </img>
            <p style={{color:"rgb(53, 53, 155)"}}>EinsBoard</p>
            </div>
            <div className="plan-cont-intro">
                <p className="plan-title">Choose your plan</p>
                <p>Get a plan in three easy steps</p>
                <p>All plans include On-cloud Hosting,with limited or all app intergrations</p>
            </div>
            <div className="plan-select-cont">
                <div className="plan-title">
                    <div className="plan-order-numbering">
                        <p>1</p>
                        </div>
                    <p><b style={{color:"rgb(53, 53, 155)"}}>Select</b> a plan that works for you</p>

                    </div>
                <p className="plan-choose-text">Choose a plan that suits your organisation's needs</p>
            </div>
            <div className="plan-container">
            <div className="plan0-cont">
            <div className="plan0-cont1">
                <p className="plan0-title">Free trial</p>
                <div className="plan-includes">
                  
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>Demo Account</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>Demo Apps intergrations</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>Sample data</p>
                    </div>

                </div>
                <button className="select-plan-btn">Try Now</button>
                </div>

                
            </div>
            <div className="plan2-cont">
            <div className="plan0-cont1">
                <p className="plan2-title">Teams plan Zeno</p>
                <div className="plan-includes">
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>24/7 customer support</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>On-cloud Hosting</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>Google Apps intergrations</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>Jisti Jaas intergration</p>
                    </div>
                  
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>Github intergration</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>upto 1GB for workspaces storage</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>upto 100 workspaces on Admin Account</p>
                    </div>

                </div>
                <button className="select-plan-btn">$235/month</button>
               
                </div>
            </div>
            <div className="plan3-cont">
            <div className="plan0-cont1">
                <p className="plan3-title">Teams plan Alpha</p>
                <div className="plan-includes">
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>24/7 customer support</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>On-Cloud Hosting</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>Google Apps intergrations</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>Jisti Jaas intergration</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>Github intergration</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>upto 5GB workspaces storage</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>Unlimited workspaces</p>
                    </div>
                    <div className="plan-includes-cont">
                    <Check fontSize="small" style={{color:"rgb(53, 53, 155)"}}/>
                    <p>Student Report,Assesment and Logs</p>
                    </div>

                </div>
                <button className="select-plan-btn">$525/month</button>
               
                </div>
              
</div>

                
            </div>
            <div className="sale-cont">
                <p>*All plans are in USD</p>
    <p>Didn't find right plan for your organisation?</p>
    <a href="">Talk to Sales</a>
</div>
            <div className="plan-select-cont">
                <div className="plan-title">
                    <div className="plan-order-numbering">
                        <p>2</p>
                        </div>
                    <p><b style={{color:"rgb(53, 53, 155)"}}>Enter</b> your organisations details</p>

                    </div>
                <p className="plan-choose-text">We do not share information and will contact you only as needed to provide our service</p>
            </div>
            <div className="plan-org-details-form">
                <div className="plan-org-form">
                    <div className="org-1-details">
                <div className="org-box">
                    <div className="input-box-holder">
                    <p>Organisation's Name</p>
                    <input required type="text" placeholder="Organisation's name" className="form-input-box"></input>
                   </div>
                   <div className="input-box-holder">
                    <p>Organisation's Email</p>
                    <input required type="email" placeholder="Organisation's email" className="form-input-box"></input>
                
                    </div>
                    </div>
                    <div className="org-box">
                    <div className="input-box-holder">
                    <p>Organisation's Telephone</p>
                    <input required type="text" placeholder="Phone number" className="form-input-box"></input>
                   </div>
                   <div className="input-box-holder">
                   <p>Type of Organisation</p>
                    <input required type="text" placeholder="Highschool or HigherLearning Institution" className="form-input-box"></input>
                    </div>
                    </div>
                    <div className="org-box">
                    <div className="input-box-holder">
                    <p>Organisation's Capacity</p>
                    <input required type="number" placeholder="Phone number" className="form-input-box"></input>
                   </div>
                   <div className="input-box-holder">
                   <p>Organisations website</p>
                    <input required type="text" placeholder="Organisation's website" className="form-input-box"></input>
                    </div>
                    </div>
                    </div>

                </div>

            </div>
            <div className="plan-select-cont">
                <div className="plan-title">
                    <div className="plan-order-numbering">
                        <p>3</p>
                        </div>
                    <p><b style={{color:"rgb(53, 53, 155)"}}>Select</b> your payment method</p>

                    </div>
                <p className="plan-choose-text">Secure checkout.Your payment information is fully protected.</p>
            </div>
<div className="plans-credit-card">
    <div className="plans-choose-method">
        <p>Choose Method</p>
        <ExpandMore></ExpandMore>
    </div>
</div>

        </div>
        <div className="footer-bar">
            <div className="footer-bar-outer">
    <div className="cont-1">
        <p className="footer-title">Products</p>
        <p>EinsBoard</p>
        
    </div>
    <div className="cont-2">
    <p className="footer-title">Learn More</p>
    <p>What is EinsBoard?</p>
    <p>Blog</p>

        
        </div>
        <div className="cont-3">
        <p className="footer-title">About EinsBoard</p>
        <p>Plans and Pricing</p>
        <p>Features</p>
        <p>Privacy Policy</p>
        
        </div>
        <div className="cont-3">
        <p className="footer-title">Help</p>
        <p>FAQ</p>
        <p>Support Center</p>
        <p>Contact Sales</p>
        </div>
     </div>
     
<div className="footer-socials">

    <div className="footer-copyright">
  <p>EinsBoard © All Rights reserved </p>
    </div>
    <div footer className="footer-socials-box">
        <FacebookOutlined></FacebookOutlined>
        <Twitter></Twitter>
        <LinkedIn></LinkedIn>
    </div>

</div>
</div>
        </div>
        
        
    )
}