import React, { Fragment, useState } from 'react';
import './App.css';
import Slider from 'react-input-slider';
import Switch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function App() {
  
  const [ state, setState ] = useState({ x: 1 });
  const [ checked, setChecked] = useState(false);

  const displayPrice = (value) => {

    if (checked && value === 1) {
      return `${(8*12)*0.75}.00`
    } else if (checked && value === 2) {
      return `${(12*12)*0.75}.00`
    } else if (checked && value === 3) {
      return `${(16*12)*0.75}.00`
    } else if (checked && value === 4) {
      return `${(24*12)*0.75}.00`
    } else if (checked && value === 5) {
      return `${(36*12)*0.75}.00`
    } 

    if (value === 1) {
      return '8.00'
    } else if (value === 2) {
      return '12.00'
    } else if (value === 3) {
      return '16.00' 
    } else if (value === 4) {
      return '24.00'
    } else if (value === 5) {
      return '36.00'
    } else {
      return null
    }
  }

  const displayPageViews = (value) => {
    if (value === 1) {
      return '10K'
    } else if (value === 2) {
      return '50K'
    } else if (value === 3) {
      return '100K' 
    } else if (value === 4) {
      return '500K'
    } else if (value === 5) {
      return '1M'
    } else {
      return null
    }
  }
  const after_price_text = checked ? ' / yearly' : ' / month'
  

  return (
    <Fragment>
      <div className='container'>
        
          <div className='header'>
            <h1>Simple, traffic-based pricing</h1>
            
            <h2>Sign-up for our 30-day trial. 
                No credit card required.
            </h2>
          </div>
          <div className='content'>
          <div className='content-info'>
             <p className='content-info-l'>{displayPageViews(state.x)} PAGEVIEWS</p>
             <p className='content-info-m'>$ {displayPrice(state.x)}</p>
             <p className='content-info-r'>{after_price_text}</p>
          </div>
          <Slider
            axis="x"
            xstep={1}
            xmin={1}
            xmax={5}
            x={state.x}
            onChange={({ x }) => setState({ x: parseFloat(x.toFixed(2)) })}
            style={{
              position: 'absolute', 
              left: '50%',
              transform: 'translate(-50%)',
              width: '60%',
              }}
            styles={{
              active: {
                backgroundColor: 'hsl(174, 86%, 45%)'
              },
              thumb: {
                width: 25,
                height: 25,
                opacity: 0.8
              },
              
            }}
          />
          
          <div className='switcher'>
            <p className='switcher-l'>Monthly Billing</p>
            <Switch
            checked={checked}
            onChange={() => setChecked(!checked)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={11}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={15}
            width={38}
            className="react-switch"
            id="material-switch"
            />
          <p className='switcher-r'> Yearly Billing</p>
          <p className='switcher-rr' >25% discount</p>
          </div>
          <hr className='solid' />
          <div className='bottom-content'>
            <ul className='fa-ul'>
              <li><span className='fa-li'><FontAwesomeIcon icon={faCheck} /></span>Unlimited websites</li>
              <li><span className='fa-li'><FontAwesomeIcon icon={faCheck} /></span>100% data ownership</li>
              <li><span className='fa-li'><FontAwesomeIcon icon={faCheck} /></span>Email reports</li>
            </ul>
            <button className='bottom-button'>Start my trial</button>
          </div>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
