# exercise-pack
SASSを学ぶための開発環境。

## 概要
exercise-pack はSASS を学びやすくするための開発環境です。

## 開発方法

### exercise-pack をローカルにcloneする

exercise-pack を使用するにはGitHub からリポジトリをダウンロードし、ローカルに作成(clone)する必要があります。
そこで以下のコマンドを実行することで、簡単にローカルにcloneすることが出来ます。

```
git clone https://github.com/Integrated-gw-2024/exercise-pack.git
```

Git に関しての使い方は以下のサイトをおすすめします。
[サル先生のGit入門](https://backlog.com/ja/git-tutorial/)

### Node.js を導入する

こちらを確認してください。(https://nodejs.org/ja/download/)

### パッケージをインストールする

以下のコマンドを実行してください。
```
npm i
```

### 開発サーバを実行する

以下のコマンドを実行することで開発サーバを立ち上げることが出来ます。
```
npm run dev
```
立ち上げが完了すると、[localhost:8080](http://localhost:8080/) からブラウザにアクセスすることが出来ます。


### 開発する

src 内のファイルを編集し保存することでブラウザにも自動で反映されます。
読み込むsass/scss ファイルを追加したい場合はmain.js に以下のように追加してください。
```
import "../css/[名前].scss"
```
