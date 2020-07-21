
title: Python 中的决策树和随机林
author: 知识铺
date: 2020-06-21 11:25:57
tags:
---
  

随机林是一种机器学习分类算法，由众多决策树组成。

随机林中的每个决策树都包含对数据集要素的随机采样。此外，在构建每个树时，算法使用数据点的随机采样来训练模型。

在本教程中，您将学习如何在 Python 中构建第一个随机林。如果想在完成后了解有关机器学习的更多信息，本文包括真实数据集、完整代码库以及进一步说明。

## 目录

您可以使用下面的目录跳到此 Python 随机林教程的特定部分：

*   [本教程所需的数据集](https://zshipu.com/t?url=#the-data-set-we-will-need-for-this-tutorial)
*   [本教程所需的导入](https://zshipu.com/t?url=#the-imports-we-will-need-for-this-tutorial)
*   [将数据集导入到我们的 Python 脚本中](https://zshipu.com/t?url=#importing-the-data-set-into-our-python-script)
*   [探索性数据分析](https://zshipu.com/t?url=#exploratory-data-analysis)
    *   [确定数据集的大小](https://zshipu.com/t?url=#determining-the-size-of-the-data-set)
    *   [可视化数据](https://zshipu.com/t?url=#visualizing-the-data)
*   [构建和培训我们的决策树模型](https://zshipu.com/t?url=#building-and-training-our-decision-tree-model)
*   [使用我们的决策树模型进行预测](https://zshipu.com/t?url=#making-predictions-using-our-decision-tree-model)
*   [衡量我们决策树模型的性能](https://zshipu.com/t?url=#measuring-the-performance-of-our-decision-tree-model)
*   [构建和培训我们的随机林模型](https://zshipu.com/t?url=#building-and-training-our-random-forests-model)
*   [使用随机林模型进行预测](https://zshipu.com/t?url=#making-predictions-using-our-random-forest-model)
*   [衡量我们决策树模型的性能](https://zshipu.com/t?url=#measuring-the-performance-of-our-decision-tree-model-1)
*   [本教程的完整代码](https://zshipu.com/t?url=#the-full-code-for-this-tutorial)
*   [最后的想法](https://zshipu.com/t?url=#final-thoughts)

## 本教程所需的数据集

在本教程中，我们将使用一组基福症患者，并构建一个随机林算法来预测患者是否患有这种疾病。

您需要下载数据集，然后才能继续。我已经上传了数据集到我的网站，使这很容易为你。只需[单击此处](https://zshipu.com/t?url=https://nickmccullum.com/files/kyphosis-data.csv)即可下载文件。下载后，将文件移动到相应的目录，然后打开[Jupyter 笔记本](https://zshipu.com/t?url=https://nickmccullum.com/python-course/jupyter-notebook-basics/)。

## 本教程所需的导入

我们将依靠一些开源软件库来构建我们的随机森林模型，包括[NumPy，](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/numpy/)[熊猫](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/pandas/)和[matplotlib。](https://zshipu.com/t?url=https://nickmccullum.com/python-visualization/how-to-import-matplotlib/)让我们首先导入具有以下代码的这些库：

  <code>#Numerical computing libraries 
import pandas as pd

import numpy as np

#Visalization libraries 
import matplotlib.pyplot as plt

import seaborn as sns

%matplotlib inline</code> 

现在，我们的导入已执行，我们已准备好将数据集导入到 Python 脚本中。

## 将数据集导入到我们的 Python 脚本中

您可以使用熊猫的方法将 kyphosis 数据集导入到 Python 脚本中，如下所示：```read_csv```

  <code>raw_data = pd.read_csv('kyphosis-data.csv')</code> 

让我们来看看此数据集中包含的功能：

  <code>Raw_data.columns</code> 

这将返回：

  <code>Index(['Kyphosis', 'Age', 'Number', 'Start'], dtype='object')</code> 

此数据集表示以前患有基福症的一组患者，然后在背部手术后再次进行测试。

该列包含或取决于他们是否患有 kyphosis 的值，而该列包含患者的年龄（以月为月）。该列指示操作中涉及的椎骨数。该列描述操作的顶级椎骨。```Kyphosis``````present``````absent``````Age``````Number``````Start```

现在我们已经导入了数据集，让我们继续执行一些探索性数据分析。

## 探索性数据分析

探索性数据分析是在使用数据集构建机器学习模型之前了解有关数据集的更多知识的过程。它通常涉及计算聚合数据或构建可视化效果。

在构建和培训机器学习模型之前，让我们深入了解一些简短的探索性数据分析。

### 确定数据集的大小

机器学习工程师在构建模型之前应始终了解的一个特征是其数据集的大小。

```pandas```使这很容易确定。只需调用[熊猫数据帧](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/pandas-dataframes/)上的方法，如下所示：```info```

  <code>raw_data.info()</code> 

这将生成：

  <code>RangeIndex: 81 entries, 0 to 80

Data columns (total 4 columns):

Kyphosis    81 non-null object

Age         81 non-null int64

Number      81 non-null int64

Start       81 non-null int64

dtypes: int64(3), object(1)

memory usage: 2.7+ KB</code> 

如您所见，此数据集中有 81 个观测值。这是一个相对较小的数据集，用于执行机器学习预测，但由于这只是一个教育教程，我们还是可以继续。

### 可视化数据

由于数据集相当小，我们可以使用库轻松可视化每个功能发生的情况。```seaborn```

下面是执行此操作的命令：

  <code>sns.pairplot(raw_data, hue = 'Kyphosis')</code> 

下面是此命令生成的绘图：```seaborn```

![A seaborn pairplot of our Kyphosis data set](https://nickmccullum.com/images/python-machine-learning/random-forests/seaborn-pairplot.png)

现在，我们已经了解数据集的结构，让我们将数据集划分为训练数据和测试数据。

将数据集拆分为训练数据和测试数据

我们将使用'的功能与列表解包相结合，以创建我们的训练数据和测试数据。具体来说，我们将使用 30% 的测试大小。```scikit-learn``````train_test_split```

首先，让我们从 导入 函数：```train_test_split``````scikit-learn```

  <code>from sklearn.model_selection import train_test_split</code> 

接下来，我们需要指定数据集中的 和 数据。数据将是除列之外的所有数据，而数据本身将是列。```x``````y``````x``````Kyphosis``````y``````Kyphosis```

下面是在数据集中创建此除法的 Python 语句：

  <code>x = raw_data.drop('Kyphosis', axis = 1)

y = raw_data['Kyphosis']</code> 

最后，下面是创建训练测试拆分的命令：

  <code>x_training_data, x_test_data, y_training_data, y_test_data = train_test_split(x, y, test_size = 0.3)</code> 

我们成功地将数据集划分为训练数据和测试数据。

接下来，我们将通过构建并训练此数据的决策树算法来继续本教程。

稍后，我们还将在相同的训练数据和测试数据上构建一个随机林模型，并查看其结果与更基本的决策树模型的比较情况。

## 构建和培训我们的决策树模型

我们需要做的第一件事是从 模块导入类。运行以下命令以执行此操作：```DecisionTreeClassifier``````tree``````scikit-learn```

  <code>from sklearn.tree import DecisionTreeClassifier</code> 

现在我们需要创建此类的实例并将其分配给变量：```model```

  <code>model = DecisionTreeClassifier()</code> 

我们的模型已经创建。现在我们需要使用我们的培训数据来训练它。

这样做的方式与本课程前面线性[回归](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/linear-regression-python/)、[逻辑回归](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/logistic-regression-python/)和[K 最近邻域](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/k-nearest-neighbors-python/)模型相同：通过使用 方法。```fit```

调用对象上的方法并传递 和 ，如下所示：```fit``````model``````x_training_data``````y_training_data```

  <code>model.fit(x_training_data, y_training_data)</code> 

我们的基福西模型已经过培训。让我们使用此模型进行一些预测。

## 使用我们的决策树模型进行预测

要使用对象进行预测，只需调用它上的方法并传递变量即可。您可以将这些预测分配给名为 的变量。```model``````predict``````x_test_data``````predictions```

更具体地说，下面是执行此操作的代码：

  <code>predictions = model.predict(x_test_data)</code> 

现在，我们已经进行了预测，让我们使用一些内置功能来评估模型的准确性。```scikit-learn```

## 衡量我们决策树模型的性能

我们将使用''的内置函数，并评估我们决策树机器学习模型的性能。```scikit-learn``````classification_report``````confusion_matrix```

首先，让我们导入这些函数：

  <code>from sklearn.metrics import classification_report

from sklearn.metrics import confusion_matrix</code> 

接下来，让我们生成一个 ：```classification_report```

  <code>print(classification_report(y_test_data, predictions))</code> 

这将生成：

  <code>precision    recall  f1-score   support

      absent       0.85      0.89      0.87        19

     present       0.60      0.50      0.55         6

    accuracy                           0.80        25

   macro avg       0.72      0.70      0.71        25

weighted avg       0.79      0.80      0.79        25</code> 

我们可以以类似的方式生成：```confusion_matrix```

  <code>print(confusion_matrix(y_test_data, predictions))</code> 

这将生成：

  <code>[[17  2]

 [ 3  3]]</code> 

总体而言，我们的模型似乎对测试数据进行预测方面做得相当不错。它只对 5 个数据点（2 个误报和 3 个假负数）进行不正确的预测，这一点如 所示。```confusion_matrix```

在下一节中，我们将开始构建一个随机林模型，在本教程的后面部分，我们将将其性能与对象进行比较。```model```

## 构建和培训我们的随机林模型

要构建随机林模型，我们首先需要从 导入模型。下面是执行此操作的命令：```scikit-learn```

  <code>from sklearn.ensemble import RandomForestClassifier</code> 

接下来，我们需要创建随机林模型。

由于我们不想覆盖我们之前创建的变量，我们不会命名它。相反，让我们命名它：```model``````model``````random_forest_model```

  <code>random_forest_model = RandomForestClassifier()</code> 

请注意，类具有一个名为 的参数，该参数指定林中的树数。其默认值为 ，但如果需要，可以更改此值。我们将在本教程中使用 的默认值。```RandomForestClassifier``````n_estimators``````100``````100```

注意训练随机林模型的时间。为此，我们使用 的方法，就像以前一样：```fit```

  <code>random_forest_model.fit(x_training_data, y_training_data)</code> 

我们的随机森林模型已经过训练。让我们继续用这个新的合奏模型做一些预测。

## 使用随机林模型进行预测

让我们使用 方法使用对象计算一些预测，并将它们分配给名为 的变量：```predict``````random_forest_model``````random_forest_predictions```

  <code>random_forest_predictions = random_forest_model.predict(x_test_data)</code> 

接下来我们将评估这些预测的准确性。

## 衡量我们决策树模型的性能

正如我们使用基本决策树模型时所做的那样，让我们生成 和 。```classification_report``````confusion_matrix```

让我们从 开始：```classification_report```

  <code>print(classification_report(y_test_data, random_forest_predictions))</code> 

以下是此报告的输出：

  <code>precision    recall  f1-score   support

      absent       0.82      0.95      0.88        19

     present       0.67      0.33      0.44         6

    accuracy                           0.80        25

   macro avg       0.74      0.64      0.66        25

weighted avg       0.78      0.80      0.77        25</code> 

现在，让我们生成一个混淆矩阵：

  <code>print(confusion_matrix(y_test_data, random_forest_predictions))</code> 

下面是此混淆矩阵的输出：

  <code>[[18  1]

 [ 4  2]]</code> 

在这种情况下，我们的随机林的表现没有明显优于我们的决策树模型。

这主要是因为我们的数据集很小。在几乎所有情况下，随机林的性能都会优于基本决策树，尤其是在您用于进行预测的数据集变得越来越大时。

## 本教程的完整代码

您可以在[此 GitHub 存储库](https://zshipu.com/t?url=https://github.com/nicholasmccullum/python-machine-learning)中查看本教程的完整代码。下面还粘贴如下，供参考：

  <code>#Numerical computing libraries 
import pandas as pd

import numpy as np

#Visalization libraries 
import matplotlib.pyplot as plt

import seaborn as sns

%matplotlib inline

raw_data = pd.read_csv('kyphosis-data.csv')

raw_data.columns

#Exploratory data analysis 
raw_data.info()

sns.pairplot(raw_data, hue = 'Kyphosis')

#Split the data set into training data and test data 
from sklearn.model_selection import train_test_split

x = raw_data.drop('Kyphosis', axis = 1)

y = raw_data['Kyphosis']

x_training_data, x_test_data, y_training_data, y_test_data = train_test_split(x, y, test_size = 0.3)

#Train the decision tree model 
from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()

model.fit(x_training_data, y_training_data)

predictions = model.predict(x_test_data)

#Measure the performance of the decision tree model 
from sklearn.metrics import classification_report

from sklearn.metrics import confusion_matrix

print(classification_report(y_test_data, predictions))

print(confusion_matrix(y_test_data, predictions))

#Train the random forests model 
from sklearn.ensemble import RandomForestClassifier

random_forest_model = RandomForestClassifier()

random_forest_model.fit(x_training_data, y_training_data)

random_forest_predictions = random_forest_model.predict(x_test_data)

#Measure the performance of the random forest model 
print(classification_report(y_test_data, random_forest_predictions))

print(confusion_matrix(y_test_data, random_forest_predictions))</code> 

## 最后的想法

在本教程中，您了解了如何在 Python 中构建决策树和随机林。

以下是您在本文中学到的内容的简要摘要：

*   如何使用构建决策树模型```scikit-learn```
*   如何使用随机林模型```scikit-learn```
*   随机林通常比决策树更善于预测 ， 尤其是对于大型数据集
