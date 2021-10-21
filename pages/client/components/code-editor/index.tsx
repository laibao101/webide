import React from "react";
import styled from 'styled-components';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { useWorkspace } from "../../core/context";
import { observer } from "mobx-react-lite";


const StyledWrapper = styled.div`
    flex: 1;
`;

export default observer(function CodeEditor() {
    const workspace = useWorkspace();
    const { stage } = workspace;
    const { currentFile } = stage;

    return (
        <StyledWrapper>
            <Editor
                defaultLanguage="javascript"
                value={currentFile?.fileContent ?? ''}
            />
        </StyledWrapper>
    )
})