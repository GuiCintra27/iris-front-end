import styled from "styled-components";
import optionsIcon from "../../assets/Icons/options-icon.png";
import dayjs from "dayjs";
import { useState } from "react";
import Swal from "sweetalert2";

export function CommentItem({ data, username, deletePostComment }) {
    const { createdAt, text, users: { name, id } } = data;
    const [displayOptions, setDisplayOptions] = useState(false);

    function timeDiff() {
        let diff = dayjs().diff(dayjs(createdAt), "m");
        if (diff < 60) return (diff + "m");

        diff = dayjs().diff(dayjs(createdAt), "h");
        if (diff < 24) return (diff + "h");

        diff = dayjs().diff(dayjs(createdAt), "d");
        return (diff + " days ago");
    }

    function deleteHandle() {
        Swal.fire({
            text: "Você deseja excluir este comentário?",
            icon: "warning",
            confirmButtonText: "Excluir!",
            cancelButtonText: "Cancelar",
            showCancelButton: true,
        }).then(result => {
            if (result.isConfirmed) {
                deletePostComment(data.id);
                setDisplayOptions(false);
            }
        });
    }

    return (
        <CommentItemStyle>
            <header>
                <h4>{name}#{id}</h4>
                <time>• Há {timeDiff()}</time>
                {username === name && 
                    <div className="edit">
                        <div onClick={() => setDisplayOptions(!displayOptions)}>
                            <img src={optionsIcon} alt="Options" />
                        </div>
                        {displayOptions && 
                            <aside><p onClick={deleteHandle}>Excluir</p></aside>
                        }
                    </div>
                }

            </header>
            <p>{text}</p>
        </CommentItemStyle>
    );
}

export const CommentItemStyle = styled.article`
    :hover .edit {
        display: flex;
    }

    header {
        display: flex;
        align-items: center;
        gap: 1rem;

        h4 {
            font-weight: 600;
            font-size: 18px;
            color: #0081CC;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        time {
            font-size: 14px;
            color: #A8A8A8;
        }

        .edit {
            display: none;
            position: relative;
            align-items: center;

            
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 24px;
                aspect-ratio: 1/1;
                border-radius: 50%;
                margin-left: 3rem;
                cursor: pointer;
                :hover img {
                    filter: invert(40%) sepia(11%) saturate(0%) hue-rotate(251deg) brightness(91%) contrast(78%);
                }
            }

            aside {
                position: absolute;
                left: 7rem;
                width: 117px;
                height: 60px;
                border-radius: 5px;
                background-color: white;
                display: flex;
                align-items: center;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

                p {
                    cursor: pointer;
                    width: 100%;
                    font-weight: 500;
                    font-size: 16px;
                    padding: 0 12px;
                    :hover {
                        background-color: #EFEFEF;
                    }
                }
            }
        }
    }

    > p {
        font-size: 18px;
        margin-left: 30px;
        word-break: break-word;
    }
`;
