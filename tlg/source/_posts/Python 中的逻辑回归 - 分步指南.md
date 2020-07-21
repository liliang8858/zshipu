
title: Python 中的逻辑回归 - 分步指南
author: 知识铺
date: 2020-06-21 11:23:42
tags:
---
  

在上一篇文章中，我们了解了逻辑回归的理论基础，以及如何使用它来解决机器学习分类问题。

本教程将教您如何在 Python 中构建逻辑回归模型，从而教您有关逻辑回归机器学习技术的更多信息。

## 目录

您可以使用下面的目录跳到此 Python 逻辑回归教程的特定部分：

*   [我们将在本教程中使用数据集](https://zshipu.com/t?url=#the-data-set-we-will-be-using-in-this-tutorial)
*   [我们将在本教程中使用导入](https://zshipu.com/t?url=#the-imports-we-will-be-using-in-this-tutorial)
*   [将数据集导入到我们的 Python 脚本中](https://zshipu.com/t?url=#importing-the-data-set-into-our-python-script)
*   [通过探索性数据分析了解我们的数据集](https://zshipu.com/t?url=#learning-about-our-data-set-with-exploratory-data-analysis)
    *   [每个分类类别的流行程度](https://zshipu.com/t?url=#the-prevalence-of-each-classification-category)
    *   [性别之间的生存率](https://zshipu.com/t?url=#survival-rates-between-genders)
    *   [乘客舱位之间的生存率](https://zshipu.com/t?url=#survival-rates-between-passenger-classes)
    *   [泰坦尼克号乘客的年龄分布](https://zshipu.com/t?url=#the-age-distribution-of-titanic-passengers)
    *   [泰坦尼克号乘客的票价分配](https://zshipu.com/t?url=#the-ticket-price-distribution-of-titanic-passengers)
*   [从我们的数据集中删除空数据](https://zshipu.com/t?url=#removing-null-data-from-our-data-set)
*   [构建逻辑回归模型](https://zshipu.com/t?url=#building-a-logistic-regression-model)
*   [删除缺少过多数据的列](https://zshipu.com/t?url=#removing-columns-with-too-much-missing-data)
*   [使用虚拟变量处理分类数据](https://zshipu.com/t?url=#handling-categorical-data-with-dummy-variables)
*   [向```熊猫```数据帧添加虚拟变量](https://zshipu.com/t?url=#adding-dummy-variables-to-the-pandas-dataframe)
*   [从数据集中删除不必要的列](https://zshipu.com/t?url=#removing-unnecessary-columns-from-the-data-set)
*   [创建训练数据和测试数据](https://zshipu.com/t?url=#creating-training-data-and-test-data)
*   [训练逻辑回归模型](https://zshipu.com/t?url=#training-the-logistic-regression-model)
*   [使用我们的逻辑回归模型进行预测](https://zshipu.com/t?url=#making-predictions-with-our-logistic-regression-model)
*   [衡量逻辑回归机器学习模型的性能](https://zshipu.com/t?url=#measuring-the-performance-of-a-logistic-regression-machine-learning-model)
*   [本教程的完整代码](https://zshipu.com/t?url=#the-full-code-for-this-tutorial)
*   [最后的想法](https://zshipu.com/t?url=#final-thoughts)

## 我们将在本教程中使用数据集

泰坦尼克号数据集是一个非常著名的数据集，包含泰坦尼克号上乘客的特征。它通常用作逻辑回归问题的介绍性数据集。

在本教程中，我们将使用泰坦尼克号数据集与 Python 逻辑回归模型相结合，以预测乘客是否在泰坦尼克号失事中幸存下来。

[原始的泰坦尼克号数据集](https://zshipu.com/t?url=https://www.kaggle.com/c/titanic)在Kaggle.com上公开提供，这是一个托管数据集和数据科学竞赛的网站。

为了让您在本课程中轻松学习，我们将使用半清洁版本的泰坦尼克号数据集，这将节省您在数据清理和操作方面的时间。

清理过的泰坦尼克号数据集实际上已经可供你使用。您可以通过单击以下链接下载数据文件：

*   [泰坦尼克号数据](https://zshipu.com/t?url=https://nickmccullum.com/files/logistic-regression/titanic_train.csv)

下载此文件后，在同一工作目录中打开[Jupyter 笔记本](https://zshipu.com/t?url=https://nickmccullum.com/python-course/jupyter-notebook-basics/)，我们可以开始构建[逻辑回归模型。](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/introduction-logistic-regression/)

## 我们将在本教程中使用导入

与之前一样，我们将在本教程中使用多个开源软件库。以下是在通过 Python 逻辑回归模型编写代码时需要运行的导入：

  <code>import pandas as pd

import numpy as np

import matplotlib.pyplot as plt

%matplotlib inline

import seaborn as sns</code> 

接下来，我们需要将泰坦尼克号数据集导入到 Python 脚本中。

## 将数据集导入到我们的 Python 脚本中

我们将使用熊猫的方法将我们的文件导入[到熊猫数据帧](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/pandas-dataframes/)中。```read_csv``````csv``````titanic_data```

下面是执行此操作的代码：

  <code>titanic_data = pd.read_csv('titanic_train.csv')</code> 

接下来，让我们调查泰坦尼克号数据集中实际包含的数据。有两种主要方法可以执行此操作（具体使用数据帧）：```titanic_data```

*   该方法将打印 DataFrame 的前 5 行。你可以用任何你想的号码来代替。```titanic_data.head(5)``````5```
*   您还可以打印 ，这将显示名为的列。```titanic_data.columns```

运行第二个命令 （） 生成以下输出：```titanic_data.columns```

  <code>Index(['PassengerId', 'Survived', 'Pclass', 'Name', 'Sex', 'Age', 'SibSp',

       'Parch', 'Ticket', 'Fare', 'Cabin', 'Embarked'],

      dtype='object'</code> 

这些是数据框架中列的名称。以下是每个数据点的简要说明：

*   ```PassengerId```：泰坦尼克号上每位乘客的数字标识符。
*   ```Survived```：一个二进制标识符，指示乘客是否在泰坦尼克号失事中幸存下来。此变量将保存的值，如果他们存活下来，如果他们没有生存。```1``````0```
*   ```Pclass```：乘客的舱位。这可以容纳 值 ， 或 ， 取决于乘客在船舶中的位置。```1``````2``````3```
*   ```Name```：乘客的名字。
*   ```Sex```：男性或女性。
*   ```Age```：乘客的年龄（以年数表示）。
*   ```SibSp```：船上兄弟姐妹和配偶人数。
*   ```Parch```：船上的父母和孩子的数量。
*   ```Ticket```：乘客的票号。
*   ```Fare```：乘客在泰坦尼克号上买票花了多少钱。

接下来，我们将使用一些基本的探索性数据分析技术，详细了解我们的数据集。

## 通过探索性数据分析了解我们的数据集

### 每个分类类别的流行程度

当使用机器学习技术对分类问题进行建模时，最好了解类别之间的比率。对于这个具体问题，了解我们的培训数据中有多少幸存者与非幸存者是很有用的。

可视化的一种简单方法是使用绘图。在此示例中，您可以使用以下 Python 代码创建相应的绘图：```seaborn``````countplot``````seasborn```

  <code>sns.countplot(x='Survived', data=titanic_data)</code> 

这将生成以下绘图：

![A seaborn countplot](https://nickmccullum.com/images/python-machine-learning/logistic-regression/seaborn-countplot.png)

正如你们所看到的，非幸存者的发生率比幸存者多得多。

### 性别之间的生存率

比较与其他数据功能相关的存活率也很有用。例如，我们可以比较使用以下 Python 代码的值之间的生存率：```Male``````Female``````Sex```

  <code>sns.countplot(x='Survived', hue='Sex', data=titanic_data)</code> 

这将生成以下绘图：

![A seaborn countplot with a Sex hue](https://nickmccullum.com/images/python-machine-learning/logistic-regression/seaborn-countplot-hue-sex.png)

正如您所看到的，有一个乘客更有可能是非幸存者比乘客与.```Sex``````Male``````Sex``````Female```

### 乘客舱位之间的生存率

我们可以使用变量执行类似的分析，看看哪些乘客级别是最有可能（也是最少）的乘客是幸存者。```Pclass```

下面是执行此操作的代码：

  <code>sns.countplot(x='Survived', hue='Pclass', data=titanic_data)</code> 

这将生成以下绘图：

![A seaborn countplot with a Pclass hue](https://nickmccullum.com/images/python-machine-learning/logistic-regression/seaborn-countplot-hue-pclass.png)

从这个阴谋中最引人注目的观察是，在泰坦尼克号坠毁时，价值为三等舱的乘客更有可能死亡。因为第三类飞机是最便宜的，最不豪华的。```Pclass``````3```

### 泰坦尼克号乘客的年龄分布

我们可以进行的另一个有用的分析是调查泰坦尼克号乘客的年龄分布。[直方图](https://zshipu.com/t?url=https://nickmccullum.com/python-visualization/histogram/)是一个很好的工具。

您可以使用以下代码生成变量的直方图：```Age```

  <code>plt.hist(titanic_data['Age'].dropna())</code> 

请注意，该方法是必要的，因为```dropna()```

下面是此代码生成的直方图：

![A histogram of age variables from the titanic data set](https://nickmccullum.com/images/python-machine-learning/logistic-regression/age-histogram.png)

正如您所看到的，泰坦尼克号乘客的集中值介于 和 之间。```Age``````20``````40```

### 泰坦尼克号乘客的票价分配

我们将使用的最后一种探索性数据分析技术是调查泰坦尼克号数据集中票价的分布情况。

您可以使用以下代码执行此操作：

  <code>plt.hist(titanic_data['Fare'])</code> 

这将生成以下绘图：

![A histogram of fare variables from the titanic data set](https://nickmccullum.com/images/python-machine-learning/logistic-regression/fare-histogram.png)

正如您所看到的，泰坦尼克号数据集中有三个不同的价格组。这是有道理的，因为变量还有三个唯一值。差异组对应于不同的类别。```Fare``````Pclass``````Fare``````Pclass```

由于泰坦尼克号数据集是一个真实世界的数据集，它包含一些丢失的数据。我们将在下一节中[学习如何处理缺失的数据](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/missing-data-pandas/)。

## 从我们的数据集中删除空数据

首先，让我们检查数据集包含缺失数据的位置。为此，运行以下命令：

  <code>titanic_data.isnull()</code> 

这将生成布尔值的 DataFrame，如果单元格为空值，则单元格包含该值。下面是一个图像，如下所示：```True``````False```

![A DataFrame of boolean values indicating where null data exists](https://nickmccullum.com/images/python-machine-learning/logistic-regression/missing-values-dataframe.png)

评估此数据集中缺少的数据的一个更有用的方法是创建快速可视化。为此，我们可以使用可视化库。下面是可用于使用库创建 的快速命令：```seaborn``````heatmap``````seaborn```

  <code>sns.heatmap(titanic_data.isnull(), cbar=False)</code> 

下面是生成的可视化效果：

![A DataFrame of boolean values indicating where null data exists](https://nickmccullum.com/images/python-machine-learning/logistic-regression/missing-values-heatmap.png)

在此可视化中，白线表示数据集中缺少的值。您可以看到 和 列包含泰坦尼克号数据集中的大部分缺失数据。```Age``````Cabin```

该列特别包含足够少的缺失量，以便我们可以使用某种形式的数学来填充缺失的数据。另一方面，数据缺少足够的数据，我们可能完全将其从模型中删除。```Age``````Cabin```

使用数据集的其余部分的平均数据填充缺失数据的过程称为 。现在，我们将使用 来填充列中缺少的数据。```imputation``````imputation``````Age```

最基本的形式是用整个数据集的平均值填充缺失的数据。但是，有更好的方法。```imputation``````Age``````Age```

我们将用乘客所属的特定乘客舱的平均值填充缺失值。要了解此功能为什么有用，请考虑以下框图：```Age``````Age``````Pclass```

  <code>sns.boxplot(titanic_data['Pclass'], titanic_data['Age'])</code> 

![A boxplot of age values stratified by passenger classes](https://nickmccullum.com/images/python-machine-learning/logistic-regression/age-boxplot.png)

正如您所看到的，价值（最昂贵的乘客舱）的乘客往往是最年长的，而价值（最便宜的）的乘客往往是最年轻的。这是非常合乎逻辑的，所以我们将使用不同数据中的平均值到列中缺少的数据。```Pclass``````1``````Pclass``````3``````Age``````Pclass``````imputate``````Age```

对像泰坦尼克号数据集这样的数据集执行最简单的方法是构建自定义函数。首先，我们需要确定每个值的平均值。```imputation``````Age``````Pclass```

  <code>#Pclass value 1 
titanic_data[titanic_data['Pclass'] == 1]['Age'].mean()

#Pclass value 2 
titanic_data[titanic_data['Pclass'] == 2]['Age'].mean()

#Pclass 3 
titanic_data[titanic_data['Pclass'] == 2]['Age'].mean()</code> 

下面是我们将用于缺少变量的最终函数：```imputate``````Age```

  <code>def impute_missing_age(columns):

    age = columns[0]

    passenger_class = columns[1]

    if pd.isnull(age):

        if(passenger_class == 1):

            return titanic_data[titanic_data['Pclass'] == 1]['Age'].mean()

        elif(passenger_class == 2):

            return titanic_data[titanic_data['Pclass'] == 2]['Age'].mean()

        elif(passenger_class == 3):

            return titanic_data[titanic_data['Pclass'] == 3]['Age'].mean()

    else:

        return age</code> 

现在，此归给函数已完成，我们需要将其应用于 DataFrame 中的每一行。Python 的方法是一个很好的工具：```titanic_data``````apply```

  <code>titanic_data['Age'] = titanic_data[['Age', 'Pclass']].apply(impute_missing_age, axis = 1)</code> 

现在，我们已经对每行执行了处理丢失数据，让我们来调查一下我们的原始框图：```imputation``````Age```

  <code>sns.heatmap(titanic_data.isnull(), cbar=False)</code> 

正如您所看到的，我们的熊猫数据框架的列中不再有任何缺失的数据！```Age```

您可能想知道为什么我们花了这么多时间专门处理列中缺少的数据。这是因为鉴于对大多数灾害和疾病生存的影响，它是一个变量，在我们的数据集中可能具有较高的预测价值。```Age``````Age```

现在，我们已经了解了此数据集的结构并删除了缺少的数据，让我们开始构建逻辑回归机器学习模型。

## 构建逻辑回归模型

现在是删除逻辑回归模型的时候了。

### 删除缺少过多数据的列

首先，让我们删除该列。正如我们提到的，此列中缺失数据的高流行率意味着缺少的数据是不明智的，因此我们将使用以下代码完全删除它：```Cabin``````impute```

  <code>titanic_data.drop('Cabin', axis=1, inplace = True)</code> 

接下来，让我们删除包含熊猫方法缺少数据的任何其他列：```dropna()```

  <code>titanic_data.dropna(inplace = True)</code> 

### 使用虚拟变量处理分类数据

我们需要处理的下一个任务是处理分类功能。也就是说，我们需要找到一种方法，在数值上处理非自然数值的观测值。

这方面的一个很好的例子是列，它有两个值： 和 。同样，该列包含一个字母，指示乘客离开哪个城市。```Sex``````Male``````Female``````Embarked```

为了解决这个问题，我们将创建 。这些为非数字要素的每个类别分配一个数值。```dummy variables```

幸运的是，有一个内置的方法，它可以很容易地创建虚拟变量。该方法确实存在一个问题 - 它将为 DataFrame 列中的每个值创建一个新列。```pandas``````get_dummies()``````get_dummies```

让我们考虑一个示例来帮助更好地理解这一点。如果我们在列上调用 方法，我们会得到以下输出：```get_dummies()``````Age```

  <code>pd.get_dummies(titanic_data['Sex'])</code> 

![An example of the pandas get_dummies method](https://nickmccullum.com/images/python-machine-learning/logistic-regression/get-dummies.png)

正如您所看到的，这将创建两个新列： 和 。这些列都是彼此的完美预测变量，因为列中的值表示列中的值，反之亦然。```female``````male``````0``````female``````1``````male```

这称为，它显著降低了算法的预测能力。要删除此参数，我们可以将 参数添加到如下所示的方法：```multicollinearity``````drop_first = True``````get_dummies```

  <code>pd.get_dummies(titanic_data['Sex'], drop_first = True)</code> 

现在，让我们为和列创建虚拟变量列，并将它们分配给调用 和 的变量。```Sex``````Embarked``````sex``````embarked```

  <code>sex_data = pd.get_dummies(titanic_data['Sex'], drop_first = True)

embarked_data = pd.get_dummies(titanic_data['Embarked'], drop_first = True)</code> 

关于下面定义的变量，有一件重要的事情需要注意。它有两个列：和，但由于我们已经删除了另一列（列），其余两列都不是彼此的完美预测变量，因此在新的修改后的数据集中不存在。```embarked``````Q``````S``````C``````multicollinearity```

### 将虚拟变量添加到数据帧```pandas```

接下来，我们需要将我们的和列添加到 DataFrame 中。```sex``````embarked```

您可以使用以下代码将这些数据列[串联](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/how-to-concatenate-pandas-dataframes-practice-problems/)到现有 DataFrame 中：```pandas```

  <code>titanic_data = pd.concat([titanic_data, sex_data, embarked_data], axis = 1)</code> 

现在，如果您运行该命令，您的 Jupyter 笔记本将生成以下输出：```print(titanic_data.columns)```

  <code>Index(['PassengerId', 'Survived', 'Pclass', 'Name', 'Sex', 'Age', 'SibSp',

       'Parch', 'Ticket', 'Fare', 'Embarked', 'male', 'Q', 'S'],

      dtype='object')</code> 

和 列的存在表明我们的数据已成功串联。```male``````Q``````S```

## 从数据集中删除不必要的列

这意味着我们现在可以从 DataFrame 中删除原始和列。还有其他列（如，，）不预测泰坦尼克号的坠机存活率，所以我们也将删除这些。以下代码为我们处理此问题：```Sex``````Embarked``````Name``````PassengerId``````Ticket```

  <code>titanic_data.drop(['Name', 'Ticket', 'Sex', 'Embarked'], axis = 1, inplace = True)</code> 

如果现在打印，您的犹太笔记本将生成以下输出：```titanic_data.columns```

  <code>Index(['Survived', 'Pclass', 'Age', 'SibSp', 'Parch', 'Fare',

       'male', 'Q', 'S'],

      dtype='object'</code> 

DataFrame 现在具有以下外观：

![The final DataFrame for our logistic regression model](https://nickmccullum.com/images/python-machine-learning/logistic-regression/final-data-frame.png)

正如您所看到的，此数据集中的每个字段现在都是数字字段，这使得它成为逻辑回归机器学习算法的优秀候选项。

## 创建训练数据和测试数据

接下来，是时候将我们拆分为训练数据和测试数据了。与以前一样，我们将使用内置功能来执行此操作。```titatnic_data``````scikit-learn```

首先，我们需要将数据划分为值（我们将用于预测的数据）和值（我们试图预测的数据）。以下代码处理此问题：```x``````y```

  <code>y_data = titanic_data['Survived']

x_data = titanic_data.drop('Survived', axis = 1)</code> 

接下来，我们需要从 导入 函数。以下代码执行此导入：```train_test_split``````scikit-learn```

  <code>from sklearn.model_selection import train_test_split</code> 

最后，我们可以使用该函数与列表解包相结合来生成我们的训练数据和测试数据：```train_test_split```

  <code>x_training_data, x_test_data, y_training_data, y_test_data = train_test_split(x_data, y_data, test_size = 0.3)</code> 

请注意，在这种情况下，测试数据是参数指定的原始数据集的 30%。```test_size = 0.3```

现在，我们已经为我们的逻辑回归模型创建了我们的培训数据和测试数据。我们将在本教程的下一节中训练我们的模型。

## 训练逻辑回归模型

要训练模型，我们首先需要使用以下命令导入相应的模型：```scikit-learn```

  <code>from sklearn.linear_model import LogisticRegression</code> 

接下来，我们需要通过实例化对象的实例来创建模型：```LogisticRegression```

  <code>model = LogisticRegression()</code> 

要训练模型，我们需要调用我们刚刚创建并在和变量中传递的对象上的方法，如下所示：```fit``````LogisticRegression``````x_training_data``````y_training_data```

  <code>model.fit(x_training_data, y_training_data)</code> 

我们的模型现在已经接受培训。我们将在本教程的下一节中使用此模型进行预测。

## 使用我们的逻辑回归模型进行预测

让我们使用我们刚刚创建的逻辑回归模型对我们的测试数据进行一组预测。我们将将这些预测存储在一个变量中，称为 ：```model``````predictions```

  <code>predictions = model.predict(x_test_data)</code> 

我们的预测已经作出。接下来，让我们来检查模型的准确性。

## 衡量逻辑回归机器学习模型的性能

```scikit-learn```具有出色的内置模块，便于测量分类机器学习模型的性能。我们将使用此模块来测量我们刚刚创建的模型的性能。```classification_report```

首先，让我们导入模块：

  <code>from sklearn.metrics import classification_report</code> 

接下来，让我们使用该模块计算逻辑回归机器学习模块的性能指标：

  <code>classification_report(y_test_data, predictions)</code> 

下面是此命令的输出：

  <code>precision    recall  f1-score   support

           0       0.83      0.87      0.85       169

           1       0.75      0.68      0.72        98

    accuracy                           0.80       267

   macro avg       0.79      0.78      0.78       267

weighted avg       0.80      0.80      0.80       267</code> 

如果您有兴趣查看原始混淆矩阵并手动计算性能指标，则可以使用以下代码执行此操作：

  <code>from sklearn.metrics import confusion_matrix

print(confusion_matrix(y_test_data, predictions))</code> 

这将生成以下输出：

  <code>[[145  22]

 [ 30  70]]</code> 

## 本教程的完整代码

您可以在[此 GitHub 存储库](https://zshipu.com/t?url=https://github.com/nicholasmccullum/python-machine-learning)中查看本教程的完整代码。下面还粘贴如下，供参考：

  <code>import pandas as pd

import numpy as np

import matplotlib.pyplot as plt

%matplotlib inline

import seaborn as sns

#Import the data set 
titanic_data = pd.read_csv('titanic_train.csv')

#Exploratory data analysis 
sns.heatmap(titanic_data.isnull(), cbar=False)

sns.countplot(x='Survived', data=titanic_data)

sns.countplot(x='Survived', hue='Sex', data=titanic_data)

sns.countplot(x='Survived', hue='Pclass', data=titanic_data)

plt.hist(titanic_data['Age'].dropna())

plt.hist(titanic_data['Fare'])

sns.boxplot(titanic_data['Pclass'], titanic_data['Age'])

#Imputation function 
def impute_missing_age(columns):

    age = columns[0]

    passenger_class = columns[1]

    if pd.isnull(age):

        if(passenger_class == 1):

            return titanic_data[titanic_data['Pclass'] == 1]['Age'].mean()

        elif(passenger_class == 2):

            return titanic_data[titanic_data['Pclass'] == 2]['Age'].mean()

        elif(passenger_class == 3):

            return titanic_data[titanic_data['Pclass'] == 3]['Age'].mean()

    else:

        return age

#Impute the missing Age data 
titanic_data['Age'] = titanic_data[['Age', 'Pclass']].apply(impute_missing_age, axis = 1)

#Reinvestigate missing data 
sns.heatmap(titanic_data.isnull(), cbar=False)

#Drop null data 
titanic_data.drop('Cabin', axis=1, inplace = True)

titanic_data.dropna(inplace = True)

#Create dummy variables for Sex and Embarked columns 
sex_data = pd.get_dummies(titanic_data['Sex'], drop_first = True)

embarked_data = pd.get_dummies(titanic_data['Embarked'], drop_first = True)

#Add dummy variables to the DataFrame and drop non-numeric data 
titanic_data = pd.concat([titanic_data, sex_data, embarked_data], axis = 1)

titanic_data.drop(['Name', 'PassengerId', 'Ticket', 'Sex', 'Embarked'], axis = 1, inplace = True)

#Print the finalized data set 
titanic_data.head()

#Split the data set into x and y data 
y_data = titanic_data['Survived']

x_data = titanic_data.drop('Survived', axis = 1)

#Split the data set into training data and test data 
from sklearn.model_selection import train_test_split

x_training_data, x_test_data, y_training_data, y_test_data = train_test_split(x_data, y_data, test_size = 0.3)

#Create the model 
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()

#Train the model and create predictions 
model.fit(x_training_data, y_training_data)

predictions = model.predict(x_test_data)

#Calculate performance metrics 
from sklearn.metrics import classification_report

print(classification_report(y_test_data, predictions))

#Generate a confusion matrix 
from sklearn.metrics import confusion_matrix

print(confusion_matrix(y_test_data, predictions))</code> 

## 最后的想法

在本教程中，您学习了如何在 Python 中构建逻辑回归机器学习模型。

以下是您在本文中学到的内容的简要摘要：

*   为什么泰坦尼克号数据集经常用于学习机器学习分类技术
*   在使用分类机器学习问题的数据集时如何执行探索性数据分析
*   如何处理熊猫数据框架中缺少的数据
*   使用它来填充缺失的数据意味着什么以及如何```imputation```
*   如何为机器学习数据集中的分类数据创建虚拟变量
*   如何在Python中训练逻辑回归机器学习模型
*   如何使用 Python 中的逻辑回归模型进行预测
*   如何快速计算机器学习分类问题的性能指标```scikit-learn``````classification_report```
