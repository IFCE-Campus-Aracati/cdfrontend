import { CardContainer} from "./styles";
interface CardProps{
    backgroundColor: 'background-blue-light' | 'background-green-light' | 'background-red-light' | 'background-yellow-light'
    borderColor: 'background-blue' | 'background-green' | 'background-red' | 'background-yellow'
    children: React.ReactNode;
}
export function Card({backgroundColor, borderColor, children, ...rest}:CardProps) {

    return (
        <CardContainer backgroundColor={backgroundColor} borderColor={borderColor} {...rest}>
            {children}
        </CardContainer>
    )
}