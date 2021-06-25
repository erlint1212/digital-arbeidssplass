import Link from 'next/link'

const Footer = () => {
    return (
        <footer style={{backgroundColor:'lightgreen'}}>
            <p>
                Copyright &copy; 2021 <br /> 
                ver: 1.0.0
            </p>
            {/* <Link href='/about'>About</Link> */}
        </footer>
    )
}

export default Footer
