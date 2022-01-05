import { useState, useEffect } from "react";
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const SearchApi = async (term) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: term,
                    limit: 50,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
            setErrorMessage('')
        }
        catch (err) {
            setResults([])
            setErrorMessage('Some thing went wrong !')
        }
    }

    // Call to the useEffect hook

    // useEffect(() => {
    //     SearchApi('pizza')
    // }, [])

    return [SearchApi,results,errorMessage]
}