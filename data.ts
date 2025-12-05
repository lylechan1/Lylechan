import { Project, ProjectCategory } from './types';

/* 
  === 新手指南：如何添加新项目 ===
  
  第一步：放图片
  在您的项目文件夹中，找到 'public' 文件夹，在里面建一个 'images' 文件夹。
  把您的图片（比如 'cover01.jpg'）放进去。
  完整路径应该是：项目根目录/public/images/cover01.jpg

  第二步：改代码
  复制下方的 "新项目模版"，粘贴到 initialProjects 数组的开头。
  
  第三步：填路径
  imageUrl 这一栏，直接写 '/images/您的图片名.jpg'。
  (注意：代码里不要写 'public')
*/

export const initialProjects: Project[] = [
  // =========== 复制下方内容添加新项目 ===========
  {
    id: 'new-project-001', // ID 必须是唯一的，随便写，别重复就行
    title: '这里写项目标题',
    category: ProjectCategory.VISUAL, // 类别可选: EXPERIENCE, VISUAL, BRAND, ASSETS, THOUGHTS
    description: '这里写项目的简短介绍...',
    imageUrl: '/images/example.jpg', // 确保 public/images/ 下有 example.jpg 这个文件
  },
  // ===========================================

  {
    id: '1',
    title: '支付宝定期理财版本升级',
    category: ProjectCategory.EXPERIENCE,
    description: '新资产环境下，提升新手用户的信任与认知。',
    imageUrl: '/iamges/Experience01cvoer01',
  },
  {
    id: '2',
    title: '支付宝余额宝悄悄攒',
    category: ProjectCategory.EXPERIENCE,
    description: '建设游戏化的互动场景，探索金融场景新形态。',
    imageUrl: '/iamges/Brand01cvoer01',
  },
  {
    id: '3',
    title: '移动端动效场景应用',
    category: ProjectCategory.VISUAL,
    description: '更多元化的设计表达方式拓展应用。',
    imageUrl: '/iamges/Visual01cvoer01',
  },
  {
    id: '4',
    title: 'Sunday Morning',
    category: ProjectCategory.ASSETS,
    description: 'Captured moments of my Scottish Fold, Mochi, lounging in the afternoon sun.',
    imageUrl: 'https://picsum.photos/seed/cat1/1600/900',
  },
  {
    id: '5',
    title: 'Design Systems 101',
    category: ProjectCategory.THOUGHTS,
    description: 'An in-depth article exploring the atomic design methodology applied to enterprise scale software.',
    imageUrl: 'https://picsum.photos/seed/article/1600/900',
  },
  {
    id: '6',
    title: 'Urban Mobility',
    category: ProjectCategory.EXPERIENCE,
    description: 'Concept app for a unified public transportation system in mega-cities.',
    imageUrl: 'https://picsum.photos/seed/urban/1600/900',
  },
  {
    id: '7',
    title: 'Minimalist Packaging',
    category: ProjectCategory.BRAND,
    description: 'Sustainable packaging design for a luxury skincare brand.',
    imageUrl: 'https://picsum.photos/seed/skin/1600/900',
  },
  {
    id: '8',
    title: 'Night Watch',
    category: ProjectCategory.ASSETS,
    description: 'The intense focus of a predator (Luna) observing a moth on the window.',
    imageUrl: 'https://picsum.photos/seed/cat2/1600/900',
  }
];
