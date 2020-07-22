import React from 'react';
import Topnav from './topnav'
import ReactRotatingText from 'react-rotating-text';
import blooddonation from '../images/blooddonation.png'
import socio from '../images/sociodist.png'
import covid from '../images/covid.png'
import webchat from '../images/webchat.png'
import digitalbook from '../images/digitalook.png'
import covidmobile from '../images/covidmobile.jpg'
import arvr from '../images/ar_vr.jpg'
import clock from '../images/clock.jpg'
import project95 from '../images/project95.jpg'
import yogaclass from '../images/yogaclass.jpg'
import digimobile from '../images/digimobile.jpg'
import timesch from '../images/time_schedule.jpg'
import wifiinfo from '../images/wifiinfo.jpg'
import uimusic from '../images/uimusic.png'
import ui from '../images/uidesign.png'
import youtube from '../images/youtube_clone.jpg'

class Project extends React.Component{

    render(){
        return(
            <div>
                <Topnav/>
                <section id="banner">
                    <center>
                    <div className="projecttitle">
                        <h2>Projects Based on <ReactRotatingText items={['Flutter/Mobile Application', 'Web Application', 'UI/UX Design']} /></h2>
                    </div>
                    </center>
                </section>
                <section>
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <center><img className="card-img-top" style={{height: 225, width: '40%', display: 'block'}} src={youtube} data-holder-rendered="true" /></center>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://github.com/lmas3009/Youtube_Clone" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <center><img className="card-img-top" style={{height: 225, width: '40%', display: 'block'}} src={timesch} data-holder-rendered="true" /></center>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://github.com/lmas3009/YogaApp" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <center><img className="card-img-top" style={{height: 225, width: '40%', display: 'block'}} src={yogaclass} data-holder-rendered="true" /></center>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://github.com/lmas3009/YogaApp" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                                        <a href="https://youtu.be/TcY5PZhTdIA" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Youtube</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <center><img className="card-img-top" style={{height: 225, width: '40%', display: 'block'}} src={project95} data-holder-rendered="true" /></center>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://github.com/Aravind3009/MessageEncryptor" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                                        <a href="https://youtu.be/JyjvjoaRo-E" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Youtube</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <center><img className="card-img-top" style={{height: 225, width: '40%', display: 'block'}} src={clock} data-holder-rendered="true" /></center>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://github.com/lmas3009/Covid-19" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <center><img className="card-img-top" style={{height: 225, width: '40%', display: 'block'}} src={arvr} data-holder-rendered="true" /></center>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://github.com/lmas3009/Covid-19" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <center><img className="card-img-top" style={{height: 225, width: '40%', display: 'block'}} src={covidmobile} data-holder-rendered="true" /></center>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://github.com/lmas3009/Covid-19" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <center><img className="card-img-top" style={{height: 225, width: '40%', display: 'block'}} src={digimobile} data-holder-rendered="true" /></center>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://github.com/lmas3009/Covid-19" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <center><img className="card-img-top" style={{height: 225, width: '40%', display: 'block'}} src={wifiinfo} data-holder-rendered="true" /></center>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://github.com/lmas3009/Covid-19" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <img className="card-img-top" style={{height: 225, width: '100%', display: 'block'}} src={ui} data-holder-rendered="true" />
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://www.instagram.com/webui3009/" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <img className="card-img-top" style={{height: 225, width: '100%', display: 'block'}} src={uimusic} data-holder-rendered="true" />
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://uimusicdesign.netlify.app/" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <img className="card-img-top" style={{height: 225, width: '100%', display: 'block'}} src={blooddonation} data-holder-rendered="true" />
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://blooddonationwebapp.netlify.app/" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <img className="card-img-top" style={{height: 225, width: '100%', display: 'block'}} src={socio} data-holder-rendered="true" />
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://peaceful-curran-b4e391.netlify.app/" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <img className="card-img-top" style={{height: 225, width: '100%', display: 'block'}} src={covid} data-holder-rendered="true" />
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://covid-19-webapp.netlify.app/" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <img className="card-img-top" style={{height: 225, width: '100%', display: 'block'}} src={webchat} data-holder-rendered="true" />
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://web-chattingapp.herokuapp.com/" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                <img className="card-img-top" style={{height: 225, width: '100%', display: 'block'}} src={digitalbook} data-holder-rendered="true" />
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://digitalbookwebapp.netlify.app/" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                         </div>
                        </div>
                        </div>
                </section>
            </div>
        );
    }
}
export default Project;