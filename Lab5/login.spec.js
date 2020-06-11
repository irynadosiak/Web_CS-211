import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import VueRouter from "vue-router";
import login from "../../src/components/login";
let wrapper;
describe('My Test Suite', () => {
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
    it('My Test Case', () => {
        wrapper.find('.login').trigger('click')
        expect(wrapper.vm.$data.error_message).toBe('Fill all fields!')
    })
})

