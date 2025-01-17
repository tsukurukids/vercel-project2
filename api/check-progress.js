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
        } else if (name === "くらもとえいとく") {
            res.redirect(307, process.env.tsukuru_k_eitoku_URL);
        } else if (name === "やましろたいち") {
            res.redirect(307, process.env.tsukuru_y_taichi_URL);  
        } else if (name === "やましろゆづき") {
            res.redirect(307, process.env.tsukuru_y_yuzuki_URL);
        } else if (name === "かきのはなゆうた") {
            res.redirect(307, process.env.tsukuru_k_yuta_URL);
        } else if (name === "うえだたえ") {
            res.redirect(307, process.env.tsukuru_u_tae_URL);
        } else if (name === "おおまつあらた") {
            res.redirect(307, process.env.tsukuru_o_arata_URL);
        } else if (name === "がねこるあん") {
            res.redirect(307, process.env.tsukuru_ruann_URL);
        } else if (name === "がねこりゅう") {
            res.redirect(307, process.env.tsukuru_ryu_URL);
        } else if (name === "とだかこうすけ") {
            res.redirect(307, process.env.tsukuru_t_kosuke_URL);
        } else if (name === "おくひらそうすけ") {
            res.redirect(307, process.env.tsukuru_o_sosuke_URL);
        } else if (name === "まつだあすみ") {
            res.redirect(307, process.env.tsukuru_a_matuda_URL);
        } else if (name === "ながみねしょうむ") {
            res.redirect(307, process.env.tsukuru_n_shomu_URL);
        } else if (name === "ころくよしふみ") {
            res.redirect(307, process.env.tsukuru_k_yoshihumi_URL);    
        } else if (name === "おくたみなと") {
            res.redirect(307, process.env.tsukuru_minato_URL); 
        } else if (name === "くばゆらい") {
            res.redirect(307, process.env.tsukuru_k_yurai_URL);
        } else if (name === "うえはらゆいり") {
            res.redirect(307, process.env.tsukuru_u_yuiri_URL);
        } else if (name === "なかおしんのすけ") {
            res.redirect(307, process.env.tsukuru_n_shinnosuke_URL);
        } else if (name === "ちねんよしあ") {
            res.redirect(307, process.env.tsukuru_t_yosia_URL);    
        } else if (name === "やましろあらた") {
            res.redirect(307, process.env.tsukuru_y_arata_URL);
        } else if (name === "そのだひかり") {
            res.redirect(307, process.env.tsukuru_s_hikari_URL);
        } else if (name === "いとうはる") {
            res.redirect(307, process.env.tsukuru_i_haru_URL);
        } else if (name === "そのだごうだい") {
            res.redirect(307, process.env.tsukuru_s_godai_URL);
        } else if (name === "やまさとゆきひこ") {
            res.redirect(307, process.env.tsukuru_y_yukihiko_URL);
        } else if (name === "つはれお") {
            res.redirect(307, process.env.tsukuru_t_reo_URL);
        } else if (name === "うえだりひと") {
            res.redirect(307, process.env.tsukuru_rihito_URL);
        } else if (name === "くめかいら") {
            res.redirect(307, process.env.tsukuru_k_kaira_URL);
        } else if (name === "なかむらひなた") {
            res.redirect(307, process.env.tsukuru_n_hinata_URL);
        } else if (name === "なかむらいつき") {
            res.redirect(307, process.env.tsukuru_n_iituki_URL);
        } else if (name === "まつだしえい") {
            res.redirect(307, process.env.tsukuru_m_siei_URL);
        } else if (name === "がなはそうすけ") {
            res.redirect(307, process.env.tsukuru_g_sousuke_URL);
        } else if (name === "がなはせいた") {
            res.redirect(307, process.env.tsukuru_g_seita_URL);
        } else if (name === "うえはらひなた") {
            res.redirect(307, process.env.tsukuru_u_hinata_URL);
        } else if (name === "うえはらほのか") {
            res.redirect(307, process.env.tsukuru_u_honoka_URL);
        } else if (name === "きなすずは") {
            res.redirect(307, process.env.tsukuru_k_suzuha_URL);
        } else if (name === "ながふちけんたろう") {
            res.redirect(307, process.env.tsukuru_n_kentaro_URL);
        } else if (name === "ひがいっせい") {
            res.redirect(307, process.env.tsukuru_h_issei_URL2);
        } else if (name === "ながたすみれ") {
            res.redirect(307, process.env.tsukuru_n_sumire_URL);
        } else if (name === "たかえすめい") {
            res.redirect(307, process.env.tsukuru_t_mei_URL);
        } else if (name === "おおいしねゆうり") {
            res.redirect(307, process.env.tsukuru_o_yuuri_URL);
        } else if (name === "みねいはると") {
            res.redirect(307, process.env.tsukuru_m_haruto_URL);
        } else if (name === "たそこけいと") {
            res.redirect(307, process.env.tsukuru_t_keito_URL);
        } else if (name === "とくながりゅうひ") {
            res.redirect(307, process.env.tsukuru_t_ryuhi_URL);
        } else if (name === "さかあきら") {
            res.redirect(307, process.env.tsukuru_s_akira_URL);
        } else if (name === "あさとたくと") {
            res.redirect(307, process.env.tsukuru_a_takuto_URL);
        } else if (name === "みやぎはると") {
            res.redirect(307, process.env.tsukuru_mi_haruto_URL);
        } else if (name === "ちねんまなと") {
            res.redirect(307, process.env.tsukuru_t_manato_URL);
        } else if (name === "ちねんこうき") {
            res.redirect(307, process.env.tsukuru_t_koki_URL);
        } else if (name === "かわむられんたろう") {
            res.redirect(307, process.env.tsukuru_r_rentarou_URL);
        } else if (name === "みやぎゆうや") {
            res.redirect(307, process.env.tsukuru_m_yuya_URL);
        } else if (name === "うえはらちか") {
            res.redirect(307, process.env.tsukuru_u_tika_URL);
        } else if (name === "いのうえりゅうせい") {
            res.redirect(307, process.env.tsukuru_i_ryuusei_URL);
        } else if (name === "つはたかあき") {
            res.redirect(307, process.env.tsukuru_t_takaaki_URL);
        } else if (name === "いしはらせな") {
            res.redirect(307, process.env.tsukuru_i_sena_URL);
        } else if (name === "たなはらけんご") {
            res.redirect(307, process.env.tsukuru_t_kengo_URL);
        } else if (name === "またよしぜんと") {
            res.redirect(307, process.env.tsukuru_m_zento_URL);
        } else if (name === "よしだたくと") {
            res.redirect(307, process.env.tsukuru_y_takuto_URL);
        } else if (name === "きんぐれお") {
            res.redirect(307, process.env.tsukuru_k_reo_URL);
        } else if (name === "もりゆうき") {
            res.redirect(307, process.env.tsukuru_m_yuki_URL);
        } else if (name === "もりゆうり") {
            res.redirect(307, process.env.tsukuru_m_yuuri_URL);
        } else if (name === "ひがしおんなゆうり") {
            res.redirect(307, process.env.tsukuru_h_yuuri_URL);
        } else if (name === "よなみねあきほ") {
            res.redirect(307, process.env.tsukuru_y_akiho_URL);
        } else if (name === "おおむらまひろ") {
            res.redirect(307, process.env.tsukuru_m_mahiro_URL);
        } else if (name === "おおむらけんと") {
            res.redirect(307, process.env.tsukuru_o_kento_URL);
        } else if (name === "とみたゆうと") {
            res.redirect(307, process.env.tsukuru_t_yuto_URL);
        } else if (name === "やまうちじゅほう") {
            res.redirect(307, process.env.tsukuru_y_juho_URL);
        } else if (name === "ひがよしなり") {
            res.redirect(307, process.env.tsukuru_h_yoshinari_URL);
        } else if (name === "じょじょう") {
            res.redirect(307, process.env.tsukuru_j_jo_URL);
        } else if (name === "うねりょうま") {
            res.redirect(307, process.env.tsukuru_u_ryoma_URL);
        } else if (name === "いしみねのぞむ") {
            res.redirect(307, process.env.tsukuru_i_nozomu_URL);
        } else if (name === "きなせいご") {
            res.redirect(307, process.env.tsukuru_k_seigo_URL);
        } else if (name === "まつやまくおん") {
            res.redirect(307, process.env.tsukuru_kuon_URL);
        } else if (name === "やまだがく") {
            res.redirect(307, process.env.tsukuru_gaku_URL);
        } else if (name === "かけはしいつき") {
            res.redirect(307, process.env.tsukuru_kitsuki_URL);
        } else if (name === "かけはしゆうた") {
            res.redirect(307, process.env.tsukuru_kyuta_URL);
        } else if (name === "おおもりしゅうえい") {
            res.redirect(307, process.env.tsukuru100_URL);
        } else if (name === "いはひろと") {
            res.redirect(307, process.env.tsukuru_i_hiroto_URL);    
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
