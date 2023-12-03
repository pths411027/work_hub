/* eslint-disable import/prefer-default-export */

import {
  DashboardOutlined, SummarizeOutlined, PollOutlined, TableRowsOutlined,
} from '@mui/icons-material';

export const workManagementMenu = {
  nestHeader: 'Work Management',
  menu: [
    {
      title: 'Overview',
      url: '/overview',
      icon: TableRowsOutlined,
      subtitle: [
        {
          title: 'Ops',
          url: '/overview/ops',
        },
        {
          title: 'MKT',
          url: '/overview/mkt',
        },
        {
          title: 'BD',
          url: '/overview/bd',
        },
        {
          title: 'Tech',
          url: '/overview/tech',
        },
      ],
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: DashboardOutlined,
      subtitle: [
        {
          title: 'PRO',
          url: '/dashboard/pro',
        },
        {
          title: 'UAT',
          url: '/dashboard/uat',
        },
        {
          title: 'DEV',
          url: '/dashboard/dev',
        },
      ],
    },
  ],
};

export const dataAnalysis = {
  nestHeader: 'Data Analysis',
  menu: [
    {
      title: 'Report',
      url: '/report',
      icon: SummarizeOutlined,
      subtitle: [
        {
          title: 'Market',
          url: '/report/market',
        },
        {
          title: 'Industry',
          url: '/report/industry',
        },
        {
          title: 'Peers',
          url: '/report/peers',
        },
        {
          title: 'Policy',
          url: '/report/policy',
        },
      ],
    },
    {
      title: 'Data',
      url: '/data',
      icon: PollOutlined,
      subtitle: [
        {
          title: 'Government',
          url: '/data/government',
        },
        {
          title: 'Company',
          url: '/data/company',
        },
        {
          title: 'News',
          url: '/data/news',
        },
        {
          title: 'Others',
          url: '/data/others',
        },
      ],
    },
  ],
};
