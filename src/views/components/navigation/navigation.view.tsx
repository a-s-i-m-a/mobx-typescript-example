import React, { FC, useState, PropsWithChildren, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuProps } from 'antd';
import { observer } from 'mobx-react-lite';
import { appStoreContext } from '../../../store/context.store';

export const Navigation: FC<PropsWithChildren> = observer((props) => {
  const [current, setCurrent] = useState('common');
  const navigate = useNavigate();
  const { regions } = useContext(appStoreContext);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(`region/${e.key}`);
  };

  useEffect(() => {
    regions.getRegions();
  }, [regions]);
  return (
    <Menu selectedKeys={[current]}
      mode="horizontal"
      onClick={onClick}>
      <Menu.Item key={'common'}>Общая статистика</Menu.Item>
      <Menu.Item key={'priority'}>По приоритетным направлениям</Menu.Item>
      <Menu.Item key={'work-place'}>С учетом места работы</Menu.Item>
      <Menu.SubMenu key={'by-regions'} title="По регионам">
        {
          regions.regionValues?.map((region) => (
            <Menu.Item key={region.id}>{region.name}</Menu.Item>
          ))
        }
      </Menu.SubMenu>
    </Menu>
  );
});
