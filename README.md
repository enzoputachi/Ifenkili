## Project Setup
1. Routes

## integration of dark mode
1. state
    i. initial state should get it's value from the localstorage or a default value

2. useEffect
    i. set the darkmode variable and value to the local storage
    ii. Manipulate the document to add and remove the `dark` class from the DOM
    iii. Then rerender when the darkmode value changes

<!-- Finished with .env file >> Next will be the search-->

# The useFetch hook
This is a custom hook that let's you seperate your API request into a component. Then you can import the hook and use it in other parts of the app to dynamically make a http request.

1. Flow of useFetch Hook `apiPath` prop :
        AllRoutes.jsx ---> useFetch.jsx [after-destructuring]---> MovieList/Search/MovieDetails

# searchParams Hook
A react router hook that allows you to read and manipulate the query string in  my component.

1. import the useSearchParams in the `search` component where you need it.

2. syntax: `const [searchParams, setSearchParams] = useSearchParams()`

3. To read query: `searchParams.get('q')`

4. To update query: `setSearchParams`

# useNavigate hook


## Tailwind CSS Customization

    1. Customize screen size: define a custome range {min and max}