import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from "vue-router";
import Register from "../../src/components/signup";
let wrapper;
describe('My Test Suite', () => {
    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter()
        wrapper = shallowMount(signup, {
            localVue,
            router,
            stubs: ['router-link']
        })
    })
    it('My Test Case', () => {
        const submit = jest.fn()
        wrapper.setMethods({submit: submit})
        wrapper.find('.register').trigger('click')
        expect(wrapper.vm.submit).toHaveBeenCalled()
    })
})
