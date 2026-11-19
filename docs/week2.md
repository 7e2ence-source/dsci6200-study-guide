# 第 2 周 · 广义回归（正则化/惩罚回归）

> **核心**：给回归模型「上税」，防止它死记硬背（过拟合）。

## 学习目标

- 说出普通最小二乘（OLS）回归的缺点，尤其过拟合和多重共线性。
- 分清 LASSO / Ridge / 弹性网络的区别，知道何时用哪个。
- 会用 AIC/AICc/BIC 做模型比较。

## 核心知识点

| 概念 | 说明 |
|------|------|
| OLS 回归的 5 个缺点 | 假设多、易过拟合、共线性不稳、无唯一解、必须线性 |
| 损失函数 | 衡量「犯错成本」，正则化在其上加惩罚项 |
| L1（LASSO） | 系数绝对值之和 → 系数可归零，做变量选择 |
| L2（Ridge） | 系数平方和 → 系数收缩但不归零，解共线 |
| 弹性网络 | L1 + L2 加权，兼顾筛选与稳定 |
| AIC / AICc / BIC | 给模型复杂度「收税」，越小越好 |

## 关键概念通俗解释

- **过拟合**：模型在训练数据上「背答案」，换新数据就垮。像学生死记例题、考试换题型就懵。
- **多重共线性**：预测变量强相关，模型不稳定。像同时用「身高」和「腿长」预测体重 —— 信息重叠。
- **LASSO（L1）**：把没用系数**压到 0**，自动变量筛选。像搬家把不穿的衣服直接扔了。
- **Ridge（L2）**：把系数**往 0 收缩但不断 0**，让模型更稳。像把衣服压紧、但都留着。
- **弹性网络**：L1+L2 结合，大多数情况下最稳。
- **AIC/BIC**：给「模型复杂度」收税，防止一味堆变量，数值越小越好。

!!! note "一句话记区别"
    LASSO 归零筛选（可能只留一个共线变量）；Ridge 收缩不归零（删不掉变量）；弹性网络 = 两者优点都要。

## 实际就业应用场景

- **风控评分卡**：几百个候选特征，用 Lasso 自动筛出真正有用的几十个。
- **销量/价格预测**：特征多且相关，用弹性网络更稳。
- **银行/保险定价**：需要「可解释线性模型」给监管交代时，正则化回归首选。

## 需要重点掌握的技能

- 一句话讲清 LASSO 和 Ridge 区别（归零筛选 vs 收缩不归零）。
- 知道「特征多、有共线性 → 弹性网络」的决策。
- 会跑一次正则化回归：`from sklearn.linear_model import Lasso / Ridge / ElasticNet`。

## 可暂缓了解的内容

!!! note "⭐ 别恋战"
    - Double/Group Lasso、自适应弹性网络的数学细节（知道名词即可）。
    - Dantzig 选择器、oracle 性质的严格定义。

## 自测题

??? question "1. 用生活例子解释「过拟合」。"
    死记硬背例题、考试换题型就懵 —— 模型把训练数据的噪声都背下来了，对新数据泛化差。

??? question "2. LASSO 和 Ridge 各解决什么？为什么弹性网络「两者都要」？"
    LASSO 把系数归零做变量筛选（但共线时只选一个）；Ridge 收缩系数不归零、解共线（但删不掉变量）。弹性网络 = L1+L2 加权，兼顾筛选与稳定。

??? question "3. AIC 和 BIC 区别？小样本推荐哪个？"
    AIC 适合交叉验证、BIC 擅长估计真实模型；BIC 惩罚更重。小样本推荐 AICc（对额外参数惩罚更大）。

??? question "4. 实践：用 sklearn 在糖尿病数据跑 Lasso/Ridge/ElasticNet。"
    ```python
    from sklearn.linear_model import Lasso, Ridge, ElasticNet
    from sklearn.model_selection import train_test_split
    # X 为特征(年龄/BMI/血压/胆固醇等)，y 为糖尿病进展
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)
    for m in [Lasso(alpha=0.1), Ridge(alpha=1.0), ElasticNet(alpha=0.1, l1_ratio=0.5)]:
        m.fit(X_train, y_train)
        print(m.__class__.__name__, m.score(X_test, y_test))
    ```
