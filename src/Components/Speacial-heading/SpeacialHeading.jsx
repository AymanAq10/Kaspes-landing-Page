import React from 'react'
import './SpeacialHeading.css'
const SpeacialHeading = (props) => {
  return (
    <section className='MainHeading'>
      <div>
        <h2>{props.title}</h2>
        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris
          blandit aliquet elit, eget tincidunt.</p>
      </div>
    </section>
  )
}


export default SpeacialHeading