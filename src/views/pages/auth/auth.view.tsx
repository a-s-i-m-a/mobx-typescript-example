import { FC, Fragment, PropsWithChildren, useContext, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Col, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { appStoreContext } from '../../../store/context.store';

export const Auth: FC<PropsWithChildren> = observer((props) => {
  const appStore = useContext(appStoreContext);

  useEffect(() => {
    appStore.user.getToken();
  }, [appStore.user]);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  if (appStore.user.loading) {
    return (<Spin indicator={antIcon} />);
  }

  if (typeof appStore.user.token !== 'string') {
    return (
      <Col span={12} offset={9}>
        <Spin indicator={antIcon} />
        <span>Переход на страницу авторизации...</span>
      </Col>
    );
  }

  return (
    <Fragment>
      {props.children}
    </Fragment>
  );
});
