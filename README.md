# RoboIndex Startup Page

RoboIndex 的项目启动展示页（单页中英双语），用于对外说明项目定位、核心能力、RA-L 投稿经验摘要、发展路线和阶段 KPI。

## Quick Start

1. 本地直接打开 `index.html`。
2. 或者在仓库根目录启动静态服务：
   - `python3 -m http.server 8000`
   - 浏览器访问 `http://localhost:8000`

## Files

- `index.html`: 页面结构
- `assets/styles.css`: 样式与响应式布局
- `assets/main.js`: 双语文案、数据渲染与交互
- `proposal.md`: 项目原始提案
- `RA-L 投稿攻略.md`: 投稿经验原始文档

## Attribution

页面中的 RA-L 投稿经验内容为摘要展示，来源与署名如下：

- 文档：`RA-L 投稿攻略`
- 作者：郝策
- 更新日期：2026年2月18日

请在二次传播时保留以上署名与来源链接。

## GitHub Backup & Pages (roboindex-site)

1. 在 GitHub 新建公开仓库：`roboindex-site`
2. 本地执行：
   - `git init`
   - `git add .`
   - `git commit -m "feat: launch RoboIndex startup page"`
   - `git branch -M main`
   - `git remote add origin git@github.com:<your-username>/roboindex-site.git`
   - `git push -u origin main`
3. 开启 Pages：
   - `Settings -> Pages`
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main` + `/root`
4. 发布地址：
   - `https://<your-username>.github.io/roboindex-site/`
