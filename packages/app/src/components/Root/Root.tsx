import { PropsWithChildren } from 'react';
import { IconButton } from '@material-ui/core'; // Adicionamos IconButton aqui
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications'; // Deixamos como fallback

import { UserSettingsSignInAvatar } from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search-react';
import {
  Link,
  Header,
  HeaderTabs,
  Content,
} from '@backstage/core-components';
import LogoFull from './LogoFull';
// O componente SidebarLogo, useSidebarLogoStyles, SidebarDivider, etc., foram removidos.

// 1. DEFINIÇÃO DOS LINKS DE NAVEGAÇÃO (Tabs)
const tabs = [
  { id: 'catalog', label: 'Home', to: '/catalog' },
  { id: 'api-docs', label: 'APIs', to: '/api-docs' },
  { id: 'docs', label: 'Docs', to: '/docs' },
  { id: 'create', label: 'Create...', to: '/create' },
  { id: 'my-groups', label: 'My Groups', to: '/catalog?filters[user]=owned' },
];

// 2. O COMPONENTE ROOT REESCRITO
export const Root = ({ children }: PropsWithChildren<{}>) => (
  <>
    {/* CABEÇALHO SUPERIOR */}
  <Header
    title="Seu Portal Dev"
    subtitle="Visão Geral do Backstage"
  >
    <LogoFull />
      {/* AÇÕES NO CANTO SUPERIOR DIREITO */}
      
      {/* Botão de busca: navega para a página de busca */}
      <IconButton aria-label="Search" color="inherit" component={Link} to="/search">
        <SearchIcon />
      </IconButton>
      
      {/* BOTÃO DE NOTIFICAÇÕES (Simplesmente um link para a rota /notifications) */}
      <IconButton aria-label="Notifications" color="inherit" component={Link} to="/notifications">
          <NotificationsIcon />
      </IconButton>
      
      {/* AVATAR DE USUÁRIO / SETTINGS */}
      <UserSettingsSignInAvatar />
    </Header>

    {/* NAVEGAÇÃO HORIZONTAL */}
    <HeaderTabs tabs={tabs} />

    {/* CONTEÚDO PRINCIPAL */}
    <Content>
      {children}
    </Content>
  </>
);