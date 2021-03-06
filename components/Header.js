import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const Header = ({ title, name, surname, renderCount }) => {
    //const location = useLocation()
    const router = useRouter()
    const brukernavn = Cookies.get('username')
    const admin = Cookies.get('admin')

    const CheckAdmin = () => {
        if (admin == 'true') {
            return 'Admin'
        } else if (admin == 'false') {
            return 'Bruker'
        } else {
            return 'error'
        }
    }

    const LoggUt = () => {
        Cookies.remove('username')
        Cookies.remove('Usernamee')
        Cookies.remove('admin')
        router.push('/')
    }
    

    return (
        <header style={{backgroundColor:'lightgreen'}} className='header'>
            <h1>{title}</h1>
            <div>
                <h4>Bruker: {brukernavn}</h4><br />
                <h4>Admintiatelse: {CheckAdmin()} </h4>
            </div>
            <div>
                <Button color="secondary" onClick={LoggUt}>Logg ut</Button>
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
