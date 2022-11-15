import React, { FC, PropsWithChildren } from 'react';
import { Header } from '@unione-pro/unione.commons.webpack';
import { observer } from 'mobx-react-lite';
import { Navigation } from '../navigation';

export const Layout: FC<PropsWithChildren> = observer((props) => (
  <>
    <Header />
    <Navigation />
    {props.children}
  </>
));
