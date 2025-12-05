export enum ProjectCategory {
  ALL = 'All',
  EXPERIENCE = '体验设计',
  VISUAL = '视觉设计',
  BRAND = '品牌设计',
  ASSETS = '我的猫',
  THOUGHTS = '想法笔记',
  CONTACT = '联系'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  value: ProjectCategory;
}

export interface BrandLogo {
  id: string;
  url: string;
  alt: string;
}