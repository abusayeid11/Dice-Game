import styled from "styled-components"


const Rules = () => {

    return(
       <RulesContainer>
        <h1>How to play dice game</h1>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
       </RulesContainer>
    )
}

export default Rules

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;

    margin: 0 auto;
    margin-top: 40px;
    max-width: 800px;

    h1{
        font-size: 24px;
        font-weight: bold;
    }

    p{
        margin-top: 24px;
    }
`