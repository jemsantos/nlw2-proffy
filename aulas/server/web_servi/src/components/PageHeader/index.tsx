import React from 'react';

import { Link } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
  title: string;
}

//import './styles.css';

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-containder">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoIcon} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>TESTE GIT.....
      </div>

      {props.children}
    </header>
  );
}

export default PageHeader;