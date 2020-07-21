
title: Python 中支持矢量机 - 分步指南
author: 知识铺
date: 2020-06-21 11:27:01
tags:
---
  

支持向量机 （SVM） 是世界上最受欢迎的机器学习问题之一。

SVM 可用于分类问题或回归问题，这使得它们非常通用。

在本教程中，您将学习如何使用 附带的乳腺癌数据集从头开始构建第一个 Python 支持向量机模型。```scikit-learn```

## 目录

您可以使用下面的目录跳到此 Python 机器学习教程的特定部分：

*   [本教程中我们需要的 Python 库](https://zshipu.com/t?url=#the-python-libraries-we-will-need-in-this-tutorial)
*   [我们将在本教程中使用数据集](https://zshipu.com/t?url=#the-data-set-we-will-use-in-this-tutorial)
*   [将数据集拆分为训练数据和测试数据](https://zshipu.com/t?url=#splitting-the-data-set-into-training-data-and-test-data)
*   [训练支持向量机模型](https://zshipu.com/t?url=#training-the-support-vector-machines-model)
*   [使用我们的支持矢量机模型进行预测](https://zshipu.com/t?url=#making-predictions-with-our-support-vector-machines-model)
*   [评估我们支持向量机模型的性能](https://zshipu.com/t?url=#assessing-the-performance-of-our-support-vector-machines-model)
*   [本教程的完整代码](https://zshipu.com/t?url=#the-full-code-for-this-tutorial)
*   [最后的想法](https://zshipu.com/t?url=#final-thoughts)

## 本教程中我们需要的 Python 库

在本教程中，您将使用许多开源 Python 库，包括[NumPy、](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/numpy/)[熊猫](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/pandas/)和 matplotlib。以下是在开始之前需要运行的一些导入：

  <code>import pandas as pd

import numpy as np

import matplotlib.pyplot as plt

%matplotlib inline

import seaborn as sns</code> 

接下来，您将导入我们将在整个本教程中使用的数据集。

## 我们将在本教程中使用数据集

本教程使用 附带的乳腺癌数据集。因此，我们现在会将该数据集导入到 Python 脚本中。```scikit-learn```

首先，使用以下命令从 模块导入 函数：```load_breast_cancer``````datasets``````scikit-learn```

  <code>from sklearn.datasets import load_breast_cancer</code> 

接下来，您需要创建乳腺癌数据集的实例。以下语句应执行以下操作：

  <code>cancer_data = load_breast_cancer()</code> 

此变量不仅包括乳腺癌数据集。例如，我们很快就会看到此数据结构中包含一个有用的描述。```cancer_data``````raw_data```

因此，在导入数据集时，我们需要执行的最后一步是将数据存储在它自己的数据帧中。下面是执行此操作的代码：```raw_data```

  <code>raw_data = pd.DataFrame(cancer_data['data'], columns = cancer_data['feature_names'])</code> 

让我们来调查此数据集中实际包含的内容。

中包含的每个数据集都附带一个描述字段，可帮助您了解数据集描述的内容。```scikit-learn```

让我们打印此说明。以下语句应执行以下操作：

  <code>print(raw_data['DESCR'])</code> 

这将生成：

 <code>.. _breast_cancer_dataset:

Breast cancer wisconsin (diagnostic) dataset
--------------------------------------------

**Data Set Characteristics:**

    :Number of Instances: 569

    :Number of Attributes: 30 numeric, predictive attributes and the class

    :Attribute Information:
        - radius (mean of distances from center to points on the perimeter)
        - texture (standard deviation of gray-scale values)
        - perimeter
        - area
        - smoothness (local variation in radius lengths)
        - compactness (perimeter^2 / area - 1.0)
        - concavity (severity of concave portions of the contour)
        - concave points (number of concave portions of the contour)
        - symmetry
        - fractal dimension ("coastline approximation" - 1)

        The mean, standard error, and "worst" or largest (mean of the three
        worst/largest values) of these features were computed for each image,
        resulting in 30 features.  For instance, field 0 is Mean Radius, field
        10 is Radius SE, field 20 is Worst Radius.

        - class:
                - WDBC-Malignant
                - WDBC-Benign

    :Summary Statistics:

    ===================================== ====== ======
                                           Min    Max
    ===================================== ====== ======
    radius (mean):                        6.981  28.11
    texture (mean):                       9.71   39.28
    perimeter (mean):                     43.79  188.5
    area (mean):                          143.5  2501.0
    smoothness (mean):                    0.053  0.163
    compactness (mean):                   0.019  0.345
    concavity (mean):                     0.0    0.427
    concave points (mean):                0.0    0.201
    symmetry (mean):                      0.106  0.304
    fractal dimension (mean):             0.05   0.097
    radius (standard error):              0.112  2.873
    texture (standard error):             0.36   4.885
    perimeter (standard error):           0.757  21.98
    area (standard error):                6.802  542.2
    smoothness (standard error):          0.002  0.031
    compactness (standard error):         0.002  0.135
    concavity (standard error):           0.0    0.396
    concave points (standard error):      0.0    0.053
    symmetry (standard error):            0.008  0.079
    fractal dimension (standard error):   0.001  0.03
    radius (worst):                       7.93   36.04
    texture (worst):                      12.02  49.54
    perimeter (worst):                    50.41  251.2
    area (worst):                         185.2  4254.0
    smoothness (worst):                   0.071  0.223
    compactness (worst):                  0.027  1.058
    concavity (worst):                    0.0    1.252
    concave points (worst):               0.0    0.291
    symmetry (worst):                     0.156  0.664
    fractal dimension (worst):            0.055  0.208
    ===================================== ====== ======

    :Missing Attribute Values: None

    :Class Distribution: 212 - Malignant, 357 - Benign

    :Creator:  Dr. William H. Wolberg, W. Nick Street, Olvi L. Mangasarian

    :Donor: Nick Street

    :Date: November, 1995

This is a copy of UCI ML Breast Cancer Wisconsin (Diagnostic) datasets.
https://goo.gl/U2Uwz2

Features are computed from a digitized image of a fine needle
aspirate (FNA) of a breast mass.  They describe
characteristics of the cell nuclei present in the image.

Separating plane described above was obtained using
Multisurface Method-Tree (MSM-T) [K. P. Bennett, "Decision Tree
Construction Via Linear Programming." Proceedings of the 4th
Midwest Artificial Intelligence and Cognitive Science Society,
pp. 97-101, 1992], a classification method which uses linear
programming to construct a decision tree.  Relevant features
were selected using an exhaustive search in the space of 1-4
features and 1-3 separating planes.

The actual linear program used to obtain the separating plane
in the 3-dimensional space is that described in:
[K. P. Bennett and O. L. Mangasarian: "Robust Linear
Programming Discrimination of Two Linearly Inseparable Sets",
Optimization Methods and Software 1, 1992, 23-34].

This database is also available through the UW CS ftp server:

ftp ftp.cs.wisc.edu
cd math-prog/cpo-dataset/machine-learn/WDBC/

.. topic:: References

   - W.N. Street, W.H. Wolberg and O.L. Mangasarian. Nuclear feature extraction 
     for breast tumor diagnosis. IS&T/SPIE 1993 International Symposium on 
     Electronic Imaging: Science and Technology, volume 1905, pages 861-870,
     San Jose, CA, 1993.
   - O.L. Mangasarian, W.N. Street and W.H. Wolberg. Breast cancer diagnosis and 
     prognosis via linear programming. Operations Research, 43(4), pages 570-577, 
     July-August 1995.
   - W.H. Wolberg, W.N. Street, and O.L. Mangasarian. Machine learning techniques
     to diagnose breast cancer from fine-needle aspirates. Cancer Letters 77 (1994) 
     163-171.</code> 

此数据集描述中最重要的要点是：

*   数据集中有 569 个观测值
*   每个观察点有 30 个数字属性

现在，我们已经了解了数据集的结构，让我们继续将数据集拆分为训练数据和测试数据。

## 将数据集拆分为训练数据和测试数据

要将数据集拆分为训练数据和测试数据，我们需要做的第一件事是指定我们和变量。```x``````y```

我们的变量将是我们之前创建的[熊猫数据帧](https://zshipu.com/t?url=https://nickmccullum.com/advanced-python/pandas-dataframes/)。我们的变量需要从我们之前创建的原始对象进行分析，其中存储在键下。```x``````raw_data``````y``````cancer_data``````target```

更具体地说，下面是创建我们和变量的代码：```x``````y```

  <code>x = raw_data

y = cancer_data['target']</code> 

我们将使用's 函数与列表解包相结合，将数据集拆分为训练数据和测试数据（就像我们在[本课程前面](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/logistic-regression-python/)[之前所做的那样）。](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/linear-regression-python/)```scikit-learn``````train_test_split```

首先，您需要使用以下语句导入函数：

  <code>from sklearn.model_selection import train_test_split</code> 

现在，您可以使用以下语句沿 和 轴创建训练数据和测试数据：```x``````y```

  <code>x_training_data, x_test_data, y_training_data, y_test_data = train_test_split(x, y, test_size = 0.3)</code> 

这将拆分数据，以便测试数据是原始数据集的 30%（由 参数指示）。```test_size = 0.3```

现在，我们的数据被拆分了，让我们继续训练我们的第一个支持向量机模型。

## 训练支持向量机模型

在训练第一个支持向量机模型之前，需要从 导入模型类。```scikit-learn```

类住在模块内。下面是用于导入它的语句：```SVC``````scikit-learn``````svm```

  <code>from sklearn.svm import SVC</code> 

现在，让我们创建一个此类的实例并将其分配给变量：```model```

  <code>model = SVC()</code> 

现在，我们可以使用与[k 最近邻域模型](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/k-nearest-neighbors-python/)和[随机林模型](https://zshipu.com/t?url=https://nickmccullum.com/python-machine-learning/decision-trees-random-forests-python/)相同的方法训练 SVM 模型：通过调用该方法，并传入 和 。```fit``````x_training_data``````y_training_data```

下面是执行此操作的代码：

  <code>model.fit(x_training_data, y_training_data)</code> 

我们的模型现在已经接受培训。让我们在本教程的下一节中继续使用模型进行预测。

## 使用我们的支持矢量机模型进行预测

使用创建的任何机器学习模型都可用于生成预测，只需调用方法并传入要从中生成预测的值数组。```scikit-learn``````predict```

在这种情况下，下面是 Python 语句，用于存储来自 名为 的变量中的预测：```x_test_data``````predictions```

  <code>predictions = model.predict(x_test_data)</code> 

接下来我们将评估模型的性能。

## 评估我们支持向量机模型的性能

我们将使用与本课程中构建的其他分类模型相同的支持向量机器模型的性能测量技术：a 和 。```classification_report``````confusion_matrix```

首先，让我们从 导入这些函数：```scikit-learn```

  <code>from sklearn.metrics import classification_report

from sklearn.metrics import confusion_matrix</code> 

首先，让我们生成我们的classification_report：

  <code>print(classification_report(y_test_data, predictions))</code> 

这将生成：

  <code>precision    recall  f1-score   support

           0       1.00      0.84      0.91        67

           1       0.90      1.00      0.95       104

    accuracy                           0.94       171

   macro avg       0.95      0.92      0.93       171

weighted avg       0.94      0.94      0.93       171</code> 

接下来，让我们生成我们的混淆矩阵：

  <code>print(confusion_matrix(y_test_data, predictions))</code> 

这将生成：

  <code>[[ 56  11]

 [  0 104]]</code> 

## 本教程的完整代码

您可以在[此 GitHub 存储库](https://zshipu.com/t?url=https://github.com/nicholasmccullum/python-machine-learning)中查看本教程的完整代码。下面还粘贴如下，供参考：

  <code>#Data imports 
import pandas as pd

import numpy as np

#Visualization imports 
import matplotlib.pyplot as plt

%matplotlib inline

import seaborn as sns

#Import the data set from scikit-learn 
from sklearn.datasets import load_breast_cancer

cancer_data = load_breast_cancer()

raw_data = pd.DataFrame(cancer_data['data'], columns = cancer_data['feature_names'])

# print(cancer_data['DESCR']) 
#Split the data set into training data and test data 
x = raw_data

y = cancer_data['target']

from sklearn.model_selection import train_test_split

x_training_data, x_test_data, y_training_data, y_test_data = train_test_split(x, y, test_size = 0.3)

#Train the SVM model 
from sklearn.svm import SVC

model = SVC()

model.fit(x_training_data, y_training_data)

#Make predictions with the model 
predictions = model.predict(x_test_data)

#Measure the performance of our model 
from sklearn.metrics import classification_report

from sklearn.metrics import confusion_matrix

print(classification_report(y_test_data, predictions))

print(confusion_matrix(y_test_data, predictions))</code> 

## 最后的想法

在本教程中，您学习了如何构建 Python 支持向量计算机模型。

以下是本教程中讨论的简要摘要：

*   如何导入和加载内置乳腺癌数据集```scikit-learn```
*   如何打印包含的内置数据集的说明。```scikit-learn```
*   如何使用如何将数据组拆分为训练数据和测试数据```scikit-learn```
*   如何从模块导入模型```SVC``````scikit-learn``````svm```
*   如何训练SVM模型
*   如何使用 Python 中的支持向量机模型进行预测
*   如何使用 和 函数测量支持向量机模型的性能```classification_report``````confusion_matrix```
