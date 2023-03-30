import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'


function HeroSection() {
  return (
    <div className="hero-container">
        <video src="../videos/video-7.mp4" autoPlay loop muted/>
        <h1>SEEK ADVENTURE</h1>
        <p>DISCOVER THE THRILLS OF THE WORLD</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER <i className="far fa-play-circle"></i>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection