import { BluePart, Paragraph, SubTitle, Title } from "./styled"
import { bluePart } from "./styled"


const Card = () => {
    return(
        <div>
            <Title>Join our community</Title>
                <SubTitle>30-day, hassle-free money back guarantee</SubTitle>
                    <Paragraph>Gain acess to our full library of tutorials along with expert code reviews,</Paragraph>
                    <Paragraph>Perfect for any developers who are serious about honing their skills</Paragraph>
                    <BluePart>
                <div>
                    <h3>Monthly Subscription</h3>
                    <p>$29 per month</p>
                    <p>Full access for less than $1 a day</p>
                    <button>Sign Up</button>
                </div>
                <div> 
                <h3>Why Us</h3>
                    <p>Tutorials by industry experts</p>
                    <p>Peer & expert code review</p>
                    <p>Coding exercises</p>
                    <p>Access to our GitHub repos</p>
                    <p>Community forum</p>
                    <p>Flashcard decks</p>
                    <p>New videos every week</p>
                </div>
        </BluePart>
        </div>
    )
}

export default Card