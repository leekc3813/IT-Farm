export interface IRecipeDetailPageUIProps {
    data : fetchData[];
}

interface fetchData {
    content : string;
    nickname : string;
    recipe_id : number;
    regdate : string;
    subject : string;
    photo : string;
}