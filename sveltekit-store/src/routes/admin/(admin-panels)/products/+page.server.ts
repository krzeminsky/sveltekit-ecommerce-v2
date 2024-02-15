import { categoryCache } from "$lib/server/cache/simple-caches"

export const load = async () => {
    return { categories: categoryCache.valuesArray() }
}