import { Link } from 'react-router-dom'

export interface Props {
  redirection : "/" | "/Profile"
}

const ErrorPage = (props : Props) => {
  return (
    <div>
        ErrorPage
        <Link to={props.redirection}>Home</Link>
    </div>
  )
}

export default ErrorPage