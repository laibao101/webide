import React from "react";
import styled from 'styled-components';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";


const StyledWrapper = styled.div`
    height: 100%;
    width: 600px;
`;

export default function CodeEditor() {
    return (
        <StyledWrapper>
            <Editor
                defaultLanguage="javascript"
                value="fsdfdsfds"
            />
        </StyledWrapper>
    )
}