import { discussion } from './discussion';

export const boards = [
  {
    id: 1,
    title: 'Board 1',
    slug: 'board-1',
    author: {
      username: 'rishabh'
    },
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nobis magnam voluptates eaque minus officia, debitis iste nostrum itaque? Deserunt error dolor recusandae, vitae asperiores obcaecati culpa placeat fugit labore?',
    discussions: [discussion]
  }
];

export const board = boards[0];
