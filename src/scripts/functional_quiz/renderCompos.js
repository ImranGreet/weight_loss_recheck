import {ref} from "vue"

let rendredCompo = ref(0);
const validationError = ref([]);

const compoentToBeRender = function (compoNumber) {
    rendredCompo.value =compoNumber
    return rendredCompo;
}

export {rendredCompo,validationError,compoentToBeRender}