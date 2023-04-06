export async function FetchData(url) {
    const controller = new AbortController();
    const response = await fetch(url, {
        signal: controller.signal,
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    const data = await response.json();
    return { data, controller };
}
