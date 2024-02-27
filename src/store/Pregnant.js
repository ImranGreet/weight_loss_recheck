import { defineStore } from "pinia";
import { ref } from "vue";

export const usePregnantWomenReport = defineStore("pregnancy",()=>{
    const pregnacnyOrHaveChild = ref(null);
    const decision = ref(null);
    const toggleSelectStates = function(option){
        pregnacnyOrHaveChild.value = option
    }
const handleDecision = (option)=>{
    decision.value = option
}
    return {
        pregnacnyOrHaveChild,
        decision,
        toggleSelectStates,
        handleDecision,
    }
});