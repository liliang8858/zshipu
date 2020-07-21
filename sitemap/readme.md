将要提交的链接按照每行一条的格式写入一个文本文件中，命名此文件为urls.txt，然后进入该文件所在目录，执行如下命令：

curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=blog.zshipu.com&token=RDs9ZhrtxQwRAhQZ"


