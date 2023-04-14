import  {useState} from 'react';
import 'react-calendar/dist/Calendar.css'
import { CalendarioWrapper, InputCalendarioWrapper, Calendario } from './styles'

interface SelectProps {
    size: 'small' | 'medium' | 'large'
}

export const CalendarComponent = ({size}: SelectProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [showSelectedDate, setShowSelectedDate] = useState(false);

    const handleDateChange = (date: Date | Date []) => {
        if (Array.isArray(date)){
            setDate(date[0]);
            setSelectedDate(date[0]);
        }else{
            setDate(date);
            setSelectedDate(date);
        }
        setShowCalendar(false);
        setShowSelectedDate(true);
    };

    const handleButtonClick = () => {
        setShowCalendar(!showCalendar);
        setShowSelectedDate(false);
    };
    
    const buttonText = showSelectedDate 
    ?  (selectedDate?.toLocaleDateString() ?? '')
    : 'Selecione uma Data';

    return(
        <InputCalendarioWrapper size={size}>
          <CalendarioWrapper onClick={handleButtonClick}>{buttonText}</CalendarioWrapper>
                {showCalendar && <Calendario value={date} onChange={handleDateChange} />}  
        </InputCalendarioWrapper>
        
    )
}

