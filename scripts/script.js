/* import kaif from './images/albums/kaif.jpg';
import attractiveForce from './images/albums/attractiveForce.jpeg';
import dance from './images/albums/dance.jpeg';
import kosilapka from './images/albums/kosilapka.jpeg';
import max from 'https://sun9-46.userapi.com/impg/rIxMETPnxm-ke8VQlWvwr8U5FAnSHXyCVHNlUg/uGW4yucGGrU.jpg?size=1077x1077&quality=96&sign=f047de6d5af5858aec0523c2da71d3ae&type=album';
import mashina from './images/albums/mashina.jpeg';
import mashinsa from './images/albums/'; */

// Находим нужные нам элементы:

let button = document.querySelector('.random-album__button');
let image = document.querySelector('.random-album__image');
let name = document.querySelector('.random-album__name');
let artist = document.querySelector('.random-album__artist');

// Наши альбомы здесь:

let albums = [
    {
        image: 'https://sun9-14.userapi.com/impg/bEag0Qe-CS3otHpbkVqrwNQMFn-Js2rnU3J2rg/ZAWEW7yIs3k.jpg?size=1643x1596&quality=96&sign=70e096ac1dd697057ce8b0f88c31be3b&type=album',
        name: 'кайфовый понедельник',
        artist: 'хокаге, гар, сёма'
    },
    {
        image: 'https://sun9-14.userapi.com/impg/r5-bypKH9be64d6H_qfT8CotbGGFyN6zMsWkPQ/tmhCzakZQic.jpg?size=2048x2048&quality=96&sign=9b55aabbd685cd6f9fb9695a5825042d&type=album',
        name: 'сила притяжения',
        artist: 'сёма'
    },
    {
        image: 'https://sun9-71.userapi.com/impg/rfbgB3bIHFexeID_fFTdb1EOadNGwmPXo4OpwQ/JAXaM_F8rio.jpg?size=1920x1911&quality=96&sign=d4a5c2b12a31558a916c27148c59681b&type=album',
        name: 'танцы',
        artist: 'сёма'
    },
    {
        image: 'https://sun9-61.userapi.com/impg/qrbLWa2GBzUsSjzexjD3LNrK9fFn35ItywRh8g/Ooz9ZPgzTHU.jpg?size=2160x2160&quality=96&sign=8cd8d6ce69bde87beb2e66c6b1009346&type=album',
        name: 'косилапка',
        artist: 'сёма'
    },
    {
        image: 'https://sun9-46.userapi.com/impg/rIxMETPnxm-ke8VQlWvwr8U5FAnSHXyCVHNlUg/uGW4yucGGrU.jpg?size=1077x1077&quality=96&sign=f047de6d5af5858aec0523c2da71d3ae&type=album',
        name: 'Ты всё равно вернёшься обратно',
        artist: 'Hokage'
    },
    {
        image: 'https://sun9-8.userapi.com/impg/WokhwNLrQQNho2mudiwEfUe8LPCFJnkpduT0gg/0_2RKFVEJnA.jpg?size=737x738&quality=96&sign=366ba4abf1b4abbf4981982195caf518&type=album',
        name: 'ну мне завтра с машиной сидеть',
        artist: 'Hokage feat. сёма'
    }
];

// Функция для рандомного поиска альбома или сингла:

function getRandomAlbum(album) {
    let randomAlbum = Math.floor(Math.random() * album.length);
    return album[randomAlbum];
}

// Слушатель события на кнопке, который при нажатии рандомно выбирает альбом или сингл для пользователя:

button.addEventListener('click', function () {
    let randomElement = getRandomAlbum(albums);
/*  image.src = randomElement.image;
    name.textContent = randomElement.name;
    artist.textContent = randomElement.artist; */
    smoothly(image, 'src', randomElement.image);
    smoothly(name, 'textContent', randomElement.name);
    smoothly(artist, 'textContent', randomElement.artist);
})

