<template>
  <div class="knowledge-import">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>知识导入工具</span>
        </div>
      </template>
      
      <div class="import-content">
        <el-upload
          class="upload-demo"
          drag
          action="#"
          multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            将文件拖到此处，或<em>点击上传</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              支持 .pdf, .docx, .txt 格式文件
            </div>
          </template>
        </el-upload>
        
        <div class="import-tips">
          <el-alert
            title="导入说明"
            type="info"
            :closable="false"
            show-icon
          >
            <p>1. 支持多种文档格式的知识导入</p>
            <p>2. 系统将自动解析文档内容并构建知识图谱</p>
            <p>3. 导入完成后可在知识图谱页面查看</p>
          </el-alert>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
</script>

<style scoped>
.knowledge-import {
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
}

.knowledge-import :deep(.el-card) {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.import-content {
  padding: 40px;
}

.upload-demo {
  margin-bottom: 40px;
}

.import-tips {
  margin-top: 32px;
}
</style>
