import {ref} from "vue"

const browsedCompos = ref([]);


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
    'Step21',
    "Assesment",
    "PersonalInformation",
    "SubmitDocs",
    "Preview",
    "ThankYou"
  ];

let rendredCompo = ref(0);
const validationError = ref([]);

const compoentToBeRender = function (compoName) {
   let compoNumber = componentsToRender.indexOf(compoName);
    rendredCompo.value =compoNumber;
    browsedCompos.value.push(compoNumber);
    browsedCompos.value = [...new Set(browsedCompos.value)];
    return rendredCompo;
}
const gotoPreviusPage = function(){
    const moveToComponent = browsedCompos.value.pop();
    rendredCompo.value = moveToComponent
    return rendredCompo;
}
export {rendredCompo,validationError,compoentToBeRender,gotoPreviusPage}