export const regionColumns = [
  {
    title: 'Наименование ОПОП',
    dataIndex: 'nameOPOP',
    key: 'nameOPOP',
    width: '12%',
  },
  {
    title: 'Количество уникальных пользователей, скачавших ОПОП',
    dataIndex: 'downloadsCount',
    key: 'downloadsCount',
    width: '12%',
  },
  {
    title: 'Количество уникальных пользователей скачавших отдельные элементы ОПОП',
    dataIndex: 'moduleCount',
    width: '30%',
    key: 'modules',
    children: [
      {
        title: 'Общая характеристика ОПОП',
        dataIndex: 'opop',
        key: 'opop',
        width: 150,
      },
      {
        title: 'Компетентностная модель выпускника',
        dataIndex: 'comp',
        key: 'comp',
        width: 150,
      },
      {
        title: 'Учебный план',
        dataIndex: 'learn',
        key: 'learn',
        width: 150,
      },
      {
        title: 'Программа ГИА',
        dataIndex: 'gia',
        key: 'gia',
        width: '2%',
      },
      {
        title: 'РПД',
        dataIndex: 'rpd',
        key: 'rpd',
        width: '2%',
      },
      {
        title: 'РПП',
        dataIndex: 'rpp',
        key: 'rpp',
        width: 150,
      },
      {
        title: 'Методические рекомендации',
        dataIndex: 'method',
        key: 'method',
        width: 150,
      },
    ],
  },
];
