import styled from "styled-components";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import InstagramSection from "./instagram-section";
import ParallaxBackground from "./background-section";
import StatisticNumbers from "./statistic-numbers-section";
import AboutSection from "./about-section";

export default function Home({ page }) {
    return (
        <>
            <Header page={page} />
            <Main>
                <ParallaxBackground />

                <StatisticNumbers />

                <InstagramSection />

                <AboutSection />
            </Main>

            <Footer />
        </>
    );
}

const Main = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 84vh 65vh 110vh 230vh;
    
    div{
        width: 99.3vw;
    }
`;
