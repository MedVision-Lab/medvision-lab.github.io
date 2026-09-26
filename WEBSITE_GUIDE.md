# MedVision Lab 网站维护说明书

本说明书用于维护 `medvision-lab.github.io` 团队网站。

---

## 1. 网站整体结构

当前网站采用：

```text
GitHub Pages
+
Jekyll
+
YAML 数据文件
+
HTML 页面模板
+
CSS
+
JavaScript
```

核心原则：

```text
_data/        → 网站内容
assets/       → 图片、PDF、CSS、JS
*.html        → 页面结构
_layouts/     → 全站公共结构
_config.yml   → 网站配置
```

平时更新网站时，**绝大多数情况下只修改 `_data/` 和 `assets/`，不要频繁修改 HTML。**

推荐目录结构：

```text
medvision-lab.github.io/
│
├── _data/
│   ├── people.yml
│   ├── projects.yml
│   ├── publications.yml
│   ├── research.yml
│   ├── news.yml
│   └── translations.yml
│
├── _layouts/
│   └── default.html
│
├── assets/
│   ├── css/
│   │   └── medvision.css
│   ├── js/
│   │   └── language.js
│   ├── images/
│   │   ├── people/
│   │   ├── projects/
│   │   ├── research/
│   │   ├── news/
│   │   └── logo/
│   └── files/
│       ├── papers/
│       ├── posters/
│       ├── slides/
│       └── other/
│
├── index.html
├── people.html
├── projects.html
├── publications.html
├── _config.yml
├── Gemfile
├── Gemfile.lock
└── WEBSITE_GUIDE.md
```

---

## 2. 最常修改的文件

| 文件 | 作用 | 修改频率 |
|---|---|---:|
| `_data/people.yml` | 团队成员信息 | 很高 |
| `_data/projects.yml` | 项目信息 | 很高 |
| `_data/publications.yml` | 论文信息 | 很高 |
| `_data/news.yml` | 新闻动态 | 很高 |
| `_data/research.yml` | 研究方向 | 中 |
| `_data/translations.yml` | 中英日界面文字 | 中 |
| `assets/images/` | 成员、项目等图片 | 很高 |
| `assets/files/` | PDF、海报等文件 | 中 |
| `assets/css/medvision.css` | 网站外观 | 低 |
| `_layouts/default.html` | 导航栏、页脚等公共结构 | 很低 |
| `index.html` | 首页布局 | 很低 |
| `people.html` | People 页面布局 | 很低 |
| `projects.html` | Projects 页面布局 | 很低 |
| `publications.html` | Publications 页面布局 | 很低 |
| `_config.yml` | 网站全局配置 | 很低 |

---

## 3. `_data/people.yml`

负责团队成员数据。

常见分类：

```yaml
pi:
phd:
master:
alumni:
```

含义：

```text
pi      → Principal Investigator，团队负责人
phd     → 博士研究生
master  → 硕士研究生
alumni  → 已毕业成员
```

成员示例：

```yaml
pi:
  - name:
      en: "Member A"
      zh: "成员 A"
      ja: "メンバー A"

    role:
      en: "Principal Investigator"
      zh: "团队负责人"
      ja: "研究代表者"

    affiliation:
      en: "University / Institution"
      zh: "大学 / 研究机构"
      ja: "大学 / 研究機関"

    research:
      en: "Research Area A, Research Area B."
      zh: "研究方向 A、研究方向 B。"
      ja: "研究分野 A、研究分野 B。"

    image: "/assets/images/people/member-a.jpg"
    email: "example@example.com"
    github: "https://github.com/example"
    scholar: "https://scholar.google.com/"
```

字段说明：

```text
name         → 姓名
role         → 身份
affiliation  → 学校 / 单位
research     → 研究方向
image        → 头像路径
email        → 邮箱
github       → GitHub 主页
scholar      → Google Scholar 主页
```

语言字段：

```text
en → 英文
zh → 中文
ja → 日文
```

没有某个链接时建议留空：

```yaml
github: ""
scholar: ""
email: ""
```

不要正式使用：

```yaml
github: "#"
```

---

## 4. 添加一个新成员

假设添加：

```text
张三
硕士研究生
```

第一步，把照片放到：

```text
assets/images/people/zhang-san.jpg
```

第二步，在 `_data/people.yml` 的 `master:` 下添加：

```yaml
  - name:
      en: "San Zhang"
      zh: "张三"
      ja: "張三"

    role:
      en: "Master Student"
      zh: "硕士研究生"
      ja: "修士課程"

    affiliation:
      en: "University A"
      zh: "A大学"
      ja: "A大学"

    research:
      en: "Medical Image Analysis."
      zh: "医学图像分析。"
      ja: "医用画像解析。"

    image: "/assets/images/people/zhang-san.jpg"

    email: ""
    github: ""
    scholar: ""
```

正常情况下，**不需要修改 `people.html`**。

---

## 5. `_data/projects.yml`

负责项目数据。

示例：

```yaml
- id: "project-a"

  title:
    en: "Project A"
    zh: "项目 A"
    ja: "プロジェクト A"

  category:
    en: "Research Area A"
    zh: "研究方向 A"
    ja: "研究分野 A"

  description:
    en: "Description of Project A."
    zh: "项目 A 的介绍。"
    ja: "プロジェクト A の概要。"

  image: "/assets/images/projects/project-a.jpg"

  url: "/projects.html#project-a"
```

字段说明：

```text
id           → 项目唯一编号
title        → 项目名称
category     → 项目所属方向
description  → 项目简介
image        → 项目封面图
url          → 项目跳转地址
```

`id` 建议使用：

```text
全小写
不用空格
单词之间使用 -
```

例如：

```yaml
id: "virtual-staining"
```

---

## 6. 项目图片

项目图片放在：

```text
assets/images/projects/
```

例如：

```text
assets/images/projects/project-a.jpg
```

然后在 YAML 中：

```yaml
image: "/assets/images/projects/project-a.jpg"
```

推荐图片尺寸：

```text
1200 × 800
```

常用比例：

```text
3:2
16:9
```

---

## 7. `_data/publications.yml`

负责论文数据。

示例：

```yaml
- year: 2026

  title: "Paper A"

  authors: "Author A, Author B, Author C"

  venue: "Journal / Conference A"

  paper: "/assets/files/papers/paper-a.pdf"

  code: "https://github.com/example/project-a"

  project: "/projects.html#project-a"

  doi: "https://doi.org/..."
```

字段说明：

```text
year      → 论文年份
title     → 论文题目
authors   → 作者
venue     → 期刊 / 会议
paper     → 论文 PDF 地址
code      → 代码地址
project   → 项目主页
doi       → DOI 地址
```

没有的字段可留空：

```yaml
code: ""
project: ""
doi: ""
```

---

## 8. 上传论文 PDF

例如文件：

```text
paper-a.pdf
```

放入：

```text
assets/files/papers/paper-a.pdf
```

然后在 `_data/publications.yml` 中：

```yaml
paper: "/assets/files/papers/paper-a.pdf"
```

---

## 9. `_data/research.yml`

控制首页的 Research Directions。

示例：

```yaml
- id: "research-a"

  number: "01"

  title:
    en: "Research Area A"
    zh: "研究方向 A"
    ja: "研究分野 A"

  description:
    en: "Description of Research Area A."
    zh: "研究方向 A 的介绍。"
    ja: "研究分野 A の概要。"
```

字段说明：

```text
id           → 唯一编号
number       → 页面显示序号
title        → 研究方向名称
description  → 研究方向介绍
```

---

## 10. `_data/news.yml`

负责 Latest News。

示例：

```yaml
- date: "Sep 2026"

  text:
    en: "News item A."
    zh: "新闻 A。"
    ja: "ニュース A。"
```

字段说明：

```text
date → 时间
text → 新闻内容
```

建议把最新新闻放在文件最上方。

例如论文录用：

```yaml
- date: "Oct 2026"

  text:
    en: "Our paper has been accepted by Conference A."
    zh: "我们的论文被 Conference A 接收。"
    ja: "論文が Conference A に採択されました。"
```

---

## 11. `_data/translations.yml`

控制网站界面固定文字的中英日切换，例如：

```text
Home
About
Research
Projects
Publications
People
Contact
```

示例：

```yaml
en:
  nav:
    home: "Home"
    about: "About"
    research: "Research"

zh:
  nav:
    home: "首页"
    about: "关于我们"
    research: "研究方向"

ja:
  nav:
    home: "ホーム"
    about: "研究室紹介"
    research: "研究分野"
```

通常只有修改固定界面文字时才需要改这个文件。

---

## 12. `assets/images/`

建议严格分类：

```text
assets/images/
├── people/
├── projects/
├── research/
├── news/
└── logo/
```

含义：

```text
people/    → 成员照片
projects/  → 项目图片
research/  → 研究方向图片
news/      → 新闻图片
logo/      → Logo
```

---

## 13. 图片命名规范

推荐：

```text
英文
小写
使用 -
```

例如：

```text
zhang-san.jpg
virtual-staining.jpg
project-a.jpg
```

尽量不要：

```text
张三照片.jpg
Project Final 2.jpg
```

---

## 14. `assets/files/`

用于存放网站附件。

推荐：

```text
assets/files/
├── papers/
├── posters/
├── slides/
└── other/
```

含义：

```text
papers/   → 论文 PDF
posters/  → 学术海报
slides/   → 报告 PPT/PDF
other/    → 其他附件
```

---

## 15. `assets/css/medvision.css`

控制整个网站外观，包括：

```text
颜色
字体
字号
间距
按钮
卡片
导航栏
页面宽度
响应式布局
```

最重要的参数在文件顶部：

```css
:root {
    --primary: #163b65;
    --primary-dark: #102c4d;

    --text: #172033;
    --text-light: #627083;

    --background: #ffffff;
    --background-light: #f6f8fb;

    --border: #e3e8ef;

    --max-width: 1200px;
}
```

参数说明：

```text
--primary          → 网站主色
--primary-dark     → 深色主色
--text             → 主要文字颜色
--text-light       → 次要文字颜色
--background       → 主背景色
--background-light → 浅色背景
--border           → 边框颜色
--max-width        → 网站内容最大宽度
```

当前网站应加载：

```html
<link rel="stylesheet"
      href="{{ '/assets/css/medvision.css' | relative_url }}">
```

不要再改回旧的：

```text
style.css
```

---

## 16. `_layouts/default.html`

这是全网站公共模板。

主要包含：

```text
<head>
导航栏
{{ content }}
Footer
CSS
JavaScript
```

其中：

```liquid
{{ content }}
```

表示把：

```text
index.html
people.html
projects.html
publications.html
```

的正文插入公共模板。

通常只有以下情况才修改：

```text
增加导航菜单
修改 Logo
修改 Footer
引入新 CSS
引入新 JavaScript
```

平时维护内容时不要频繁修改。

---

## 17. `index.html`

这是首页布局，主要包含：

```text
Hero
About
Research
Projects
Publications
People
News
Contact
```

正常添加成员、项目、论文、新闻时，优先修改 `_data/`，不要直接修改首页 HTML。

---

## 18. `people.html`

负责 People 页面布局。

内容主要来自：

```text
_data/people.yml
```

新增、删除、修改成员时，优先改：

```text
_data/people.yml
```

---

## 19. `projects.html`

负责 Projects 页面布局。

新增或修改项目时，优先改：

```text
_data/projects.yml
```

---

## 20. `publications.html`

负责 Publications 页面布局。

新增或修改论文时，优先改：

```text
_data/publications.yml
```

---

## 21. `_config.yml`

Jekyll 网站全局配置。

推荐：

```yaml
title: "MedVision Lab"

description: >
  Research · Innovation · Collaboration

url: "https://medvision-lab.github.io"

baseurl: ""

markdown: kramdown

permalink: pretty

exclude:
  - README.md
  - Gemfile
  - Gemfile.lock
```

参数说明：

```text
title       → 网站名称
description → 网站描述
url         → 正式网站域名
baseurl     → 网站子路径
markdown    → Markdown 解析器
permalink   → 页面链接风格
exclude     → 不参与网站发布的文件
```

当前 Organization Pages 使用：

```yaml
baseurl: ""
```

不要随意修改。

---

## 22. `Gemfile`

负责 Ruby / Jekyll 依赖。

当前：

```ruby
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
```

正常情况下不要修改。

---

## 23. `_site/` 不要修改

`_site/` 是 Jekyll 自动生成的最终网站目录。

关系：

```text
源代码
↓
Jekyll
↓
_site/
```

因此不要手动修改：

```text
_site/index.html
_site/people.html
_site/projects.html
_site/publications.html
_site/assets/
```

运行：

```powershell
bundle exec jekyll clean
```

时 `_site/` 会被清理，然后重新生成。

---

## 24. YAML 最重要的规则

YAML 对缩进非常敏感。

正确：

```yaml
name:
  en: "Member A"
  zh: "成员 A"
```

错误：

```yaml
name:
en: "Member A"
zh: "成员 A"
```

建议统一使用：

```text
2 个空格
```

不要混用 Tab。

---

## 25. 特殊字符

建议字符串尽量使用双引号：

```yaml
title: "AI-based Medical Image Analysis"
```

尤其文本中包含以下字符时：

```text
:
#
&
[
]
```

最好使用引号。

---

## 26. 本地预览

进入项目目录：

```powershell
cd D:\Github\medvision-lab.github.io
```

运行：

```powershell
bundle exec jekyll serve --livereload
```

然后访问：

```text
http://127.0.0.1:4000/
```

不要使用：

```text
file:///
```

也不要再使用 Live Server 的：

```text
http://127.0.0.1:5500/
```

---

## 27. 出现异常时

停止 Jekyll：

```text
Ctrl + C
```

清理：

```powershell
bundle exec jekyll clean
```

重新启动：

```powershell
bundle exec jekyll serve --livereload
```

然后浏览器执行：

```text
Ctrl + F5
```

强制刷新。

---

## 28. CSS 出问题时

直接访问：

```text
http://127.0.0.1:4000/assets/css/medvision.css
```

正常应该看到：

```css
:root {
    --primary: #163b65;
```

如果显示：

```text
404
```

说明 CSS 路径错误。

当前网站应统一使用：

```text
assets/css/medvision.css
```

---

## 29. 正式发布

本地检查完成后：

```powershell
git status
git add .
git commit -m "Update website"
git push
```

GitHub Pages 会自动重新构建。

正式网站：

```text
https://medvision-lab.github.io/
```

---

## 30. 日常维护流程

以后最常见的维护流程：

```text
修改 YAML
↓
添加图片 / PDF
↓
本地预览
↓
确认无误
↓
git add .
↓
git commit
↓
git push
↓
网站更新
```

---

## 31. 常见任务速查表

| 需求 | 修改文件 |
|---|---|
| 新增成员 | `_data/people.yml` |
| 删除成员 | `_data/people.yml` |
| 修改成员研究方向 | `_data/people.yml` |
| 修改成员照片 | `_data/people.yml` + `assets/images/people/` |
| 新增项目 | `_data/projects.yml` |
| 修改项目 | `_data/projects.yml` |
| 添加项目图片 | `assets/images/projects/` |
| 新增论文 | `_data/publications.yml` |
| 上传论文 PDF | `assets/files/papers/` |
| 新增新闻 | `_data/news.yml` |
| 修改研究方向 | `_data/research.yml` |
| 修改网站语言 | `_data/translations.yml` |
| 修改网站颜色 | `assets/css/medvision.css` |
| 修改导航 | `_layouts/default.html` |
| 修改首页布局 | `index.html` |
| 修改成员页面布局 | `people.html` |
| 修改项目页面布局 | `projects.html` |
| 修改论文页面布局 | `publications.html` |
| 修改网站名称 | `_config.yml` |
| 修改正式域名 | `_config.yml` |

---

## 32. 最重要的维护原则

记住：

```text
内容       → _data/
图片和文件 → assets/
页面结构   → HTML
外观       → medvision.css
```

以及：

```text
不要修改 _site/
```

这样网站后续会非常容易维护。
