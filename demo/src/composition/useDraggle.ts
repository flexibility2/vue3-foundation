import { onMounted, ref } from "vue";

export const useDraggle = () => {
  const dragDom = ref<HTMLDivElement | null>(null);
  const x = ref(0);
  const y = ref(0);
  const style = ref(
    `position: absolute; left: ${x.value}px; top: ${y.value}px; cursor: move;`
  );
  onMounted(() => {
    if (dragDom.value) {
      // 处理拖拽逻辑
      dragDom.value.onmousedown = (e: MouseEvent) => {
        const startX = e.clientX - x.value;
        const startY = e.clientY - y.value;

        const onMouseMove = (e: MouseEvent) => {
          x.value = e.clientX - startX;
          y.value = e.clientY - startY;
          style.value = `position: absolute; left: ${x.value}px; top: ${y.value}px; cursor: move;`;
        };

        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      };
    }
  });
  return {
    dragDom,
    x,
    y,
    style,
  };
};
