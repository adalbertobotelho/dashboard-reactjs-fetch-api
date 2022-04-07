import { Container, TitleHeader } from './styles';

function Title({ setNewArticle, setArticlesList, articlesList }) {

    function clearResults(event) {
        event.preventDefault();
        setNewArticle('');
        setArticlesList([]);
    }

    return (
        <Container>
            <div className={'cards-header-container'}>
                <div className={'cards-header'}>
                <TitleHeader>Resultado da busca{articlesList.length === 0 ? '' : `: ${articlesList.length} artigos encontrados` }</TitleHeader>
                <span>
                    <input 
                        className={'title-header-button new-card-button'} 
                        type="button" 
                        value="Novo card" 
                        onClick={() => { alert('Funcionalidade ainda não implementada') }}
                    />
                    <input 
                        className={'title-header-button clear-search-button'} 
                        type="button" 
                        value="Limpar busca" 
                        onClick={clearResults} 
                    />
                </span>
                </div>
            </div>
        </Container>
    )
};

export default Title;