import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Konten',
    path: '/dashboard/konten',
    icon: getIcon()
  },
  {
    title: 'Promo',
    path: '/dashboard/promo',
    icon: getIcon()
  },
  {
    title: 'Voucher',
    path: '/dashboard/voucher',
    icon: getIcon()
  },
  {
    title: 'Seller',
    path: '/dashboard/seller',
    icon: getIcon()
  },
  {
    title: 'Komunitas',
    path: '/dashboard/komunitas',
    icon: getIcon()
  },
  {
    title: 'Flash Sale',
    path: '/dashboard/flashSale',
    icon: getIcon()
  },
  {
    title: 'Pre Sale',
    path: '/dashboard/preSale',
    icon: getIcon()
  },
  {
    title: 'Streaming',
    path: '/dashboard/streaming',
    icon: getIcon()
  },
  {
    title: 'infoPembeli',
    path: '/dashboard/streaming',
    icon: getIcon()
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  }
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon(peopleFill)
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon(shoppingBagFill)
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon(fileTextFill)
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon(alertTriangleFill)
  // }
];

export default sidebarConfig;
