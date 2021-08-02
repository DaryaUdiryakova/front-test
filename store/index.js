
export const state = () => ({
  products: [],
  cart: [], 
  // cart: JSON.parse(localStorage.getItem("cartState")) || [],
  sortParam: "",
  category: [],
})

export const actions = {

  async fetchProduct({commit}) {
    let products = await fetch(
      "https://frontend-test.idaproject.com/api/product"
    ).then((res) => res.json());
    commit('setProducts', products)
  },

  async fetchCategory({commit}) {
    let category = await fetch(
      "https://frontend-test.idaproject.com/api/product-category"
    ).then((res) => res.json());
    commit('setCategory', category)
  },

  addToCart({ commit }, product) {
    commit('addedProduct', product)
  },

  deleteFromCart({ commit }, index) {
    commit('deleteProduct', index)
  },

  clearCart({ commit }) {
    commit('clearCart')
  }

}


export const mutations = {

  setProducts(state, products) {
    state.products = products;
  },

  setCategory(state, category) {
    state.category = category;
  },

  clearCart(state) {
    state.cart = [];
  },

  addedProduct(state, product) {
    if (state.cart.length) {
      let containsProductBoolean = false;
      state.cart.map(function (item) {    
        if (item.id === product.id) {
          containsProductBoolean = true;
          document.getElementById(`${product.id}`).style.fill = '#1f1f1f';
        }
      })  
      if (!containsProductBoolean) {
        state.cart.push(product);
        document.getElementById(`${product.id}`).style.fill = '#1f1f1f';
        document.getElementById(`${product.id}`).classList.add('animate-cart');
      }
    } else {
      state.cart.push(product);
      document.getElementById(`${product.id}`).style.fill = '#1f1f1f';
      document.getElementById(`${product.id}`).classList.add('animate-cart');
    }
    // this.commit('storeCart');
    // localStorage.setItem('cartState', JSON.stringify(state.cart));
  },
 

  deleteProduct(state, index) {
    state.cart.splice(index, 1);
  },

  toogleSortParam (state, payload) {
    state.sortParam = payload;
  },

  // storeCart(state) {
  //   localStorage.setItem('cartState', JSON.stringify(state.cart));
  // }

}


export const getters = {

  isCategory: state => category => {
    return state.products.filter(product => product.category === category);
  },
  
  sortCategory: state => prod => {
    if (state.sortParam == "price") {
      return prod.sort((d1, d2)=>d1.price > d2.price ? 1 : -1);
    }
    else if (state.sortParam == "rating") {
      return prod.sort((d1, d2)=>d1.rating < d2.rating ? 1 : -1);
    } 
      return prod;
  },

  funcTransformPrice: state => num => {
    let revers = num.toString().split("").reverse().join("");
    let textModif = revers
      .match(/.{1,3}/g)
      .join(" ")
      .split("")
      .reverse()
      .join("");
    Number(textModif);
    return textModif;
  },

  funcTransformName: state => text => {
    return text
      .toLowerCase()
      .split(/\s+/)
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
  },
  
  
}
