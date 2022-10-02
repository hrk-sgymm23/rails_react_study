# railsとreactの勉強用リポジトリ

### 起動手順
#### 1. リポジトリを持ってくる
` git clone　git@github.com:hrk-sgymm23/rails_react_study.git `

#### 2. 一応コンテナの起動状態を確認
` docker-compose ps -a `

#### 3. ビルド
` docker-compose build `

#### 4. コンテナを起動
` docker-compose up `

#### 5. DBにシード
` docker-compose run api bundle exec rake db:create `

#### 6. 実際にブラウザで確認
- rails側
` http://localhost:3001/api/v1/issues `
- フロント側
` http://localhost:4000 `

### 参考にさせていただいた記事
https://qiita.com/taki_21/items/613f6a00bc432d1c221d
