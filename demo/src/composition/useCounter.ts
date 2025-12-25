import { ref } from "vue";

export const useCounter = () => {
  const count = ref(0);
  const add = () => {
    count.value++;
  };
  const update = (value: number) => {
    count.value = value;
  };
  return {
    count,
    add,
    update,
  };
};
