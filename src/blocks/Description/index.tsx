import './index.scss'

import ImageVRSetMobile from '/mobile/image-interactive.jpg'

function Description() {
  return (
    <section className="desc">
      <img className="desc__image" src={ImageVRSetMobile} alt="VR set" />
      <h2 className="desc__heading">The&nbsp;leader&nbsp;in interactive&nbsp;VR</h2>
      <p className="desc__text">Founded in 2011, Loopstudios has been producing world-class virtual reality 
        projects for some of the best companies around the globe. Our award-winning 
        creations have transformed businesses through digital experiences that bind 
        to their brand.</p>
    </section>
  )
}

export default Description
