import { useEffect } from "react";
import styled from "styled-components";
import Section from "./section";

export default function Guide({ setBackground, sections, onSection, setOnSection }) {
    useEffect(() => changeSection(sections[0], 0), []);

    function changeSection(sectionBg, section) {
        setBackground(sectionBg);
        setOnSection(section);
    }

    return (
        <GuideSection>
            <p>Nesta Seção</p>

            <ul>
                {sections.map((item, index) => <Section key={index} onSection={onSection} index={index} sectionData={item} changeSection={changeSection} />)}
            </ul>
        </GuideSection>
    );
}

const GuideSection = styled.div`
    width: 33rem;
    height: fit-content;
    margin-left: 19rem;
    margin-top: -6rem;
    padding-bottom: 3.5rem;
    background: var(--white);
    display: flex;
    flex-direction: column;
    gap: 2.35rem;
    -webkit-box-shadow: 3px 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 3px 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 3px 3px 5px rgba(57, 63, 72, 0.3);

    & > p{
        color: var(--white);
        background-color: var(--blue);
        font-size: clamp(.75em, .9em + .7vw, 5vw);
        height: 10.2rem;
        padding-top: 10%;
        padding-left: 5%;
    }

    & ul{
        font-size: clamp(.5em, .5em + .73vw, 5vw);
        height: fit-content;
    }
`;
