import React, { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Common: FC<PropsWithChildren> = observer(() => (
  <div>
    <h1>Общая статистика</h1>
    <ResponsiveContainer width="100%" height="100%" aspect={3}>
      <AreaChart
        width={500}
        height={400}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
));
