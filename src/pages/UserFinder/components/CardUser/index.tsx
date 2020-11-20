import ButtomIcom from 'core/components/ButtomIcon';
import { UserGithub } from 'core/components/types/User';
import React from 'react';
import './styles.scss';

type Props = {
    user: UserGithub;
}

const CardUser = ({ user }: Props) => (
    <div className={`container-user ${user ? 'd-block' : 'd-none'} col-11`}>

        <img src={user.avatar_url} alt={user.login} className="user-image" />

        <div className="btn-perfil">
            <a href={`${user.html_url}`}>
                <ButtomIcom text="Ver perfil" />
            </a>
        </div>

        <div className="card-user-repo">
            Repositórios públicos: {user.public_repos}
        </div>
        <div className="card-user-repo">
            Seguidores: {user.followers}
        </div>
        <div className="card-user-repo">
            Seguindo: {user.following}
        </div>

        <div className="card-user-info">
            <h1 className="card-user-title">Informações</h1>
            <div className="card-user-details">
                Empresa: {user.company}
            </div>
            <div className="card-user-details">
                Website/Blog: {user.url}
            </div>
            <div className="card-user-details">
                Localidade: {user.location}
            </div>
            <div className="card-user-details">
                Membro desde: {user.created_at}
            </div>
        </div>

    </div>
)


export default CardUser;