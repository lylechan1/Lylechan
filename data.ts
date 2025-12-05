import { Project, ProjectCategory } from './types';

/* 
  === 图片路径修正 ===
  为了兼容 GitHub Pages 的子目录部署，这里去掉了路径开头的 "/"。
  这样图片会相对于 index.html 所在的目录加载，而不是域名的根目录。
  
  请确保您的图片文件位于项目根目录下的: public/images/ 文件夹中
*/

export const initialProjects: Project[] = [
  {
    id: '1',
    title: '支付宝定期理财版本升级',
    category: ProjectCategory.EXPERIENCE,
    description: '新资产环境下，提升新手用户的信任与认知。',
    imageUrl: 'images/Experience01cover01.png?v=1', 
  },
  {
    id: '2',
    title: '支付宝余额宝悄悄攒',
    category: ProjectCategory.EXPERIENCE,
    description: '建设游戏化的互动场景，探索金融场景新形态。',
    imageUrl: 'images/Brand01cover01.png?v=1', 
  },
  {
    id: '3',
    title: '移动端动效场景应用',
    category: ProjectCategory.VISUAL,
    description: '更多元化的设计表达方式拓展应用。',
    imageUrl: 'images/Visual01cover01.png?v=1', 
  },
  {
    id: '4',
    title: '支付宝定期理财版本升级',
    category: ProjectCategory.VISUAL,
    description: '更多元化的设计表达方式拓展应用。',
    imageUrl: 'images/Experience01cover01.png?v=1', 
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