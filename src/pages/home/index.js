import styled from "styled-components";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import InstagramSection from "./instagram-section";
import ParallaxBackground from "./background-section";
import StatisticNumbers from "./statistic-numbers-section";
import AboutSection from "./about-section";
import TestimonialSection from "./testimonials-section";
import HandleMobileWarning from "../../components/draw-backs/mobileWarning";

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
            <HandleMobileWarning />
        </>
    );
}

const Main = styled.main`
    display: grid;
    grid-template-columns: 100%;
`;
