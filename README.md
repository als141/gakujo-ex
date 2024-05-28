# Niigata Gakujo Authenticator

Niigata Gakujo Authenticatorは、新潟大学学務情報システムでのGoogle Authenticatorコードの入力を自動化するブラウザ拡張機能です。Google Chrome、Microsoft Edgeをサポートします。

## 特徴

- Google Authenticatorコードを自動入力
- シークレットキーを安全に保存・取得
- デスクトップおよびモバイル版ブラウザをサポート

## インストール方法

### Chrome/Edge（ZIPファイルからインストールする方法）

1. [こちら](https://github.com/als141/gakujo-ex/archive/refs/heads/main.zip)からZIPファイルをダウンロードして、展開します。
2. `chrome://extensions/` または `edge://extensions/` を開きます。
3. 「デベロッパーモード」を有効にします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、拡張機能ディレクトリを選択します。**展開したZIPファイルはフォルダが二重になっているので、一つ中に入ってるフォルダを選択してください。**もしくは、ブラウザによってはダウンロードしたZIPファイルをそのまま読み込ませます。

### Chrome/Edge（Chrome 拡張機能ストアからインストールする方法）

現在ストア審査申請中です。

## 使用方法

1. 拡張機能アイコンをクリックして設定ポップアップを開きます。
2. 学務情報システムから提供されたシークレットキーを入力し、「Save」をクリックします。
3. 対象のウェブサイトにアクセスすると、拡張機能が自動的にGoogle Authenticatorコードを入力します。

## コード説明

- **ストレージ**: `chrome.storage.sync` を使用してシークレットキーを保存および取得します。
- **OTP生成**: `jsSHA`を使用してTOTPアルゴリズムを実装します。
- **フォームの検出**: `document.querySelector` を使用して認証コードの入力フィールドを特定します。

## 例コード

```javascript
// content.jsの例
chrome.storage.sync.get('secret', (result) => {
  if (result.secret) {
    const otp = generateOTP(result.secret);
    const codeInput = document.querySelector('input[name="ninshoCode"]');
    if (codeInput) {
      codeInput.value = otp;
    }
  }
});
```

## サポート

問題や機能リクエストがある場合は、[GitHubリポジトリ](https://github.com/als141/gakujo-ex)をご覧ください。

## 追加リソース

- [Mozilla Developer Network](https://developer.mozilla.org/)
- [Google Chrome Developer Documentation](https://developer.chrome.com/docs/extensions/)
- [jsSHA Documentation](https://github.com/Caligatio/jsSHA)
