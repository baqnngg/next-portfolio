import Header from "./header"
import Footer from "./footer"
import Container from '@mui/material/Container';

export default function Layout({children}){
    return(
        <>
            <Header></Header>
            <Container fixed style={{marginBottom:"20vh", marginBottom:"5%"}}>
                <div>{children}</div>
            </Container>
            <Footer></Footer>
        </>
    )
}