SuiteOf("注文プロセスのテスト");

Scenario("ログインし、お弁当を注文し、お弁当を受け取る", ({ I }) => {
  I.amOnPage("/");
  I.click("ログインする");
  I.fillField("ユーザー名", "user1");
  I.fillField("パスワード", "super-strong-passphrase");
  I.click("ログイン");
  I.see("user1 さん");
});
