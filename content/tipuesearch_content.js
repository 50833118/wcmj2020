var tipuesearch = {"pages": [{'title': 'ONE', 'text': '我的自介 ／/( ◕‿‿◕ )＼ \n \n 上面圖片為自畫像，雖然畫畫功力爛，但我覺得挺像的*ଘ(੭ ˊᵕˋ)੭ \n 我是108年的五精一甲，學號50833118，自介到此結束!!! \n 雖然有突然，但我害羞 （ ´☣///_ゝ///☣｀） \n 就讓我安麗你們其他東西吧!!! \n 雖然推的東西不多，但我很努力在上課了 \n 以下要安麗各位的是熊 \n \n 沒有啦，是line裡面的熊大 \n \n 是不是很可愛啊 ･ิ≖ ω ≖･ิ✧ \n 至少我覺得很可愛啦 ◝(⁰▿⁰)◜ \n 好啦，換吃得可以吧 (๑´ڡ`๑) \n 我要推薦雲林縣斗六市鎮北路 麗嬰房-雲林斗六鎮北門市 \n 旁邊的火雞肉飯店，他的雞肉飯跟紫菜湯真的是很好吃!! （¯﹃¯） \n 超級無敵推去吃，100分推推 (΄ಢ◞౪◟ಢ‵)◉◞౪◟◉)。 \n 好了，我的安麗到此結束(｡•ㅅ•｡)♡ \n 謝謝大家觀賞(｡◕∀◕｡) \n \n', 'tags': '', 'url': 'ONE.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '倉儲與網站', 'text': '\n \n 請重新下載 \xa0 wcmj2020_tool.7z , 檔案大小為 435 MB, 解開壓縮後為 1.8 GB (其中包括 Mypaint, Dia 與 OBS 等). \n \n \n 登入 github.com 建立 Github 倉儲, 直接新增 README.md 檔案. \n \n \n 將所建立的倉儲 git clone 到近端. \n \n \n git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n \n \n 在近端維護動態網站, 轉為靜態後 git add commit push \n \n \n', 'tags': '', 'url': '倉儲與網站.html'}, {'title': 'Google-Meet', 'text': '是一個可以多人連線通話且分享螢幕的視訊軟體，只要有放到行事曆，並且輸入對方的Gmail帳號就可以連線了，並且可以做線上串流和錄影的功能，且錄完會直接跑到你的遠端上去，真的是很方便呢! \n https://meet.google.com \n', 'tags': '', 'url': 'Google-Meet.html'}, {'title': 'ssh', 'text': '由於在電腦教室時採用純 IPv6 協定上網, 因此為了能夠在近端將倉儲改版資料推送到目前只接受 IPv4 協定連線的 github, 以下除了將原本以 https 對 github 連線, 改為以 ssh 協定連線外, 在 Windows 環境下必須利用 putty 與 plink, 設定 putty 格式的 .ppk 以及能夠同時支援 IPv4 與 IPv6 的代理主機. \n 設定步驟如下: \n 1. 下載 Putty 工具組 \n 從\xa0 https://www.chiark.greenend.org.uk/~sgtatham/putty/ \xa0 下載一般版, 或從 \xa0 http://jakub.kotrla.net/putty/ \xa0 下載特殊的可攜版本. \n 2. 利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以\xa0 \n ssh-keygen -t rsa -b 4096 -C "使用者學號" \n 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key \n 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. \n 3. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. \n 修改啟動的 start.bat 加入下列設定:\n \nset GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. \n 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位.\xa0 \n 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. \n 5. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為: \n # no proxy at home\n#ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p\n# set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup\nProxyCommand y:/putty/plink.exe github.com %h %p\n  \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n     \n    # for connect.exe need openssh key format\n    #IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse"\n    # for plink.exe need rsa key format but set under putty github.com session\n    # plink.exe do not need the following setting\n    #IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk"\n  \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n 6. 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: \n [core]\n    repositoryformatversion = 0\n    filemode = false\n    bare = false\n    logallrefupdates = true\n    symlinks = false\n    ignorecase = true\n[submodule]\n    active = .\n[remote "origin"]\n    #url = https://github.com/mdecourse/wcmj2020.git\n    url = git@github.com:mdecourse/wcmj2020.git\n    fetch = +refs/heads/*:refs/remotes/origin/*\n[branch "master"]\n    remote = origin\n    merge = refs/heads/master\n[submodule "cmsimde"]\n    url = https://github.com/mdecourse/cmsimde.git \n \n \n \n \n \n \n \n \n \n \n \n \n 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push. \n \n', 'tags': '', 'url': 'ssh.html'}, {'title': 'Blogger', 'text': '我的blogger :\xa0 https://50833118.blogspot.com/', 'tags': '', 'url': 'Blogger.html'}, {'title': '編輯', 'text': '啟用 leo 在leo中開啟 tmp → wcmj2020 → config ，再打開 pelican.leo。 編輯遠端與近端和共用，與倉儲連結。 \n 添加 add_to_blogger \n @language python\n\nfrom markdown import markdown\nfrom oauth2client import client\nfrom googleapiclient import sample_tools\nimport os\n\nos.environ[\'TZ\'] = \'Asia/Taipei\'\nargv = ""\n# 認證並建立服務\n# name of the api is "blogger", version is "v3"\n# description of the api is __doc__\n# file name of the application: location of client_secrets.json\nservice, flags = sample_tools.init(\n  argv, \'blogger\', \'v3\', __doc__, "./../../client_secrets.json",\n  scope=\'https://www.googleapis.com/auth/blogger\')\n\n\ndef get_cat_tag_content(data):\n    # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 ---\n    # 用跳行符號分割\n    data_list = data.split("\\n")\n    #第 2 行為 title\n    title= data_list[1]\n    #第 4 行為 category\n    category = data_list[3]\n    #第 5 行為 tags\n    tags = data_list[4]\n    # 有多項資料的 content 型別為數列\n    # 再將第 9 行之後的資料數列串回成以跳行隔開的資料\n    content = "\\n".join(data_list[8:])\n    # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more-->\n    content = content.replace(\'<!-- PELICAN_END_SUMMARY -->\', \'<!--more-->\')\n    # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式\n    #content = content.replace(\'~~~python\', \'[code lang="python"]\')\n    #content = content.replace(\'~~~\', \'[/code]\')\n    return title, category, tags, content\n\n# 從目前所在節點的 body pan 中取出類別, tags 以及文章內容\n# p.h 為 @clean filename.md\n# 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案\nmd_filename = p.h.split(" ")[1]\nwith open(md_filename, \'r\', encoding="utf-8") as content_file:\n    md_content = content_file.read()\n# title_str, category_str, tags_str, content = get_cat_tag_content(p.b)\ntitle_str, category_str, tags_str, content = get_cat_tag_content(md_content)\ncategory = category_str.split(":")[1]\ntags = tags_str.split(":")[1].split(",")\ntags.append(category)\n# title 是一個單獨的字串\ntitle = title_str.split(":")[1]\n# 將 markdown 格式 content 轉為 html\ncontent = markdown(content)\n# 以下處理 content 的 <h2> 標題\ncontent = content.replace("<h2>", "<h2><font size=\'4\'>")\ncontent = content.replace("</h2>", "</font></h2>")\n# g.es(content)\n\ntry:\n    \'\'\'\n    users = service.users()\n    # 取得使用者 profile 資料\n    user = users.get(userId=\'self\').execute()\n    print(\'網誌名稱: %s\' % user[\'displayName\'])\n    \'\'\'\n    blogs = service.blogs()\n    # 取得使用者所建立網誌名稱\n    blogs = blogs.listByUser(userId=\'self\').execute()\n    # post_id is now blogs["items"][0]["id"]\n    blog_id = blogs["items"][0]["id"]\n    #for blog in blogs[\'items\']:\n        #print(blog[\'name\'], blog[\'url\'])\n    posts = service.posts()\n    # 新增網誌 post 時, 需要 post_id\n    body = {\n    "kind": "blogger#post",\n    "id": blog_id,\n    "title": title,\n    # 利用 markdown 函式, 將 .md 的內文轉為 html, 作為 Blogger 的文章內容\n    "content": content,\n    "labels": tags\n    }\n    insert = posts.insert(blogId=blog_id, body=body)\n    posts_doc = insert.execute()\n    post_id = posts_doc["id"]\n    #print(posts_doc)\n    os.remove("blogger.dat")\n    # 利用最後的 child 節點來儲存 post_id\n    to_save_post_id = p.insertAsLastChild()   \n    # 改為內文為空的節點, id 直接標在 head 標題 \n    to_save_post_id.b = ""\n    to_save_post_id.h = post_id\n    # 因為新增節點, commander 必須 redraw\n    c.redraw()\n    g.es("post_id 為", post_id)\n    g.es("已經將資料送往 Blogger!")\nexcept(client.AccessTokenRefreshError):\n    g.es("error") \n edit_to_blogger \n @language python\n\nfrom markdown import markdown\nfrom oauth2client import client\nfrom googleapiclient import sample_tools\nimport os\n\nos.environ[\'TZ\'] = \'Asia/Taipei\'\nargv = ""\n# 認證並建立服務\n# name of the api is "blogger", version is "v3"\n# description of the api is __doc__\n# file name of the application: location of client_secrets.json\nservice, flags = sample_tools.init(\n  argv, \'blogger\', \'v3\', __doc__, "./../../client_secrets.json",\n  scope=\'https://www.googleapis.com/auth/blogger\')\n\n\ndef get_cat_tag_content(data):\n    # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 ---\n    # 用跳行符號分割\n    data_list = data.split("\\n")\n    #第 2 行為 title\n    title= data_list[1]\n    #第 4 行為 category\n    category = data_list[3]\n    #第 5 行為 tags\n    tags = data_list[4]\n    # 有多項資料的 content 型別為數列\n    # 再將第 9 行之後的資料數列串回成以跳行隔開的資料\n    content = "\\n".join(data_list[8:])\n    # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more-->\n    content = content.replace(\'<!-- PELICAN_END_SUMMARY -->\', \'<!--more-->\')\n    # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式\n    #content = content.replace(\'~~~python\', \'[code lang="python"]\')\n    #content = content.replace(\'~~~\', \'[/code]\')\n    return title, category, tags, content\n\n# 從目前所在節點的 body pan 中取出類別, tags 以及文章內容\n# p.h 為 @clean filename.md\n# 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案\nmd_filename = p.h.split(" ")[1]\nwith open(md_filename, \'r\', encoding="utf-8") as content_file:\n    md_content = content_file.read()\n# title_str, category_str, tags_str, content = get_cat_tag_content(p.b)\ntitle_str, category_str, tags_str, content = get_cat_tag_content(md_content)\ncategory = category_str.split(":")[1]\ntags = tags_str.split(":")[1].split(",")\ntags.append(category)\n# title 是一個單獨的字串\ntitle = title_str.split(":")[1]\n# 將 markdown 格式 content 轉為 html\ncontent = markdown(content)\n# 以下處理 content 的 <h2> 標題\ncontent = content.replace("<h2>", "<h2><font size=\'4\'>")\ncontent = content.replace("</h2>", "</font></h2>")\n# g.es(content)\n\ntry:\n    blogs = service.blogs()\n    # 取得使用者所建立網誌名稱\n    blogs = blogs.listByUser(userId=\'self\').execute()\n    blog_id = blogs["items"][0]["id"]\n    # 設法取得原 post 的 id\n    postid_outline = p.getLastChild()\n    # 直接從標題取得 post 的 id 號碼\n    post_id = postid_outline.h\n    posts = service.posts()\n    # 更新網誌文章時的 body\n    body = {\n    "kind": "blogger#post",\n    "title": title,\n    "content": content\n    }\n    # need to save postId to outline head\n    update = posts.update(blogId=blog_id, postId=post_id, body=body, publish=True)\n    update_doc = update.execute()\n    os.remove("blogger.dat")\n    g.es("post_id 為", post_id)\n    g.es("已經將更新資料送往 Blogger!")\nexcept(client.AccessTokenRefreshError):\n    g.es("error") \n 在markdown下新增文章 \n \n \n 選擇主檔案，按add_to_blogger，文章就會推到blogger上；如要編輯在leo裡編輯， 選擇主檔案，按edit_to_blogger ， 文章就會更新到blogger上。 \n', 'tags': '', 'url': '編輯.html'}, {'title': '上課筆記', 'text': '沒排順序，但實打實都是本人抄的!!! ヾ(；ﾟ(OO)ﾟ)ﾉ \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '上課筆記.html'}]};