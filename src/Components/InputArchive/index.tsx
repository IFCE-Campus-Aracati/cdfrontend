import { useEffect, useState, ChangeEvent } from "react";
import { Container, Input } from "./styles";

interface ArchiveProps {
    fileName: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputArchive({fileName, onChange }: ArchiveProps) {
    
    return (
        <Container >
            <Input htmlFor="file-input">{fileName}</Input>
            <input id="file-input" type="file" accept=".stl" style={{display:'none'}} onChange={onChange} />
        </Container>
    );
}