import { CardData, Container } from './styles';

import { FiTrash2, FiEdit2 } from 'react-icons/fi';

function Card({ title, imageUrl }) {
    return (
        <>           
            <Container>            
                <CardData>
                    <div className={'card-image'}>
                        <img src={imageUrl} alt={title} />
                    </div>

                    <hr />

                    <div className={'card-title'}>
                        <p>{title}</p>
                    </div>

                    <div className={'card-footer'}>
                        <div className={'card-footer-button-wrapper delete'}>
                            <span>
                                <FiTrash2 />
                                <input className={'card-button card-button-delete'} type="button" value="Excluir" onClick={() => { alert('Funcionalidade ainda não implementada') }} />
                            </span>
                        </div>
                        <div className={'card-footer-button-wrapper edit'}>
                            <span>
                                <FiEdit2 />
                                <input className={'card-button card-button-edit'} type="button" value="Editar" onClick={() => { alert('Funcionalidade ainda não implementada') }} />
                            </span>
                        </div>
                    </div>
                </CardData>
            </Container>
        </>
    )
};

export default Card;