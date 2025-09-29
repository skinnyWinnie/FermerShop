import { Outlet } from "react-router"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { styled } from 'styled-components'

const Main = styled.main`

`

export function PageWrapper({ products }) {
    return (
    <>
        <Header/>
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
    </>
    )
}
