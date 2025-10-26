<template>
  <div class="ai-companion">
    <el-card class="chat-container">
      <template #header>
        <div class="card-header">
          <span>AI 学伴问答</span>
        </div>
      </template>
      
      <div class="chat-layout">
        <!-- 聊天历史区 -->
        <div class="chat-history">
          <div class="message-list">
            <div 
              v-for="(message, index) in mockMessages" 
              :key="index"
              :class="['message', message.type]"
            >
              <div class="message-content">
                {{ message.content }}
              </div>
              <div class="message-time">
                {{ message.time }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- 输入区 -->
        <div class="chat-input">
          <div class="input-area">
            <el-input
              v-model="inputMessage"
              type="textarea"
              :rows="3"
              placeholder="请输入您的问题..."
              class="message-input"
            />
            <el-button 
              type="primary" 
              @click="sendMessage"
              :disabled="!inputMessage.trim()"
              class="send-button"
            >
              发送
            </el-button>
          </div>
        </div>
      </div>
      
      <div class="mock-placeholder">
        [Mock Placeholder] ChatBubble.vue 组件将在此处展示对话气泡。
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputMessage = ref('')

const mockMessages = ref([
  {
    type: 'user',
    content: '你好，我想了解一下机器学习的基本概念',
    time: '10:30'
  },
  {
    type: 'ai',
    content: '你好！机器学习是人工智能的一个重要分支，它让计算机能够从数据中学习模式，而无需明确编程。主要包括监督学习、无监督学习和强化学习三大类。',
    time: '10:31'
  },
  {
    type: 'user',
    content: '能详细解释一下监督学习吗？',
    time: '10:32'
  },
  {
    type: 'ai',
    content: '监督学习使用标记的训练数据来学习输入和输出之间的映射关系。常见算法包括线性回归、决策树、支持向量机等。它适用于分类和回归问题。',
    time: '10:33'
  }
])

const sendMessage = () => {
  if (inputMessage.value.trim()) {
    // 这里可以添加发送消息的逻辑
    console.log('发送消息:', inputMessage.value)
    inputMessage.value = ''
  }
}
</script>

<style scoped>
.ai-companion {
  padding: 0;
  height: calc(100vh - 120px);
  max-width: 1400px;
  margin: 0 auto;
}

.chat-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-layout {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 500px;
}

.chat-history {
  flex: 1;
  overflow-y: auto;
  border: 1px solid #e4e7ed;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  background: linear-gradient(to bottom, #ffffff 0%, #f5f7fa 100%);
}

/* 自定义滚动条 */
.chat-history::-webkit-scrollbar {
  width: 8px;
}

.chat-history::-webkit-scrollbar-track {
  background: #f0f0f0;
}

.chat-history::-webkit-scrollbar-thumb {
  background: #c0c0c0;
  border-radius: 4px;
}

.chat-history::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0;
}

.message-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.message {
  max-width: 70%;
}

.message.user {
  align-self: flex-end;
}

.message.ai {
  align-self: flex-start;
}

.message-content {
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.message.user .message-content {
  background-color: #409eff;
  color: white;
}

.message.ai .message-content {
  background-color: white;
  color: #303133;
  border: 1px solid #e4e7ed;
}

.message-time {
  font-size: 12px;
  color: #909399;
  margin-top: 5px;
  text-align: right;
}

.message.ai .message-time {
  text-align: left;
}

.chat-input {
  border-top: 1px solid #e4e7ed;
  padding-top: 20px;
}

.input-area {
  display: flex;
  gap: 10px;
  align-items: flex-end;
}

.message-input {
  flex: 1;
}

.send-button {
  height: 40px;
}

.mock-placeholder {
  margin-top: 20px;
  padding: 15px;
  background-color: #f0f9ff;
  border: 1px dashed #409eff;
  border-radius: 8px;
  color: #409eff;
  text-align: center;
  font-size: 14px;
}
</style>
