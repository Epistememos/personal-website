import React, {useState, useRef} from 'react';
import "./Header.css";
import Popup from './Popup';


function Header() {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <div className='header' id='about'>
      <h1>Youdas Yessad</h1>
      <img src='/assets/img-pilot2.jpg' alt='Piloting'/>
      <div onClick={() => setButtonPopup(true)} className='quote'>
      <h2  className='click-text'>"Is life 
      not a thousand times too short for us to bore ourselves?"</h2>
      <h3>-Nietzsche (Beyond Good and Evil, 227)</h3>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <p>227. Honesty, granting that it is the virtue of which we 
          cannot rid ourselves, we free spirits-well, we will
          labour at it with all our perversity and love, and 
          not tire of "perfecting" ourselves in OUR virtue, 
          which alone remains: may its glance some day 
          overspread like a gilded, blue, mocking twilight 
          this aging civilization with its dull gloomy 
          seriousness! And if, nevertheless, our honesty 
          should one day grow weary, and sigh, and stretch 
          its limbs, and find us too hard, and would fain 
          have it pleasanter, easier, and gentler, like 
          an agreeable vice, let us remain HARD, we latest 
          Stoics, and let us send to its help whatever 
          devilry we have in us: our disgust at the clumsy 
          and undefined, our "NITIMUR IN VETITUM," our love 
          of adventure, our sharpened and fastidious 
          curiosity, our most subtle, disguised, intellectual
          Will to Power and universal conquest, which 
          rambles and roves avidiously around all the 
          realms of the future-let us go with all our 
          "devils" to the help of our "God"! It is probable
          that people will misunderstand and mistake us on
          that account: what does it matter! They will say
          : "Their 'honesty'-that is their devilry, and 
          nothing else!" What does it matter! And even if
          they were right-have not all Gods hitherto 
          been such sanctified, re-baptized devils? And
          after all, what do we know of ourselves? And
          what the spirit that leads us wants TO BE 
          CALLED? (It is a question of names.) And how 
          many spirits we harbour? Our honesty, we free
          spirits-let us be careful lest it become 
          our vanity, our ornament and ostentation, 
          our limitation, our stupidity! Every virtue
          inclines to stupidity, every stupidity to 
          virtue; "stupid to the point of sanctity,
          " they say in Russia,- let us be careful 
          lest out of pure honesty we eventually 
          become saints and bores! Is not life a 
          hundred times too short for us- to bore 
          ourselves? One would have to believe in 
          eternal life in order to ... </p>
      </Popup>
    </div>
  )
}

export default Header
