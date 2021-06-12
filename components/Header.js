import PropTypes from 'prop-types'
import Button from './Button'
import { useRouter } from 'next/router'

const Header = ({ title, onAdd, showAdd }) => {
    //const location = useLocation()
    const router = useRouter()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {router.pathname === '/' && <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd} 
            />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
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
