# 第 4 周 · 重采样与集成方法

> **核心**：从「一棵树」升级到「一片森林」，这是机器学习实战的主力。

## 学习目标

- 理解交叉验证、bootstrap 为何能防止「一次结果靠不住」。
- **重点**分清 Bagging（随机森林）和 Boosting（XGBoost）。
- 掌握偏差-方差权衡，理解「集成」为何更强。

## 核心知识点

| 重采样 | 集成 |
|--------|------|
| 交叉验证（CV）、bootstrap、jackknife、精确检验 | Bagging → 随机森林（袋外样本 OOB） |
| 中心极限定理（CLT）与经验分布 | Boosting → 梯度提升、XGBoost、AdaBoost |
| 偏差-方差权衡 | 模型选择 vs 模型平均 |

## 关键概念通俗解释

- **交叉验证**：数据切几份，轮流留一份当「考试卷」，看模型换题还会不会。
- **bootstrap**：有放回反复抽样，模拟「重做很多次实验」看结果稳不稳。
- **偏差-方差**：偏差=打不准（太简单，欠拟合）；方差=打不稳（太复杂，过拟合）。要平衡。
- **Bagging（随机森林）**：种很多棵「不太一样」的树投票/平均。像 800 个村民各自猜牛重，取平均最准。
- **Boosting（XGBoost）**：一棒接一棒，每棵树专门修上一棵的错。像接力赛越跑越准。
- **袋外样本 OOB**：bootstrap 没抽中、留作「免费验证」的约 30% 数据。

## 实际就业应用场景

- **几乎所有表格型建模**：随机森林和 XGBoost 是业界默认首选，Kaggle 竞赛主力。
- **信贷/保险/电商/广告**：预测违约/理赔/复购/点击，用 XGBoost 跑基线几乎不会错。
- **模型稳定上线**：交叉验证保证模型不是「碰巧考好」，上生产才稳。

## 需要重点掌握的技能

- Bagging vs Boosting 对比（并行/顺序、降方差/降偏差）—— 面试高频。
- 随机森林、XGBoost 何时用、怎么调参（树数量、深度）。
- 交叉验证切分（训练/验证/测试），测试集「留到最后、一次不用」。
- 会跑 `RandomForestClassifier` 和 `xgboost`。

## 可暂缓了解的内容

!!! note "⭐ 别恋战"
    - jackknife（留一法）实操 —— 大样本算不动，已被 CV 替代。
    - 费雪精确检验历史细节。
    - AdaBoost 细节（知道「用决策树桩、怕噪声」即可）。

## 自测题

??? question "1. 用「一群村民猜牛重」解释随机森林为什么比单棵树准。"
    单棵树像一个人猜，容易带偏见/噪声；随机森林像 800 人各自独立猜、再取平均 —— 个体误差相互抵消（大数定律），结果更稳。

??? question "2. Bagging 和 Boosting 核心区别？各降偏差还是方差？"
    Bagging 并行、有放回、模型独立 → 降方差；Boosting 顺序、给误分类加权、后一个修前一个 → 降偏差。

??? question "3. 为什么「随机森林 > 单棵决策树 > 逻辑回归」（课件工程例子）？"
    OLS 回归只解释 62% 方差、MSE 107；随机森林 R² 91%、MSE 26。集成模型在复杂/非线性数据上预测更准。

??? question "4. 实践：随机森林 + XGBoost 比较 AUC。"
    ```python
    from sklearn.ensemble import RandomForestClassifier
    from xgboost import XGBClassifier
    from sklearn.model_selection import cross_val_score
    for m in [RandomForestClassifier(n_estimators=100),
              XGBClassifier(n_estimators=100)]:
        s = cross_val_score(m, X, y, cv=5, scoring='roc_auc')
        print(m.__class__.__name__, s.mean())
    ```
