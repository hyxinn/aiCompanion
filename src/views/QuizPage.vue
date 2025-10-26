<template>
  <div class="quiz-page">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>学习诊断：在线测验</span>
        </div>
      </template>
      
      <el-form :model="quizForm" label-width="100px">
        <div v-for="(question, index) in mockQuestions" :key="index" class="question-item">
          <el-card class="question-card">
            <template #header>
              <span>题目 {{ index + 1 }}</span>
            </template>
            
            <div class="question-content">
              <p class="question-text">{{ question.text }}</p>
              
              <el-radio-group v-model="quizForm.answers[index]">
                <el-radio 
                  v-for="(option, optionIndex) in question.options" 
                  :key="optionIndex"
                  :label="optionIndex"
                  class="option-item"
                >
                  {{ option }}
                </el-radio>
              </el-radio-group>
            </div>
          </el-card>
        </div>
        
        <div class="submit-section">
          <el-button 
            type="primary" 
            size="large"
            @click="submitQuiz"
          >
            提交测验并获取评估
          </el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const quizForm = reactive({
  answers: []
})

const mockQuestions = ref([
  {
    text: '[Mock 题号] 哪个知识点最能描述 RAG 的作用？',
    options: [
      'A. 检索增强生成，结合检索和生成技术',
      'B. 强化学习算法的一种变体',
      'C. 深度学习中的正则化技术',
      'D. 自然语言处理中的分词方法'
    ]
  },
  {
    text: '[Mock 题号] 在机器学习中，过拟合的主要表现是什么？',
    options: [
      'A. 训练集和测试集性能都很差',
      'B. 训练集性能好，测试集性能差',
      'C. 训练集和测试集性能都很好',
      'D. 训练集性能差，测试集性能好'
    ]
  },
  {
    text: '[Mock 题号] Transformer 模型的核心机制是什么？',
    options: [
      'A. 卷积神经网络',
      'B. 循环神经网络',
      'C. 注意力机制',
      'D. 反向传播算法'
    ]
  },
  {
    text: '[Mock 题号] 梯度下降算法的主要作用是什么？',
    options: [
      'A. 数据预处理',
      'B. 模型评估',
      'C. 参数优化',
      'D. 特征选择'
    ]
  },
  {
    text: '[Mock 题号] 交叉验证的主要目的是什么？',
    options: [
      'A. 提高模型训练速度',
      'B. 减少模型复杂度',
      'C. 评估模型泛化能力',
      'D. 增加训练数据量'
    ]
  }
])

const submitQuiz = () => {
  // 跳转到评估报告页面
  router.push('/evaluation')
}
</script>

<style scoped>
.quiz-page {
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
}

.quiz-page :deep(.el-card) {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.question-item {
  margin-bottom: 24px;
}

.question-card {
  margin-bottom: 0;
  transition: all 0.3s ease;
}

.question-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.question-content {
  padding: 10px 0;
}

.question-text {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #303133;
}

.option-item {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
}

.submit-section {
  text-align: center;
  margin-top: 40px;
  padding: 40px 0;
}
</style>
