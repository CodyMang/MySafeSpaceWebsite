import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Resources() {
    return (
        <div className="container">
        <h1 class="fs-1 fw-bolder">Resources</h1>
        <p>Here are varoius different news sources to help you keep up with the latest cybersecurity news. These are websites that provide helpful security information such as checking if your password has been breached, vulnerabilities in different databases, etc.</p>
        <div className="container">
            <div class="row">
                <div class="col">
                    <div class="card m-3 bg-light" style={{height: '30rem'}}>
                        <h5 class="card-header text-start">Hacker News</h5>
                        <div class="card-body">
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s---D91QX4j--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/tf4hhdzjpo7jmtm7yq30.jpg" class="card-img-top p-2" alt="HackerNews.jpeg" style={{ maxWidth: '20rem', height: '15rem' }}/>
                            <p class="card-text p-2 text-start">Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by the investment fund and startup incubator Y Combinator.</p>
                            <div class="position-absolute bottom-0 end-0 p-2"><a href="https://news.ycombinator.com/news" class="btn btn-primary p-2">Hacker News</a></div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card m-3 bg-light" style={{height: '30rem'}}>
                    <h5 class="card-header text-start">Daniel Miessler</h5>
                        <div class="card-body">
                            <img src="https://danielmiessler.com/images/screen-shot-2020-09-01-at-7.16.57-pm.jpeg" class="card-img-top p-2" alt="Daniel Miessler Logo" style={{ maxWidth: '20rem', height: '15rem' }}/>
                            <p class="card-text p-2 text-start">Exploring the intersection of security, technology, and society -- and what might be coming next.</p>
                            <div class="position-absolute bottom-0 end-0 p-2"><a href="https://danielmiessler.com" class="btn btn-primary p-2">Daniel Miessler</a></div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card m-3 bg-light" style={{height: '30rem'}}>
                    <h5 class="card-header text-start">IT Security Guru</h5>
                        <div class="card-body">
                            <img src="https://www.itsecurityguru.org/wp-content/uploads/2019/12/IT_Security_Guru_final.svg" class="card-img-top p-2" alt="IT Security Guru Logo" style={{ maxWidth: '20rem', height: '15rem' }}/>
                            <p class="card-text p-2 text-start"> IT Security Guru is the home of IT Security and Cybersecurity news in the UK, Europe and the World. Get the latest industry news and articles here.</p>
                            <div class="position-absolute bottom-0 end-0 p-2"><a href="https://www.itsecurityguru.org" class="btn btn-primary p-2">IT Security Guru</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card m-3 bg-light" style={{height: '30rem'}}>
                    <h5 class="card-header text-start">CSO</h5>
                        <div class="card-body">
                            <img src="https://seeklogo.com/images/C/cso-logo-713C21FBF7-seeklogo.com.png" class="card-img-top p-2" alt="CSO" style={{ maxWidth: '20rem', height: '15rem' }}/>
                            <p class="card-text p-2 text-start">CSO serves enterprise security decision-makers and users with the critical information they need to stay ahead of evolving threats and defend against criminal cyberattacks.</p>
                            <div class="position-absolute bottom-0 end-0 p-2"><a href="https://www.csoonline.com" class="btn btn-primary p-2">CSO</a></div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card m-3 bg-light" style={{height: '30rem'}}>
                    <h5 class="card-header text-start">We Live Security</h5>
                        <div class="card-body">
                            <img src="https://www.welivesecurity.com/wp-content/themes/eset-wls-2018/assets/img/new-logo/eset-wls-dark-header-1.svg" class="card-img-top p-2" alt="WeLiveSecurity"style={{ maxWidth: '20rem', height: '15rem' }}/>
                            <p class="card-text p-2 text-start">We Live Security is an IT security site covering the latest news, research, cyberthreats and malware discoveries, with insights from ESET experts.</p>
                            <div class="position-absolute bottom-0 end-0 p-2"><a href="https://www.welivesecurity.com" class="btn btn-primary p-2">We Live Security</a></div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card m-3 bg-light" style={{height: '30rem'}}>
                    <h5 class="card-header text-start"> LookingGlass Threat Map</h5>
                        <div class="card-body">
                            <img src="https://lookingglasscyber.com/static/c23b56b0acc95d614469fbf07c6f8033/b9175/logo.webp" class="card-img-top p-2" alt="HackerNews.jpeg" style={{ maxWidth: '20rem', height: '15rem' }}/>
                            <p class="card-text p-2 text-start">LookingGlass Cyber Solutions™ empowers government entities and Fortune 500 companies to meet their missions with contextualized threat intelligence.</p>
                            <div class="position-absolute bottom-0 end-0 p-2"><a href="https://lookingglasscyber.com" class="btn btn-primary p-2">LookingGlass</a></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
}

export default Resources;