export function useNewVariant( name:string, type: VariantType, color: string = '') {
   return useAuthFetch(`${useApiUrl()}/new_status`, {
    body: {
        status: name,
        colour: color,
        type: type
    }
   })
}
