import { Header } from './styles'

import logoUrl from '../../assets/logo-teste-impar.png'

function TopBar() {
    return (
    <>
        <Header>
            <img src={logoUrl} alt="Teste Ímpar - Logotipo" />
        </Header>
    </>
    )
}

export default TopBar;