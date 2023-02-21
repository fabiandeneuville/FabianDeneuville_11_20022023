import { Link } from 'react-router-dom';

import Header from '../components/Header';

function NotFound(){
    return (
        <div>
            <Header/>
            <div className="not-found">
                <p className="not-found__status">404</p>
                <p className="not-found__explanation">Oups! La page que vous demandez n'existe pas. </p>
                <Link className="not-found__link" to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default NotFound;