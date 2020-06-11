import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from "vue-router";
import Register from "../../src/components/Signuo";

let wrapper;
describe('Signup test', () => {
    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter()

        wrapper = shallowMount(Signup, {
            localVue,
            router,
            stubs: ['router-link']
        })
    })


    it('Check for submit call', () => {
        const submit = jest.fn()
        wrapper.setMethods({submit: submit})
        wrapper.find('.register').trigger('click')
        expect(wrapper.vm.submit).toHaveBeenCalled()
    })
})
