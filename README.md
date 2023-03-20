# Flick Finder

A React Application with TypeScript for searching for the movies that are on your mind.

![Alt text](./public/images/site_gif.gif "Preview")


## Technologies Used

* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Bootstrap](https://getbootstrap.com/)


## Code Snippet

Simple state management and on data fetching on load via react hooks: useState and useEffect.

```jsx
  const HomePage: React.FunctionComponent = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [input, setInput] = useState("")
    
    const handleMovieSearch = () => {
        //console.log(input)
        getAxiosData(input)
        .then(res=> {
            if(res.Error){
                window.alert("No movie by that name, please try again!")
            }else{
            setMovies(res["Search"])
            }
        })
        .catch(err => console.log(err))
    }

    //fetch on page load 
    useEffect(() => {
        getAxiosData("Star Wars")
        .then(res=> {
            //console.log(res["Search"])
            setMovies(res["Search"])
        })
    }, [])
  ```



# Author
  * Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)

