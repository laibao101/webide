import React from 'react';
import styled from 'styled-components';
import CodeEditor from './components/code-editor';
import FileTree from './components/file-tree';
import Previewer from './components/previewer';

const StyledContainer = styled.div`
    display: flex;
`;

export default function App () {
    return (
        <StyledContainer>
            <FileTree />
            <CodeEditor/>
            <Previewer />
        </StyledContainer>
    )
}