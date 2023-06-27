import { ArrowDown, CaretDown } from "phosphor-react";
import { Container, Select } from "./styles";
import { useState } from "react";

interface DataProps {
    label: string,
    value: string,
    disabled?: boolean,
    selected?: boolean,
    key: string
}

interface SelectProps {
    size: 'small' | 'medium' | 'large'
    data: Array<DataProps>
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SelectWithBorderBottom({ size, data, onChange}: SelectProps) {

    const [openMenu, setOpenMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSelect = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container size={size} >
            <Select
                onChange={onChange}
                defaultValue=""
                onClick={() => setOpenMenu(!openMenu)}
                >
                {data.map((value) => (
                    <option
                        key={value.key}
                        defaultValue={value.value}
                        value={value.value}
                        disabled={value.disabled}
                        selected={value.selected}

                    >
                        {value.label}
                    </option>
                ))}
            </Select>
            {openMenu ? (<CaretDown size={16} color="#000" weight="bold" style={{ rotate: '180deg', transition: '100ms' }} className="icon" />) : (<CaretDown size={16} color="#000" weight="bold" style={{ transition: '100ms' }} className="icon"/>)}
        </Container>
    )
}