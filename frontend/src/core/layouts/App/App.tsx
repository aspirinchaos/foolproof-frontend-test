import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import LOGO from 'core/assets/logo.png';
import { Container, Card, CardContent, FoldersIcon, Flex } from 'core/atoms';
import Styles from './styles';

import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
  return (
    <Container>
      <CardHeader my={'2.5rem'}>
        <CardContent pb={'0'}>
          <Flex alignItems={'center'}>
            <LogoIcon>
              <FoldersIcon />
            </LogoIcon>
            <h2>File Manager</h2>
          </Flex>
        </CardContent>
        <CardContent py={'0'}>
          <Menu>
            <MenuItem>
              <MenuItemLink to={'users'}>Users</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to={'files'}>Files</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to={'types'}>Types</MenuItemLink>
            </MenuItem>
          </Menu>
        </CardContent>
      </CardHeader>
      <Outlet />
      <Styles />
    </Container>
  );
};

export default App;

const CardHeader = styled(Card)`
  background-size: auto calc(100% - 1rem);
  background-position-x: 95%;
  background-position-y: center;
  background-repeat: no-repeat;
  background-image: url(${LOGO});
`;

const LogoIcon = styled.div`
  border: 1px dashed ${p => p.theme.colors.main};
  border-radius: 100px;
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.ul`
  border-bottom: 2px solid transparent;
  display: flex;
  height: 60px;
  font-weight: 500;
  font-size: 1.25rem;
  list-style: none;
  margin: 0;
  padding-inline-start: 0;
`;

const MenuItem = styled.li`
  margin-bottom: -2px;
  display: flex;
`;

const MenuItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  border-bottom: 2px solid transparent;
  padding: 0.5rem 0;
  margin-right: 2rem;
  text-decoration: none;
  color: ${p => p.theme.colors.grey};

  &.active, &:hover {
    border-bottom-color: ${p => p.theme.colors.main};
  }

  &.active {
    color: ${p => p.theme.colors.main};
  }
`;

