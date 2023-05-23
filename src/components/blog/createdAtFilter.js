import styled from "styled-components";
import { Tooltip, tooltipClasses } from "@mui/material";
import React from "react";

const DataTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
    ({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            color: "white",
            fontSize: 13,
        },
    }),
);

export default function DataFilter({ orderPost, setOrderPost, setStatus, showFilters, setPosts }) {
    const dataArray = [
        {
            id: 1,
            value: "desc",
            name: "Mais Recente",
        },
        {
            id: 2,
            value: "asc",
            name: "Mais Antigo",
        },
    ];

    function selectFilter(value) {
        if (!orderPost.includes(value)) {
            setPosts(undefined);

            let newArray = [value];
            setOrderPost(newArray);
            setStatus([]);
        }
    }

    return (
        <Container showFilters={showFilters}>
            <h1>Data de Inclusão</h1>

            <DataList>
                {dataArray.map((d, idx) => {
                    return (
                        <DataTooltip key={idx} title={"Filtrar por " + d.name} arrow>
                            <Data onClick={() => selectFilter(d.value)} orderPost={orderPost} value={d.value}>
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
    transform: ${(props) => (props.showFilters ? "translate(0px, 0%)" : "translate(0px, -100%)")};
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: start;
    box-sizing: border-box;
    transition: 1s;

    h1 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #000000;
    }
`;

const DataList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
`;

const Data = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
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
    background: ${(props) => (props.orderPost.includes(props.value) ? "var(--blue)" : "var(--grey)")};
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
        transform: ${(props) => (props.orderPost.includes(props.value) ? "rotate(0deg)" : "rotate(-90deg)")};
        transition: 0.3s;
    }

    .horizontal {
        transform: ${(props) => (props.orderPost.includes(props.value) ? "rotate(0deg)" : "rotate(-180deg)")};
        transition: 0.3s;
    }
`;
