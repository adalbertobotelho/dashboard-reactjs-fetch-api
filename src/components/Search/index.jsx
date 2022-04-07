import { Container } from './styles'

function Search({ newArticle, setNewArticle, handleSearchArticle, setArticlesListLength, articlesList }) {

    async function liveSearchArticles(event) {
        setNewArticle(event.target.value)
        handleSearchArticle(event)
        setArticlesListLength(articlesList.length())
    }

    return (
        <>
            <Container>
                <input
                    type="text"
                    value={newArticle} 
                    className={'input-search'} 
                    placeholder='Digite aqui sua busca...' 
                    onChange={liveSearchArticles} 
                />
            </Container>
        </>
    )
}

export default Search;