export enum cardItemStatusEnm{
    TODO = "TODO",
    DOING = "DOING",
    DONE = "DONE"
}

export interface cardItemItf{
    title : string ;
    description : string;
    status? : cardItemStatusEnm;
};