import p1 from '../img/testImages/cats/c1.png';
import p2 from '../img/testImages/cats/c2.png';
import p3 from '../img/testImages/cats/c3.png';
import p4 from '../img/testImages/cats/c4.png';
import p5 from '../img/testImages/cats/c5.png';
import p6 from '../img/testImages/cats/c6.png';
import p7 from '../img/testImages/cats/c7.png';
import p8 from '../img/testImages/cats/c8.png';
import p9 from '../img/testImages/cats/c9.png';

const data = [
  {
    id: 1,
    title: 'Спальня',
    categories: [
      {
        id: 1,
        title: 'Посуда для сервировки1',
        slug: 'posyda',
        photo: p1,
        subcategories: [
          { id: 1, title: 'Тарелки / миски / блюда', slug: 'tarelki' },
          { id: 2, title: 'Стаканы / кружки / бокалы' },
          { id: 3, title: 'Столовые приборы' },
        ],
      },
      {
        id: 2,
        title: 'Посуда для готовки',
        photo: p2,

        subcategories: [
          { id: 4, title: 'Ножи и разделочные доски' },
          { id: 5, title: 'Кастрюли и сковороды' },
          { id: 6, title: 'Кухонные принадлежности' },
        ],
      },
      {
        id: 3,
        title: 'Мебель',
        photo: p3,

        subcategories: [
          { id: 7, title: 'Столы' },
          { id: 8, title: 'Стулья' },
          { id: 9, title: 'Кухонные шкафчики' },
          { id: 10, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 4,
        title: 'Текстиль для кухни',
        photo: p4,
        subcategories: [
          { id: 11, title: 'Скатерти и салфетки' },
          { id: 12, title: 'Полотенца и прихватки' },
          { id: 13, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 5,
        title: 'Аксессуары для кухни',
        photo: p5,
        subcategories: [
          { id: 14, title: 'Сушилки для посуды' },
          { id: 15, title: 'Губки / щетки' },
        ],
      },
      {
        id: 6,
        title: 'Хранение на кухне',
        photo: p6,
        subcategories: [
          { id: 17, title: 'Контейнеры' },
          { id: 18, title: 'Для специй' },
          { id: 19, title: 'Банки / бутылки' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Гостинная',
    categories: [
      {
        id: 1,
        title: 'Посуда для сервировки',
        photo: p7,
        subcategories: [
          { id: 1, title: 'Тарелки / миски / блюда' },
          { id: 2, title: 'Стаканы / кружки / бокалы' },
          { id: 3, title: 'Столовые приборы' },
        ],
      },
      {
        id: 2,
        title: 'Посуда для готовки',
        photo: p8,
        subcategories: [
          { id: 4, title: 'Ножи и разделочные доски' },
          { id: 5, title: 'Кастрюли и сковороды' },
          { id: 6, title: 'Кухонные принадлежности' },
        ],
      },
      {
        id: 3,
        title: 'Мебель',
        photo: p9,
        subcategories: [
          { id: 7, title: 'Столы' },
          { id: 8, title: 'Стулья' },
          { id: 9, title: 'Кухонные шкафчики' },
          { id: 10, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 4,
        title: 'Текстиль для кухни',
        photo: p1,
        subcategories: [
          { id: 11, title: 'Скатерти и салфетки' },
          { id: 12, title: 'Полотенца и прихватки' },
          { id: 13, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 5,
        title: 'Аксессуары для кухни2',
        photo: p2,
        subcategories: [
          { id: 14, title: 'Сушилки для посуды' },
          { id: 15, title: 'Губки / щетки' },
        ],
      },
      {
        id: 6,
        title: 'Хранение на кухне',
        photo: p3,
        subcategories: [
          { id: 17, title: 'Контейнеры' },
          { id: 18, title: 'Для специй' },
          { id: 19, title: 'Банки / бутылки' },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Кухня',
    categories: [
      {
        id: 1,
        title: 'Посуда для сервировки',
        photo: p4,
        subcategories: [
          { id: 1, title: 'Тарелки / миски / блюда' },
          { id: 2, title: 'Стаканы / кружки / бокалы' },
          { id: 3, title: 'Столовые приборы' },
        ],
      },
      {
        id: 2,
        title: 'Посуда для готовки',
        photo: p5,
        subcategories: [
          { id: 4, title: 'Ножи и разделочные доски' },
          { id: 5, title: 'Кастрюли и сковороды' },
          { id: 6, title: 'Кухонные принадлежности' },
        ],
      },
      {
        id: 3,
        title: 'Мебель',
        photo: p6,
        subcategories: [
          { id: 7, title: 'Столы' },
          { id: 8, title: 'Стулья' },
          { id: 9, title: 'Кухонные шкафчики' },
          { id: 10, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 4,
        title: 'Текстиль для кухни',
        photo: p7,
        subcategories: [
          { id: 11, title: 'Скатерти и салфетки' },
          { id: 12, title: 'Полотенца и прихватки' },
          { id: 13, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 5,
        title: 'Аксессуары для кухни',
        photo: p8,
        subcategories: [
          { id: 14, title: 'Сушилки для посуды' },
          { id: 15, title: 'Губки / щетки' },
        ],
      },
      {
        id: 6,
        title: 'Хранение на кухне',
        photo: p9,
        subcategories: [
          { id: 17, title: 'Контейнеры' },
          { id: 18, title: 'Для специй' },
          { id: 19, title: 'Банки / бутылки' },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Прихожая/Гардеробная',
    categories: [
      {
        id: 1,
        title: 'Посуда для сервировки',
        photo: p1,
        subcategories: [
          { id: 1, title: 'Тарелки / миски / блюда' },
          { id: 2, title: 'Стаканы / кружки / бокалы' },
          { id: 3, title: 'Столовые приборы' },
        ],
      },
      {
        id: 2,
        title: 'Посуда для готовки',
        photo: p2,
        subcategories: [
          { id: 4, title: 'Ножи и разделочные доски' },
          { id: 5, title: 'Кастрюли и сковороды' },
          { id: 6, title: 'Кухонные принадлежности' },
        ],
      },
      {
        id: 3,
        title: 'Мебель',
        photo: p3,
        subcategories: [
          { id: 7, title: 'Столы' },
          { id: 8, title: 'Стулья' },
          { id: 9, title: 'Кухонные шкафчики' },
          { id: 10, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 4,
        title: 'Текстиль для кухни4',
        photo: p4,
        subcategories: [
          { id: 11, title: 'Скатерти и салфетки' },
          { id: 12, title: 'Полотенца и прихватки' },
          { id: 13, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 5,
        title: 'Аксессуары для кухни',
        photo: p5,
        subcategories: [
          { id: 14, title: 'Сушилки для посуды' },
          { id: 15, title: 'Губки / щетки' },
        ],
      },
      {
        id: 6,
        title: 'Хранение на кухне',
        photo: p6,
        subcategories: [
          { id: 17, title: 'Контейнеры' },
          { id: 18, title: 'Для специй' },
          { id: 19, title: 'Банки / бутылки' },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Домашний офис',
    categories: [
      {
        id: 1,
        title: 'Посуда для сервировки',
        photo: p7,
        subcategories: [
          { id: 1, title: 'Тарелки / миски / блюда' },
          { id: 2, title: 'Стаканы / кружки / бокалы' },
          { id: 3, title: 'Столовые приборы' },
        ],
      },
      {
        id: 2,
        title: 'Посуда для готовки',
        photo: p8,
        subcategories: [
          { id: 4, title: 'Ножи и разделочные доски' },
          { id: 5, title: 'Кастрюли и сковороды' },
          { id: 6, title: 'Кухонные принадлежности' },
        ],
      },
      {
        id: 3,
        title: 'Мебель',
        photo: p9,
        subcategories: [
          { id: 7, title: 'Столы' },
          { id: 8, title: 'Стулья' },
          { id: 9, title: 'Кухонные шкафчики' },
          { id: 10, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 4,
        title: 'Текстиль для кухни',
        photo: p1,
        subcategories: [
          { id: 11, title: 'Скатерти и салфетки' },
          { id: 12, title: 'Полотенца и прихватки' },
          { id: 13, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 5,
        photo: p2,
        title: 'Аксессуары для кухни',
        subcategories: [
          { id: 14, title: 'Сушилки для посуды' },
          { id: 15, title: 'Губки / щетки' },
        ],
      },
      {
        id: 6,
        title: 'Хранение на кухне',
        photo: p3,
        subcategories: [
          { id: 17, title: 'Контейнеры' },
          { id: 18, title: 'Для специй' },
          { id: 19, title: 'Банки / бутылки' },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Детская комната',
    categories: [
      {
        id: 1,
        title: 'Посуда для сервировки',
        photo: p1,
        subcategories: [
          { id: 1, title: 'Тарелки / миски / блюда' },
          { id: 2, title: 'Стаканы / кружки / бокалы' },
          { id: 3, title: 'Столовые приборы' },
        ],
      },
      {
        id: 2,
        title: 'Посуда для готовки',
        photo: p2,
        subcategories: [
          { id: 4, title: 'Ножи и разделочные доски' },
          { id: 5, title: 'Кастрюли и сковороды' },
          { id: 6, title: 'Кухонные принадлежности' },
        ],
      },
      {
        id: 3,
        title: 'Мебел5ь',
        photo: p3,
        subcategories: [
          { id: 7, title: 'Столы' },
          { id: 8, title: 'Стулья' },
          { id: 9, title: 'Кухонные шкафчики' },
          { id: 10, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 4,
        title: 'Текстиль для кухни',
        photo: p4,
        subcategories: [
          { id: 11, title: 'Скатерти и салфетки' },
          { id: 12, title: 'Полотенца и прихватки' },
          { id: 13, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 5,
        title: 'Аксессуары для кухни',
        photo: p5,
        subcategories: [
          { id: 14, title: 'Сушилки для посуды' },
          { id: 15, title: 'Губки / щетки' },
        ],
      },
      {
        id: 6,
        title: 'Хранение на кухне',
        photo: p6,
        subcategories: [
          { id: 17, title: 'Контейнеры' },
          { id: 18, title: 'Для специй' },
          { id: 19, title: 'Банки / бутылки' },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Ванная комната',
    categories: [
      {
        id: 1,
        title: 'Посуда для сервировки',
        photo: p7,
        subcategories: [
          { id: 1, title: 'Тарелки / миски / блюда' },
          { id: 2, title: 'Стаканы / кружки / бокалы' },
          { id: 3, title: 'Столовые приборы' },
        ],
      },
      {
        id: 2,
        title: 'Посуда для готовки',
        photo: p8,
        subcategories: [
          { id: 4, title: 'Ножи и разделочные доски' },
          { id: 5, title: 'Кастрюли и сковороды' },
          { id: 6, title: 'Кухонные принадлежности' },
        ],
      },
      {
        id: 3,
        title: 'Мебель',
        photo: p9,
        subcategories: [
          { id: 7, title: 'Столы' },
          { id: 8, title: 'Стулья' },
          { id: 9, title: 'Кухонные шкафчики' },
          { id: 10, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 4,
        title: 'Текстиль для кухни',
        photo: p1,
        subcategories: [
          { id: 11, title: 'Скатерти и салфетки' },
          { id: 12, title: 'Полотенца и прихватки' },
          { id: 13, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 5,
        title: 'Аксессуары для кухни',
        photo: p2,
        subcategories: [
          { id: 14, title: 'Сушилки для посуды' },
          { id: 15, title: 'Губки / щетки' },
        ],
      },
      {
        id: 6,
        title: 'Хранение на кухне',
        photo: p3,
        subcategories: [
          { id: 17, title: 'Контейнеры' },
          { id: 18, title: 'Для специй' },
          { id: 19, title: 'Банки / бутылки' },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Декор для дома',
    categories: [
      {
        id: 1,
        title: 'Посуда для сервировки',
        photo: p4,
        subcategories: [
          { id: 1, title: 'Тарелки / миски / блюда' },
          { id: 2, title: 'Стаканы / кружки / бокалы' },
          { id: 3, title: 'Столовые приборы' },
        ],
      },
      {
        id: 2,
        title: 'Посуда для готовки',
        photo: p5,
        subcategories: [
          { id: 4, title: 'Ножи и разделочные доски' },
          { id: 5, title: 'Кастрюли и сковороды' },
          { id: 6, title: 'Кухонные принадлежности' },
        ],
      },
      {
        id: 3,
        title: 'Мебель',
        photo: p6,
        subcategories: [
          { id: 7, title: 'Столы' },
          { id: 8, title: 'Стулья' },
          { id: 9, title: 'Кухонные шкафчики' },
          { id: 10, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 4,
        title: 'Текстиль для кухни',
        photo: p7,
        subcategories: [
          { id: 11, title: 'Скатерти и салфетки' },
          { id: 12, title: 'Полотенца и прихватки' },
          { id: 13, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 5,
        title: 'Аксессуары для кухни',
        photo: p8,
        subcategories: [
          { id: 14, title: 'Сушилки для посуды' },
          { id: 15, title: 'Губки / щетки' },
        ],
      },
      {
        id: 6,
        title: 'Хранение на кухне',
        photo: p9,
        subcategories: [
          { id: 17, title: 'Контейнеры' },
          { id: 18, title: 'Для специй' },
          { id: 19, title: 'Банки / бутылки' },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Освещение',
    categories: [
      {
        id: 1,
        title: 'Посуда для сервировки',
        photo: p1,
        subcategories: [
          { id: 1, title: 'Тарелки / миски / блюда' },
          { id: 2, title: 'Стаканы / кружки / бокалы' },
          { id: 3, title: 'Столовые приборы' },
        ],
      },
      {
        id: 2,
        title: 'Посуда для готовки',
        photo: p3,
        subcategories: [
          { id: 4, title: 'Ножи и разделочные доски' },
          { id: 5, title: 'Кастрюли и сковороды' },
          { id: 6, title: 'Кухонные принадлежности' },
        ],
      },
      {
        id: 3,
        title: 'Мебель',
        photo: p4,
        subcategories: [
          { id: 7, title: 'Столы' },
          { id: 8, title: 'Стулья' },
          { id: 9, title: 'Кухонные шкафчики' },
          { id: 10, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 4,
        title: 'Текстиль для кухни',
        photo: p5,
        subcategories: [
          { id: 11, title: 'Скатерти и салфетки' },
          { id: 12, title: 'Полотенца и прихватки' },
          { id: 13, title: 'Подушки на стулья' },
        ],
      },
      {
        id: 5,
        title: 'Аксессуары для кухни',
        photo: p6,
        subcategories: [
          { id: 14, title: 'Сушилки для посуды' },
          { id: 15, title: 'Губки / щетки' },
        ],
      },
      {
        id: 6,
        title: 'Хранение на кухне',
        photo: p7,
        subcategories: [
          { id: 17, title: 'Контейнеры' },
          { id: 18, title: 'Для специй' },
          { id: 19, title: 'Банки / бутылки' },
        ],
      },
    ],
  },
];
export default data;
