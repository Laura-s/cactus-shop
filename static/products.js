function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

const CACTI = 'cacti'
const PLANT = 'plant'
const SUCCULENT = 'succulent'

const products = [
    {
        nume: 'cacti',
        price: 10,
        image: 'https://static.wixstatic.com/media/697bc8_1a4fc29505ca44b7b3742e2e0ab5fda3~mv2_d_1920_1920_s_2.jpg/v1/fill/w_523,h_523,al_c,q_80,usm_0.66_1.00_0.01/697bc8_1a4fc29505ca44b7b3742e2e0ab5fda3~mv2_d_1920_1920_s_2.webp',
        id: uuidv4(),
        category: CACTI
 },
    {
        nume: 'floare',
        price: 20,
        image: 'https://static.wixstatic.com/media/697bc8_2ef1d2306d8f4b8baa17d719b201a217~mv2_d_1920_1920_s_2.jpg/v1/fill/w_523,h_523,al_c,q_80,usm_0.66_1.00_0.01/697bc8_2ef1d2306d8f4b8baa17d719b201a217~mv2_d_1920_1920_s_2.webp',
        id: uuidv4(),
        category: PLANT
 },
    {
        nume: 'cactus pufos',
        price: 15,
        image: 'https://static.wixstatic.com/media/697bc8_6f3d592233ca487d9bf3c3f12c5a30b3~mv2_d_1920_1920_s_2.jpg/v1/fill/w_523,h_523,al_c,q_80,usm_0.66_1.00_0.01/697bc8_6f3d592233ca487d9bf3c3f12c5a30b3~mv2_d_1920_1920_s_2.webp',
        id: uuidv4(),
        category: CACTI
    },
    {
        nume: 'frunze',
        price: 30,
        image: 'https://static.wixstatic.com/media/697bc8_71c164891c634fb7862f60a22a2a90f9~mv2_d_1920_1920_s_2.jpg/v1/fill/w_523,h_523,al_c,q_80,usm_0.66_1.00_0.01/697bc8_71c164891c634fb7862f60a22a2a90f9~mv2_d_1920_1920_s_2.webp',
        id: uuidv4(),
        category: PLANT
 },
    {
        nume: 'Succulent',
        price: 5,
        image: 'https://static.wixstatic.com/media/697bc8_efd712ec74e34e95bd769f4c874c8d3b~mv2_d_1920_1920_s_2.jpg/v1/fill/w_523,h_523,al_c,q_80,usm_0.66_1.00_0.01/697bc8_efd712ec74e34e95bd769f4c874c8d3b~mv2_d_1920_1920_s_2.webp',
        id: uuidv4(),
        category: SUCCULENT
 },
    {
        nume: 'Opuntia',
        price: 10,
        image: 'https://static.wixstatic.com/media/697bc8_1a4fc29505ca44b7b3742e2e0ab5fda3~mv2_d_1920_1920_s_2.jpg/v1/fill/w_523,h_523,al_c,q_80,usm_0.66_1.00_0.01/697bc8_1a4fc29505ca44b7b3742e2e0ab5fda3~mv2_d_1920_1920_s_2.webp',
        id: uuidv4(),
        category: CACTI
 },{
        nume: 'Plant',
        price: 50,
        image: 'https://static.wixstatic.com/media/697bc8_b121361914294c29894ef785e6ac9603~mv2_d_1920_1920_s_2.jpg/v1/fill/w_523,h_523,al_c,q_80,usm_0.66_1.00_0.01/697bc8_b121361914294c29894ef785e6ac9603~mv2_d_1920_1920_s_2.webp',
        id: uuidv4(),
        category: PLANT
 },
    {
        nume: 'aloe vera',
        price: 10,
        image: 'https://static.wixstatic.com/media/697bc8_0e2a1a1dc17847f59ff65e5622f7f77d~mv2_d_1920_1920_s_2.jpg/v1/fill/w_523,h_523,al_c,q_80,usm_0.66_1.00_0.01/697bc8_0e2a1a1dc17847f59ff65e5622f7f77d~mv2_d_1920_1920_s_2.webp',
        id: uuidv4(),
        category: SUCCULENT
    },
]

export {
    products
}