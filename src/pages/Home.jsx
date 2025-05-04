import React from 'react'
import "./Home.css"

import mockupIMG from "../assets/image-mockups.png"
import backgroundIMG from "../assets/bg-intro-desktop.svg"

import dot1 from "../assets/icon-online.svg"
import dot2 from "../assets/icon-budgeting.svg"
import dot3 from "../assets/icon-onboarding.svg"
import dot4 from "../assets/icon-api.svg"

import image1 from "../assets/image-currency.jpg"
import image2 from "../assets/image-restaurant.jpg"
import image3 from "../assets/image-plane.jpg"
import image4 from "../assets/image-confetti.jpg"


const Home = () => {
  return (
    <>
        <div className='overview'>
            <div className='leftXright'>
                <div className="left">
                    <div className='header-text'>
                        <h3>
                            Next generation
                            digital banking
                        </h3>
                    </div>

                    <div className='header-p'>
                        <p>
                            Take your financial life online. Your Easybank account
                            will be a one-stop-shop for spending, saving,
                            budgeting, investing, and much more.
                        </p>
                    </div>

                    <div className='request-btn'>
                        <button>
                            Request Invite
                        </button>
                    </div>
                </div>

                <div className="right">
                    {/* INSRTI MAGE */}
                    <img src={mockupIMG} alt="" />
                    <img src={backgroundIMG} alt="" />

                </div>
            </div>

            <div className='info-section'>
                <div className="infos">
                    <div className='info-head'>
                        <h4>
                            Why choose Easybank?
                        </h4>
                    </div>

                    <div className='info-para'>
                        <p>
                            We leverage Open Banking to turn your bank account into financial hub.
                            Control your finances like never before.
                        </p>
                    </div>
                </div>
               

                <div className='info-panel'>
                    <div className='info1'>
                        {/* INSET IMG */}

                        <img src={dot1} alt="" />

                        <p>Online Banking</p>

                        <p>
                            Our modern web and mobile
                            applications allow you to keep
                            track of your finances wherever you
                            are in the world.
                        </p>
                    </div>

                    <div className='info1'>
                        {/* INSET IMG */}

                        <img src={dot2} alt="" />

                        <p>Simple Budgeting</p>

                        <p>
                            See exactly where your money
                            goes each month. Receive 
                            notifications when you're close to
                            hitting your limits.
                        </p>
                    </div>

                    <div className='info1'>
                        {/* INSET IMG */}

                        <img src={dot3} alt="" />

                        <p>Fast Onboarding </p>

                        <p>
                            We don't do branches. Open your
                            account in minutes online and start
                            taking Control of your finances
                            right away.
                        </p>
                    </div>

                    <div className='info1'>
                        {/* INSET IMG */}

                        <img src={dot4} alt="" />

                        <p>Open API</p>

                        <p>
                            Manage your savings, investment,
                            pension, and much more from one
                            account. Tracking your money has 
                            never been easier.
                        </p>
                    </div>
                </div>
                
            </div>

            <div className='article-section'>
                <div className='article-head'>
                    <h4>Latest Article</h4>
                </div>

                <div className='article-body'>
                    <div className='article-card'>
                        

                        <div className='article-para'>
                            {/* INSRT IMAGE */}
                            <img src={image1} alt="" />

                            <p>By Claire Robinson</p>

                            <h3>
                                Receive money in any
                                currency with no fees
                            </h3>

                            <p>
                                The world is getting smaller and
                                we're becoming more mobile. So 
                                why should you be forced to only
                                receive money in a single...
                            </p>
                        </div>

                        <div className='article-para'>
                            {/* INSRT IMAGE */}
                            <img src={image2} alt="" />

                            <p>By Wilson Hutton</p>

                            <h3>
                                Treat yourself without
                                worrying about money
                            </h3>

                            <p>
                                Our simple budgeting feature
                                allows you to separate out your
                                spending and set realistic limits
                                each month. That means you...
                            </p>
                        </div>

                        <div className='article-para'>
                            {/* INSRT IMAGE */}
                            <img src={image3} alt="" />

                            <p>By Wilson Hutton</p>

                            <h3>
                                Take your Easybank card 
                                wherever you go
                            </h3>

                            <p>
                                We want you to enjoy your travels.
                                This is why we don't charge any
                                fees on purchases while you're 
                                abroad. We'll even show you...
                            </p>
                        </div>

                        <div className='article-para'>
                            {/* INSRT IMAGE */}
                            <img src={image4} alt="" />

                            <p>By Claire Robinson</p>

                            <h3>
                                Our invite-only Beta
                                accouns are now live!
                            </h3>

                            <p>
                                After a lot of hard work by the
                                whole team, we're excited to launch
                                our closed beta. It's easy to request
                                an invite through the site...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
