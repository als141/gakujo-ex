# Niigata Gakujo Authenticator

Niigata Gakujo Authenticatorは、新潟大学学務情報システムでのGoogle Authenticatorコードの入力を自動化するブラウザ拡張機能です。Google Chrome、Microsoft Edge、FireFoxをサポートします。

## 特徴

- Google Authenticatorコードを自動入力
- シークレットキーを安全に保存・取得
- デスクトップおよびモバイル版ブラウザをサポート

## インストール方法

### Chrome/Edge

ChromeとMicrosoft Edgeを使用している方は[こちら](https://chromewebstore.google.com/detail/niigata-gakujo-authentica/elaeceflckjbdbbokilooliacajipfjl?hl=ja&authuser=1)からインストールしてください。

### Firefox

Firefox及びAndroid版Firefoxは[こちら](https://addons.mozilla.org/firefox/downloads/file/4295616/e07382e5601f4ec19dde-1.0.xpi)からインストールしてください。

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
