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

export const GET_CONTEST_IDS = (date) => {
	const query = `
     {
        contests(where: {endDate_gte: "${date}"}) {
            id
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

export const SUBMIT_ARTICLE = (name, link, discordHandle, contestId) => {
	const query = `
    mutation SubmitArticle {
        createSubmit(
            data: {name: "${name}", link: "${link}", discordHandle: "${discordHandle}", contests: {connect: {Contest: {id: "${contestId}"}}}}) {
                id
            }         
}
`;
	return query;
};

export const PUBLISH_ARTICLE = (id) => {
	const query = `
    mutation PublishArticle {
        publishSubmit(where: {id: "${id}"}) {
            id
        }
    }
`;
	return query;
};
