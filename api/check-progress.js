export default function handler(req, res) {
    const { name } = req.query;

    // ひらがなの正規表現
    const hiraganaRegex = /^[\u3040-\u309F]+$/;

    // 名前が全てひらがなであり、かつスペースがない場合
    if (hiraganaRegex.test(name) && !/\s/.test(name)) {
        // 名前ごとのリダイレクト
        if (name === "はやさきはると") {
            res.redirect(process.env.tsukuru_h_haruto_URL);
        } else if (name === "きんじょうきゆ") {
            res.redirect(process.env.tsukuru_k_kiyu_URL);
        } else {
            // 名前が見つからなかった場合
            res.status(404).send(`
                <h1>学習進捗が見つかりませんでした</h1>
                <p>入力ルールをご確認の上、もう一度お子様の名前を検索してください。</p>
                <p>名前は<strong>ひらがな</strong>で、<strong>名字と名前の間にスペースを含まないフルネーム</strong>を入力してください。</p>
                <p>それでも見つからない場合は、保護者LINEにて担当者にお問い合わせください。</p>
                <a href="/">検索画面に戻る</a>
            `);
        }
    } else {
        // 名前がひらがなでない、またはスペースを含んでいる場合のエラーメッセージ
        res.status(400).send(`
            <h1>名前の形式が正しくありません</h1>
            <p>名前は<strong>ひらがな</strong>で、<strong>スペースなしのフルネーム</strong>で入力してください。</p>
            <a href="/">検索画面に戻る</a>
        `);
    }
}
