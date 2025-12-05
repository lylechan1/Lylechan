import { Project, ProjectCategory } from './types';

/* 
  === 图片路径最终确认 ===
  根据您的截图：
  1. 文件夹是 public/images -> 代码写 /images/
  2. 文件名大小写严格匹配
  3. 添加 ?v=1 是为了强制刷新浏览器缓存
*/

export const initialProjects: Project[] = [
  {
    id: '1',
    title: '支付宝定期理财版本升级',
    category: ProjectCategory.EXPERIENCE,
    description: '新资产环境下，提升新手用户的信任与认知。',
    imageUrl: '/images/Experience01cover01.png?v=1', 
  },
  {
    id: '2',
    title: '支付宝余额宝悄悄攒',
    category: ProjectCategory.EXPERIENCE,
    description: '建设游戏化的互动场景，探索金融场景新形态。',
    imageUrl: '/images/Brand01cover01.png?v=1', 
  },
  {
    id: '3',
    title: '移动端动效场景应用',
    category: ProjectCategory.VISUAL,
    description: '更多元化的设计表达方式拓展应用。',
    imageUrl: '/images/Visual01cover01.png?v=1', 
  },
  
  // --- 示例数据 ---
  {
    id: 'demo-1',
    title: 'Future Finance App',
    category: ProjectCategory.EXPERIENCE,
    description: 'A complete overhaul of the banking experience for Gen Z.',
    imageUrl: 'https://picsum.photos/seed/finance/1600/900',
  },
  {
    id: 'demo-2',
    title: 'Neo-Tokyo Branding',
    category: ProjectCategory.BRAND,
    description: 'Identity system for an upcoming cyber-fashion district in Tokyo.',
    imageUrl: 'https://picsum.photos/seed/tokyo/1600/900',
  },
  {
    id: 'demo-4',
    title: 'Sunday Morning',
    category: ProjectCategory.ASSETS,
    description: 'Captured moments of my Scottish Fold, Mochi.',
    imageUrl: 'https://picsum.photos/seed/cat1/1600/900',
  }
];