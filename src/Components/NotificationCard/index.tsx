import { Container, Dot, TextContainer, Time} from "./styles";

interface NotifyProps {
    userName: string
    notification: string
    date: string
}

export function NotificationCard({ userName, notification, date }: NotifyProps) {
    return (
        <Container>
            <TextContainer>
                <b>{userName} </b>{notification}<b> {date}.</b>
                <Time>há 23 minutos</Time>
            </TextContainer>
            <Dot></Dot>
        </Container>
    );
}