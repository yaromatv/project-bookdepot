import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../css/components/pagination.css';

let visiblePages = 2;
let itemsPerPage = 7;
if (window.innerWidth >= 768) {
  visiblePages = 3;
  itemsPerPage = 8;
}
const option = {
  totalItems: 500,
  itemsPerPage,
  visiblePages,
};

const box = document.querySelector('.tui-pagination');

const pagination = new Pagination(box, option);
// pagination.on('afterMove', function (eventData) {
//   alert('The current page is ' + eventData.page);
// });
