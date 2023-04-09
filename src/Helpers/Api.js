export async function FetchData(url, config) {
    const response = await fetch(url, {
        ...config,
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    const data = await response.json();
    return { data };
}
