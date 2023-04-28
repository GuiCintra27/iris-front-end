import { useEffect, useState } from "react";
import styled from "styled-components";
import useTopics from "../../hooks/api/useTopics";
import { Tooltip, tooltipClasses } from "@mui/material";
import React from "react";

export default function TopicFilter({ filteredArray, setFilteredArray, setStatus }) {
    const [topics, setTopics] = useState([]);
    const { topicsData } = useTopics();

    useEffect(() => {
        setTopics(topicsData);
    }, [topicsData]);

    function selectFilter(topicId) {
        if (!filteredArray.includes(topicId)) {
            let newArray = [...filteredArray, topicId];
            setFilteredArray(newArray);
            setStatus([]);
        }
    
        if (filteredArray.includes(topicId)) {
            let newArray = filteredArray.filter(id => id !== topicId);
            setFilteredArray(newArray);
            setStatus([]);
        }
    }

    const TopicTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))
    (({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            color: "white",
            fontSize: 13,
        },
    }));

    return (
        <Container>
            <TopicList>
                {
                    topics?.map((t, idx) => {
                        return (
                            <TopicTooltip key={idx} title={"Filtrar por " + t.name} arrow>
                                <Topic onClick={() => selectFilter(t.id)} filteredArray={filteredArray} topicId={t.id}>
                                    <div className="horizontal" />
                                    <div className="vertical" />
                                    <span>{t.name}</span>
                                </Topic>
                            </TopicTooltip>
                        );
                    })
                }
            </TopicList>
        </Container>
    );
}

//Styled Components
const Container = styled.div`
    //Essa margin-top pode e provavelmente deve ser retirada, coloquei pra ter uma melhor visualização de como ficou, a filtragem colada no header estava me dando agonia
    margin-top: 35px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TopicList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    box-sizing: border-box;
    padding: 15px;
    flex-wrap: wrap;
`;

const Topic = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    height: 32px;
    width: fit-content;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16.32px;
    line-height: 24px;
    color: #FFFFFF;
    gap: 11px;
    box-sizing: border-box;
    padding: 10px;
    background: ${props => props.filteredArray.includes(props.topicId) ? "var(--blue)" : "var(--grey)"};
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
        transform: ${props => props.filteredArray.includes(props.topicId) ? "rotate(0deg)" : "rotate(-90deg)"};
        transition: .3s;
    }

    .horizontal {
        transform: ${props => props.filteredArray.includes(props.topicId) ? "rotate(0deg)" : "rotate(-180deg)"};
        transition: .3s;
    }
`;
