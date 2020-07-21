
title: Python 中的主要组件分析 - 分步指南
author: 知识铺
date: 2020-06-21 11:29:05
tags:
---
  

主要组件分析是一种无监督机器学习技术，用于探索性数据分析。

更具体地说，数据科学家使用主要组件分析来转换数据集并确定对数据集影响最大的因素。

本教程将教您如何在 Python 中执行主要组件分析。

## 目录

您可以使用下面的目录跳到此 Python 主体组件分析教程的特定部分：

*   [我们将在本教程中使用库](https://zshipu.com/t?url=#the-libraries-we-will-be-using-in-this-tutorial)
*   [我们将在本教程中使用数据集](https://zshipu.com/t?url=#the-data-set-we-will-be-using-in-this-tutorial)
*   [执行我们的第一个主要组件转换](https://zshipu.com/t?url=#performing-our-first-principal-component-transformation)
*   [可视化我们的主要组件](https://zshipu.com/t?url=#visualizing-our-principal-component)
*   [到底是主要组成部分是什么？](https://zshipu.com/t?url=#what-the-heck-is-a-principal-component-anyway)
*   [在实践中如何使用主要组件分析](https://zshipu.com/t?url=#how-to-use-principal-component-analysis-in-practice)
*   [本教程的完整代码](https://zshipu.com/t?url=#the-full-code-for-this-tutorial)
*   [最后的想法](https://zshipu.com/t?url=#final-thoughts)

## 我们将在本教程中使用库

本教程将使用许多开源软件库，包括NumPy、熊猫和matplotlib。

因此，我们将通过添加以下导入来启动 Python 脚本：

  <code>import pandas as pd

import numpy as np

import matplotlib.pyplot as plt

import seaborn

%matplotlib inline</code> 

接下来，让我们继续导入数据集。

## 我们将在本教程中使用数据集

在本课程的早些时候，您学习了如何在内置乳腺癌数据集上构建[支持载体机器](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/support-vector-machines-python/)。```scikit-learn```

我们将在本教程中使用相同的数据集来了解主要组件分析。

让我们通过加载函数开始导入此数据集。```scikit-learn``````load_breast_cancer```

  <code>from sklearn.datasets import load_breast_cancer</code> 

运行此函数时，它将生成数据集。让我们将数据集分配给一个变量：：```raw_data```

  <code>raw_data = load_breast_cancer()</code> 

如果运行以确定我们的变量是哪种类型的数据类型，它将返回 。这是属于 的特殊内置数据结构。```type(raw_data)``````raw_data``````sklearn.utils.Bunch``````scikit-learn```

幸运的是，此数据类型易于使用。事实上，它的行为类似于普通的[Python 字典。](https://zshipu.com/t?url=https://nickmccullum.com/python-course/dictionaries/)

这个类似字典的对象的键之一是 。我们可以使用此键将数据集转换为熊猫数据帧，并具有以下语句：```data```

  <code>raw_data_frame = pd.DataFrame(raw_data['data'], columns = raw_data['feature_names'])</code> 

让我们通过打印来调查数据集包含的功能。这将生成：```raw_data_frame.columns```

  <code>Index(['mean radius', 'mean texture', 'mean perimeter', 'mean area',

       'mean smoothness', 'mean compactness', 'mean concavity',

       'mean concave points', 'mean symmetry', 'mean fractal dimension',

       'radius error', 'texture error', 'perimeter error', 'area error',

       'smoothness error', 'compactness error', 'concavity error',

       'concave points error', 'symmetry error', 'fractal dimension error',

       'worst radius', 'worst texture', 'worst perimeter', 'worst area',

       'worst smoothness', 'worst compactness', 'worst concavity',

       'worst concave points', 'worst symmetry', 'worst fractal dimension'],

      dtype='object')</code> 

正如您所看到的，这是一个非常功能丰富的数据集。

关于我们的数据集，最后需要注意的一个变量是，我们试图预测的变量——即特定的乳腺癌肿瘤是恶性还是良性——被放在关键项下的对象内。```raw_data``````target```

可以使用 访问目标值。值将用于恶性肿瘤和良性肿瘤。```raw_data['target']``````1``````0```

## 执行我们的第一个主要组件转换

正如我们在打印阵列时所看到的，我们的数据集具有许多功能。这使得使用传统可视化技术对数据集执行探索性数据分析变得困难。```raw_data_frame.columns```

为了解决这个问题，我们需要执行一个主组件转换，将我们的数据集转换为一个只有两个功能的功能，其中每个功能都是主要组件。

首先，我们需要标准化我们的数据集。在机器学习中，仅指转换数据集中的所有观测值，使每个要素的大小大致相同的行为。```standardization```

我们使用 的类来执行此操作。我们需要做的第一件事是使用以下命令导入此类：```scikit-learn``````StandardScaler``````scikit-learn```

  <code>from sklearn.preprocessing import StandardScaler</code> 

接下来，我们需要创建此类的实例。我们将新创建的对象分配给名为 ： 的变量：```StandardScaler``````data_scaler```

  <code>data_scaler = StandardScaler()</code> 

现在，我们需要在本教程前面创建的数据集上训练变量。这让我们的对象能够观察数据集中每个要素的特征，以便它可以在本教程的后面部分将每个要素转换为相同的比例：```data_scaler``````raw_data_frame``````data_scaler```

  <code>data_scaler.fit(raw_data_frame)</code> 

我们的最后一步是调用对象上的方法。这将创建一个新的数据集，其中观测值已标准化。我们将将其分配给一个称为 的变量。```transform``````data_scaler``````scaled_data_frame```

  <code>scaled_data_frame = data_scaler.transform(raw_data_frame)</code> 

我们现在已经成功地标准化了乳腺癌数据集！

现在是执行主要组件分析转换的时候了。

我们需要做的第一件事是从 导入必要的类。下面是执行此操作的命令：```scikit-learn```

  <code>from sklearn.decomposition import PCA</code> 

现在我们需要创建此类的实例。为此，您需要指定主体组件的数量作为参数。我们将使用 2 个主要组件，因此类实例化命令如下所示：```PCA``````n_components```

  <code>pca = PCA(n_components = 2)</code> 

接下来，我们需要使用方法将模型拟合：```pca``````scaled_data_frame``````fit```

  <code>pca.fit(scaled_data_frame)</code> 

我们的主要组件分析模型现已创建，whch 意味着我们现在有一个模型，只需 2 个变量来解释原始数据集的一些方差。

要查看此主体在操作中，运行以下命令：

  <code>x_pca = pca.transform(scaled_data_frame)

print(x_pca.shape)

print(scaled_data_frame.shape)</code> 

这将返回：

  <code>(569, 2)

(569, 30)</code> 

正如您所看到的，我们已经将原始数据集从具有 30 个要素的数据集缩减为仅具有 2 个功能的主要组件的简单模型。

## 可视化我们的主要组件

正如我们在本教程前面讨论的那样，几乎不可能从具有 30 个功能的数据集生成有意义的数据可视化效果。

话虽如此，现在我们已经将数据集转换为 2 个主要组件，创建可视化效果非常简单。

下面介绍如何从本教程中到目前为止使用的两个主要组件创建简单的散点图：

  <code>plt.scatter(x_pca[:,0],x_pca[:,1])

plt.xlabel('First Principal Component')

plt.ylabel('Second Principal Component')</code> 

这将生成以下可视化效果：

![A principal component analysis](https://nickmccullum.com/images/python-machine-learning/principal-component-analysis/principal-component-analysis-scatterplot.png)

此可视化显示每个数据点作为其第一个和第二个主要组件的函数。它不是非常有用的当前形式。

让我们添加一个配色方案，根据它是恶性肿瘤还是良性肿瘤来修改每个数据点的颜色。以下代码可以操作：

  <code>plt.scatter(x_pca[:,0],x_pca[:,1], c=raw_data['target'])

plt.xlabel('First Principal Component')

plt.ylabel('Second Principal Component')</code> 

这将生成：

![A principal component analysis with color](https://nickmccullum.com/images/python-machine-learning/principal-component-analysis/principal-component-analysis-scatterplot-with-color.png)

正如您所看到的，仅使用 2 个主要成分即可准确划分基于恶性和良性肿瘤的数据集。

换个说法，我们保持了对数据集进行准确预测的能力，但通过将原始数据集中的 30 个要素减少到现在的 2 个主要组件，大大提高了数据集的简单性。

## 到底是主要组成部分是什么？

在本教程（和上一个教程）中，我经常提到"主要组件"，但您可能仍然不确定这意味着什么。因此，我想花一些时间更好地解释主要组成部分的实际是什么。

主要组件是数据集中原始要素的线性组合。换句话说，通过添加和减去数据集的原始特征来计算主体组件。

您可以使用 生成这些线性组合的系数。只需键入，它将生成类似这样的内容：```scikit-learn``````pca.components_```

  <code>array([[ 0.21890244,  0.10372458,  0.22753729,  0.22099499,  0.14258969,

         0.23928535,  0.25840048,  0.26085376,  0.13816696,  0.06436335,

         0.20597878,  0.01742803,  0.21132592,  0.20286964,  0.01453145,

         0.17039345,  0.15358979,  0.1834174 ,  0.04249842,  0.10256832,

         0.22799663,  0.10446933,  0.23663968,  0.22487053,  0.12795256,

         0.21009588,  0.22876753,  0.25088597,  0.12290456,  0.13178394],

       [-0.23385713, -0.05970609, -0.21518136, -0.23107671,  0.18611302,

         0.15189161,  0.06016536, -0.0347675 ,  0.19034877,  0.36657547,

        -0.10555215,  0.08997968, -0.08945723, -0.15229263,  0.20443045,

         0.2327159 ,  0.19720728,  0.13032156,  0.183848  ,  0.28009203,

        -0.21986638, -0.0454673 , -0.19987843, -0.21935186,  0.17230435,

         0.14359317,  0.09796411, -0.00825724,  0.14188335,  0.27533947]])</code> 

这是一个二维 NumPy 数组，包含 2 行和 30 列。更具体地说，每个主体组件都有一行，原始数据集中的每个要素都有一列。此 NumPy 数组中的每个项的值对应于数据集中该特定要素上的系数。

让我们以示例为例，调查第一个主体组件。它的前 2 个元素是 和 。这意味着用于计算此分量的方程看起来类似，并且此线性组合的其他系数可以在 NumPy 数组中找到。```0.21890244``````0.10372458``````0.21890244x1 + 0.10372458x2 + …``````pca.components_```

总之，主要组件分析是简单性和可解释性之间的权衡。

使用它们大大提高了机器学习模型的简单性。

但是，它们也会增加解释每个变量含义的难度，因为主要组件是数据集中实际实际变量的线性组合。

## 在实践中如何使用主要组件分析

到目前为止，在本教程中，您已经学习了如何执行主要组件分析，将多功能数据集转换为仅包含主要组件的较小数据集。我们已经看到，这增加了简单性，但降低了可解释性。

尽管您对主要组件分析有各种知识，但我们尚未对主要组件模型进行任何预测。

这是有原因的。也就是说，主组件分析_must _be与分类模型（如逻辑回归或 k 最近邻域）结合使用，以做出有意义的预测。

重要的是要牢记这一点向前发展。

## 本教程的完整代码

您可以在[此 GitHub 存储库](https://zshipu.com/t?url=https://github.com/nicholasmccullum/python-machine-learning)中查看本教程的完整代码。下面还粘贴如下，供参考：

 <code>import pandas as pd
import numpy as np

import matplotlib.pyplot as plt
import seaborn
%matplotlib inline

from sklearn.datasets import load_breast_cancer
raw_data = load_breast_cancer()

raw_data_frame = pd.DataFrame(raw_data['data'], columns = raw_data['feature_names'])
raw_data_frame.columns

#Standardize the data from sklearn.preprocessing import StandardScaler
data_scaler = StandardScaler()
data_scaler.fit(raw_data_frame)
scaled_data_frame = data_scaler.transform(raw_data_frame)

#Perform the principal component analysis transformation from sklearn.decomposition import PCA
pca = PCA(n_components = 2)
pca.fit(scaled_data_frame)

x_pca = pca.transform(scaled_data_frame)

print(x_pca.shape)
print(scaled_data_frame.shape)

#Visualize the principal components plt.scatter(x_pca[:,0],x_pca[:,1])
plt.xlabel('First Principal Component')
plt.ylabel('Second Principal Component')

#Visualize the principal components with a color scheme plt.scatter(x_pca[:,0],x_pca[:,1], c=raw_data['target'])
plt.xlabel('First Principal Component')
plt.ylabel('Second Principal Component')

#Investigating at the principal components pca.components_[0]</code> 

## 最后的想法

在本教程中，您学习了如何在 Python 中执行主体组件分析。

以下是我们讨论的主题的简要摘要：

*   主要组件分析如何减少数据集中的要素数量
*   主要组件如何是数据集原始特征的线性组合
*   该主要组件分析必须与其他机器学习技术相结合，以便对实际数据集进行预测
