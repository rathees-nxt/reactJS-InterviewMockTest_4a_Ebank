import {NotFoundContainer, Image, NotFoundHeading, NotFoundPara} from './styled'

const NotFound = () => (
  <NotFoundContainer>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading className="notfound-heading">
      Page Not Found
    </NotFoundHeading>
    <NotFoundPara>
      We are sorry, the page you requested could not be found
    </NotFoundPara>
  </NotFoundContainer>
)

export default NotFound
