import Link from 'next/link'
import { Box } from '@material-ui/core'

const Footer = () => {
    return (
        <footer>
            <Box textAlign='center' pt={{xs: 5, sm: 10}} pb={{xs:5, sm:0}} width="100vw" style={{backgroundColor:'lightgreen'}}>
                Copyright &copy; 2021 <br /> 
                ver: 1.0.0
            </Box>
            {/* <Link href='/about'>About</Link> */}
        </footer>
    )
}

export default Footer
