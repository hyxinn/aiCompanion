import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KnowledgeGraph from '../views/KnowledgeGraph.vue'
import KnowledgeImport from '../views/KnowledgeImport.vue'
import QuizPage from '../views/QuizPage.vue'
import EvaluationReport from '../views/EvaluationReport.vue'
import AiCompanion from '../views/AiCompanion.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/knowledge-graph'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/knowledge-graph',
      name: 'knowledge-graph',
      component: KnowledgeGraph,
    },
    {
      path: '/knowledge-import',
      name: 'knowledge-import',
      component: KnowledgeImport,
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizPage,
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: EvaluationReport,
    },
    {
      path: '/ai-companion',
      name: 'ai-companion',
      component: AiCompanion,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
