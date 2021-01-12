import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no GitHub</Title>

            <Form action="">
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="ola">
                    <img src="" alt="Heron Rodrigues" />

                    <div>
                        <strong>marvel-heroes</strong>
                        <p>Aplicativo para visualizar heróis da Marvel</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="ola">
                    <img src="" alt="Heron Rodrigues" />

                    <div>
                        <strong>marvel-heroes</strong>
                        <p>Aplicativo para visualizar heróis da Marvel</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="ola">
                    <img src="" alt="Heron Rodrigues" />

                    <div>
                        <strong>marvel-heroes</strong>
                        <p>Aplicativo para visualizar heróis da Marvel</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
