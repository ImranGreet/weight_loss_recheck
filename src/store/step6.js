import { defineStore } from "pinia";
import { ref } from "vue";

export const usePregnantWomenReport = defineStore("pregnancy",()=>{
    const pregnacnyOrHaveChild = ref(null);
    const decision = ref(null);
    const showError = ref(false);
    const toggleSelectStates = function(option){
        pregnacnyOrHaveChild.value = option
    }
const handleDecision = (option)=>{
    decision.value = option
    if(showError.value ===true){
        showError.value =false
    }
}

    return {
        pregnacnyOrHaveChild,
        decision,
        toggleSelectStates,
        handleDecision,
        showError
    }
});