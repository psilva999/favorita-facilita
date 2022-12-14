import React from 'react'

import Gradient from '../assets/imgs/4-galio/1.png'
import Fonts from '../assets/imgs/4-galio/2.png'
import Icons from '../assets/imgs/4-galio/3.png'

import Adobe from '../assets/imgs/4-galio/4.png'
import Svg from '../assets/imgs/4-galio/5.png'
import Grid from '../assets/imgs/4-galio/6.png'

import Compress from '../assets/imgs/4-galio/7.png'
import Path from '../assets/imgs/4-galio/8.png'
import Shadow from '../assets/imgs/4-galio/9.png'
import Imgbb from '../assets/imgs/4-galio/10.png'

import Uns from '../assets/imgs/4-galio/11.png'
import Uiverse from '../assets/imgs/4-galio/12.jpg'
import Coolors from '../assets/imgs/4-galio/13.jpg'

import Remix from '../assets/imgs/4-galio/14.jpg'
import Icons8 from '../assets/imgs/4-galio/15.png'
import Oneapp from '../assets/imgs/4-galio/16.png'

const Galio = () => {
  return (
    <main>
      <a href="https://cssgradient.io/" target='_blank'>
        <img src={ Gradient }/>
        <span>CSS Gradient</span> 
      </a>

      <a href="https://fonts.google.com/" target='_blank'>
        <img src={ Fonts }/>
        <span>Fonts</span> 
      </a>

      <a href="https://fonts.google.com/icons" target='_blank'>
        <img src={ Icons }/>
        <span>Icons</span> 
      </a>

      <a href="https://color.adobe.com/pt/create/color-wheel" target='_blank'>
        <img src={ Adobe }/>
        <span>Color Adobe</span> 
      </a>

      <a href="https://www.svgrepo.com/" target='_blank'>
        <img src={ Svg }/>
        <span>SVG Repo</span> 
      </a>

      <a href="https://cssgrid-generator.netlify.app/" target='_blank'>
        <img src={ Grid }/>
        <span>Grid</span> 
      </a>

      <a href="https://www.iloveimg.com/compress-image" target='_blank'>
        <img src={ Compress }/>
        <span>Compress IMG</span> 
      </a>

      <a href="https://www.cssportal.com/css-clip-path-generator/" target='_blank'>
        <img src={ Path }/>
        <span>clip-path</span> 
      </a>

      <a href="https://html-css-js.com/css/generator/box-shadow/" target='_blank'>
        <img src={ Shadow }/>
        <span>box-shadow</span> 
      </a>

      <a href="https://imgbb.com/" target='_blank'>
        <img src={ Imgbb }/>
        <span>Imgbb</span> 
      </a>

      <a href="https://unsplash.com/" target='_blank'>
        <img src={ Uns }/>
        <span>unsplash</span> 
      </a>

      <a href="https://uiverse.io/" target='_blank'>
        <img src={ Uiverse }/>
        <span>Uiverse</span> 
      </a>

      <a href="https://coolors.co/eabfcb-c191a1-a4508b-5f0a87-2f004f" target='_blank'>
        <img src={ Coolors }/>
        <span>Coolors</span> 
      </a>

      <a href="https://remixicon.com/" target='_blank'>
        <img src={ Remix }/>
        <span>Remixicon</span> 
      </a>

      <a href="https://icons8.com.br/" target='_blank'>
        <img src={ Icons8 }/>
        <span>Icons8</span> 
      </a>

      <a href="https://123apps.com/pt/" target='_blank'>
        <img src={ Oneapp }/>
        <span>123apps</span> 
      </a>
    </main>
  )
}

export default Galio