export interface PostListType {
    body: string,
    created_at: Date
    deleted_at: string,
    id: number,
    isPrivate: boolean,
    previewImage: string,
    shortDescription: string
    title: string,
    updated_at: Date,
    likes: number,
    user: {
        id: number,
        name: string,
        uid: string
    }
}

