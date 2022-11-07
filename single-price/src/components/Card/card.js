import { BluePart, Button, Container, DarkBluePart, Flex, LightBluePart, Paragraph, Price, SubTitle, Title } from "./styled"
import { bluePart } from "./styled"


const Card = () => {
    return(
        <Container>
            <Title>Join our community</Title>
                <SubTitle>30-day, hassle-free money back guarantee</SubTitle>
                <Paragraph>
                    <p>Gain acess to our full library of tutorials along with expert code reviews,</p>
                    <p>Perfect for any developers who are serious about honing their skills</p>
                    </Paragraph>
                    <BluePart>
                <DarkBluePart>
                    <h3>Monthly Subscription</h3>
                    <Price>
                    <p className="price">$29</p>
                    <p className="per-month">per month</p>
                    </Price>
                    <p className="acess">Full access for less than $1 a day</p>
                    <Button>
                    <a>Sign Up</a>
                    </Button>
                </DarkBluePart>
                <LightBluePart> 
                <h3>Why Us</h3>
                    <p>Tutorials by industry experts</p>
                    <p>Peer & expert code review</p>
                    <p>Coding exercises</p>
                    <p>Access to our GitHub repos</p>
                    <p>Community forum</p>
                    <p>Flashcard decks</p>
                    <p>New videos every week</p>
                </LightBluePart>
        </BluePart>
        </Container>
    )
}

export default Card