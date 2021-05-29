export default {
    saveUserName(context, userName) {
        context.commit('saveUserName', userName);
    },
    saveCartCount(context, cartCount) {
        context.commit('saveCartCount', cartCount);
    }
}