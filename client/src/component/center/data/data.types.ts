export interface IDataPageUIProps {
    formData : {
        humidity : string;
        temp : string;
        underground : string;
        radiation : string;
    }
    onChangeDetailData  : (name : string, value : string) => void;
    result : number;
    onClickSubmit : () => void;
    outputData: number;
}