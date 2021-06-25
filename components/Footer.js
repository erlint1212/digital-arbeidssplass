import Link from 'next/link'
import { Box } from '@material-ui/core'

const Footer = () => {
    return (
        <footer>
            <Box textAlign='center' pt={{xs: 5, sm: 5}} pb={{xs:5, sm:0}} style={{backgroundColor:'lightgreen'}}>
                Copyright &copy; 2021 <br /> 
                v1.0.0
            </Box>
            {/* <Link href='/about'>About</Link> */}
        </footer>
    )
}

export default Footer
