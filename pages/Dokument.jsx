import Footer from '../components/Footer'
import ShowDoc from '../components/ShowDoc'
import Header from '../components/Header';
import { Container } from '@material-ui/core';
import useSWR, { mutate } from 'swr';

function Dokument(DocId) {
    return (
        <div>
            <Container>
                <Header />
                <ShowDoc />
                <Footer />
            </Container>            
        </div>
    )
}

export default Dokument
