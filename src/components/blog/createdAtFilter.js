import styled from "styled-components";
import { Tooltip, tooltipClasses } from "@mui/material";
import React from "react";

export default function DataFilter({ filteredArray, setFilteredArray, setStatus }) {
    const dataArray = [
        {
            id: 1,
            value: "asc",
            name: "Mais Recente"
        }, 
        {
            id: 2,
            value: "desc",
            name: "Mais Antigo"
        },
    ];

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

    const DataTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
        ({ theme }) => ({
            [`& .${tooltipClasses.tooltip}`]: {
                color: "white",
                fontSize: 13,
            },
        }),
    );

    return (
        <Container>
            <DataList>
                {dataArray.map((d, idx) => {
                    return (
                        <DataTooltip key={idx} title={"Filtrar por " + d.name} arrow>
                            <Data onClick={() => selectFilter(d.id)} filteredArray={filteredArray} dataId={d.id}>
                                <div className="horizontal" />
                                <div className="vertical" />
                                <span>{d.name}</span>
                            </Data>
                        </DataTooltip>
                    );
                })}
            </DataList>
        </Container>
    );
}

//Styled Components
const Container = styled.div`
    //Essa margin-top pode e provavelmente deve ser retirada, coloquei pra ter uma melhor visualização de como ficou, a filtragem colada no header estava me dando agonia
    margin-top: 30px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DataList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    box-sizing: border-box;
    padding: 15px;
    flex-wrap: wrap;
`;

const Data = styled.li`
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
    background: ${(props) => (props.filteredArray.includes(String(props.dataId)) ? "var(--blue)" : "var(--grey)")};
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
        transform: ${(props) => (props.filteredArray.includes(String(props.dataId)) ? "rotate(0deg)" : "rotate(-90deg)")};
        transition: 0.3s;
    }

    .horizontal {
        transform: ${(props) => (props.filteredArray.includes(String(props.dataId)) ? "rotate(0deg)" : "rotate(-180deg)")};
        transition: 0.3s;
    }
`;
