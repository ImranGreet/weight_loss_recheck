import {ref} from "vue"

const browsedCompos = ref([]);

let rendredCompo = ref(0);
const validationError = ref([]);

const compoentToBeRender = function (compoNumber) {
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