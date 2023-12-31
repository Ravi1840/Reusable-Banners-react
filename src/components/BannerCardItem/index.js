// Write your code here.
const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description} </p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
