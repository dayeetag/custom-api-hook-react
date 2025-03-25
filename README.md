This is a project to demonstrate a custom hook for making API calls.


File name: useApi.jsx

Parameters:
URL - URL of the API

Returns -
Data - Data fetched from the API if the API call is successful
Error - Error message if the API call goes into error
Loading - Initially set to True and then set to False post API call


Usage Example:
const {data, loading, error} = useApi('https://dummyjson.com/products')
