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
        nomeCafe: 'Expresso Tradicional',
        img: expresso,
        descricao: 'O tradicional café feito com água quente e grãos moídos',
        preco: '9,90',
        tags: [
            'Tradicional'
        ],
    },
    {
        id: 2,
        nomeCafe: 'Expresso Americano',
        img: americano,
        descricao: 'Expresso diluído, menos intenso que o tradicional',
        preco: '9,90',
        tags: [
            'Tradicional'
        ],
    },
    {
        id: 3,
        nomeCafe: 'Expresso Cremoso',
        img: cremoso,
        descricao: 'Café expresso tradicional com espuma cremosa',
        preco: '10,20',
        tags: [
            'Tradicional'
        ],
    },
    {
        id: 4,
        nomeCafe: 'Expresso Gelado',
        img: gelado,
        descricao: 'Bebida preparada com café expresso e cubos de gelo',
        preco: '10,20',
        tags: [
            'Tradicional',
            'Gelado'
        ],
    },
    {
        id: 5,
        nomeCafe: 'Café com Leite',
        img: cafeLeite,
        descricao: 'Meio a meio de expresso tradicional com leite vaporizado',
        preco: '10,90',
        tags: [
            'Tradicional',
            'Com leite'
        ],
    },
    {
        id: 6,
        nomeCafe: 'Latte',
        img: latte,
        descricao: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        preco: '11,50',
        tags: [
            'Tradicional',
            'Com leite'
        ],
    },
    {
        id: 7,
        nomeCafe: 'Capuccino',
        img: capuccino,
        descricao: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        preco: '11,50',
        tags: [
            'Tradicional',
            'Com leite'
        ],
    },
    {
        id: 8,
        nomeCafe: 'Macchiato',
        img: macchiato,
        descricao: 'Café expresso misturado com um pouco de leite quente e espuma',
        preco: '11,50',
        tags: [
            'Tradicional',
            'Com leite'
        ],
    },
    {
        id: 9,
        nomeCafe: 'Mocaccino',
        img: mocaccino,
        descricao: 'Café expresso com calda de chocolate, pouco leite e espuma',
        preco: '12,90',
        tags: [
            'Tradicional',
            'Com leite'
        ],
    },
    {
        id: 10,
        nomeCafe: 'Chocolate Quente',
        img: chocolate,
        descricao: 'Bebida feita com chocolate dissolvido no leite quente e café',
        preco: '15,50',
        tags: [
            'Especial',
            'Com leite'
        ],
    },
    {
        id: 11,
        nomeCafe: 'Cubano',
        img: cubano,
        descricao: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        preco: '16,20',
        tags: [
            'Especial',
            'Alcoólico',
            'Gelado'
        ],
    },
    {
        id: 12,
        nomeCafe: 'Havaiano',
        img: havaiano,
        descricao: 'Bebida adocicada preparada com café e leite de coco',
        preco: '16,20',
        tags: [
            'Especial'
        ],
    },
    {
        id: 13,
        nomeCafe: 'Árabe',
        img: arabe,
        descricao: 'Bebida preparada com grãos de café árabe e especiarias',
        preco: '19,90',
        tags: [
            'Especial'
        ],
    },
    {
        id: 14,
        nomeCafe: 'Irlandês',
        img: irlandes,
        descricao: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        preco: '19,90',
        tags: [
            'Especial',
            'Alcoólico'
        ],
    },
];

export default coffeeMenu;