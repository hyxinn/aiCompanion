<template>
  <div class="home-view">
    <el-card class="welcome-card">
      <template #header>
        <div class="card-header">
          <span>欢迎使用 AI 助教系统</span>
        </div>
      </template>
      
      <div class="welcome-content">
        <div class="welcome-text">
          <h2>我的学习中心</h2>
          <p>这里是您的学习中心，您可以在这里管理学习进度、查看学习统计和快速访问各个功能模块。</p>
        </div>
        
        <div class="quick-actions">
          <h3>快速操作</h3>
          <div class="action-grid">
            <el-card 
              class="action-card" 
              shadow="hover"
              @click="$router.push('/knowledge-graph')"
            >
              <div class="action-content">
                <el-icon size="32" color="#409eff"><TrendCharts /></el-icon>
                <span>知识图谱</span>
              </div>
            </el-card>
            
            <el-card 
              class="action-card" 
              shadow="hover"
              @click="$router.push('/quiz')"
            >
              <div class="action-content">
                <el-icon size="32" color="#67c23a"><EditPen /></el-icon>
                <span>学习诊断</span>
              </div>
            </el-card>
            
            <el-card 
              class="action-card" 
              shadow="hover"
              @click="$router.push('/ai-companion')"
            >
              <div class="action-content">
                <el-icon size="32" color="#e6a23c"><ChatDotRound /></el-icon>
                <span>AI 学伴</span>
              </div>
            </el-card>
            
            <el-card 
              class="action-card" 
              shadow="hover"
              @click="$router.push('/evaluation')"
            >
              <div class="action-content">
                <el-icon size="32" color="#f56c6c"><Document /></el-icon>
                <span>评估报告</span>
              </div>
            </el-card>
          </div>
        </div>
        
        <div class="learning-stats">
          <h3>学习统计</h3>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-statistic title="已完成课程" :value="15" />
            </el-col>
            <el-col :span="6">
              <el-statistic title="进行中课程" :value="8" />
            </el-col>
            <el-col :span="6">
              <el-statistic title="学习时长" :value="120" suffix="小时" />
            </el-col>
            <el-col :span="6">
              <el-statistic title="平均得分" :value="85" suffix="分" />
            </el-col>
          </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { TrendCharts, EditPen, ChatDotRound, Document } from '@element-plus/icons-vue'
</script>

<style scoped>
.home-view {
  padding: 0;
  max-width: 1400px;
  margin: 0 auto;
}

.welcome-card {
  margin-bottom: 0;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.welcome-content {
  padding: 40px;
}

.welcome-text {
  margin-bottom: 40px;
}

.welcome-text h2 {
  color: #303133;
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: 600;
}

.welcome-text p {
  color: #606266;
  font-size: 16px;
  line-height: 1.8;
}

.quick-actions {
  margin-bottom: 30px;
}

.quick-actions h3 {
  color: #303133;
  margin-bottom: 20px;
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.action-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
}

.action-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.action-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px 24px;
}

.action-content span {
  font-size: 16px;
  color: #303133;
  font-weight: 500;
}

.learning-stats h3 {
  color: #303133;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
}
</style>
