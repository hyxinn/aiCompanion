<template>
  <div class="evaluation-report">
    <el-page-header @back="goBack" content="个性化评估报告">
      <template #title>
        <span>个性化评估报告</span>
      </template>
    </el-page-header>
    
    <div class="report-content">
      <!-- 得分概览 -->
      <el-card class="score-overview">
        <template #header>
          <div class="card-header">
            <span>得分概览</span>
          </div>
        </template>
        
        <div class="score-content">
          <div class="score-item">
            <span class="score-label">总分：</span>
            <span class="score-value">80/100</span>
          </div>
          <div class="score-item">
            <span class="score-label">薄弱点：</span>
            <span class="score-value weak-point">卷积网络</span>
          </div>
          <div class="score-item">
            <span class="score-label">优势领域：</span>
            <span class="score-value strong-point">基础概念理解</span>
          </div>
        </div>
      </el-card>
      
      <!-- 大模型评估详情 -->
      <el-card class="ai-evaluation">
        <template #header>
          <div class="card-header">
            <span>大模型评估详情</span>
          </div>
        </template>
        
        <div class="evaluation-content">
          <el-skeleton :rows="8" animated />
          
          <div class="mock-placeholder">
            [Mock Placeholder] 大模型生成的个性化评估报告文本将显示在此处。
          </div>
          
          <div class="evaluation-text">
            <h4>学习建议：</h4>
            <ul>
              <li>建议重点复习卷积神经网络的相关概念和实现</li>
              <li>可以多做相关的练习题来巩固理解</li>
              <li>建议观看相关的视频教程加深印象</li>
            </ul>
            
            <h4>下一步学习计划：</h4>
            <ol>
              <li>完成卷积神经网络专题学习</li>
              <li>进行相关实践项目</li>
              <li>参加进阶测验验证学习效果</li>
            </ol>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.evaluation-report {
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
}

.evaluation-report :deep(.el-card) {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
}

.report-content {
  margin-top: 20px;
}

.score-overview {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.score-content {
  padding: 32px;
}

.score-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
}

.score-label {
  font-weight: 500;
  color: #606266;
  margin-right: 10px;
  min-width: 100px;
}

.score-value {
  font-weight: 600;
  color: #303133;
}

.weak-point {
  color: #f56c6c;
}

.strong-point {
  color: #67c23a;
}

.ai-evaluation {
  margin-bottom: 20px;
}

.evaluation-content {
  padding: 32px;
}

.mock-placeholder {
  margin: 20px 0;
  padding: 15px;
  background-color: #f0f9ff;
  border: 1px dashed #409eff;
  border-radius: 8px;
  color: #409eff;
  text-align: center;
  font-size: 14px;
}

.evaluation-text {
  margin-top: 24px;
  line-height: 1.8;
}

.evaluation-text h4 {
  color: #303133;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 600;
}

.evaluation-text ul,
.evaluation-text ol {
  margin-left: 24px;
  margin-bottom: 20px;
}

.evaluation-text li {
  margin-bottom: 8px;
  color: #606266;
  font-size: 15px;
}
</style>
