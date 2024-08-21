export default function handler(req, res) {
  const { name } = req.body;
  
  // ひらがなの正規表現
  const hiraganaRegex = /^[\u3040-\u309F]+$/;

  // 名前が全てひらがなであり、かつスペースがない場合
  if (hiraganaRegex.test(name) && !/\s/.test(name)) {
    if (name === "はやさきはると") {
      // はやさきはるとの場合
      res.redirect(process.env.tsukuru_h_haruto_URL);
    } else if (name === "きんじょうきゆ") {
      // きんじょうきゆの場合
      res.redirect(process.env.tsukuru_k_kiyu_URL);
    } else {
      // 名前が一致しなかった場合
      res.status(400).send("学習進捗が見つかりませんでした");
    }
  } else {
    // 名前がひらがなでない、またはスペースを含んでいる場合のエラーメッセージ
    res.status(400).send("名前はひらがなで、スペースなしで入力してください");
  }
}
