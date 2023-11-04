export interface PostType {
    author:{
        edges:object,
        id:number,
        author_id:number,
        joined_at:string,
    },
    isliked:boolean,
    post:{
        content:string,
        created_at:string,
        edges:object,
        id:number,
        is_private:boolean,
        preview_image:string,
        short_description:string,
        title:string,
        updated_at:string,
    }
}

