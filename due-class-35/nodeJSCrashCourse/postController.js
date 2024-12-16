// This is a blog with blog posts, this file will be where we can fetch our posts
const posts = [
    {id: 1, title: 'Making Christmas Cookies'},
    {id: 2, title: 'Roasting Pumpkin Seeds'},
];

const getPosts = () => posts;

// export with ES modules. put export before function
export const getPostsLength = () => posts.length;

// you might want to export as default, if it's the only thing being exported from file. common in REact
// to import this, would do it without curly braces
export default getPosts; 

// if you don't put export right before the function you can do this: since it isn't exported as default, use curly braces
// export { getPosts };