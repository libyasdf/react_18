import { useTransition, useDeferredValue }from 'react';


const [isPending, startTransition] = useTransition();

// throttle and react-virtualized
// 渲染的优先级
// 将不那么重要的渲染放到startTransition中
// fetch as you render
// conCurrent Mode
// automatic batching
// suspense

// 慢速渲染通道（渲染优先级比较低）
// + useTransition （对更新。。。）输入的卡顿感降低
// + useDeferredValue （对结果。。。）
// + 缺点：性能损耗（非大数据则不用，两者选一，能useTransition则用它）
// + 