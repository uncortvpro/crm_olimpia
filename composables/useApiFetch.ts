export function useApiFetch<T>(url: string, options: any = {}) {
    let headers: any = {};
    const auth = useAuthStore();

    headers = {
        ...headers,
    };

    return $fetch<T>(url, {
        ...options,
        headers: {
            ...headers,
            ...options?.headers,
        },
    }).then((res: any) => {
        if (res.token !== undefined && res.token === false) {
            return auth.failedToken();
        }
        return res;
    });
}
