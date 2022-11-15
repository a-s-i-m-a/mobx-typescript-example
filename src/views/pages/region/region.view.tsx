import { FC, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import { observer } from 'mobx-react-lite';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart } from 'recharts';
import { regionColumns } from '../../../constants/regions.table';
import { appStoreContext } from '../../../store/context.store';


export const Region: FC = observer(() => {
  const { regions } = useContext(appStoreContext);
  const { pathname } = useLocation();

  useEffect(() => {
    const id = pathname.slice(8);
    regions.getRegionById(id);
  }, [pathname]);

  return (
    <div>
      <h1>{regions.currentRegion}</h1>
      <Table
        columns={regionColumns}
        dataSource={regions.opops}
      />
      <ResponsiveContainer width="99%" height={400}>
        <BarChart
          width={1500}
          height={600}
          data={ regions.graphicData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" stackId="a" fill="#004c94" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});
