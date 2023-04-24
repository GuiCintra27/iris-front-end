import styled from "styled-components";
import arrowIcon from "../../assets/Icons/white-arrow.png";

export default function Section({ onSection, index, sectionData, changeSection }) {
    return (
        <SectionArea background={onSection === index ? "background: var(--blue)" : null} color={onSection === index ? "color: var(--white)" : null} onClick={() => changeSection(sectionData, index)}>
            <p>{sectionData.name}</p>
            <img src={arrowIcon} alt={sectionData.name} />
        </SectionArea>
    );
}

const SectionArea = styled.li`
    height: 7.3rem;
    padding-left: 4.4rem;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 300;
    cursor: pointer;
    ${props => props.background};
    ${props => props.color};

    img{
        position: absolute;
        margin-left: 9rem;
        transform: scale(0.06, 0.06);
        opacity: 0;
    }

    &:hover img{
        opacity: 1;
        transition: 0.6s;
    }

    &:hover{
        background-color: var(--blue);
        color: var(--white);
    }
`;
