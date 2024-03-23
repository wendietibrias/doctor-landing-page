import styled from "styled-components";

type OutlineButtonProps = {
    title: string;
}

const Button = styled.button`
   padding:0.7rem 1.5rem;
   font-size:0.9rem;
   font-weight:700;
   border: solid 2px #458FF6;
   color:#458FF6;
   border-radius:100px;
   background:transparent;
   cursor:pointer;
`

const OutlineButton = ({ title }: OutlineButtonProps) => {
    return (
        <Button>{title}</Button>
    )
}

export default OutlineButton;