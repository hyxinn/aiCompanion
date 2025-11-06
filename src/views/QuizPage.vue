<template>
  <div class="quiz-page">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>学习诊断：在线测验 ✨</span>
          <div class="header-extra">
            <el-tag type="success">AI 基础</el-tag>
            <el-tag type="warning" effect="plain">无监督学习</el-tag>
          </div>
        </div>
      </template>

      <el-alert
        type="info"
        :closable="false"
        show-icon
        class="top-tip"
      />

      <div class="progress-row">
        <div class="progress-text">已作答 {{ answeredCount }} / {{ mockQuestions.length }}</div>
        <el-progress :percentage="Math.round(answeredCount / mockQuestions.length * 100)" :stroke-width="10" status="success" />
      </div>
      
      <el-form :model="quizForm" label-width="100px">
        <div v-for="(question, index) in mockQuestions" :key="index" class="question-item">
          <el-card class="question-card" shadow="hover">
            <template #header>
              <span>题目 {{ index + 1 }} ｜ <small>{{ question.tag }}</small></span>
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
            :disabled="answeredCount === 0"
            @click="submitQuiz"
          >
            提交测验并查看结果 ✅
          </el-button>
        </div>
      </el-form>
    </el-card>

    <el-dialog v-model="resultVisible" title="测验结果 🎉" width="560px">
      <div class="result-box">
        <div class="score">得分：<strong>{{ score }}</strong> / {{ mockQuestions.length * 10 }}</div>
        <div class="summary">正确 {{ correctCount }} 题；待巩固 {{ mockQuestions.length - correctCount }} 题</div>
        <el-alert :title="suggestion" type="success" :closable="false" show-icon class="result-tip" />
        <div class="tips">温馨提示：本结果仅作学习参考，可前往“评估报告”查看更多建议 📈</div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="resultVisible = false">继续作答</el-button>
          <el-button type="primary" @click="goEvaluation">前往评估报告</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const quizForm = reactive({ answers: [] })

// 初学者友好的无监督学习与AI基础题目（单选题，每题10分）
const mockQuestions = ref([
  { text: '无监督学习的核心目标是？', tag: '基础概念 💡', options: ['A. 预测标签', 'B. 从无标签数据中发现结构', 'C. 强化策略学习', 'D. 数据标注'], correctIndex: 1 },
  { text: '以下哪个任务最典型地属于无监督学习？', tag: '基础概念 💡', options: ['A. 图像分类', 'B. 聚类', 'C. 回归', 'D. 语音识别'], correctIndex: 1 },
  { text: 'k-均值聚类的主要缺点之一是？', tag: '聚类 🔢', options: ['A. 不能并行', 'B. 需要预先指定k', 'C. 无法处理数值特征', 'D. 每次都得到全局最优'], correctIndex: 1 },
  { text: 'DBSCAN 的优势是？', tag: '聚类 🔢', options: ['A. 必须指定簇数', 'B. 只适用于线性可分', 'C. 能发现任意形状的簇并识别噪声', 'D. 只能处理高斯分布数据'], correctIndex: 2 },
  { text: '层次聚类的一个特点是？', tag: '聚类 🔢', options: ['A. 需要标签', 'B. 通过合并/分裂构建层次结构', 'C. 必须是密度方法', 'D. 一定比k-均值快'], correctIndex: 1 },
  { text: 'PCA 的主要目的在于？', tag: '降维 📉', options: ['A. 提高模型复杂度', 'B. 找到方差最大的方向进行投影', 'C. 增加特征数量', 'D. 生成标签'], correctIndex: 1 },
  { text: 't-SNE 更适合用来？', tag: '降维 📉', options: ['A. 生成文本', 'B. 可视化高维数据的局部结构', 'C. 训练监督分类器', 'D. 数据清洗'], correctIndex: 1 },
  { text: '自编码器（Autoencoder）的核心思想是？', tag: '表示学习 🧠', options: ['A. 监督学习拟合标签', 'B. 通过压缩与重构学习表示', 'C. 强化学习的奖励设计', 'D. 仅用于聚类'], correctIndex: 1 },
  { text: '以下哪项更贴近异常检测的思路？', tag: '异常检测 🚨', options: ['A. 识别远离大多数数据点的样本', 'B. 所有点都属于同一类', 'C. 仅看训练误差', 'D. 只能用线性模型'], correctIndex: 0 },
  { text: 'Apriori / FP-Growth 常用于？', tag: '关联规则 📊', options: ['A. 回归预测', 'B. 序列标注', 'C. 频繁项集与关联规则挖掘', 'D. 图像卷积'], correctIndex: 2 }
])

const answeredCount = computed(() => quizForm.answers.filter(v => v !== undefined && v !== null).length)

const resultVisible = ref(false)
const score = ref(0)
const correctCount = ref(0)

const suggestion = computed(() => {
  if (correctCount.value >= 9) return '非常棒！你对无监督学习理解很扎实，继续保持！🚀'
  if (correctCount.value >= 7) return '不错～建议加强聚类与降维细节巩固，冲刺更高分！💪'
  return '建议复习：k-均值/DBSCAN/PCA/t-SNE/自编码器/异常检测/关联规则等核心概念。📚'
})

const submitQuiz = () => {
  let correct = 0
  mockQuestions.value.forEach((q, i) => {
    if (quizForm.answers[i] === q.correctIndex) correct += 1
  })
  correctCount.value = correct
  score.value = correct * 10
  resultVisible.value = true
}

const goEvaluation = () => {
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

.top-tip {
  margin-bottom: 16px;
}

.progress-row {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 10px 0 20px 0;
}

.progress-text {
  color: #606266;
  min-width: 140px;
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

.result-box {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.score {
  font-size: 20px;
  color: #303133;
}

.summary {
  color: #606266;
}

.result-tip {
  margin-top: 6px;
}
</style>
