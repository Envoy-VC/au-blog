export const GET_ARTICLE_SLUGS = `
    query GetArticleSlugs($page: Int!) {
        user(username: "envoy1084") {
            publication {
                posts(page: $page) {
                    slug
                } 
            }   
        }
    }
`;

export const GET_ARTICLE = `
    query GetArticle($slug: String!) {     
        post(slug: $slug, hostname: "blog.vedantc.dev") {
            coverImage
            title
            brief
        }
    }
`;

export const GET_CONTESTS = (date) => {
	const query = `
     {
        contests(where: {endDate_gte: "${date}", startDate_lte: "${date}"}) {
            id
            title
            category
            description
            startDate
            endDate
        }
    }
    `;
	return query;
};

export const GET_CONTEST = (id) => {
	const query = `
    {
        contests(where: {id: "${id}"}) {
            id
            title
            category
            description
            startDate
            endDate
            content {
                html
            }
        }
    }
    `;
	return query;
};
