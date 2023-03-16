// Write your code here
import './index.css'

const TabItem = props => {
  const {details, typeOfApp} = props
  const {displayText, tabId} = details

  const searchtypeOfApp = () => {
    typeOfApp(tabId)
  }

  return (
    <li className="appItemslist">
      <button type="button" className="button" onClick={searchtypeOfApp}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
