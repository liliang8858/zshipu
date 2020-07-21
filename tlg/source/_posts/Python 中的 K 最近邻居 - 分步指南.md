
title: Python 中的 K 最近邻居 - 分步指南
author: 知识铺
date: 2020-06-21 11:24:52
tags:
---
  

K 近邻算法是世界上最流行的机器学习模型之一，用于解决分类问题。

对于探索机器学习的学生来说，一个常见的练习是将 K 近邻算法应用于数据集，无论这些类别是否为不知道。如果需要使用机器学习对一组机密政府信息进行预测，那么这方面的一个真实示例就是。

在本教程中，您将学习在 Python 中编写第一个 K 近邻机器学习算法。我们将使用类似于上述情况的匿名数据集。

## 目录

您可以使用下面的目录跳到此 K 最接近邻居教程的特定部分：

*   [本教程中所需的数据集](https://zshipu.com/t?url=#the-data-set-you-will-need-in-this-tutorial)
*   [本教程中所需的库](https://zshipu.com/t?url=#the-libraries-you-will-need-in-this-tutorial)
*   [将数据集导入我们的 Python 脚本](https://zshipu.com/t?url=#importing-the-data-set-into-our-python-script)
*   [标准化数据集](https://zshipu.com/t?url=#standardizing-the-data-set)
*   [将数据集拆分为训练数据和测试数据](https://zshipu.com/t?url=#splitting-the-data-set-into-training-data-and-test-data)
*   [训练 K 最近邻居模型](https://zshipu.com/t?url=#training-a-k-nearest-neighbors-model)
*   [使用我们的 K 近邻算法进行预测](https://zshipu.com/t?url=#making-predictions-with-our-k-nearest-neighbors-algorithm)
*   [测量我们模型的准确性](https://zshipu.com/t?url=#measuring-the-accuracy-of-our-model)
*   [使用弯头方法选择最佳```K```值](https://zshipu.com/t?url=#choosing-an-optimal-k-value-using-the-elbow-method)
*   [本教程的完整代码](https://zshipu.com/t?url=#the-full-code-for-this-tutorial)
*   [最后的想法](https://zshipu.com/t?url=#final-thoughts)

## 本教程中所需的数据集

您需要做的第一件事是下载我们将在本教程中使用的数据集。我已经上传文件到这个网站。您可以通过[单击此处访问](https://zshipu.com/t?url=https://nickmccullum.com/files/k-nearest-neighbors/classified_data.csv)它。

下载数据集后，需要将文件移动到要处理的目录。之后，打开一个[犹太笔记本](https://zshipu.com/t?url=https://nickmccullum.com/python-course/jupyter-notebook-basics/)，我们可以开始编写Python代码！

## 本教程中所需的库

为了编写一个K近邻算法，我们将利用许多开源Python库，包括[NumPy，](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/numpy/)[熊猫](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/pandas-dataframes/)，和[scikit-学习](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/introduction-scikit-learn/)。

通过编写以下导入语句来开始 Python 脚本：

  <code>import numpy as np

import pandas as pd

import matplotlib.pyplot as plt

import seaborn as sns

%matplotlib inline</code> 

## 将数据集导入我们的 Python 脚本

我们的下一步是将文件导入到我们的 Python 脚本中。熊猫图书馆使[将数据导入熊猫数据框架](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/pandas-data-input-output/)变得容易。```classified_data.csv```

由于数据集存储在文件中，我们将使用 方法执行此操作：```csv``````read_csv```

  <code>raw_data = pd.read_csv('classified_data.csv')</code> 

在 Jupyter 笔记本中打印此 DataFrame 将让您了解数据的外观：

![A pandas DataFrame](https://nickmccullum.com/images/python-machine-learning/k-nearest-neighbors/pandas-dataframe.png)

您会注意到，DataFrame 以一个未命名的列开头，该列的值等于 DataFrame 的索引。我们可以通过对将数据集导入到 Python 脚本的命令进行细微调整来解决此问题：

  <code>raw_data = pd.read_csv('classified_data.csv', index_col = 0)</code> 

接下来，让我们看一下此数据集中包含的实际功能。您可以使用以下语句打印数据集的列名称列表：

  <code>print(raw_data.columns)</code> 

这将返回：

  <code>Index(['WTT', 'PTI', 'EQW', 'SBI', 'LQE', 'QWG', 'FDJ', 'PJF', 'HQE', 'NXJ',

       'TARGET CLASS'],

      dtype='object')</code> 

由于这是一个分类数据集，我们不知道这些列中的任何一个意味着什么。就目前而言，它足以识别每个列都是数值的，因此非常适合使用机器学习技术进行建模。

## 标准化数据集

由于 K 最近的邻域算法通过使用最接近数据的观测值对数据点进行预测，因此数据集中要素的比例很重要。

因此，机器学习从业者通常采用数据集，这意味着调整每个值，使其大致处于相同的规模。```standardize``````x```

幸运的是，包括一些优秀的功能，这样做很少头痛。```scikit-learn```

首先，我们需要从 导入 类。向 Python 脚本添加以下命令以执行此操作：```StandardScaler``````scikit-learn```

  <code>from sklearn.preprocessing import StandardScaler</code> 

此函数的作用与本课程前面使用的 和 类类似。我们将要创建此类的实例，然后将该类的实例适合我们的数据集。```LinearRegression``````LogisticRegression```

首先，让我们创建一个用以下语句命名的类的实例：```StandardScaler``````scaler```

  <code>scaler = StandardScaler()</code> 

现在，我们可以使用 方法在数据集上训练此实例：```fit```

  <code>scaler.fit(raw_data.drop('TARGET CLASS', axis=1))</code> 

现在，我们可以使用 该方法来标准化数据集中的所有要素，以便它们大致相同的比例。我们将这些缩放的要素分配给名为 ： 的变量：```transform``````scaled_featuers```

  <code>scaled_features = scaler.transform(raw_data.drop('TARGET CLASS', axis=1))</code> 

这实际上创建了一个[NumPy数组](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/numpy-arrays/)的所有功能在数据集中，我们希望它是[熊猫数据帧](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/pandas-dataframes/)。相反。

幸运的是，这是一个简单的解决方法。我们只需将变量包装在方法中，并将此 DataFrame 分配给一个使用适当参数调用的新变量来指定列名称：```scaled_features``````pd.DataFrame``````scaled_data```

  <code>scaled_data = pd.DataFrame(scaled_features, columns = raw_data.drop('TARGET CLASS', axis=1).columns)</code> 

现在，我们已经导入了数据集并标准化了数据集的功能，我们准备将数据集拆分为训练数据和测试数据。

## 将数据集拆分为训练数据和测试数据

我们将使用与列表解包相结合的函数从机密数据集创建训练数据和测试数据。```train_test_split``````scikit-learn```

首先，您需要从 以下语句的模块导入：```train_test_split``````model_validation``````scikit-learn```

  <code>from sklearn.model_selection import train_test_split</code> 

接下来，我们需要指定将传递到此函数的 和 值。```x``````y``````train_test_split```

这些值将是我们以前创建的 DataFrame。这些值将是原始数据帧的列。```x``````scaled_data``````y``````TARGET CLASS``````raw_data```

您可以使用以下语句创建这些变量：

  <code>x = scaled_data

y = raw_data['TARGET CLASS']</code> 

接下来，您需要使用这两个参数和一个合理的 运行函数。我们将使用 30% 的 参数，为函数提供以下参数：```train_test_split``````test_size``````test_size```

  <code>x_training_data, x_test_data, y_training_data, y_test_data = train_test_split(x, y, test_size = 0.3)</code> 

现在，我们的数据集已拆分为训练数据和测试数据，我们已准备好开始训练我们的模型！

## 训练 K 最近邻居模型

让我们从 导入 开始：```KNeighborsClassifier``````scikit-learn```

  <code>from sklearn.neighbors import KNeighborsClassifier</code> 

接下来，让我们创建类的实例并将其分配给名为```KNeighborsClassifier``````model```

此类需要名为 的参数，该参数等于要构建的 K 最近邻域算法的值。首先，让我们指定 ：```n_neighbors``````K``````n_neighbors = 1```

  <code>model = KNeighborsClassifier(n_neighbors = 1)</code> 

现在，我们可以使用 该方法和我们的 和 变量训练我们的 K 最接近邻域模型：```fit``````x_training_data``````y_training_data```

  <code>model.fit(x_training_data, y_training_data)</code> 

现在，让我们用我们新训练的K近邻算法进行一些预测！

## 使用我们的 K 近邻算法进行预测

我们可以用我们的K近邻算法进行预测，就像我们在本课程前面使用[线性回归](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/linear-regression-python/)和[逻辑回归](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/logistic-regression-python/)模型一样：通过使用该方法并传入我们的变量。```predict``````x_test_data```

更具体地说，下面介绍如何进行预测并将其分配给一个变量，称为 ：```predictions```

  <code>predictions = model.predict(x_test_data)</code> 

让我们在本教程的下一节中探讨我们的准确程度。```predictions```

## 测量我们模型的准确性

我们在逻辑回归教程中看到了内置功能，便于测量机器学习分类模型的性能。```scikit-learn```

现在，让我们将其中两个函数 （ 和 ） 导入到我们的报告中：```classification_report``````confuson_matrix```

  <code>from sklearn.metrics import classification_report

from sklearn.metrics import confusion_matrix</code> 

让我们逐个完成这些工作，从 开始。您可以使用以下语句生成报表：```classfication_report```

  <code>print(classification_report(y_test_data, predictions))</code> 

这将生成：

  <code>precision    recall  f1-score   support

           0       0.94      0.85      0.89       150

           1       0.86      0.95      0.90       150

    accuracy                           0.90       300

   macro avg       0.90      0.90      0.90       300

weighted avg       0.90      0.90      0.90       300</code> 

同样，您可以使用以下语句生成混淆矩阵：

  <code>print(confusion_matrix(y_test_data, predictions))</code> 

这将生成：

  <code>[[141  12]

 [ 18 129]]</code> 

查看这些性能指标，我们的模型看起来已经相当高性能。它仍然可以改进。

在下一节中，我们将了解如何通过为 选择更好的值来提高 K 最接近邻域模型的性能。```K```

## 使用弯头方法选择最佳值```K```

在本节中，我们将使用弯头方法为 K 最近的邻域算法选择 的优值。```K```

弯头方法涉及遍历不同的 K 值，并在应用于测试数据时选择误差率最低的值。

首先，让我们创建一个名为 的空[列表](https://zshipu.com/t?url=https://nickmccullum.com/python-course/lists/)。我们将循环遍历不同的值，并将其错误率追加到此列表中。```error_rates``````K```

  <code>error_rates = []</code> 

接下来，我们需要创建一个 Python 循环，循环遍历我们想要在每次迭代中测试和执行以下功能的不同值：```K```

*   从```KNeighborsClassifier``````scikit-learn```
*   使用我们的培训数据训练新模型
*   对我们的测试数据进行预测
*   计算每个错误预测的平均值差（这个预测越低，我们的模型越准确）

下面是对 和 之间的值执行此操作的代码：```K``````1``````100```

  <code>for i in np.arange(1, 101):

    new_model = KNeighborsClassifier(n_neighbors = i)

    new_model.fit(x_training_data, y_training_data)

    new_predictions = new_model.predict(x_test_data)

    error_rates.append(np.mean(new_predictions != y_test_data))</code> 

让我们使用快速 matplotlib 可视化来可视化错误率如何以不同值变化：```K```

  <code>plt.plot(error_rates)</code> 

![A plot of our error rates](https://nickmccullum.com/images/python-machine-learning/k-nearest-neighbors/error-rates.png)

如您所见，我们的错误率往往最小化，值约为 50。这意味着，这是一个合适的选择，在简单性和预测能力之间取得平衡。```K``````50``````K```

## 本教程的完整代码

您可以在[此 GitHub 存储库](https://zshipu.com/t?url=https://github.com/nicholasmccullum/python-machine-learning)中查看本教程的完整代码。下面还粘贴如下，供参考：

  <code>#Common imports 
import numpy as np

import pandas as pd

import matplotlib.pyplot as plt

import seaborn as sns

%matplotlib inline

#Import the data set 
raw_data = pd.read_csv('classified_data.csv', index_col = 0)

#Import standardization functions from scikit-learn 
from sklearn.preprocessing import StandardScaler

#Standardize the data set 
scaler = StandardScaler()

scaler.fit(raw_data.drop('TARGET CLASS', axis=1))

scaled_features = scaler.transform(raw_data.drop('TARGET CLASS', axis=1))

scaled_data = pd.DataFrame(scaled_features, columns = raw_data.drop('TARGET CLASS', axis=1).columns)

#Split the data set into training data and test data 
from sklearn.model_selection import train_test_split

x = scaled_data

y = raw_data['TARGET CLASS']

x_training_data, x_test_data, y_training_data, y_test_data = train_test_split(x, y, test_size = 0.3)

#Train the model and make predictions 
from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier(n_neighbors = 1)

model.fit(x_training_data, y_training_data)

predictions = model.predict(x_test_data)

#Performance measurement 
from sklearn.metrics import classification_report

from sklearn.metrics import confusion_matrix

print(classification_report(y_test_data, predictions))

print(confusion_matrix(y_test_data, predictions))

#Selecting an optimal K value 
error_rates = []

for i in np.arange(1, 101):

    new_model = KNeighborsClassifier(n_neighbors = i)

    new_model.fit(x_training_data, y_training_data)

    new_predictions = new_model.predict(x_test_data)

    error_rates.append(np.mean(new_predictions != y_test_data))

plt.figure(figsize=(16,12))

plt.plot(error_rates)</code> 

## 最后的想法

在本教程中，您学习了如何在 Python 中构建第一个 K 最接近邻居的机器学习模型。

以下是您在本教程中学到的内容的简要摘要：

*   分类数据如何是一种常见的工具，用于教学生如何解决他们的第一个K近邻问题
*   为什么在构建 K 近邻模型时标准化数据集很重要
*   如何使用 函数将数据组拆分为训练数据和测试数据```train_test_split```
*   如何训练你的第一个K最近的邻居模型，并与它作出预测
*   如何测量 K 近邻模型的性能
*   如何使用弯头方法在 K 最近邻域模型中选择 K 的最佳值
