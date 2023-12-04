export const useCraftApi = (query) => {
    const config = useRuntimeConfig();
    try {
        return useFetch(config.public.apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/graphql",
                Authorization: "Bearer 7wJ5WQ1Vqm7klSvBGWjANCczpjw_yyiO",
            },
            body: query,
        });
    } catch(error) {
        console.error(error);
    }
}
