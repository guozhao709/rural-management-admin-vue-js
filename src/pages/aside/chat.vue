<template>
    <div class="container">
        <header class="chat-header">
            <div>总消息数：{{}}</div>
            <div>未处理：{{}}</div>
            <div>已处理：{{}}</div>
        </header>
        <div class="chat-container">
            <aside class="chat-aside">
                侧栏
            </aside>
            <main class="chat-main">
                聊天窗口
            </main>
        </div>
    </div>

</template>

<script setup>



</script>

<style scoped lang="scss">
.container {
    display: flex;
    border: 1px solid #ccc; // 便于观察布局
    flex-direction: column;
    height: 100%;

    .chat-header {
        // height: 60px;
        flex: 1;
        background-color: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 200px;
        border-bottom: 1px solid #ccc; // 便于观察布局
    }

    .chat-container {
        display: flex;
        flex: 9;

        .chat-aside {
            width: 200px;
            background-color: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid #ccc; // 便于观察布局
        }

        .chat-main {
            flex: 1;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: auto; 
        }
    }
}
</style>