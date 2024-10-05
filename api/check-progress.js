export default function handler(req, res) {
    const { name } = req.query;  // フォームからのGETデータを取得

    // ひらがなの正規表現
    const hiraganaRegex = /^[\u3040-\u309F]+$/;

    // 名前が全てひらがなであり、かつスペースがない場合
    if (hiraganaRegex.test(name) && !/\s/.test(name)) {
        // 名前ごとのリダイレクト
        if (name === "はやさきはると") {
            res.redirect(307, process.env.tsukuru_h_haruto_URL);
        } else if (name === "きんじょうきゆ") {
            res.redirect(307, process.env.tsukuru_k_kiyu_URL);
        } else if (name === "きんじょうともき") {
            res.redirect(307, process.env.tsukuru_k_tomoki_URL);
        } else if (name === "おおしろよしか") {
            res.redirect(307, process.env.tsukuru_o_yoshika_URL);
        } else if (name === "みやぎたいせい") {
            res.redirect(307, process.env.tsukuru_m_taisei_URL);
        } else if (name === "いとうりゅうせい") {
            res.redirect(307, process.env.tsukuru_i_ryusei_URL);  
        } else if (name === "すずきこうへい") {
            res.redirect(307, process.env.tsukuru_s_kohei_URL);
        } else if (name === "あらしろはる") {
            res.redirect(307, process.env.tsukuru_a_haru_URL);
        } else if (name === "あらしろるい") {
            res.redirect(307, process.env.tsukuru_a_rui_URL);
        } else if (name === "そねいづき") {
            res.redirect(307, process.env.tsukuru_s_iduki_URL);
        } else if (name === "そねゆづき") {
            res.redirect(307, process.env.tsukuru_s_yuduki_URL);
        } else if (name === "やらりくと") {
            res.redirect(307, process.env.tsukuru_y_rikuto_URL);
        } else if (name === "ふくはらこうや") {
            res.redirect(307, process.env.tsukuru_hu_koya_URL);    
        } else {
            // 名前が見つからなかった場合のエラーメッセージ
            res.status(404).send(`
                <!DOCTYPE html>
                <html lang="ja">
                <head>
                    <meta charset="UTF-8">
                    <title>学習進捗が見つかりません</title>
                    <style>
                        body {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            min-height: 100vh;
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            text-align: center;
                        }
                        h1 {
                            color: #e74c3c;
                            font-size: 2em;
                        }
                        p {
                            color: #333;
                            font-size: 1.2em;
                        }
                        a {
                            color: #3498db;
                            text-decoration: none;
                            font-size: 1.1em;
                        }
                        a:hover {
                            text-decoration: underline;
                        }
                    </style>
                </head>
                <body>
                    <h1>学習進捗が見つかりませんでした</h1>
                    <p>入力ルールをご確認の上、もう一度お子様の名前を検索してください。</p>
                    <p>名前は<strong>ひらがな</strong>で、<strong>名字と名前の間にスペースを含まないフルネーム</strong>を入力してください。</p>
                    <p>それでも見つからない場合は、保護者LINEにて担当者にお問い合わせください。</p>
                    <a href="/">検索画面に戻る</a>
                </body>
                </html>
            `);
        }
    } else {
        // 名前がひらがなでない、またはスペースを含んでいる場合のエラーメッセージ
        res.status(400).send(`
            <!DOCTYPE html>
            <html lang="ja">
            <head>
                <meta charset="UTF-8">
                <title>名前の形式が正しくありません</title>
                <style>
                    body {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        text-align: center;
                    }
                    h1 {
                        color: #e74c3c;
                        font-size: 2em;
                    }
                    p {
                        color: #333;
                        font-size: 1.2em;
                    }
                    a {
                        color: #3498db;
                        text-decoration: none;
                        font-size: 1.1em;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                </style>
            </head>
            <body>
                <h1>名前の形式が正しくありません</h1>
                <p>名前は<strong>ひらがな</strong>で、<strong>スペースなしのフルネーム</strong>で入力してください。</p>
                <a href="/">検索画面に戻る</a>
            </body>
            </html>
        `);
    }
}
