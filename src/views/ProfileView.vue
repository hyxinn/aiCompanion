<template>
  <div class="profile-view">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>个人中心</span>
        </div>
      </template>
      
      <div class="profile-content">
        <div class="user-info">
          <el-avatar :size="100" class="user-avatar">
            <el-icon><User /></el-icon>
          </el-avatar>
          
          <div class="user-details">
            <h3>学习者</h3>
            <p class="user-email">learner@example.com</p>
            <p class="join-date">加入时间：2024年1月</p>
          </div>
        </div>
        
        <el-divider />
        
        <div class="profile-sections">
          <el-card class="section-card">
            <template #header>
              <span>学习统计</span>
            </template>
            
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">15</div>
                <div class="stat-label">已完成课程</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">8</div>
                <div class="stat-label">进行中课程</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">85%</div>
                <div class="stat-label">平均完成率</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">120</div>
                <div class="stat-label">学习时长(小时)</div>
              </div>
            </div>
          </el-card>
          
          <el-card class="section-card">
            <template #header>
              <span>学习偏好</span>
            </template>
            
            <div class="preferences">
              <el-tag type="primary" class="preference-tag">机器学习</el-tag>
              <el-tag type="success" class="preference-tag">深度学习</el-tag>
              <el-tag type="warning" class="preference-tag">自然语言处理</el-tag>
              <el-tag type="info" class="preference-tag">计算机视觉</el-tag>
            </div>
          </el-card>
          
          <el-card class="section-card">
            <template #header>
              <span>最近活动</span>
            </template>
            
            <el-timeline>
              <el-timeline-item timestamp="2024-01-15" placement="top">
                完成了"机器学习基础"课程测验
              </el-timeline-item>
              <el-timeline-item timestamp="2024-01-14" placement="top">
                在知识图谱中查看了"神经网络"相关概念
              </el-timeline-item>
              <el-timeline-item timestamp="2024-01-13" placement="top">
                与AI学伴讨论了"梯度下降"算法
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { User } from '@element-plus/icons-vue'
</script>

<style scoped>
.profile-view {
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
}

.profile-view :deep(.el-card) {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-content {
  padding: 40px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 24px;
}

.user-avatar {
  background-color: #409eff;
}

.user-details h3 {
  margin: 0 0 12px 0;
  color: #303133;
  font-size: 28px;
  font-weight: 600;
}

.user-email {
  color: #606266;
  margin: 5px 0;
}

.join-date {
  color: #909399;
  margin: 5px 0;
}

.profile-sections {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-card {
  margin-bottom: 0;
  transition: all 0.3s ease;
}

.section-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 32px;
  padding: 32px 0;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  color: #409eff;
  margin-bottom: 5px;
}

.stat-label {
  color: #606266;
  font-size: 14px;
}

.preferences {
  padding: 32px 0;
}

.preference-tag {
  margin-right: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  padding: 8px 16px;
}

.el-timeline {
  padding: 32px 0;
}
</style>
