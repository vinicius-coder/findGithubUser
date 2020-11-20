import React from 'react';
import { Link } from 'react-router-dom';
import ButtomIcom from 'core/components/ButtomIcon';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <div className="container-title">
            Desafio do Capítulo 3, <br />
            Bootcamp DevSuperior
        </div>
        <div className="description">
        <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br /></p>
        <p>Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto. <br /></p>
        <p>
            Este design foi adaptado a partir de Ant Design System for Figma, de <br />
            Mateusz Wierzbicki: <Link to="#" className="home-email"> antforfigma@gmail.com </Link> 
        </p>
        </div>
        <Link to="/userFinder" className="margin-bottom-30">
            <ButtomIcom text="Começar" />
        </Link>
    </div>

)

export default Home;