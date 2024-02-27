<template>
 <component :is="componentsToRender[rendredCompo]"></component>
</template>

<script>
import Greeting from '../components/Steps/Greeting.vue';
import Requirments from '../components/Steps/Requirments.vue';
import Step1 from '../components/Steps/Step1.vue';
import Step2 from '../components/Steps/Step2.vue';
import Step3 from '../components/Steps/Step3.vue';
import Step4 from '../components/Steps/Step4.vue';
import Step5 from '../components/Steps/Step5.vue';
import Step6 from '../components/Steps/Step6.vue';
import Step7 from '../components/Steps/Step7.vue';
import Step8 from '../components/Steps/Step8.vue';
import Step9 from '../components/Steps/Step9.vue';
import Step10 from '../components/Steps/Step10.vue';
import Step11 from '../components/Steps/Step11.vue';
import Step12 from '../components/Steps/Step12.vue';
import Step13 from '../components/Steps/Step13.vue';
import Step14 from '../components/Steps/Step14.vue';
import Step15 from '../components/Steps/Step15.vue';
import Step16 from '../components/Steps/Step16.vue';
import Step17 from '../components/Steps/Step17.vue';
import Step18 from '../components/Steps/Step18.vue';
import Step19 from '../components/Steps/Step19.vue';
import Step20 from '../components/Steps/Step20.vue';
import Step21 from '../components/Steps/Step21.vue';

/*scripts*/
import {rendredCompo,compoentToBeRender} from "../scripts/functional_quiz/renderCompos"


export default {
name:"QuizAndAnswer",
components:{Greeting,Requirments,Step1,Step2,Step3,Step4,Step5,Step6,Step7,Step8,Step9,Step10,Step11,Step12,Step13,Step14,Step15,Step16,Step17,Step18,Step19,Step20,Step21},
setup(){
    const componentsToRender = [
  'Greeting',
  'Requirments',
  'Step1',
  'Step2',
  'Step3',
  'Step4',
  'Step5',
  'Step6',
  'Step7',
  'Step8',
  'Step9',
  'Step10',
  'Step11',
  'Step12',
  'Step13',
  'Step14',
  'Step15',
  'Step16',
  'Step17',
  'Step18',
  'Step19',
  'Step20',
  'Step21'
];

    return {
  componentsToRender,
  rendredCompo,
  compoentToBeRender
    }
}
}
</script>

<style>

</style>