export const GET_ARTICLES = `
    query GetArticles($page: Int!) {
        user(username: "envoy1084") {
            publicationDomain
            publication {
            posts(page: $page) {
                coverImage
                title
                brief
                slug
                }   
            }
        }
    }
`;
