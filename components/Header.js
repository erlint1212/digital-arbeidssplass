import PropTypes from 'prop-types'
import Button from './Button'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const Header = ({ title, name, surname, renderCount }) => {
    //const location = useLocation()
    const router = useRouter()
    const brukernavn = Cookies.get('username')

    return (
        <header style={{backgroundColor:'lightgreen'}} className='header'>
            <h1>{title}</h1>
            <div>
                <h4>Bruker: {brukernavn}</h4>
            </div>
            {/* <p>{renderCount}</p> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Profilteam as',
    brukernavn: 'user'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
