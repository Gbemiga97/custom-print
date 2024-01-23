import images from "./images"



const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'product',
        path: 'product'
    },
    {
        name: 'about',
        path: 'about'
    },
    {
        name: 'contact',
        path: 'contact'
    },
    {
        name: 'account',
        path: 'account'
    },
]


const socials = [
    {
        name: 'facebook',
        link: '/'
    },
    {
        name: 'pinterest',
        link: '/'
    },
    {
        name: 'instagram',
        link: '/'
    },
    {
        name: 'twitter',
        link: '/'
    },
    {
        name: 'youtube',
        link: '/'
    },
]






const customProducts = [
    {
        img: images.Pillow,
        name: 'Pillow',
        items: '3'
    },
    {
        img: images.SchoolBag,
        name: 'School Bag',
        items: '4'
    },
    {
        img: images.BottleCap,
        name: 'Bottle Cap',
        items: '6'
    },
    {
        img: images.Book,
        name: 'Book',
        items: '7'
    },
    {
        img: images.Pouch,
        name: 'Decoration',
        items: '6'
    },
]




const data = {
    links,
    socials,
    customProducts
}


export default data