import ButtomIcom from 'core/components/ButtomIcon';
import { UserGithub } from 'core/components/types/User';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CardUser from './components/CardUser';
import './styles.scss';

type FormData = {
    user: string;
}

const UserFinder = () => {

    const [userGithub, setUserGithub] = useState<UserGithub>();
    const { register, handleSubmit, errors } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);

    const onSubmit = (data: FormData) => {

        makeRequest({ url: `${data.user}` })
            .then(response => {
                setHasError(false);
                setUserGithub(response.data);
            })
            .catch(() => {
                setHasError(true);
            });
    }

    return (
        <>
            <div className="userFinder-container col-11">

                <div className="finder-container-title">
                    <b>Encontre um perfil Github</b>
                </div>

                {hasError && (
                    <div className="col-3 alert alert-danger">
                        Usuário não encontrado!
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>

                    {errors.user && (
                        <div className="invalid-feedback d-block">
                            {errors.user.message}
                        </div>
                    )}

                    <input
                        type="text"
                        className={`form-control input-base col-7 ${errors.user ? 'is-invalid' : ''}`}
                        placeholder="Usuário Github"
                        name="user"
                        ref={register({ required: "Campo obrigatório" })}
                    />
                    <ButtomIcom text="Encontrar" />
                </form>
            </div>
            
            { userGithub && (<CardUser user={userGithub} />) }
        </>
    );
}

export default UserFinder;
