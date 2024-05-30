import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`

  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;
  
  .map__container{
    flex: 2
  }
  .card__container {
    flex: 1
  }
  .map__card {
    position: relative;
    padding: 2rem;
    background: var(--bg-2);
    width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="card__container">
        <div className="map__card">
          <h3 className="map__card__heading">Here am I</h3>
          <PText>Richmond / Vancouver, British Columbia, Canada</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Richmond,+BC/@49.1698724,-123.1846441,12z/data=!4m6!3m5!1s0x54867599f4ef4d3d:0x6a5024adba02fab5!8m2!3d49.1665898!4d-123.133569!16zL20vMDE3OXEw?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google map
          </a>
        </div>
      </div>
      <div className='map__container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41734.52860105801!2d-123.17041188732533!3d49.173843374787126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867599f4ef4d3d%3A0x6a5024adba02fab5!2sRichmond%2C%20BC!5e0!3m2!1sen!2sca!4v1716660737093!5m2!1sen!2sca" width="100%" height="400px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
      
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
