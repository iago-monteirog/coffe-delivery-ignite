import expresso from '../../assets/expresso.png';
import americano from '../../assets/expresso-americano.png';
import cremoso from '../../assets/expresso-cremoso.png';
import gelado from '../../assets/expresso-gelado.png';
import cafeLeite from '../../assets/cafe-leite.png';
import latte from '../../assets/latte.png';
import capuccino from '../../assets/capuccino.png';
import macchiato from '../../assets/macchiato.png';
import mocaccino from '../../assets/mocaccino.png';
import chocolate from '../../assets/chocolate-quente.png';
import cubano from '../../assets/cubano.png';
import havaiano from '../../assets/havaiano.png';
import arabe from '../../assets/arabe.png';
import irlandes from '../../assets/irlandes.png';


const coffeeMenu = [
    {   
        id: 1,
        name: 'Expresso Tradicional',
        img: expresso,
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        tags: [
            'Tradicional'
        ],
    },
    {
        id: 2,
        name: 'Expresso Americano',
        img: americano,
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        tags: [
            'Tradicional'
        ],
    },
    {
        id: 3,
        name: 'Expresso Cremoso',
        img: cremoso,
        description: 'Café expresso tradicional com espuma cremosa',
        price: 10.2,
        tags: [
            'Tradicional'
        ],
    },
    {
        id: 4,
        name: 'Expresso Gelado',
        img: gelado,
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 10.2,
        tags: [
            'Tradicional',
            'Gelado'
        ],
    },
    {
        id: 5,
        name: 'Café com Leite',
        img: cafeLeite,
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 10.9,
        tags: [
            'Tradicional',
            'Com leite'
        ],
    },
    {
        id: 6,
        name: 'Latte',
        img: latte,
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 11.5,
        tags: [
            'Tradicional',
            'Com leite'
        ],
    },
    {
        id: 7,
        name: 'Capuccino',
        img: capuccino,
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 11.5,
        tags: [
            'Tradicional',
            'Com leite'
        ],
    },
    {
        id: 8,
        name: 'Macchiato',
        img: macchiato,
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 11.5,
        tags: [
            'Tradicional',
            'Com leite'
        ],
    },
    {
        id: 9,
        name: 'Mocaccino',
        img: mocaccino,
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 12.9,
        tags: [
            'Tradicional',
            'Com leite'
        ],
    },
    {
        id: 10,
        name: 'Chocolate Quente',
        img: chocolate,
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 15.5,
        tags: [
            'Especial',
            'Com leite'
        ],
    },
    {
        id: 11,
        name: 'Cubano',
        img: cubano,
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 16.2,
        tags: [
            'Especial',
            'Alcoólico',
            'Gelado'
        ],
    },
    {
        id: 12,
        name: 'Havaiano',
        img: havaiano,
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 16.2,
        tags: [
            'Especial'
        ],
    },
    {
        id: 13,
        name: 'Árabe',
        img: arabe,
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 19.9,
        tags: [
            'Especial'
        ],
    },
    {
        id: 14,
        name: 'Irlandês',
        img: irlandes,
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 19.9,
        tags: [
            'Especial',
            'Alcoólico'
        ],
    },
];

export default coffeeMenu;