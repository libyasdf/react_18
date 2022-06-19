import { startTransition, useTransition }from 'react';


const [isPending, startTransition] = useTransition();

// throttle and react-virtualized
// 渲染的优先级
// 将不那么重要的渲染放到startTransition中
// fetch as you render
// conCurrent Mode
// automatic batching
// suspense
