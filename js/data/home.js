const { createApp, reactive, toRefs, ref, onMounted } = Vue;

const app = createApp({
    setup() {
        const state = reactive({
            swiperList: [], // 轮播图列表
            isLogin: false, // 是否已登录
            recommends: [],
            loading: true
        })
        onMounted(() => {
            const token = getLocal('token')
            if (token) {
                state.isLogin = true
                // 获取购物车数据.
                // cart.updateCart()
            }
            /*showLoadingToast({
                message: '加载中...',
                forbidClick: true
            });*/
            axios.get('/index-infos').then(response => {
                state.swiperList = response.data.carousels;
                state.recommends = response.data.recommendGoodses;
            })
            // const { data } = await getHome()
            // state.swiperList = data.carousels
            /*state.newGoodses = data.newGoodses
            state.hots = data.hotGoodses*/
            // state.recommends = data.recommendGoodses
            // state.loading = false
            // closeToast()
        })

        /*function initHome(){
            axios.get('/index-infos').then(response => {
                state.swiperList = response.data.carousels;
                state.recommends = response.data.recommendGoodses;
            })
        }*/

        const btn1 = () => {
            console.log(state)

        }
        return {
            ...toRefs(state),
            btn1
        }
    }
});
app.mount("#main_content");