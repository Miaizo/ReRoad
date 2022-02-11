export {}

// const PostStatus = {
//     Draft: 0,
//     Unpublished: 1,
//     Pbulished: 2
// }

enum PostStatus {
    Draft,
    Unpublished,
    Pbulished
}

const post = {
    title: 'Hello Typescript',
    content: 'ts is a typed superset of javascript',
    status: PostStatus.Draft
}

