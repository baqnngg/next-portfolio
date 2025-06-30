import Header from "./header"
import Footer from "./footer"

export default function Layout({children}){
    return(
        <>
            <Header></Header>
            <main style={{minHeight: 'calc(100vh - 200px)'}}>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}