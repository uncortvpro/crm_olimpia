export function useAuthFetch<T>(url: string, options: any = {}) {
    const auth = useAuthStore();
    const token = localStorage.getItem('token');

    let headers: any = {};

    headers = {
        ...headers,
    };

    return $fetch<T>(url, {
        ...options,
        method: options.method || 'POST',
        headers: {
            ...headers,
            ...options?.headers,
        },
        body: {
            access_token: token,
            ...options?.body
        }
    }).then(async (res: any) => {
        if (res.token !== undefined && res.token === false) {

            return auth.failedToken();
        } else {
            return res;
        }
    }).catch((error) => {
    });
}
