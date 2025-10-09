import React from 'react'
import corazon from '../../assets/corazon-beige.png'
import './Hero.css' 

const words1 = [
  "Iconic",
  "Dreamy",
  "Lowkey",
  "Effortless",
  "Ethereal",
  "Classic",
  "Effervescent",
  "Minimal",
]

const words2 = [
  "Bold",
  "Vibrant",
  "Chill",
  "Sleek",
  "Retro",
  "Funky",
  "Elegant",
  "Fresh",
]

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="title-container">
        <h1 className="hero-title">
          <span>CERTIFIED</span>
          <span>MIND</span>
          <span>BLOWER</span>
        </h1>
      </div>

      <img className="heart first-heart" src={corazon} />
      <img className="heart second-heart" src={corazon} />
      <img className="heart third-heart" src={corazon} />   
      <img className="heart sixth-heart" src={corazon} />

      <div className="marquee-container container1">
        <div className="marquee marquee1">
          {words1.concat(words1).map((word, i) => (
            <div key={i} className="button">
              {word}
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-container container2">
        <div className="marquee marquee2">
          {words2.concat(words2).map((word, i) => (
            <div key={i} className="button agrandir">
              {word}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
