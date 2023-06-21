## 概要
exercise-pack はSASS を学びやすくするための開発環境です。


## 使い方
### 1. Node.js を導入する

こちらを確認してください。

https://nodejs.org/ja/download/

### 2. exercise-pack をローカルにcloneする
exercise-pack を使用するにはGitHub からリポジトリをダウンロードし、ローカルに作成(clone)する必要があります。

そこで以下のコマンドを実行することで、簡単にローカルにcloneすることが出来ます。

```
git clone https://github.com/Integrated-gw-2024/exercise-pack.git
```

cloneが完了したらローカルに新規で追加されたディレクトリに移動してください。
```
cd exercise-pack
```

### 3. パッケージをインストールする

以下のコマンドを実行してください。

```
npm i
```

### 4. 開発サーバを実行する

以下のコマンドを実行することで開発サーバを立ち上げることが出来ます。

立ち上げが完了すると、[localhost:8080](http://localhost:8080/) からブラウザにアクセスすることが出来ます。

```
npm run dev
```

また、`control` + `c` を同時に押すことで開発サーバの実行を終了することが出来ます。

### 5. 開発する

`src` 内のファイルを編集し保存することでブラウザにも自動で反映されます。

読み込む`sass/scss` ファイルを追加したい場合は`main.js` に以下のように追加してください。

```
import "../css/[ファイル名].scss"
```

## Gitをもっと知ってみる
Git に関しての使い方は次のサイトをおすすめします。

[サル先生のGit入門](https://backlog.com/ja/git-tutorial/)
