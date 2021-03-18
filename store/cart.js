import { products } from '../static/products.js'



// console.log("\x1b[32m", 'cat', products)
export const state = () => ({
    counter: 10,
    products,
    cartItems: []
})

export const mutations = {
    increment: (state, payload) => {
        const foundProduct = state.cartItems.find(item => item.id === payload.id)
        if (foundProduct) {
            foundProduct.quantity = foundProduct.quantity + 1
        }
    },
    decrement: (state, payload) => {
        const foundProduct = state.cartItems.find(item => item.id === payload.id)
        if (foundProduct && foundProduct.quantity > 1) {
            foundProduct.quantity = foundProduct.quantity - 1
        }
    },

    remove: (state, payload) => {
        const foundIndex = state.cartItems.findIndex(item => item.id === payload.id)
        if (foundIndex !== -1) {
            state.cartItems.splice(foundIndex, 1)
        }
    },
    addToCart: (state, payload) => {
        // daca exista product in arrey
        const foundProduct = state.cartItems.find(item => item.id === payload.id)
        // console.log('gasit', foundProduct)
        if (foundProduct) {
            // already in cart
            foundProduct.quantity = foundProduct.quantity + 1
        } else {
            // not in cart
            state.cartItems.push(payload)
        }

    }

}

export const getters = {
    cacti: state => {
        return state.products.filter(product => product.category === 'cacti')
    },
    plant: state => {
        return state.products.filter(product => product.category === 'plant')
    },
    total(state) {
        let totalPrice = 0;
        state.cartItems.forEach((element) => {
            totalPrice = totalPrice + (element.price * element.quantity);
        });
        return totalPrice;
    },
    
}