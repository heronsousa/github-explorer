import React, { useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Header, RespositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Respository: React.FC = () => {
    useEffect(() => {
        async function getRepo() {
            await api.get(`repos/${params.repository}`).then((response) => {
                console.log(response.data)
            });

        }
    }, []);

    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RespositoryInfo>
                <header>
                    <img alt="Imagem" />
                    <div>
                        <strong>facebook/react</strong>
                        <p>Descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RespositoryInfo>

            <Issues>
                <Link to="asdsad">
                    <div>
                        <strong>repository.full_name</strong>
                        <p>repository.description</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Respository;
