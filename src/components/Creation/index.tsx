import './index.scss'

function Creation({heading, img}) {
  return (
    <article className="creation">
      <img className="creation__image" src={img} alt={heading} />
      <div className="creation__wrapper">
        <h3 className="creation__heading">{heading}</h3>
      </div>
    </article>
  )
}

export default Creation;
