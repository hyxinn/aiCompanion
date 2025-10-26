<template>
  <div class="knowledge-graph">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>课程知识图谱可视化</span>
        </div>
      </template>
      
      <div class="graph-container">
        <div class="search-section">
          <el-input
            v-model="searchQuery"
            placeholder="搜索知识点..."
            class="search-input"
            clearable
          >
            <template #prefix>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
        </div>
        
        <div class="graph-area">
          <div class="graph-placeholder">
            [Mock Placeholder] ECharts/D3.js 将在此处渲染知识图谱数据。
          </div>
        </div>
      </div>
    </el-card>
    
    <el-drawer
      v-model="drawerVisible"
      title="知识点详情"
      direction="rtl"
      size="400px"
    >
      <div class="drawer-content">
        <p>这里将显示选中知识点的详细信息</p>
        <el-skeleton :rows="5" animated />
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const searchQuery = ref('')
const drawerVisible = ref(false)
</script>

<style scoped>
.knowledge-graph {
  padding: 0;
  max-width: 1600px;
  margin: 0 auto;
}

.knowledge-graph :deep(.el-card) {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-section {
  margin-bottom: 20px;
}

.search-input {
  width: 300px;
}

.graph-area {
  height: 650px;
  border: 2px dashed #dcdfe6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  transition: all 0.3s ease;
}

.graph-area:hover {
  border-color: #409eff;
  background: linear-gradient(135deg, #e8f4ff 0%, #c3cfe2 100%);
}

.graph-placeholder {
  color: #909399;
  font-size: 16px;
  text-align: center;
}

.drawer-content {
  padding: 20px;
}
</style>
