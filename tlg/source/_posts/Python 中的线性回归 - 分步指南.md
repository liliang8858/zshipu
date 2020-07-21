
title: Python 中的线性回归 - 分步指南
author: 知识铺
date: 2020-06-21 11:19:43
tags:
---
  

在本课程的最后一课中，您了解了线性回归机器学习算法背后的历史和理论。

本教程将教您如何使用库在 Python 中创建、训练和测试第一个线性回归机器学习模型。```scikit-learn```

## 目录

您可以使用下面的目录跳到此 Python 机器学习教程的特定部分：

*   [我们将在本教程中使用数据集](https://zshipu.com/t?url=#the-data-set-we-will-use-in-this-tutorial)
*   [我们将在本教程中使用库](https://zshipu.com/t?url=#the-libraries-we-will-use-in-this-tutorial)
*   [导入数据集](https://zshipu.com/t?url=#importing-the-data-set)
*   [了解数据集](https://zshipu.com/t?url=#understanding-the-data-set)
*   [构建机器学习线性回归模型](https://zshipu.com/t?url=#building-a-machine-learning-linear-regression-model)
*   [将我们的数据集拆分为训练数据和测试数据](https://zshipu.com/t?url=#splitting-our-data-set-into-training-data-and-test-data)
*   [构建和培训模型](https://zshipu.com/t?url=#building-and-training-the-model)
*   [从我们的模型进行预测](https://zshipu.com/t?url=#making-predictions-from-our-model)
*   [测试模型的性能](https://zshipu.com/t?url=#testing-the-performance-of-our-model)
    *   [平均绝对误差 （MAE）](https://zshipu.com/t?url=#mean-absolute-error-mae)
    *   [平均平方误差 （MSE）](https://zshipu.com/t?url=#mean-squared-error-mse)
    *   [根均值平方错误 （RMSE）](https://zshipu.com/t?url=#root-mean-squared-error-rmse)
*   [本教程的完整代码](https://zshipu.com/t?url=#the-complete-code-for-this-tutorial)
*   [最后的想法](https://zshipu.com/t?url=#final-thoughts)

## 我们将在本教程中使用数据集

由于线性回归是我们在本课程中学习的第一个机器学习模型，我们将在本教程中使用人工创建的数据集。这将使您能够专注于学习机器学习概念，并避免花费不必要的时间来清理或操作数据。

更具体地说，我们将使用一组住房数据，并试图预测房价。在构建模型之前，我们首先需要导入所需的库。

## 我们将在本教程中使用库

我们需要导入的第一个库是[熊猫](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/pandas-dataframes/)，它是"面板数据"的波特曼托，是最常用的Python库，用于处理表格数据。

在别名下导入是约定的。您可以使用以下语句导入：```pandas``````pd``````pandas```

  <code>import pandas as pd</code> 

接下来，我们需要导入[NumPy，](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/numpy/)这是一个流行的数值计算库。Numpy 以其[NumPy 数组](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/numpy-arrays/)数据结构及其有用的方法[重塑](https://zshipu.com/t?url=https://nickmccullum.com/numpy-np-reshape/)、[进行和](https://zshipu.com/t?url=https://nickmccullum.com/how-to-use-numpy-arange/)[追加](https://zshipu.com/t?url=https://nickmccullum.com/numpy-np-append/)而闻名。

在别名下导入 NumPy 是约定的。您可以使用以下语句导入：```np``````numpy```

  <code>import numpy as np</code> 

接下来，我们需要导入[matplotlib，](https://zshipu.com/t?url=https://nickmccullum.com/python-visualization/how-to-import-matplotlib/)这是 Python 最受欢迎的[数据可视化](https://zshipu.com/t?url=https://nickmccullum.com/python-visualization/)库。

```matplotlib```通常导入在别名 下。您可以使用以下语句导入：```plt``````matplotlib```

  <code>import matplotlib.pyplot as plt

%matplotlib inline</code> 

该语句将导致我们的可视化效果直接嵌入到 Jupyter 笔记本中，从而更易于访问和解释。```%matplotlib inline``````matplotlib```

最后，您需要导入 ，这是另一个 Python 数据可视化库，它使得使用 matplotlib 创建美丽的可视化效果变得更加容易。```seaborn```

您可以使用以下语句导入：```seaborn```

  <code>import seaborn as sns</code> 

总之，以下是本教程中所需的所有导入：

  <code>import pandas as pd

import numpy as np

import matplotlib.pyplot as plt

%matplotlib inline

import seaborn as sns</code> 

在未来的课程中，我将具体说明哪些进口是必要的，但我不会像我在这里那样详细解释每个进口。

## 导入数据集

如前所述，我们将使用一组房屋信息。我们将使用

数据集已上载到我的网站，作为以下 URL 的文件：```.csv```

 <code>https://nickmccullum.com/files/Housing_Data.csv</code> 

要将数据集导入[Jupyter 笔记本](https://zshipu.com/t?url=https://nickmccullum.com/python-course/jupyter-notebook-basics/)，您首先应该通过复制此 URL 并将其粘贴到浏览器中来下载文件。然后，将文件移动到与 Jupyter 笔记本相同的目录中。

完成此操作后，以下[Python](https://zshipu.com/t?url=https://courses.nickmccullum.com/courses/enroll/python-for-finance/)语句将住宅数据集导入到 Jupyter 笔记本中：

  <code>raw_data = pd.read_csv('Housing_Data.csv')</code> 

此数据集具有许多功能，包括：

*   房屋面积的平均收入
*   该地区平均客房数
*   房子卖的价格
*   房子的地址

此数据是随机生成的，因此您将看到一些通常没有意义的细微差别（例如，在数字后大量小数位数，该数字应该是整数）。

## 了解数据集

现在，数据集已在变量下导入，您可以使用 方法获取有关数据集的一些高级信息。具体来说，跑步可以：```raw_data``````info``````raw_data.info()```

 <code><class 'pandas.core.frame.DataFrame'>

RangeIndex: 5000 entries, 0 to 4999

Data columns (total 7 columns):

Avg. Area Income                5000 non-null float64

Avg. Area House Age             5000 non-null float64

Avg. Area Number of Rooms       5000 non-null float64

Avg. Area Number of Bedrooms    5000 non-null float64

Area Population                 5000 non-null float64

Price                           5000 non-null float64

Address                         5000 non-null object

dtypes: float64(6), object(1)

memory usage: 273.6+ KB</code> 

了解此数据集的另一个有用方法是生成对图。可以为此使用 方法，并将整个方法作为参数传递。下面是用于此项的整个语句：```seaborn``````pairplot``````DataFrame```

  <code>sns.pairplot(raw_data)</code> 

此语句的输出如下：

![A seaborn pairplot](https://nickmccullum.com/images/python-machine-learning/linear-regression/machine-learning-pairplot.png)

接下来，让我们开始构建线性回归模型。

## 构建机器学习线性回归模型

我们需要做的第一件事是将数据拆分为（其中包含我们将用于进行预测的数据）和 a（其中包含我们试图预测的数据）。```x-array``````y-array```

首先，我们应该决定要包括哪些列。您可以使用 生成 DataFrame 列的列表，该列表输出：```raw_data.columns```

 <code>Index(['Avg. Area Income', 'Avg. Area House Age', 'Avg. Area Number of Rooms',

       'Avg. Area Number of Bedrooms', 'Area Population', 'Price', 'Address'],

      dtype='object')</code> 

我们将在 除 外将使用所有这些变量（因为这是我们试图预测的变量）和（因为它仅包含文本）。```x-array``````Price``````Address```

让我们创建我们的，并将其分配给一个称为 的变量。```x-array``````x```

  <code>x = raw_data[['Avg. Area Income', 'Avg. Area House Age', 'Avg. Area Number of Rooms',

       'Avg. Area Number of Bedrooms', 'Area Population']]</code> 

接下来，让我们创建我们的，并将其分配给一个称为 的变量。```y-array``````y```

  <code>y = raw_data['Price']</code> 

我们成功地将数据集划分为（即模型的输入值）和 （即模型的输出值）。我们将在下一节中了解如何将数据集进一步拆分为训练数据和测试数据。```x-array``````y-array```

## 将我们的数据集拆分为训练数据和测试数据

```scikit-learn```使将数据集划分为训练数据和测试数据非常容易。为此，我们需要从 模块导入函数。```train_test_split``````model_selection``````scikit-learn```

下面是执行此操作的完整代码：

  <code>from sklearn.model_selection import train_test_split</code> 

数据接受三个参数：```train_test_split```

*   我们```x-array```
*   我们```y-array```
*   测试数据所需的大小

有了这些参数，函数将为我们拆分我们的数据！如果我们希望我们的测试数据占整个数据集的 30%，则下面是执行此操作的代码：```train_test_split```

  <code>x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.3)</code> 

让我们解压缩这里发生的事情。

该函数返回长度为 4 的[Python 列表](https://zshipu.com/t?url=https://nickmccullum.com/python-course/lists/)，其中列表中的每个项目分别为 、和 。然后，我们使用列表解包将正确的值分配给正确的变量名称。```train_test_split``````x_train``````x_test``````y_train``````y_test```

现在，我们已经正确地划分了我们的数据集，是时候构建和训练我们的线性回归机器学习模型了。

## 构建和培训模型

我们需要做的第一件事是从导入估计器。下面是用于此的 Python 语句：```LinearRegression``````scikit-learn```

  <code>from sklearn.linear_model import LinearRegression</code> 

接下来，我们需要创建 Python 对象的实例。我们将将其分配给一个称为 的变量。下面是用于此代码的代码：```Linear Regression``````model```

  <code>model = LinearRegression()</code> 

我们可以使用'的方法，根据我们的训练数据来训练这个模型。```scikit-learn``````fit```

  <code>model.fit(x_train, y_train)</code> 

我们的模型现在已经接受培训。您可以使用以下语句检查模型的每个系数：

  <code>print(model.coef_)</code> 

此打印件：

 <code>[2.16176350e+01 1.65221120e+05 1.21405377e+05 1.31871878e+03

 1.52251955e+01]</code> 

同样，下面是如何查看回归方程的截取：

  <code>print(model.intercept_)</code> 

此打印件：

 <code>-2641372.6673013503</code> 

查看系数的更好方法是将它们放置在 DataFrame 中。这可以通过以下语句完成：

  <code>pd.DataFrame(model.coef_, x.columns, columns = ['Coeff'])</code> 

在这种情况下，输出更易于解释：

![A coefficient DataFrame in a Jupyter Notebook](https://nickmccullum.com/images/python-machine-learning/linear-regression/coefficient-dataframe.png)

让我们花点时间了解一下这些系数的含义。让我们具体看一下变量，其系数约为 。```Area Population``````15```

这意味着，如果保持所有其他变量常数，则一个单位的增加将导致预测变量中的单位增加 - 在这种情况下，```Area Population``````15``````Price```

不同地说，特定变量上的大系数意味着该变量对您尝试预测的变量的值有很大的影响。同样，小值的影响很小。

现在，我们已经生成了第一个机器学习线性回归模型，是时候使用该模型从测试数据集进行预测了。

## 从我们的模型进行预测

```scikit-learn```使从机器学习模型进行预测变得非常容易。您只需调用前面创建的变量上的方法。```predict``````model```

由于变量旨在进行预测，因此它仅接受参数。它将为您生成值！```predict``````x-array``````y```

下面是使用 方法从我们的模型生成预测所需的代码：```predict```

  <code>predictions = model.predict(x_test)</code> 

变量保存存储在 中的要素_的预测_值。由于我们使用 方法将_实际_值存储在 中，接下来我们要执行的是将数组的值与 的值进行比较。```predictions``````x_test``````train_test_split``````y_test``````predictions``````y_test```

一个简单的方法是使用散点图绘制两个数组。使用 方法轻松构建[垫图利布散点图](https://zshipu.com/t?url=https://nickmccullum.com/python-visualization/scatterplot/)。下面是以下代码：```plt.scatter```

  <code>plt.scatter(y_test, predictions)</code> 

下面是此代码生成的散点图：

![A scatterplot of predicted values against realized values in a machine learning linear regression model](https://nickmccullum.com/images/python-machine-learning/linear-regression/regression-scatterplot.png)

如您所见，我们的预测值非常接近数据集中观测值的实际值。此散点图中完全直线对角线表示我们的模型完美地预测了这些值。```y-array```

直观地评估模型性能的另一种方法是绘制其 ，即实际值和预测值之间的差异。```residuals``````y-array``````y-array```

一个简单的方法是使用以下语句：

  <code>plt.hist(y_test - predictions)</code> 

下面是此代码生成的可视化效果：

![A residual histogram from our linear regression machine learning model](https://nickmccullum.com/images/python-machine-learning/linear-regression/residuals-histogram.png)

这是我们机器学习模型中残差的直方图。

您可能会注意到，我们机器学习模型中的残差似乎正常分布。这是一个非常好的迹象！

它表明我们选择了适当的模型类型（在本例中为线性回归），以便从数据集进行预测。我们将在本课程的后面部分学习有关如何确保您使用正确的模型。

## 测试模型的性能

我们在本课程的开头了解到，回归机器学习模型有三个主要性能指标：

*   平均绝对误差
*   均方误差
*   根均方误差

现在，我们将了解如何计算本教程中构建的模型的每个指标。在继续操作之前，请在 Jupyter 笔记本中运行以下导入语句：

  <code>from sklearn import metrics</code> 

### 平均绝对误差 （MAE）

您可以使用以下语句计算 Python 中的平均绝对错误：

  <code>metrics.mean_absolute_error(y_test, predictions)</code> 

### 平均平方误差 （MSE）

同样，您可以使用以下语句计算 Python 中的平均平方错误：

  <code>metrics.mean_squared_error(y_test, predictions)</code> 

### 根均值平方错误 （RMSE）

与均值绝对误差和均方误差不同，实际上没有用于计算根均方误差的内置方法。```scikit-learn```

幸运的是，它真的不需要。由于根平均平方误差只是均方误差的平方根，因此您可以使用 NumPy 的方法轻松计算它：```sqrt```

  <code>np.sqrt(metrics.mean_squared_error(y_test, predictions))</code> 

## 本教程的完整代码

下面是此 Python 机器学习教程的整个代码。您也可以[在此 GitHub 存储库](https://zshipu.com/t?url=https://github.com/nicholasmccullum/python-machine-learning/tree/master)中查看它。

  <code>import pandas as pd

import numpy as np

import matplotlib.pyplot as plt

import seaborn as sns

%matplotlib inline

raw_data = pd.read_csv('Housing_Data.csv')

x = raw_data[['Avg. Area Income', 'Avg. Area House Age', 'Avg. Area Number of Rooms',

       'Avg. Area Number of Bedrooms', 'Area Population']]

y = raw_data['Price']

from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.3)

from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(x_train, y_train)

print(model.coef_)

print(model.intercept_)

pd.DataFrame(model.coef_, x.columns, columns = ['Coeff'])

predictions = model.predict(x_test)

# plt.scatter(y_test, predictions) 
plt.hist(y_test - predictions)

from sklearn import metrics

metrics.mean_absolute_error(y_test, predictions)

metrics.mean_squared_error(y_test, predictions)

np.sqrt(metrics.mean_squared_error(y_test, predictions))</code> 

## 最后的想法

在本教程中，您学习了如何创建、训练和测试第一个线性回归机器学习算法。

以下是您在本教程中学到的内容的简要摘要：

*   如何导入构建线性回归机器学习算法所需的库
*   如何使用将数据集拆分为训练数据和测试数据```scikit-learn```
*   如何使用该模型训练线性回归模型并做出预测```scikit-learn```
*   如何使用线性回归性能指标```scikit-learn```
