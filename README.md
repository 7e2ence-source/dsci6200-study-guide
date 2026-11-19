# DSCI 6200 数据科学与机器学习 · 学习辅导手册

> 系统化、就业导向的课程学习辅导站点（单页静态站），覆盖已发布章节第 1~4 周。

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
  <img src="https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-4f46e5" alt="Stack">
  <img src="https://img.shields.io/badge/Dependencies-zero-15803d" alt="Zero dependencies">
  <img src="https://img.shields.io/badge/Security-CSP%20Strict-b91c1c" alt="CSP Strict">
</p>

## 简介

本仓库是 DSCI 6200（Data Science and Machine Learning）课程的个人学习辅导手册，以网页形式呈现，帮助复习与落地。内容基于课程大纲与第 1~4 周课件整理，按「就业导向」标注了学习优先级。

**内容结构（每章 7 模块）：**

- 学习目标
- 核心知识点
- 关键概念通俗解释（生活化例子）
- 实际就业应用场景
- 需要重点掌握的技能（⭐ 分级）
- 可暂缓了解的内容
- 自测题 / 实践任务（含可展开答案与 Python 示例）

## ✨ 特性

- **零依赖**：纯 HTML / CSS / 原生 JS，无任何第三方库、CDN、构建工具 —— 无供应链攻击面，可离线打开。
- **渐进增强**：核心阅读体验完全不依赖 JavaScript（自测题用原生 `<details>` 实现），JS 仅做导航高亮增强。
- **严格 CSP**：通过 `<meta http-equiv="Content-Security-Policy">` 禁用内联脚本/样式、外部资源，只允许同源加载。
- **可访问性（a11y）**：语义化标签、跳转正文链接、可见焦点、减少动效偏好适配。
- **内容 / 表现 / 行为分离**：结构与内容在 HTML、样式在 CSS、交互在 JS，职责清晰、易维护。

## 🗂 项目结构

```
dsci6200-study-guide/
├── index.html              # 入口：语义化内容 + CSP + 元信息
├── 404.html                # GitHub Pages 自定义 404
├── assets/
│   ├── css/
│   │   └── style.css       # 设计系统（颜色/形状/布局令牌）
│   └── js/
│       └── app.js          # 导航滚动高亮（scroll-spy，纯原生）
├── .gitignore
├── LICENSE                 # MIT
└── README.md
```

## 🚀 快速开始

无需安装任何东西，任选一种方式：

**方式一：直接打开**

双击 `index.html`，用浏览器打开即可（所有资源均为相对路径，可离线使用）。

**方式二：本地静态服务器（推荐，模拟真实环境）**

```bash
# Python 3
python -m http.server 8000
# 然后访问 http://localhost:8000
```

**方式三：部署到 GitHub Pages**

仓库 `Settings → Pages → Build and deployment` 选择 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`，保存后即可通过 `https://<你的用户名>.github.io/dsci6200-study-guide/` 访问。

## 🔐 安全设计

本项目把「最小攻击面」作为默认原则：

| 措施 | 说明 |
|------|------|
| 零第三方依赖 | 不引入任何 npm 包 / CDN 脚本，杜绝供应链投毒 |
| 严格 CSP | `default-src 'self'`；禁用内联 `script` 与 `style`，仅同源加载 |
| 无外部请求 | 不加载字体、图片、统计脚本，天然无追踪 |
| 隐私 referrer 策略 | `<meta name="referrer" content="no-referrer">` |
| 链接安全 | 如需外链一律 `rel="noopener noreferrer"`（当前站点无外链） |

> 说明：若未来需要引入外部资源，请同步收紧/放宽 CSP 相应指令，并优先使用带 `integrity` 的 SRI 校验。

## 🏗 架构说明

本项目刻意选择「**无构建、零依赖的静态站**」而非框架，理由如下：

1. **内容型站点**：以阅读为主，无需 SPA 路由或复杂状态管理；内容直接写在语义化 HTML 中，利于 SEO 与可访问性。
2. **安全优先**：每多一个依赖就多一份供应链风险；零依赖意味着零风险、可长期维护。
3. **即时部署**：GitHub Pages 开箱即用，无需 CI/CD 构建步骤。
4. **渐进增强**：即使 JS 被禁用（如某些企业环境），内容依然完整可读。

三层分离遵循「关注点分离（SoC）」经典原则，便于后续把内容迁移为 Markdown + 静态生成器（如 Astro / Hugo）时平滑过渡。

## 📚 内容覆盖

| 章节 | 主题 | 就业优先级 |
|------|------|-----------|
| 第 1 周 | 传统统计 vs 数据科学/机器学习 | ⭐⭐⭐⭐ |
| 第 2 周 | 广义回归（正则化/惩罚回归） | ⭐⭐⭐⭐ |
| 第 3 周 | 支持向量机（SVM）与决策树 | ⭐⭐⭐⭐⭐ |
| 第 4 周 | 重采样与集成方法 | ⭐⭐⭐⭐⭐ |

> 第 5~8 单元（降维、聚类、神经网络、文本挖掘）课件尚未发布，后续补全。

## ⚖️ 许可证

- **代码**：MIT License，详见 [LICENSE](LICENSE)。
- **内容**：本手册为个人学习笔记，仅供个人学习使用；其中引用的课程观点归原作者所有，请勿用于商业用途或二次分发。

## 🙋 免责声明

本手册内容基于个人对课程材料的理解整理，可能与官方教材表述存在差异，请以课程教师与指定教材为准。

---

*由 [7e2ence-source](https://github.com/7e2ence-source) 整理维护*
