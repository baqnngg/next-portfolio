import Header from "./header"
import Footer from "./footer"
import Container from '@mui/material/Container';

export default function Layout({children}){
    return(
        <>
            <Header></Header>
            <Container 
                maxWidth="xl" 
                sx={{
                    padding: { xs: '1rem', md: '2rem' },
                    marginTop: '2rem',
                    marginBottom: '5rem',
                    minHeight: 'calc(100vh - 200px)'
                }}
            >
                <div>{children}</div>
            </Container>
            <Footer></Footer>
        </>
    )
}