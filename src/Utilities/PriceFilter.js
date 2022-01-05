// This file defines a function which filters the search results of the restaurants according to the price

export function filterRestaurantsWithPrice(results, price) {
    // Price === '$' || Price === '$$' || Price === '$$$'
    return results.filter(result => {
        return result.price === price
    })
}