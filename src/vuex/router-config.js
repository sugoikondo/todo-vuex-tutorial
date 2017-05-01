import Category from '../components/Category.vue';
import Todo from '../components/Todo/Todo.vue';

export const routes = [
  // エイリアスを設定し、ルートならばカテゴリ一覧に飛ばすように
  {
    path: '/categories',
    alias: '/',
    component: Category,
  },
  {
    path: '/categories/:id',
    component: Todo,
    children: [{
      path: 'todos',
      component: Todo,
    }]
  }
];
