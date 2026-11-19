# DSCI 6200 数据科学与机器学习 · 学习辅导手册

> 系统化、就业导向的课程学习手册，基于 **MkDocs Material** 构建，托管于 GitHub Pages。

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
  <img src="https://img.shields.io/badge/Built_with-MkDocs%20Material-526CFE" alt="MkDocs Material">
  <img src="https://img.shields.io/badge/Deploy-GitHub%20Pages-15803d" alt="GitHub Pages">
</p>

## 简介

本仓库是 DSCI 6200（Data Science and Machine Learning）课程的个人学习辅导手册，以网页形式呈现，帮助复习与落地。内容基于课程大纲与第 1~4 周课件整理，按「就业导向」标注学习优先级。

**内容结构（每章 7 模块）：** 学习目标 · 核心知识点 · 关键概念通俗解释 · 就业应用场景 · 重点技能（⭐ 分级）· 可暂缓内容 · 自测题（含答案与 Python 示例）。

## 特性

- **MkDocs Material**：漂亮、响应式、自带搜索、暗色模式、代码复制、导航标签。
- **Markdown 写作**：内容全部是 `docs/` 下的 `.md` 文件，改起来极简单。
- **就业导向**：每章标注 ⭐ 优先级与「可暂缓」内容，直击面试与工作所需。

## 项目结构

```
dsci6200-study-guide/
├── mkdocs.yml          # 站点配置（导航、主题、插件、暗色模式）
├── docs/               # Markdown 源文件（内容都在这）
│   ├── index.md        # 总览 + 就业能力地图
│   ├── route.md        # 学习路线
│   ├── week1.md        # 第 1 周
│   ├── week2.md        # 第 2 周
│   ├── week3.md        # 第 3 周
│   ├── week4.md        # 第 4 周
│   └── exam.md         # 期中冲刺
├── index.html          # ↓ 以下为 mkdocs build 的产物（提交用于 GitHub Pages）
├── assets/             #    样式 / 脚本 / 图片
├── search/             #    搜索索引
├── 404.html
└── sitemap.xml
```

## 快速开始

### 本地预览

```bash
pip install mkdocs-material
mkdocs serve        # 打开 http://127.0.0.1:8000
```

### 更新内容

1. 编辑 `docs/` 下的 `.md` 文件；
2. `mkdocs build` 重新构建（输出到 `site/`）；
3. 将 `site/` 内的内容推到仓库根目录，GitHub Pages 即自动更新。

## 内容覆盖

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
