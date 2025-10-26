<template>
  <el-container class="app-container">
    <!-- 左侧边栏 -->
    <el-aside width="200px" class="sidebar">
      <div class="logo">
        <el-icon size="24"><School /></el-icon>
        <span class="logo-text">AI 助教</span>
      </div>
      
      <el-menu
        :default-active="$route.path"
        class="sidebar-menu"
        router
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409eff"
      >
        <el-menu-item index="/knowledge-graph">
          <el-icon><TrendCharts /></el-icon>
          <span>知识图谱</span>
        </el-menu-item>
        
        <el-menu-item index="/knowledge-import">
          <el-icon><Upload /></el-icon>
          <span>知识导入</span>
        </el-menu-item>
        
        <el-menu-item index="/quiz">
          <el-icon><EditPen /></el-icon>
          <span>学习诊断</span>
        </el-menu-item>
        
        <el-menu-item index="/evaluation">
          <el-icon><Document /></el-icon>
          <span>评估报告</span>
        </el-menu-item>
        
        <el-menu-item index="/ai-companion">
          <el-icon><ChatDotRound /></el-icon>
          <span>AI 学伴</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    
    <!-- 右侧主内容区 -->
    <el-container class="main-container">
      <!-- 顶部栏 -->
      <el-header class="header">
        <div class="header-content">
          <h1 class="app-title">AI 助教系统</h1>
          <div class="header-actions">
            <el-link 
              :underline="false" 
              type="primary" 
              @click="$router.push('/profile')"
              class="profile-link"
            >
              <el-icon><User /></el-icon>
              个人中心
            </el-link>
          </div>
        </div>
      </el-header>
      
      <!-- 主视图 -->
      <el-main class="main-content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { 
  School, 
  TrendCharts, 
  Upload, 
  EditPen, 
  Document, 
  ChatDotRound, 
  User 
} from '@element-plus/icons-vue'
</script>

<style scoped>
.app-container {
  height: 100vh;
}

.sidebar {
  background: linear-gradient(to bottom, #304156 0%, #2c3e50 100%);
  overflow: hidden;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, #409eff 0%, #66b1ff 100%);
}

.logo-text {
  margin-left: 8px;
}

.sidebar-menu {
  border-right: none;
  height: calc(100vh - 60px);
}

.main-container {
  background-color: #f0f2f5;
}

.header {
  background-color: white;
  border-bottom: 1px solid #e4e7ed;
  padding: 0;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
}

.app-title {
  margin: 0;
  font-size: 22px;
  color: #303133;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.header-actions {
  display: flex;
  align-items: center;
}

.profile-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.profile-link:hover {
  background-color: #f0f9ff;
}

.main-content {
  padding: 24px 32px;
  background-color: #f5f7fa;
  overflow-y: auto;
}

/* 滚动条优化 */
.main-content::-webkit-scrollbar {
  width: 8px;
}

.main-content::-webkit-scrollbar-track {
  background: #f0f0f0;
}

.main-content::-webkit-scrollbar-thumb {
  background: #c0c0c0;
  border-radius: 4px;
}

.main-content::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .sidebar {
    width: 60px !important;
  }
  
  .logo-text {
    display: none;
  }
  
  .sidebar-menu span {
    display: none;
  }
  
  .app-title {
    font-size: 16px;
  }
}
</style>
