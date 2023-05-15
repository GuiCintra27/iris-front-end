import { useEffect, useState } from "react";
import styled from "styled-components";
import useTopics from "../../hooks/api/useTopics";
import { Tooltip, tooltipClasses } from "@mui/material";
import React from "react";

export default function TopicFilter({ filteredArray, setFilteredArray, setStatus, showFilters }) {
    const [topics, setTopics] = useState([]);
    const { topicsData } = useTopics();

    useEffect(() => {
        setTopics(topicsData);
    }, [topicsData]);

    function selectFilter(topicId) {
        if (!filteredArray.includes(String(topicId))) {
            let newArray = [...filteredArray, topicId];
            setFilteredArray(newArray);
            setStatus([]);
        }

        if (filteredArray.includes(String(topicId))) {
            let newArray = filteredArray.filter((id) => id !== String(topicId));
            setFilteredArray(newArray);
            setStatus([]);
        }
    }

    const TopicTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
        ({ theme }) => ({
            [`& .${tooltipClasses.tooltip}`]: {
                color: "white",
                fontSize: 13,
            },
        }),
    );

    return (
        <Container showFilters={showFilters}>
            <h1>Tópicos</h1>

            <TopicList>
                {topics?.map((t, idx) => {
                    return (
                        <TopicTooltip key={idx} title={"Filtrar por " + t.name} arrow>
                            <Topic onClick={() => selectFilter(t.id)} filteredArray={filteredArray} topicId={t.id}>
                                <div className="horizontal" />
                                <div className="vertical" />
                                <span>{t.name}</span>
                            </Topic>
                        </TopicTooltip>
                    );
                })}
            </TopicList>
        </Container>
    );
}

//Styled Components
const Container = styled.div`
    display: flex;
    transform: ${ props => props.showFilters ? "translate(0px, 0%)" : "translate(0px, -250%)" };
    gap: 20px;
    flex-direction: column;
    transition: 1s cubic-bezier(.55, .02, .53, .89);

    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #000000;
    }
`;

const TopicList = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
`;

const Topic = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    height: 32px;
    width: fit-content;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16.32px;
    line-height: 24px;
    color: #ffffff;
    gap: 11px;
    box-sizing: border-box;
    padding: 10px;
    background: ${(props) => (props.filteredArray.includes(String(props.topicId)) ? "var(--blue)" : "var(--grey)")};
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    padding-left: 38px;

    div {
        border: 1px solid white;
        position: absolute;
        left: 10px;
        width: 15px;
        border-radius: 50px;
    }

    .vertical {
        transform: ${(props) => (props.filteredArray.includes(String(props.topicId)) ? "rotate(0deg)" : "rotate(-90deg)")};
        transition: 0.3s;
    }

    .horizontal {
        transform: ${(props) => (props.filteredArray.includes(String(props.topicId)) ? "rotate(0deg)" : "rotate(-180deg)")};
        transition: 0.3s;
    }
`;
