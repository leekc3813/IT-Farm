export interface IWritePageUIProps {
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleContentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleWriteClick: () => void;
}