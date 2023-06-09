import styled from "styled-components";
import PinkNumbers from "./pinkNumbers";

export default function StatisticNumbers() {
    const numbersInformation = [
        { titleNumber: "+400k", lineOne: "Pessoas", lineTwo: "alcançadas" },
        { titleNumber: "$10M", lineOne: "Arrecadados em", lineTwo: "Bolsas de estudo" },
        { titleNumber: "46", lineOne: "Mentorados" },
        { titleNumber: "5", lineOne: "Regiões", lineTwo: "representadas" }
    ];

    return (
        <Numbers>
            {numbersInformation.map((item, index) => <PinkNumbers key={index} titleNumber={item.titleNumber} lineOne={item.lineOne} lineTwo={item.lineTwo} />)}
        </Numbers>
    );
}

const Numbers = styled.div`
    display: flex;
    height: fit-content;
    padding: 140px 5vw 140px 5vw;
    align-items: center;
    justify-content: space-around;

    div {
        height: 35vh;
        text-align: center;   

        p{
            font-weight: 500;
            font-size: clamp(.5em, .8em + 1.35vw, 5vw);
        }
    }

    .Pink_numbers{
        letter-spacing: .235vw !important;
        font-weight: bold !important;
        font-size: clamp(1em, 1em + 5.35vw, 10vw) !important;
        color: var(--pink);
    }
`;
