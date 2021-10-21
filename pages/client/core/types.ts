export type TFilename = string;

export type TFileContent = string;;

export interface IFile {
    filename: TFilename;
    fileContent: TFileContent;
}

export type TFileList = IFile[];