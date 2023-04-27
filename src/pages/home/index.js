import styled from "styled-components";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import InstagramSection from "./instagram-section";
import ParallaxBackground from "./background-section";
import StatisticNumbers from "./statistic-numbers-section";
import AboutSection from "./about-section";
import TestimonialSection from "./testimonials-section";

export default function Home({ page }) {
    return (
        <>
            <Header page={page} />
            <Main>
                <ParallaxBackground />

                <StatisticNumbers />

                <InstagramSection />

                <AboutSection />

                <TestimonialSection />
            </Main>

            <Footer />
        </>
    );
}

const Main = styled.main`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 84vh 65vh 110vh 230vh;

    

`;
