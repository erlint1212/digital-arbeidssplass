import Footer from '../../components/Footer';
import ShowDoc from '../../components/ShowDoc'
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { Container } from '@material-ui/core';
import useSWR, { mutate } from 'swr';

function Dokument() {
    const router = useRouter()

    const id = router.query.id
    console.log(id)
    return (
        <div>
            <Container>
                <Header />
                <ShowDoc id={id} />
                <Footer />
            </Container>            
        </div>
    )
}

export default Dokument
