export interface IQnaWritePageUIProps {
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleContentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleWriteClick: () => void;
    handleCancleClick: () => void;
}