import useSWR from "swr"
import router from "next/router"
import Cookies from "js-cookie"
import { Container, Button } from "@material-ui/core"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Selections from "../components/Selections"

const BrukerHub = () => {

    const user = Cookies.get('username')
    console.log(user)

    const { data } = useSWR(`/api/getDocByUser/${user}`, (url) =>
      fetch(url).then((res) => res.json()),
      { initialData: [], revalidateOnMount: true }
    )
    console.log(data)

    const useRout = (id) => {
        router.push(`/Dokument/${id}`)
    }

    const handleClick = () => {
        router.push('/user')
    };

    return (
        <Container>
            <Header />
            <Button variant="contained" onClick={handleClick}>Create new document</Button>
            <h3>Your docs</h3>
            {data != undefined ? (
                <Selections
                    users={data}
                    useRout={useRout}  
                />
            ) : (
                'No documents to show'
            )}
            <Footer />
        </Container>
    )
}

export default BrukerHub