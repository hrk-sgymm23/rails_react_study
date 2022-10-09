# railsとreactの勉強用リポジトリ

## 使っているツール
###  Discord
https://www.notion.so/9a0126b0aa65482a907870c2775b7447?v=1ef367425e814ec596864158040b8423
### Notion
https://www.notion.so/9a0126b0aa65482a907870c2775b7447?v=1ef367425e814ec596864158040b8423
### Figma
https://discord.com/channels/919605905090289675/985892524604395561/1028593525660598322

## アプリケーション起動手順
### 1. リポジトリを持ってくる
` git clone　git@github.com:hrk-sgymm23/rails_react_study.git `

### 2. 一応コンテナの起動状態を確認
` docker-compose ps -a `

### 3. ビルド
` docker-compose build `

### 4. コンテナを起動
` docker-compose up `

### 5. マイグレーション
` docker-compose run api bundle exec rake db:migrate `

### 6. DBを作成
` docker-compose run api bundle exec rake db:create `

### 7. シード
` docker-compose run api bundle exec rake db:seed`

### 8. 実際にブラウザで確認
- rails側
` http://localhost:3001/api/v1/issues `
- フロント側
` http://localhost:4000 `

### 参考にさせていただいた記事
https://qiita.com/taki_21/items/613f6a00bc432d1c221d
