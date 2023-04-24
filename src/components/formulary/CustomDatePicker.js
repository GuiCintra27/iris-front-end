import styled from "styled-components";
import { DatePicker } from "@material-ui/pickers";

export const CustomDatePicker = styled(DatePicker)`
    width: 30rem;

    > div {
        margin-bottom: 45px;
        font-size: 17px;
    }
    > label {
        font-size: 17px;
    }
`;
