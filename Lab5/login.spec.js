import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import VueRouter from "vue-router";
import login from "../../src/components/login";
let wrapper;
describe('login test', () => {
    let actions
    let store
    beforeEach(() => {
        const localVue = createLocalVue()
        const router = new VueRouter()
        localVue.use(Vuex)
        localVue.use(VueRouter)
        actions = {
            obtainToken: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
        wrapper = shallowMount(login, {
            store,
            localVue,
            router,
            stubs: ['router-link']
        })
    })
    it('Check for empty field error message', () => {
        wrapper.find('.login').trigger('click')
        expect(wrapper.vm.$data.error_message).toBe('Fill all fields!')
    })
    it('Check for login call', () => {
        wrapper.setData({username: 'test', password: 'test'})
        wrapper.find('.login').trigger('click')
        expect(actions.obtainToken).toHaveBeenCalled()
    })
})

