import { PrimaryCategory, SecondaryCategory } from '../protos/category';

export const categories: PrimaryCategory[] = [
  {
    id: 0,
    name: '所有商品',
  },
  {
    id: 1,
    name: '情趣内衣',
    secondary_categories: [
      { name: '学生制服', id: 101 },
      { name: '猫女兔女', id: 102 },
      { name: '女仆女佣', id: 103 },
      { name: '公主新娘', id: 104 },
      { name: '秘书OL', id: 105 },
    ],
  },
  {
    id: 2,
    name: '情趣饰品',
    secondary_categories: [
        { name: '帽子', id: 201 },
        { name: '尾巴', id: 202 },
        { name: '领带', id: 203 },
      ],
  },
  {
    id: 3,
    name: '飞机杯',
    secondary_categories: [
        { name: '硅胶', id: 301 },
        { name: '电动', id: 302 },
      ],
  },
];
