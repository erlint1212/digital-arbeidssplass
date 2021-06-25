import PropTypes from 'prop-types'
import Button from './Button'
import { useRouter } from 'next/router'

const Header = ({ title, name, surname, renderCount }) => {
    //const location = useLocation()
    const router = useRouter()

    return (
        <header style={{backgroundColor:'lightgreen'}} className='header'>
            <h1>{title}</h1>
            <div>
                <h4>Bruker: {name} {surname}</h4>
            </div>
            {/* <p>{renderCount}</p> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Profilteam as',
    name: 'User',
    surname: 'bababooey'
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
