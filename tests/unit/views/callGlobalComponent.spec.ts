import { expect } from 'chai'
import sinon from 'sinon';
import { shallowMount } from '@vue/test-utils'
import callGlobalComponentsTest from '@/views/references/CallGlobalComponent.vue'
import globalComponentsTest from '@/components/GlobalComponentsTest.vue'

describe('global components test', () => {
  it('test', () => {

    const wrapper = shallowMount(callGlobalComponentsTest, {
      //加入全局組件的參考
      components: {
        //在 main.ts 中的全局組件的名字
        'globalComponentsTest': sinon.stub()

        // 也可以真實帶入，不透過 sinon
        // 'globalComponentsTest': globalComponentsTest
      }
    })

    console.log(wrapper.html())
    expect(wrapper.html()).contain("hello")
  })
})
