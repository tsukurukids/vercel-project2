export default function handler(req, res) {
  const { name } = req.query;  // GETリクエストはreq.queryを使用

  // ひらがなの正規表現
  const hiraganaRegex = /^[\u3040-\u309F]+$/;

  try {
    // 名前が全てひらがなであり、かつスペースがない場合
    if (hiraganaRegex.test(name) && !/\s/.test(name)) {
      if (name === "はやさきはると") {
        if (process.env.tsukuru_h_haruto_URL) {
          res.redirect(307, process.env.tsukuru_h_haruto_URL);
        } else {
          throw new Error("URL not defined for tsukuru_h_haruto_URL");
        }
      } else if (name === "きんじょうきゆ") {
        if (process.env.tsukuru_k_kiyu_URL) {
          res.redirect(307, process.env.tsukuru_k_kiyu_URL);
        } else {
          throw new Error("URL not defined for tsukuru_k_kiyu_URL");
        }
      } else {
        res.status(400).send("学習進捗が見つかりませんでした");
      }
    } else {
      res.status(400).send("名前はひらがなで、スペースなしで入力してください");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("サーバーエラーが発生しました");
  }
}
