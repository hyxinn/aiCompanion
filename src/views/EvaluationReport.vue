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
            <span>得分概览 🌟</span>

          </div>
        </template>

        <div class="score-content">
          <div class="score-item">
            <span class="score-label">综合得分：</span>
            <span class="score-value">80/100</span>
          </div>
          <div class="bar-group">
            <div class="bar-item">
              <div class="bar-title">无监督学习（需加强） 😅</div>
              <el-progress :percentage="55" status="warning" :stroke-width="10" />
            </div>
            <div class="bar-item">
              <div class="bar-title">有监督学习（需复习） 📘</div>
              <el-progress :percentage="58" status="warning" :stroke-width="10" />
            </div>
            <div class="bar-item">
              <div class="bar-title">网络层/神经网络（较好） 💪</div>
              <el-progress :percentage="85" status="success" :stroke-width="10" />
            </div>
          </div>
          <div class="tag-row">
            <el-tag type="danger" effect="plain">聚类/降维/异常检测</el-tag>
            <el-tag type="info" effect="plain">回归/分类基础</el-tag>
            <el-tag type="success" effect="plain">卷积/池化/激活函数</el-tag>
          </div>
        </div>
      </el-card>

      <!-- 诊断摘要 -->
      <el-card class="summary-card">
        <template #header>
          <div class="card-header">
            <span>诊断摘要 🩺</span>
          </div>
        </template>
        <div class="summary-content">
          <ul>
            <li>对 <strong>无监督学习</strong> 与 <strong>有监督学习</strong> 的概念区分、典型算法与适用场景掌握不稳，需要系统梳理。</li>
            <li>在 <strong>神经网络/网络层</strong>（如卷积、池化、激活、BatchNorm）方面理解较好，具备继续深化的基础。</li>
            <li>建议采用 “<strong>打地基 → 结构化巩固 → 实战验证</strong>” 的三步路径，配合小项目提升动手能力。🚀</li>
          </ul>
        </div>
      </el-card>

      <!-- 大模型评估详情 -->
      <el-card class="ai-evaluation">
        <template #header>
          <div class="card-header">
            <span>大模型评估详情 🤖</span>
          </div>
        </template>

        <div class="evaluation-content">
          <el-alert
            title="以下为通义千问 Qwen-Turbo生成的学习建议与路径，已根据你的强弱项自动总结。"
            type="success"
            :closable="false"
            show-icon
          />

          <div class="evaluation-text">
            <h4>模型结论摘要（Qwen-Turbo）：</h4>
            <p>
              你在 <strong>网络层/神经网络</strong>（卷积、池化、激活等）表现较好，但在
              <strong>无监督学习</strong> 与 <strong>有监督学习</strong> 的核心概念、典型算法与适用场景上掌握不稳。
              建议以“概念对齐 → 专题巩固 → 实战可视化”的路径逐步提升。🙂
            </p>

            <h4>优势亮点：</h4>
            <ul>
              <li>能较好理解网络层的作用与常见配置，对 CNN 结构直觉较强。</li>
              <li>具备阅读/复现基础代码与可视化结果的能力，适合通过小项目驱动学习。</li>
            </ul>

            <h4>待提升点：</h4>
            <ul>
              <li>监督 vs 无监督的目标与评估方式区分不清，算法选择缺少依据。</li>
              <li>对 k-均值、DBSCAN、PCA、异常检测、关联规则等直觉与适用边界理解不牢。</li>
            </ul>

            <h4>学习建议：</h4>
            <ul>
              <li>聚焦梳理：无监督/有监督的 <strong>定义、目标、常见算法</strong> 与 <strong>适用场景</strong>，形成清晰心智图 🧭（建议做术语卡片）。</li>
              <li>专题突破：k-均值、DBSCAN、PCA、异常检测与关联规则，做 1-2 个可视化小练习（如 t-SNE/UMAP 可视化）。</li>
              <li>以强促弱：基于神经网络优势，补充“表示学习与自编码器”内容，连接到无监督表示学习。🧠</li>
            </ul>

            <h4>下一步学习计划：</h4>
            <ol>
              <li>第 1 周：复习监督 vs 无监督；完成聚类/降维核心概念卡片（每天 20 分钟）📚</li>
              <li>第 2 周：完成 <strong>k-均值/DBSCAN/PCA</strong> 实验 3 选 2（用现成数据集 + 可视化）🧪</li>
              <li>第 3 周：学习 <strong>自编码器/异常检测/关联规则</strong> 的直觉与用途，并做 1 次案例复盘 🔍</li>
              <li>第 4 周：综合小项目（任选其一）：
                <ul>
                  <li>图片数据：PCA/t-SNE 可视化 + k-均值聚类；</li>
                  <li>消费数据：异常检测（Isolation Forest/LOF）+ 结果分析；</li>
                </ul>
              </li>
              <li>完成后回到“学习诊断”进行复测，目标 ≥ 90 分 ✅</li>
            </ol>

            <h4>推荐资源：</h4>
            <ul>
              <li>可视化工具：sklearn + matplotlib/seaborn；降维：PCA、t-SNE、UMAP。</li>
              <li>课程：无监督学习与表示学习入门；项目：Kaggle 小数据集聚类/异常检测。</li>
            </ul>
          </div>
        </div>
      </el-card>

      <!-- 学习路径规划 -->
      <el-card class="plan-card">
        <template #header>
          <div class="card-header">
            <span>学习路径规划 🚀</span>
          </div>
        </template>
        <div class="plan-content">
          <el-steps :active="3" finish-status="success" align-center>
            <el-step title="打地基" description="概念对齐：监督 vs 无监督，典型算法与场景 💡" />
            <el-step title="结构化巩固" description="聚类/降维/异常检测/关联规则 专题练习 🔧" />
            <el-step title="以强促弱" description="结合网络层优势学习自编码器与表示学习 🧠" />
            <el-step title="小项目实战" description="可视化 + 聚类/异常检测 项目演示 🎯" />
          </el-steps>
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

.bar-group {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: 10px 0 12px 0;
}

.bar-item .bar-title {
  color: #606266;
  margin-bottom: 6px;
}

.tag-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
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

.summary-card {
  margin-bottom: 24px;
}

.summary-content ul {
  margin-left: 20px;
  line-height: 1.8;
}

.plan-card .plan-content {
  padding: 12px 12px 24px 12px;
}
</style>
