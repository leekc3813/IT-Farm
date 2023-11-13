export interface IRecipePageUIProps {
    data : FetchData[];
}

interface FetchData {
    content : string;
    nickname : string;
    photo : string;
    recipe_id : number;
    subject : string;
}