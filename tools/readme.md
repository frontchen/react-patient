## react-router browserHistory 刷新页面 404 问题解决方法

### 一、参考地址

1.  [http://www.jb51.net/article/131789.htm](http://www.jb51.net/article/131789.htm)
2.  [https://blog.csdn.net/bingtome/article/details/79135070](https://blog.csdn.net/bingtome/article/details/79135070)

### 二、配置文件

1.  Nginx

```
server {
 ...
 location / {
  try_files $uri /index.html
 }
}
```

2.  Apache

```
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

3.  IIS

```
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="browserHistory" patternSyntax="ECMAScript" stopProcessing="true">
          <match url=".*" />
          <conditions>
            <add input="{HTTP_METHOD}" pattern="^GET$" />
            <add input="{HTTP_ACCEPT}" pattern="^text/html" />
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServ
```
