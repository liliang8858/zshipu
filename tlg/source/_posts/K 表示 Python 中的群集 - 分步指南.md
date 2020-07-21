
title: K 表示 Python 中的群集 - 分步指南
author: 知识铺
date: 2020-06-21 11:28:18
tags:
---
  

K 表示聚类算法通常是学生将学习的第一个无监督机器学习模型。

它允许机器学习从业者在具有相似定量特征的数据集内创建数据点组。它对于解决诸如创建客户细分或识别犯罪率高的城市中的地方等问题非常有用。

在本教程中，您将学习如何在 Python 中构建第一个 K 表示聚类算法。

## 目录

您可以使用下面的目录跳到此 Python K 的特定部分，即聚类算法：

*   [我们将在本教程中使用数据集](https://zshipu.com/t?url=#the-data-set-we-will-use-in-this-tutorial)
*   [我们将在本教程中使用导入](https://zshipu.com/t?url=#the-imports-we-will-use-in-this-tutorial)
*   [可视化我们的数据集](https://zshipu.com/t?url=#visualizing-our-data-set)
*   [构建与训练我们的 K 意味着聚类模型](https://zshipu.com/t?url=#building-and-training-our-k-means-clustering-model)
*   [使用我们的 K 表示聚类模型进行预测](https://zshipu.com/t?url=#making-predictions-with-our-k-means-clustering-model)
*   [可视化模型的准确性](https://zshipu.com/t?url=#visualizing-the-accuracy-of-our-model)
*   [本教程的完整代码](https://zshipu.com/t?url=#the-full-code-for-this-tutorial)
*   [最后的想法](https://zshipu.com/t?url=#final-thoughts)

## 我们将在本教程中使用数据集

在本教程中，我们将使用 使用 生成的数据集。```scikit-learn```

让我们导入函数来创建此人工数据。打开[犹太笔记本](https://zshipu.com/t?url=https://nickmccullum.com/python-course/jupyter-notebook-basics/)，用以下语句启动 Python 脚本：```scikit-learn``````make_blobs```

  <code>from sklearn.datasets import make_blobs</code> 

现在，让我们使用函数创建一些人工数据！```make_blobs```

更具体地说，下面介绍如何创建具有功能和群集中心的示例的数据集。每个群集中的标准差将设置为 。```200``````2``````4``````1.8```

  <code>raw_data = make_blobs(n_samples = 200, n_features = 2, centers = 4, cluster_std = 1.8)</code> 

如果打印此对象，您会注意到它实际上是一个 Python[元组](https://zshipu.com/t?url=https://nickmccullum.com/python-course/tuples/)。此元组的第一个元素是具有 200 个观测值的[NumPy 数组](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/numpy-arrays/)。每个观察包含 2 个要素（就像我们用函数指定的一样！```raw_data``````make_blobs```

现在，我们的数据已经创建，我们可以继续将其他重要的开源库导入到我们的 Python 脚本中。

## 我们将在本教程中使用导入

本教程将利用许多流行的开源Python库，包括[熊猫](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/pandas/)[，NumPy，](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/numpy/)和[matplotlib。](https://zshipu.com/t?url=https://nickmccullum.com/python-visualization/how-to-import-matplotlib/)让我们通过添加以下导入来继续我们的 Python 脚本：

  <code>import pandas as pd

import numpy as np

import seaborn

import matplotlib.pyplot as plt

%matplotlib inline</code> 

此代码块中的第一组导入用于操作大型数据集。第二组导入用于创建数据可视化效果。

接下来，让我们继续可视化数据集。

## 可视化我们的数据集

在我们的函数中，我们为数据集指定了 4 个群集中心。验证正确处理这一点的最佳方法是创建一些快速数据可视化效果。```make_blobs```

首先，让我们使用以下命令根据数据集第二列中的所有行绘制数据集第一列中的所有行：

![A scatterplot of our artificial data](https://nickmccullum.com/images/python-machine-learning/k-means-clustering/first-scatterplot.png)

_注意：您的数据集的显示方式与我的不同，因为这是随机生成的数据。_

此图像似乎表明我们的数据集只有三个群集。这是因为两个群集彼此非常接近。

为了解决这个问题，我们需要引用元组的第二个元素，这是一个 NumPy 数组，其中包含每个观测点所属的群集。```raw_data```

如果我们使用每个观测值的聚类对数据集进行着色，则唯一的群集很快就会变得清晰。下面是执行此操作的代码：

  <code>plt.scatter(raw_data[0][:,0], raw_data[0][:,1], c=raw_data[1])</code> 

![A scatterplot of our artificial data](https://nickmccullum.com/images/python-machine-learning/k-means-clustering/second-scatterplot.png)

现在我们可以看到，我们的数据集有四个唯一的群集。让我们继续在 Python 中构建我们的 K 表示群集模型！

## 构建与训练我们的 K 意味着聚类模型

构建 K 意味着聚类算法的第一步是从 导入它。为此，请向 Python 脚本添加以下命令：```scikit-learn```

  <code>from sklearn.cluster import KMeans</code> 

接下来，让我们创建一个包含 的参数并将其分配给变量的此类实例：```KMeans``````n_clusters=4``````model```

  <code>model = KMeans(n_clusters=4)</code> 

现在，让我们通过调用模型上的方法并传入元组的第一个元素来训练模型：```fit``````raw_data```

  <code>model.fit(raw_data[0])</code> 

在下一节中，我们将探讨如何使用此 K 表示聚类模型进行预测。

在继续之前，我想指出一个区别，即您可能已经注意到构建此 K 意味着聚类算法（这是一种无监督机器学习算法）的过程与本课程中到目前为止使用的受监督机器学习算法之间的差异。

也就是说，我们不必将数据集拆分为训练数据和测试数据。这是一个重要的区别 - 事实上，在构建无监督机器学习模型时，您永远不需要在数据集上进行训练/测试拆分！

## 使用我们的 K 表示聚类模型进行预测

机器学习从业者通常使用 K 表示聚类算法进行两种类型的预测：

*   每个数据点所属的群集
*   每个群集的中心位于

现在，我们的模型已经过训练，因此很容易生成这些预测。

首先，让我们预测每个数据点属于哪个群集。为此，请使用点运算符从对象访问属性，如下所示：```labels_``````model```

  <code>model.labels_</code> 

这将生成一个 NumPy 数组，其中预测每个数据点如下所示：

  <code>array([3, 2, 7, 0, 5, 1, 7, 7, 6, 1, 2, 4, 6, 7, 6, 4, 4, 3, 3, 6, 0, 0,

       6, 4, 5, 6, 0, 2, 6, 5, 4, 3, 4, 2, 6, 6, 6, 5, 6, 2, 1, 1, 3, 4,

       3, 5, 7, 1, 7, 5, 3, 6, 0, 3, 5, 5, 7, 1, 3, 1, 5, 7, 7, 0, 5, 7,

       3, 4, 0, 5, 6, 5, 1, 4, 6, 4, 5, 6, 7, 2, 2, 0, 4, 1, 1, 1, 6, 3,

       3, 7, 3, 6, 7, 7, 0, 3, 4, 3, 4, 0, 3, 5, 0, 3, 6, 4, 3, 3, 4, 6,

       1, 3, 0, 5, 4, 2, 7, 0, 2, 6, 4, 2, 1, 4, 7, 0, 3, 2, 6, 7, 5, 7,

       5, 4, 1, 7, 2, 4, 7, 7, 4, 6, 6, 3, 7, 6, 4, 5, 5, 5, 7, 0, 1, 1,

       0, 0, 2, 5, 0, 3, 2, 5, 1, 5, 6, 5, 1, 3, 5, 1, 2, 0, 4, 5, 6, 3,

       4, 4, 5, 6, 4, 4, 2, 1, 7, 4, 6, 6, 0, 6, 3, 5, 0, 5, 2, 4, 6, 0,

       1, 0], dtype=int32)</code> 

要查看每个群集的中心位置，请使用点运算符访问属性，如下所示：```cluster_centers_```

  <code>model.cluster_centers_</code> 

这将生成包含每个聚类中心的坐标的二维 NumPy 数组。如下所示：

  <code>array([[ -8.06473328,  -0.42044783],

       [  0.15944397,  -9.4873621 ],

       [  1.49194628,   0.21216413],

       [-10.97238157,  -2.49017206],

       [  3.54673215,  -9.7433692 ],

       [ -3.41262049,   7.80784834],

       [  2.53980034,  -2.96376999],

       [ -0.4195847 ,   6.92561289]])</code> 

我们将在下一节中评估这些预测的准确性。

## 可视化模型的准确性

在本教程中，我们要做的最后一件事就是可视化模型的准确性。您可以使用以下代码执行此操作：

  <code>f, (ax1, ax2) = plt.subplots(1, 2, sharey=True,figsize=(10,6))

ax1.set_title('Our Model')

ax1.scatter(raw_data[0][:,0], raw_data[0][:,1],c=model.labels_)

ax2.set_title('Original Data')

ax2.scatter(raw_data[0][:,0], raw_data[0][:,1],c=raw_data[1])</code> 

这将并排生成两个不同的绘图，其中一个绘图根据实际数据集显示聚类，另一个绘图根据我们的模型显示聚类。以下是输出的外观：

![A scatterplot of our model's predictions](https://nickmccullum.com/images/python-machine-learning/k-means-clustering/k-means-clustering-subplots.png)

尽管两个绘图之间的着色不同，但您可以看到，我们的模型在预测数据集中的聚类方面做得很好。您还可以看到模型并不完美 - 如果您查看群集边缘的数据点，则可以看到它偶尔会从我们的数据集中错误分类观测值。

关于测量模型的预测，还有最后一件事需要提及。在此示例中，我们知道每个观测值属于哪个群集，因为我们实际上自己生成了此数据集。

这是非常不寻常的。K 表示在事先不知道群集时，更频繁地应用聚类。相反，机器学习从业者使用 K 表示聚类来查找他们在数据集中尚未知道的模式。

## 本教程的完整代码

您可以在[此 GitHub 存储库](https://zshipu.com/t?url=https://github.com/nicholasmccullum/python-machine-learning)中查看本教程的完整代码。下面还粘贴如下，供参考：

  <code>#Create artificial data set 
from sklearn.datasets import make_blobs

raw_data = make_blobs(n_samples = 200, n_features = 2, centers = 4, cluster_std = 1.8)

#Data imports 
import pandas as pd

import numpy as np

#Visualization imports 
import seaborn

import matplotlib.pyplot as plt

%matplotlib inline

#Visualize the data 
plt.scatter(raw_data[0][:,0], raw_data[0][:,1])

plt.scatter(raw_data[0][:,0], raw_data[0][:,1], c=raw_data[1])

#Build and train the model 
from sklearn.cluster import KMeans

model = KMeans(n_clusters=4)

model.fit(raw_data[0])

#See the predictions 
model.labels_

model.cluster_centers_

#PLot the predictions against the original data set 
f, (ax1, ax2) = plt.subplots(1, 2, sharey=True,figsize=(10,6))

ax1.set_title('Our Model')

ax1.scatter(raw_data[0][:,0], raw_data[0][:,1],c=model.labels_)

ax2.set_title('Original Data')

ax2.scatter(raw_data[0][:,0], raw_data[0][:,1],c=raw_data[1])</code> 

## 最后的想法

在本教程中，您将在 Python 中构建了第一个 K 表示聚类算法。

以下是您所学知识的简要摘要：

*   如何使用函数创建人工数据```scikit-learn``````make_blobs```
*   如何构建和训练 K 意味着聚类模型
*   这种无监督机器学习技术不需要将数据拆分为训练数据和测试数据
*   如何使用聚类模型构建和训练 K```scikit-learn```
*   当您提前了解群集时，如何可视化 K 的性能意味着聚类算法
