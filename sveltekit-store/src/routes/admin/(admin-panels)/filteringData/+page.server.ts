import { categoryCache, colorCache, materialCache, sizeCache } from '$lib/server/cache/simple-caches.js'

export const load = async ({}) => {
    return { colors: colorCache.valuesArray(), materials: materialCache.valuesArray(), categories: categoryCache.valuesArray(), sizes: sizeCache.valuesArray() }
}