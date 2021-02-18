import { PrimaryCategory, SecondaryCategory } from '../protos/category';

export const categories: PrimaryCategory[] = [
  {
    id: 0,
    name: '所有商品',
    matched_product_number: 65,
  },
  {
    id: 1,
    name: '情趣内衣',
    matched_product_number: 30,
    secondary_categories: [
      { name: '学生制服', id: 101, matched_product_number: 5 },
      { name: '猫女兔女', id: 102, matched_product_number: 10 },
      { name: '女仆女佣', id: 103, matched_product_number: 3 },
      { name: '公主新娘', id: 104, matched_product_number: 7 },
      { name: '秘书OL', id: 105, matched_product_number: 5 },
    ],
  },
  {
    id: 2,
    name: '飞机杯',
    matched_product_number: 10,
    secondary_categories: [
      { name: '电动', id: 201, matched_product_number: 5 },
      { name: '硅胶', id: 202, matched_product_number: 5 },
    ],
  },
];
