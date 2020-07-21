1. 避免文件夹过大    

windows   
mklink /j "node_modules" "E:\app\im-ai\knowledge-base\blog\blog\node_modules"   
mklink /j "scaffolds" "E:\app\im-ai\knowledge-base\blog\blog\scaffolds"   
mklink /j "themes" "E:\app\im-ai\knowledge-base\blog\blog\themes"   
mklink "_admin-config.yml" "E:\app\im-ai\knowledge-base\blog\blog\_admin-config.yml"   
mklink "_config.yml" "E:\app\im-ai\knowledge-base\blog\blog\_config.yml"   
mklink "package.json" "E:\app\im-ai\knowledge-base\blog\blog\package.json"   
mklink "yarn.lock" "E:\app\im-ai\knowledge-base\blog\blog\yarn.lock"   
mkdir source  


linux    
ln -s /etc/nginx/html/blog/blog/node_modules/ node_modules   
ln -s /etc/nginx/html/blog/blog/scaffolds/ scaffolds   
ln -s /etc/nginx/html/blog/blog/themes/ themes   
ln -s /etc/nginx/html/blog/blog/_admin-config.yml _admin-config.yml   
ln -s /etc/nginx/html/blog/blog/_config.yml _config.yml   
ln -s /etc/nginx/html/blog/blog/package.json package.json   
ln -s /etc/nginx/html/blog/blog/yarn.lock yarn.lock   
mkdir source    


