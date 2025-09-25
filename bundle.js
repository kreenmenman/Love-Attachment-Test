/* =========================
   Love Attachment 16 - bundle.js（完全版）
   - 質問UI（1〜6の○／✓表示）
   - 未回答チェック（番号を表示）
   - 採点（Anxiety/Avoidance + 8 facets）
   - 16サブタイプ（詳細テキスト & 相性）
   - 結果描画（画像＋本文＋レーダー）
   ========================= */

/* ---------- メタ ---------- */
const STYLE_META = {
  secure:  { label: "安定型",   desc: "不安・回避がともに低め。信頼・協力・自己調整が得意。" },
  anxious: { label: "不安型",   desc: "不安が高め。安心サインを求めやすい。" },
  avoidant:{ label: "回避型",   desc: "回避が高め。自由・効率・自律を優先しがち。" },
  fearful: { label: "恐れ回避型", desc: "不安・回避がともに高め。接近と回避の振れが強い。" }
};

/* ---------- サブタイプ -> 画像ファイル名 ---------- */
/* 画像は /content/love16 配下に PNG で置いてください（日本語ファイル名のままでOK） */
const IMAGE_BY_SUBTYPE = {
  // 安定型
  self_stable:      "self_stable.png",
  other_trust:      "other_trust.png",
  conflict_tolerant:"conflict_tolerant.png",
  boundary_respect: "boundary_respect.png",
  // 不安型
  confirm:          "confirm.png",
  assim:            "assim.png",
  jealous:          "jealous.png",
  abandon:          "abandon.png",
  // 回避型
  indep:            "indep.png",
  suppress:         "suppress.png",
  rational:         "rational.png",
  freedom:          "freedom.png",
  // 恐れ回避型
  ambivalent:       "ambivalent.png",
  trigger_avoid:    "trigger_avoid.png",
  testing:          "testing.png",
  boundary_flip:    "boundary_flip.png",
};


/* ---------- サブタイプ定義（16） ---------- */
/* ※長文はそのまま前回と同一です（結果に全文表示されます） */
const pack = (a,b,c,d,e,f)=>({strong:a,pattern:b,early:c,conflict:d,talk:e,actions:f});
const SUBTYPES = {
  /* ===== 安定型 (secure) ===== */
  secure: {
    self_stable:{
      name:"安心ガーデナー", blurb:"嵐でも根を張る、自己調整の達人。", detail:pack(
        "情動安定／メタ認知／休息設計",
        "3呼吸→主観/事実分け→合意形成に戻れる",
        "忙しいと反応遅め。既読・簡易合図が有効",
        "“論理で慰める”傾向で感情が置き去りに",
        "事実→解釈→感情→希望を1〜2行で共有",
        ["週2『気持ちの棚卸し』3行記録","遅延テンプレ（安心→要件→目安）準備","まず要約＋共感→次に解決策"]
      ),
      long:{
        basic:`あなたは感情の波に強く、嵐の中でも土台を崩さないタイプです。状況が荒れても深呼吸して足場を確かめ、事実と感情を切り分けながら、必要なことを静かに進めます。普段は柔らかくマイペース。しかしスイッチが入ると一気に集中し、周囲が安心して寄りかかれる“支柱”のような存在になります。
  仕事でも恋愛でも「急がば回れ」を体感で知っていて、休む・整える・また動くのリズムを作るのが得意。人の未熟さに寛容で、正論よりも関係の持続を選べるのがあなたの魅力です。たまに“クール”に見られるけれど、実は他人の気持ちに対してとても誠実。派手さはないのに、気づけばあなたのやり方がチームや関係の標準になっている——そんな安定のリーダーシップを秘めています。`,
        love:`恋愛では「過干渉も放置もしない」ちょうどよい距離感を作る名手。相手の不安や苛立ちに巻き込まれにくく、受け止めたうえで合意に戻すことができます。
  その一方で、落ち着きがゆえに“温度が伝わりにくい”場面も。安心させたい時ほど説明が先行しがちで、「分かるけど、今は共感がほしい」と相手に感じさせることがあります。あなた自身は波が小さいため、感情表現が大きい人と組むと最初は戸惑うかもしれません。でも、短い共感のひと言を添えられると、あなたの誠実さがよりクリアに伝わります。`,
        ideal:`「話せば分かる」を信じ、ルールや目安を一緒に作れる相手が理想です。返信の目安、忙しい時のサイン、会う頻度などを先に握っておけば、あなたの安定性が最大化します。
  スキンシップや言葉の愛情表現は派手でなくてOK。むしろ“続けられる小さな儀式”が効きます。週1の状態確認、1日1回の「ありがとう」、寝る前のひとこと。そうした地味な積み重ねを楽しめる人となら、長く穏やかに深まっていくはず。感情の起伏がやや大きい相手とも、共感 → 事実 → 希望の順で話せば、衝突は「分かり合う体験」に変わります。`,
        match:{
          best:[ {label:"確認リピーター（不安型）", why:"あなたの落ち着きと具体的な安心サインが、相手の不安を溶かす。『返事の目安』『安心ワード』を握れば最強。"} ],
          good:[ {label:"合理の城主（回避型）", why:"共感→合意のプロセスが合理派の信頼を得る。感情の1行要約を先に入れるとベスト。"},
                {label:"境界ナビゲーター（安定型）", why:"距離感の設計が得意同士。自由枠と二人枠を定例化で長期安定。"} ],
          challenge:[ {label:"境界スプリンター（恐れ回避）", why:"急接近→急離脱の波に巻き込まれると疲弊。休憩宣言と再開目安を先にルール化。"} ]
        }
      }
    },
    other_trust:{
      name:"信頼キャプテン", blurb:"信頼の空気を作る司令塔。", detail:pack(
        "一貫性／約束の履行／役割設計",
        "期待値を言語化し、合意を残せる",
        "善意で引き受け過多→自分が摩耗",
        "“全部受ける＝優しさ”で限界超過→破綻リスク",
        "境界を数値化（時間/頻度/可否）して誤解を防ぐ",
        ["週1『合意メモ』更新","断りテンプレ（共感→事情→代替→感謝）","負荷超過は早期共有→再調整提案"]
      ),
      long:{
        basic:`あなたは場に「信頼の空気」を生み出す司令塔タイプです。約束は必ず守り、言ったことをやりきる。その一貫性があなたの最大の強みであり、周囲の人たちに安心感を与えます。物事を始める前に期待値をすり合わせ、役割や責任を明確にするのが得意。人任せにせず、自分も責任を引き受ける姿勢は、自然と周囲からの信頼を集めます。
  一方で、信頼関係を重視するあまり、自分の限界を超えてまで引き受けてしまうことも。境界線が曖昧になると、無理をして疲弊してしまうこともあるので注意が必要です。あなたの真摯さは人を惹きつけますが、同時に“境界をどう守るか”が安定を長続きさせる鍵になります。`,
        love:`恋愛では「相手が安心して寄りかかれる環境」をつくることに長けています。約束をきちんと守り、合意を言語化するので、パートナーは安心してあなたに心を委ねられるでしょう。困ったことがあれば解決策を考え、一緒に動いていく姿勢はとても誠実で頼りがいがあります。
  ただし、善意で引き受けすぎると“自分の気持ち”を後回しにしてしまいがちです。恋人のために尽くすことは素晴らしいですが、境界を決めずに無制限に応えると、いつか心身がすり減ってしまうこともあります。`,
        ideal:`あなたに合う理想の相手は、信頼を大切にする人。週に1度の「振り返りタイム」や、小さな合意の積み重ねを楽しめる人なら、あなたの魅力が最大限に引き出されます。境界線を「できる／できない／再検討はいつ」と具体的に示せる関係なら、あなたは安心して力を発揮できます。ロマンチックな盛り上がりよりも「約束が守られる日常」に心が安らぐはずです。`,
        match:{
          best:[ {label:"合理の城主（回避型）", why:"構造と透明性を重視する2人。合意メモが恋の潤滑油に。"} ],
          good:[ {label:"同化ラバー（不安型）", why:"境界を可視化すれば、相手は安心して自分の希望を言いやすくなる。"},
                {label:"単独航海士（回避型）", why:"“一人の時間”と“共有時間”をセット設計で尊重が回り始める。"} ],
          challenge:[ {label:"テストトリックスター（恐れ回避）", why:"試し行動で合意が壊れやすい。『依頼文テンプレ』で“試し→お願い”へ変換。"} ]
        }
      }
    },
    conflict_tolerant:{
      name:"調和モデレーター", blurb:"衝突を建設的に変える仲裁者。", detail:pack(
        "葛藤耐性／論点整理／プロセス設計",
        "『論点→選択肢→合意』で進める",
        "平和優先で“重要だけど不快”を先送り",
        "論点拡散・蒸し返し→1トピック制で防ぐ",
        "“先に相手の要点を要約→自分の見解”",
        ["毎回1テーマに限定","反対意見を先に要約","合意を1行テンプレで保存"]
      ),
      long:{
        basic:`あなたは衝突を恐れず、それを“安全に処理できる人”です。感情が高ぶっても一歩引いて全体を整理し、論点を切り分けて議論を前に進めることができます。冷静に場を収める力があり、衝突の中でも安心感を維持できる存在。周囲はあなたがいるだけで「安心して意見を言える」と感じるでしょう。
  その一方で、平和を守りたい気持ちが強いため、大事なテーマを先送りにしてしまうこともあります。「言わなければ傷つけない」という優しさが、時に自分や相手の不満を積み上げてしまうことも。`,
        love:`恋愛では「衝突＝終わり」ではなく「衝突＝深まるチャンス」と捉えられるのが大きな強みです。パートナーが感情的になっても、あなたはその言葉を丁寧に拾い、合意にまでつなげることができます。その冷静さと包容力は、相手にとって大きな安心になるでしょう。
  ただし、あなたが黙って相手に譲ることが増えると、問題が解決されないまま残ってしまいます。重要なことほど期限を切って向き合うと、関係はさらに信頼で満たされます。`,
        ideal:`理想の相手は「違いを話しても大丈夫」と思える人。議論が愛情の否定ではないと理解できる関係なら、安心して本音を言えます。会話の型は『不快だけど重要なことは1回1テーマ』『論点→選択肢→合意』。このスタイルを共有できれば、衝突はむしろ絆を強めるチャンスに変わります。`,
        match:{
          best:[ {label:"警戒スカウター（不安型）", why:"“事実/解釈/感情”を安全に仕分けでき、疑念のループを断ちやすい。"} ],
          good:[ {label:"感情ミニマリスト（回避型）", why:"感情を言語化するサポート役に。『気持ち中心の時間』を週1で予約◎。"},
                {label:"境界ナビゲーター（安定型）", why:"距離感の上手さ×対話の上手さで長期安定。"} ],
          challenge:[ {label:"自由ファースト（回避型）", why:"議論自体を避けられると未解決が溜まる。時間と範囲を限定した“超短時間ミーティング”を。"} ]
        }
      }
    },
    boundary_respect:{
      name:"境界ナビゲーター", blurb:"近すぎず遠すぎずの距離設計士。", detail:pack(
        "自他境界／時間管理／尊重",
        "初期から粒度・頻度・既読合図を握る",
        "控えめさが“温度低い”と誤読されがち",
        "踏み込み不足→“深い話デー”で補う",
        "『関心は高い／速度はゆっくり』を宣言",
        ["自由枠と二人枠を同時確保","自己開示トピックを月3つ","感謝は言葉＋小さな行動で返す"]
      ),
      long:{
        basic:`あなたは「近すぎず、遠すぎず」の距離感を設計する名手です。一人時間と共有時間のバランスを大切にし、相手に依存せず自分の軸を守れるタイプ。人に踏み込みすぎない優しさと、自分を押し付けない余裕があり、周囲からは「自然体で安心できる人」と思われています。
  同時に、温度を上手に伝えないと「冷たい」と誤解されることもあります。あなたの中では“関心は高いけど速度はゆっくり”という感覚が自然でも、相手は“熱がないのかも”と受け止めてしまうのです。だからこそ、あなたにとって大切なのは“関心はあるよ”を意識的に伝えることです。`,
        love:`恋愛では「相手と自分のリズムをどう両立させるか」を重視します。パートナーにベタベタしすぎるのも違うし、放置しすぎるのも違う。その間を見極めて、健全な距離を保てるのがあなたの強みです。お互いに自由時間を確保しながら、会う時はしっかり一緒に楽しむ——そんなメリハリのある関係を築けます。
  ただし、距離を取りすぎると「気持ちがないのでは？」と誤解されがち。温度を表に出すのが得意ではないため、意識して「楽しみにしてる」「いてくれて嬉しい」と言葉や行動で示すことが、恋愛をスムーズにします。`,
        ideal:`あなたに合うのは、自由とつながりの両方を尊重してくれる人です。「週末は自由枠、平日は二人枠」といったルールを事前に合意できる相手なら、あなたの魅力が最大限に発揮されます。自己開示は少しずつでも構いません。「月に3つ新しい話題をシェアする」など小さな習慣を持つことで、距離を取りすぎる不安を防げます。`,
        match:{
          best:[ {label:"自由ファースト（回避型）", why:"自由を酸素とする相手と親和性が高い。『自由枠/二人枠/既読合図』の3点セットで快適さが続く。"} ],
          good:[ {label:"安心ガーデナー（安定型）", why:"安定×境界で、過度な干渉も放置も起こりにくい。"},
                {label:"確認リピーター（不安型）", why:"量と頻度を合意できれば、あなたの予見可能性が大きな安心に。"} ],
          challenge:[ {label:"見捨て恐怖ランナー（不安型）", why:"追う/逃げるの非対称が固定化しやすい。『タイムアウト宣言』と再開目安を先に共有。"} ]
        }
      }
    }
  },


  /* ===== 不安型 (anxious) ===== */
  anxious: {
    confirm:{
      name:"確認リピーター", blurb:"“大丈夫？”が口ぐせの絆守護者。", detail:{},
      long:{
        basic:`あなたは関係を守るための「見張り灯台」のような人です。小さな変化を敏感に捉え、必要なら確認をして安心を取り戻そうとします。約束や言葉のニュアンスに細やかで、ふたりのズレを放置しない誠実さが大きな魅力。
  同時に、その誠実さが「確かめすぎ」という形で表に出ることもあります。あなたの中では“相手を大切にしたい”という純粋な思いなのに、相手にはときどき“詰められている”ように映る——そこがすれ違いの起点になりがちです。
  それでも、あなたがいる関係は壊れにくい。なぜなら、危険信号を早期に検知し、対話へ戻そうとする推進力があるから。安心は偶然ではなく、あなたの行動がつくっています。`,
        love:`恋愛では「返信が遅い」「会う予定がズレた」などに敏感で、不安が高まると連絡頻度が増える傾向があります。これは“関係を守りたい”気持ちの裏返し。相手が冷たいからではなく、あなたが真剣だからこそ起きる反応です。
  一方で、安心を取り戻すための行動が多すぎると、相手の自由感が損なわれ、逆に距離が生まれることも。あなたの優しさをそのまま伝えるためにも、「どの安心が欲しいのか」を言葉にすることが大切です。`,
        ideal:`理想は、安心サインを一緒に言葉にしてくれる人。例えば「既読スタンプでOK」「返事は翌日昼まで」「週1で予定確認」など、具体的な合意があるほど不安は静まります。
  “確認のための確認”ではなく、“ふたりの安心を増やす確認”に変えられたとき、あなたの誠実さは最大限に発揮されます。`,
        match:{
          best:[{label:"安心ガーデナー（安定型）", why:"落ち着きと具体的サインで不安をスムーズに和らげる。"}],
          good:[{label:"境界ナビゲーター（安定型）", why:"距離の取り方を丁寧に可視化。数値合意で安心度UP。"},
                {label:"同化ラバー（不安型）", why:"“一緒にいたい”思いを素直に共有でき、共感が高まりやすい。"}],
          challenge:[{label:"自由ファースト（回避型）", why:"連絡頻度が噛み合わない。『既読合図・週◯回』を数値で握らないと摩擦。"}]
        }
      }
    },
    assim:{
      name:"同化ラバー", blurb:"溶け合うことに幸福を見いだす順応家。", detail:{},
      long:{
        basic:`あなたは“溶け合うこと”に幸福を見いだす人。共感力が高く、相手の世界に自然に寄り添える優しさを持っています。相手が喜ぶなら自分も嬉しい——そんな純度の高い愛情があなたの魅力。
  ただ、合わせることが得意なぶん、自己の輪郭が薄くなりやすい側面も。「相手がOKなら自分もOK」と無意識に決めてしまい、後で本音が分からなくなることがあります。
  それは弱さではなく、優しさの“過剰適応”。あなたが悪いのではありません。必要なのは、相手に合わせる力と同じくらい“自分の希望を拾い上げる力”です。`,
        love:`恋愛では初期の一体感がとても心地よく、相手にとっても魅力的に映ります。けれど、後半になるにつれ“本当はどうしたい？”が曖昧になりやすく、気づいたときには小さな不満が積もっていることも。
  「我慢が優しさ」ではなく、「伝えるのが優しさ」に切り替える練習が効果的。あなたの望みは、相手にとっても“大切にしたい情報”です。`,
        ideal:`理想は、あなたの希望を率直に聴いてくれる相手。「今日はあなたのやりたいことを3つ聞かせて」のように、主体性を歓迎してくれる人なら、健やかな一体感が長続きします。
  最初は小さくて構いません。「私は◯◯がしたい」「今日は△△を選びたい」——主語を“私”に戻すだけで、関係の透明度が上がります。`,
        match:{
          best:[{label:"信頼キャプテン（安定型）", why:"境界を可視化しつつ、あなたの献身を無理なく受け止めてくれる。"}],
          good:[{label:"確認リピーター（不安型）", why:"“一緒にいたい”思いを共有でき、安心を育てやすい。"},
                {label:"近づきたい逃げたい（恐れ回避）", why:"波はあるが強い一体感を共有可能。"}],
          challenge:[{label:"感情ミニマリスト（回避型）", why:"合わせすぎて自己喪失に。境界リスト共有が無いと苦しい。"}]
        }
      }
    },
    jealous:{
      name:"警戒スカウター", blurb:"微細な変化を嗅ぎ分ける哨戒役。", detail:{},
      long:{
        basic:`あなたは変化を見逃さない“高感度センサー”の持ち主です。SNSの反応、予定の揺らぎ、声色の違い——微細なサインから相手の心の動きを読み取り、危機を未然に防ごうとします。
  強みである一方、裏目に出ると“疑い深い”と受け取られやすくなります。確証がない段階の不安をそのまま相手にぶつけると、相手は防御的になり、信頼のラインが細くなることも。
  鍵は「事実・解釈・感情」を分けて扱うこと。あなたの観察眼は価値が高いからこそ、届け方を整えるだけで、信頼を増やす力に変わります。`,
        love:`恋愛では、心変わりや第三者への警戒が強く、関係の透明性を求めやすい傾向があります。予定の共有や説明が曖昧だと、想像が広がって疲れてしまうことも。
  不安を抑え込むのではなく、「確認して安心する仕組み」を一緒に作るのが得策です。あなたの安心は“わがまま”ではありません。関係の品質管理です。`,
        ideal:`理想は、透明性を自然に保てる相手。カレンダー共有や簡単な報連相を嫌がらない人なら、あなたは過剰に警戒せずに済みます。疑念が浮かんだときは“24時間メモ”してから伝えるだけで、会話の質が劇的に上がります。
  あなたの鋭さは、関係を守るセキュリティ。運用のルールが加われば、頼れる“警備主任”に。`,
        match:{
          best:[{label:"調和モデレーター（安定型）", why:"疑念を安全に扱い、対話へ変えてくれる。"}],
          good:[{label:"見捨て恐怖ランナー（不安型）", why:"互いの不安を共感で和らげやすい。"},
                {label:"テストトリックスター（恐れ回避）", why:"“試す”傾向が重なるので、依頼ルール化で良い関係に。"}],
          challenge:[{label:"単独航海士（回避型）", why:"一人時間を“無関心”と誤解しやすい。ペースを数字で握らないと難しい。"}]
        }
      }
    },
    abandon:{
      name:"見捨て恐怖ランナー", blurb:"離れる前に追いかけてしまう人。", detail:{},
      long:{
        basic:`あなたは“離れる前に追いかける”スピード感を持つ人。距離が広がるサインに敏感で、関係を守るために素早く動けます。責任感と愛情の厚さが行動力に直結しているタイプです。
  ただ、その行動が衝動的になると、相手の自由感を圧迫してしまうことも。あなたの中では「大切にしたいから動く」なのに、相手には「追い立てられている」と映る瞬間が生まれます。
  大事なのは“スピードを落とす”ではなく、“安全なレーンを作る”こと。あなたの速さは長所です。運転ルールを整えれば、頼れる救急車になります。`,
        love:`恋愛では、沈黙や多忙を“拒絶”として感じやすく、連絡や接触を増やして安心を取り戻そうとします。会えた時には深い愛情と安心を提供できるため、相手の心に強い印象を残すタイプでもあります。
  一方、連絡を増やすほど相手が後退するケースも。追いかけるほど遠ざかる——このループを断つには、“一旦止まって再開目安を決める”という新しい筋肉が効きます。`,
        ideal:`理想は、「安心も自由も大切」という価値観を共有できる相手。距離を取るときは必ず“再開の目安”を言葉にしてくれる人だと、あなたの不安は大きく軽減されます。
  「今は30分だけ」「明日の20時に話そう」——小さな目安でも充分。あなたの速さはその約束に向けて最短距離を走る力へ変わります。`,
        match:{
          best:[{label:"境界ナビゲーター（安定型）", why:"“再開目安”を添えてくれるので、走りすぎず安心できる。"}],
          good:[{label:"警戒スカウター（不安型）", why:"不安を共感し合いやすい。疑念が暴走しない仕組みが必須。"},
                {label:"近づきたい逃げたい（恐れ回避）", why:"波が合う瞬間は強い。仕組みで安定化が必要。"}],
          challenge:[{label:"自由ファースト（回避型）", why:"“自由が欲しい相手”と“繋がりたい自分”が衝突。ルール設計なしは厳しい。"}]
        }
      }
    }
  },


  /* ===== 回避型 (avoidant) ===== */
  avoidant: {
    indep:{
      name:"単独航海士", blurb:"まずは一人で沖に出る探検家。", detail:{}, long:{
        basic:`あなたはまず「自分でやってみる」独立心の強いタイプです。人に頼る前に自分で調べ、解決策を見つけ出す力があり、行動力と責任感を兼ね備えています。周囲からは「自立していて頼もしい」と見られることが多く、任せて安心できる存在です。
  ただし、頼られることは得意でも「頼ること」は苦手。疲れていても一人で背負い込んでしまい、気づけば孤立感が強まることもあります。あなた自身は“普通”と思っていても、相手からは「壁を感じる」と思われがち。だからこそ、小さな依頼や共有の積み重ねが関係を温めます。`,
        love:`恋愛では「自分のことは自分で」という姿勢が強く、相手から見れば安心でも、少し距離があるように感じられることもあります。弱みを見せることにためらいがあり、「大丈夫」「平気」が口癖になりやすい傾向も。
  その一方で、頼られたときの対応力は抜群。相手にとっては「支えてくれる人」という印象を持ちやすく、信頼関係が深まりやすいタイプでもあります。`,
        ideal:`理想の相手は「頼ること」を安心してできる人。小さなお願いを一緒に練習できる相手となら、あなたの自立心は健やかに保たれます。進捗を途中で共有するだけでも、相手の安心感はぐっと増します。
  「全部終わってから伝える」のではなく、「いまここまでできた」とシェアする習慣を持つと、距離が一気に縮まります。`,
        match:{ best:[ {label:"信頼キャプテン（安定型）", why:"信頼と境界を可視化し、自立を尊重しつつ関係を強化。"} ],
              good:[ {label:"自由ファースト（回避型）", why:"互いの距離を尊重。最低限のルールで良好に。"},
                      {label:"境界ナビゲーター（安定型）", why:"自由と共有のバランスを整えてくれる。"} ],
              challenge:[ {label:"見捨て恐怖ランナー（不安型）", why:"追われると逃げたくなる。距離と再開のルールが必須。"} ] }
      }
    },
    suppress:{
      name:"感情ミニマリスト", blurb:"感情は必要最小限、効率重視。", detail:{}, long:{
        basic:`あなたは「感情は必要最小限でいい」と考える傾向のあるタイプです。冷静さと安定感を持ち、危機やトラブルの場面でも慌てず判断できます。周囲からは「落ち着いていて頼りになる」と言われることが多いでしょう。
  ただし、感情を抑え込むことが多いため、相手には「本音が見えない」と映りやすい一面もあります。「問題ないよ」と言いながらも、本当は不安や疲れを感じている——そんな時もあるのではないでしょうか。感情を抑える強さは長所ですが、伝わらなければ“冷たい”と誤解されることもあります。`,
        love:`恋愛では「落ち着いている」ことが強みとして働きます。感情に振り回されず、安定感を相手に与えられるので、信頼を得やすいでしょう。ですが、相手が「もっと気持ちを共有したい」と望んでいる時に、あなたの沈黙が壁になってしまうこともあります。
  あなたにとって「話すほどのことじゃない」でも、相手にとっては「共有したいこと」かもしれません。その差を埋める意識が関係をスムーズにします。`,
        ideal:`理想の相手は「感情を言葉にしても安全だ」と思わせてくれる人。毎日一言でもいいので「今日は少し疲れた」「安心した」と伝えるだけで、相手はあなたの心をぐっと近くに感じられます。週に一度は“気持ちだけを話す時間”を取ると、誤解を防げます。`,
        match:{ best:[ {label:"調和モデレーター（安定型）", why:"安全に感情を整理してくれるため、安心してシェアできる。"} ],
              good:[ {label:"合理の城主（回避型）", why:"効率重視で相性良し。ただし感情不足に注意。"},
                      {label:"同化ラバー（不安型）", why:"感情を積極的に表現してくれるため、バランスがとれる。"} ],
              challenge:[ {label:"警戒スカウター（不安型）", why:"無表情が“何か隠してる”と誤解されやすい。透明性を意識。"} ] }
      }
    },
    rational:{
      name:"合理の城主", blurb:"最短距離を好む意思決定者。", detail:{}, long:{
        basic:`あなたは物事を効率よく進めることを重視する“意思決定者”タイプです。最短距離で正解を出すのが得意で、論理的に物事を整理する力があります。課題解決や仕事の場では大きな武器となり、周囲から「頼れる決断役」として信頼されます。
  ただ、恋愛においては“正解”を急ぎすぎるあまり、感情やプロセスを軽視してしまうことがあります。あなたの中では「早く解決することが優しさ」でも、相手には「気持ちを置き去りにされた」と受け取られることもあるのです。`,
        love:`恋愛では効率的に問題を処理できるので、頼れるパートナーとして見られる一方、感情面を置き去りにしてしまうことがあります。「気持ちを聞いて欲しい」場面でも、あなたは結論を先に出してしまいがち。そのスピード感は強みでもあり、すれ違いの原因にもなります。
  「結論の前に感情を一言確認する」——この小さな一手間で、相手は安心してあなたの合理性に乗れるようになります。`,
        ideal:`理想の相手は「気持ちを要約して伝えてくれる人」。あなたの決断力と相手の感情力が合わさると、スピードと安心の両立が可能になります。感情を軽視するのではなく、“感情コスト”も評価に含めると、相手はより信頼を深めます。`,
        match:{ best:[ {label:"信頼キャプテン（安定型）", why:"構造と合意形成が好きな二人。意思決定がスムーズで安定。"} ],
              good:[ {label:"感情ミニマリスト（回避型）", why:"効率重視同士。ただし感情不足に注意。"},
                      {label:"確認リピーター（不安型）", why:"合理性に安心を足すことで相手の不安を和らげられる。"} ],
              challenge:[ {label:"テストトリックスター（恐れ回避）", why:"“非合理”と切り捨てやすい。背景の不安を見る姿勢が必要。"} ] }
      }
    },
    freedom:{
      name:"自由ファースト", blurb:"自由は酸素、関係も軽やかに。", detail:{}, long:{
        basic:`あなたは「自由は酸素」と感じるタイプ。自発性や新しいことへの挑戦を大切にし、縛られない環境で輝きます。スピード感があり、周囲に新しい風を吹き込む存在です。
  ただし、自由を最優先するあまり、相手に「軽視されている」と誤解されることもあります。あなたにとっては「ひとりの時間＝充電」でも、相手には「放置」と映ることがあるのです。自由は長所ですが、共有しないとすれ違いの原因にもなります。`,
        love:`恋愛では「一緒に楽しむときは全力、ひとり時間も全力」というスタイル。相手がその切り替えに慣れるまでは、少し戸惑わせるかもしれません。自由を優先する姿勢は魅力的ですが、連絡の遅れや不規則さが「無関心」と受け取られやすいのが注意点です。
  あなたにとっては「ルールが少ないほうが心地いい」ですが、相手にとっては「安心の欠如」となる場合も。自由の設計図を一緒に作ることがポイントです。`,
        ideal:`理想の相手は「自由を尊重しつつ、安心のルールを作れる人」。例えば「週末は自由枠、平日は二人枠」「返事ができない時は既読合図だけ」など、小さな合意を持つことで摩擦は減ります。
  自由と安心の両方が守られる関係なら、あなたの自発性と軽やかさは最大限に発揮されます。`,
        match:{ best:[ {label:"境界ナビゲーター（安定型）", why:"自由と共有の両立を一緒に設計できる。"} ],
              good:[ {label:"単独航海士（回避型）", why:"互いに自由を重んじる。最低限のルールで心地よい距離感。"},
                      {label:"同化ラバー（不安型）", why:"あなたの自由を受け入れつつ甘えてくれる相手なら居心地が良い。"} ],
              challenge:[ {label:"確認リピーター（不安型）", why:"連絡頻度不一致で摩擦。『既読合図』『週◯回』を数値で。"} ] }
      }
    }
  },


  /* ===== 恐れ回避型 (fearful) ===== */
  fearful: {
    ambivalent:{
      name:"近づきたい逃げたい", blurb:"接近と回避で揺れる振り子。", detail:{}, long:{
        basic:`あなたの中には「深く繋がりたい気持ち」と「距離を取りたい気持ち」が同居しています。感受性が鋭く、人の表情や間合いから気配を読むのが得意。直観が当たることも多く、関係の機微に強いタイプです。
  ただ、その繊細さゆえに、心が揺れた瞬間に“接近”と“回避”のペダルを交互に踏んでしまうことがあります。良いときほど「壊れるのが怖い」気持ちが膨らみ、守るために距離を取る——そんな自己防衛のパターンが起きやすいのです。
  この揺れは弱さではなく、あなたの心がとても誠実である証拠。守り方を覚えれば、魅力はそのままに、関係の安定感を高められます。`,
        love:`恋愛では「一気に近づく→急に離れる」という波が出やすく、相手を戸惑わせることがあります。近い時は最高に温かく、離れる時は音もなく静か。あなた自身も「なぜこんなに揺れるのか」と悩みがちですが、背景には“傷つけたくない／傷つきたくない”の両立願望があります。
  波をゼロにするよりも、波の“予測可能性”を上げるのが近道。自分の波長を理解し、相手と共有できるほど、関係は驚くほど楽になります。`,
        ideal:`理想の相手は、あなたの波を“異常”ではなく“リズム”として受け止めてくれる人。たとえば「急接近した翌日はメンテナンスデー」「距離を取りたい時は理由と再開目安を伝える」といった小さな合意が効きます。
  「いまは休憩したい（48時間）。○日にまた話そう」——これだけで、相手の不安は大きく減り、あなたも安心して戻ってこられます。`,
        match:{ best:[ {label:"同化ラバー（不安型）", why:"柔軟に寄り添ってくれるため、波があっても受け止めやすい。"} ],
              good:[ {label:"安心ガーデナー（安定型）", why:"相手の安定があなたの波を落ち着かせる。"},
                      {label:"境界スプリンター（恐れ回避）", why:"似た波を持つため共感しやすいが、仕組みで調整が必要。"} ],
              challenge:[ {label:"単独航海士（回避型）", why:"距離を置く相手とすれ違いがち。“再開目安”を必ず決める必要。"} ] }
      }
    },
    trigger_avoid:{
      name:"爆発回避者", blurb:"衝突を避けるために遠回り。", detail:{}, long:{
        basic:`あなたは「衝突＝破綻」と感じやすく、爆発を避けるために会話から退避する傾向があります。危険察知の勘が鋭く、場の圧に敏感。未然にトラブルを回避する力は高い一方、先送りが積み重なって内圧が上がりやすいのが課題です。
  静かで丁寧、思慮深い——その良さは本物。必要なのは“安全な話し方”の設計。安心して少しずつ出せれば、あなたは誠実で対話的なパートナーになります。`,
        love:`恋愛では、波風を立てないために本音を飲み込みがち。あなたの優しさなのに、相手からは「何を考えているか分からない」「黙って距離を取られた」と誤解されることも。沈黙は“拒絶”ではなく“防爆”なのだと、まず自分が理解することが第一歩です。
  “安全地帯の会話”を作れれば、あなたの知性と優しさはスムーズに伝わります。`,
        ideal:`理想の相手は、会話を“小さく区切る”ことに協力してくれる人。たとえば「5分だけ」「1テーマだけ」「事実→希望→次の一手」の順に話す合意を持てると、一気に気が楽になります。
  話す前に「これは責めではなく共有ね」と前置きする、終わりに「今日話せてよかった」と労う——そんな小さな儀式が、あなたの対話筋を育てていきます。`,
        match:{ best:[ {label:"調和モデレーター（安定型）", why:"安全な場づくりが得意で、回避傾向を安心に変えてくれる。"} ],
              good:[ {label:"確認リピーター（不安型）", why:"安心を欲しがる相手に短時間ルールで対応すれば調整可能。"},
                      {label:"感情ミニマリスト（回避型）", why:"感情を抑える傾向に共感しやすい。"} ],
              challenge:[ {label:"テストトリックスター（恐れ回避）", why:"試し行動と回避がぶつかりやすい。依頼文ルールが必須。"} ] }
      }
    },
    testing:{
      name:"テストトリックスター", blurb:"試し行動で愛を測る人。", detail:{}, long:{
        basic:`あなたは「愛されている確証」を強く求めます。素直に「不安だ」と言いづらいとき、無意識に“試す行動”で反応を見てしまうことがあるタイプです。誠実だからこそ、本当に信じたい——その真剣さが根っこにあります。
  試し行動は防衛の知恵でしたが、繰り返されるほど信頼を摩耗させてしまうことも。仕組みを作れば、あなたの真剣さは“依頼できる力”へと進化します。`,
        love:`恋愛では、既読スルーや予定変更に強く反応し、わざと距離を取って相手の反応を測る——そんなパターンが出やすいかもしれません。あなたに悪意はなく、むしろ関係に本気だからこそ起きる行動です。
  「察して」から「伝えて」へ。欲しい安心を具体にすれば、試す必要が減り、安心が日常化します。`,
        ideal:`理想の相手は、“安心サインを運用できる人”。たとえば「週に3回この言葉を言って」「返信できない時は既読だけ」「週末に15分の近況シェア」など、頻度・言葉・タイミングを合意できると、あなたの不安は大幅に軽くなります。
  安心は偶然ではなく運用。あなたの真剣さは、運用を続ける力として活きます。`,
        match:{ best:[ {label:"警戒スカウター（不安型）", why:"同じく不安を持ち共感できる。依頼ルール化で安心に変えられる。"} ],
              good:[ {label:"信頼キャプテン（安定型）", why:"合意形成力で不安を具体的ルールに落とし込める。"},
                      {label:"境界スプリンター（恐れ回避）", why:"どちらも急変傾向だが、仕組み共有で刺激的かつ継続可能に。"} ],
              challenge:[ {label:"合理の城主（回避型）", why:"“非合理”と切り捨てられやすい。背景の不安を説明しないと冷えやすい。"} ] }
      }
    },
    boundary_flip:{
      name:"境界スプリンター", blurb:"一線を越えては急に離れる反復者。", detail:{}, long:{
        basic:`あなたは勢いと決断力のあるタイプ。良いと感じたら一気に踏み込み、危険を察すると同じ速さで離脱します。その瞬発力は魅力ですが、繰り返されると自己嫌悪に繋がりやすいのが課題です。
  あなたの急変は“軽さ”ではなく“守り方”。境界線を言葉で持てるようになるほど、魅力はそのままに安定度が上がります。`,
        love:`恋愛では、急接近と急冷却のギャップが相手を驚かせることがあります。熱量の高さは大きな魅力ですが、クールダウンのときに説明がないと“捨てられた”と誤解されやすい。
  “急変の予告”と“再開の目安”があれば、関係は一気に楽になります。あなたは戻ってくる——それが見えるだけで、相手の不安は大きく下がります。`,
        ideal:`理想の相手は、境界線を言葉で確認してくれる人。「ここまではOK」「ここからは休憩」「合図はこの言葉」など、前もって決めておくほど、あなたの良さが健やかに輝きます。熱が上がったら“一時停止サイン”、再開時は“理由＋再発防止の一言”を添える——それだけで信頼は保たれます。`,
        match:{ best:[ {label:"近づきたい逃げたい（恐れ回避）", why:"同じ波を持ち共感しやすい。ルール次第で衝突より成長に。"} ],
              good:[ {label:"境界ナビゲーター（安定型）", why:"距離設計が得意な相手が急変を受け止めてくれる。"},
                      {label:"見捨て恐怖ランナー（不安型）", why:"情熱を分かち合えるが“再開目安”の明示が不可欠。"} ],
              challenge:[ {label:"感情ミニマリスト（回避型）", why:"急変が“不可解”に映りやすい。理由を言葉で残さないと溝が深まる。"} ] }
      }
    }
  },
};

/* ---------- 設問（28問／1〜6） ---------- */
const ITEMS = [
  // Anxiety facets: confirm, assim, jealous, abandon
  {text:"相手の気持ちが離れていないか、頻繁に確かめたくなる。",axis:"anxiety",facet:"confirm"},
  {text:"相手に合わせすぎて、自分の希望があいまいになることがある。",axis:"anxiety",facet:"assim"},
  {text:"小さな変化でも、浮気や心変わりを警戒してしまう。",axis:"anxiety",facet:"jealous"},
  {text:"相手に見捨てられるのではという不安が定期的に湧く。",axis:"anxiety",facet:"abandon"},
  {text:"相手からの返信が遅いと、関係が終わるのではと不安になる。",axis:"anxiety",facet:"confirm"},
  {text:"相手の好みに自分を合わせるのは苦にならない。",axis:"anxiety",facet:"assim"},
  {text:"第三者の存在に強い不安を感じやすい。",axis:"anxiety",facet:"jealous"},
  {text:"歓迎されないかもという不安で、要望を言い出しにくい。",axis:"anxiety",facet:"abandon"},
  {text:"相手の行動を確かめずに放っておける。",axis:"anxiety",facet:"confirm",reverse:true},
  {text:"自分の希望を率直に伝えやすい。",axis:"anxiety",facet:"assim",reverse:true},
  {text:"過度に疑う前に、まず事実確認から入れる。",axis:"anxiety",facet:"jealous",reverse:true},
  {text:"離れてもまたつながれると、どこかで信じていられる。",axis:"anxiety",facet:"abandon",reverse:true},
  {text:"短時間でも返信がないと拒絶だと感じやすい。",axis:"anxiety",facet:"confirm"},
  {text:"自分のニーズより相手の機嫌を優先しがちだ。",axis:"anxiety",facet:"assim"},
  // Avoidance facets
  {text:"困ってもまず一人で解決したいと思う。",axis:"avoidance",facet:"indep"},
  {text:"自分の感情は、関係ではあまり重要ではないと感じる。",axis:"avoidance",facet:"suppress"},
  {text:"恋愛の判断は合理性が最優先だ。",axis:"avoidance",facet:"rational"},
  {text:"恋愛よりも自由時間の確保を優先したい。",axis:"avoidance",facet:"freedom"},
  {text:"相手に頼る前に、まず自分でやるべきだ。",axis:"avoidance",facet:"indep"},
  {text:"感情を表に出すのは得意な方だ。",axis:"avoidance",facet:"suppress",reverse:true},
  {text:"数字や効率だけでは測れない領域も大事だ。",axis:"avoidance",facet:"rational",reverse:true},
  {text:"自由のために合意されたルール作りは大切だと思う。",axis:"avoidance",facet:"freedom",reverse:true},
  {text:"弱みを見せるくらいなら距離を置きたい。",axis:"avoidance",facet:"suppress"},
  {text:"頼るより頼られる方が楽だ。",axis:"avoidance",facet:"indep"},
  {text:"話し合いより“正解”を先に出したい。",axis:"avoidance",facet:"rational"},
  {text:"一緒の時間より一人時間を優先したい場面が多い。",axis:"avoidance",facet:"freedom"},
  {text:"相手の支えを受け取るのは気まずくない。",axis:"avoidance",facet:"indep",reverse:true},
  {text:"気持ちの共有に時間を割く価値を感じる。",axis:"avoidance",facet:"suppress",reverse:true},
];

/* ---------- 質問UIを描画（丸サイズ：端から大・中・小） ---------- */
(function mountQuiz(){
  const form = document.querySelector("#quizForm");
  if(!form) return;

  ITEMS.forEach((it,i)=>{
    const fs = document.createElement("fieldset");
    const dotClass = v => `dot${v}`;
    fs.innerHTML = `
      <legend>${String(i+1).padStart(2,"0")}．${it.text}</legend>
      <div class="opts">
        ${[1,2,3,4,5,6].map(v=>`
          <label>
            <input class="${dotClass(v)}" type="radio" name="q${i}" value="${v}">
            <span>${v}</span>
          </label>
        `).join("")}
      </div>
      <div class="scale-hint"><span class="left">そう思う</span><span class="right">そう思わない</span></div>
    `;
    form.appendChild(fs);
  });

  const btn   = document.querySelector("#submitBtn");
  const errEl = document.querySelector("#formError");

  // 変更点①：ボタンは常に有効（disabled制御をやめる）
  // 変更点②：未回答があれば番号一覧を表示、該当fieldsetに赤枠＆最初の未回答へスクロール
  form.addEventListener("change",(ev)=>{
    if(ev.target && ev.target.name?.startsWith("q")){
      ev.target.closest("fieldset")?.classList.remove("missing");
      if(errEl) errEl.textContent = "";
    }
  });

  btn?.addEventListener("click",(e)=>{
    e.preventDefault();
    const missing = [];
    ITEMS.forEach((_,i)=>{ if(!form.querySelector(`input[name="q${i}"]:checked`)) missing.push(i+1); });

    if(missing.length){
      // 例：「03、07、12番に回答してください」
      const msg = `${missing.map(n=>String(n).padStart(2,"0")).join("、")}番に回答してください`;
      if(errEl) errEl.textContent = msg;

      // 赤枠付与
      document.querySelectorAll("#quizForm fieldset").forEach((fs,idx)=>{
        if(missing.includes(idx+1)) fs.classList.add("missing");
        else fs.classList.remove("missing");
      });

      // 最初の未回答へスクロール
      form.querySelectorAll("fieldset")[missing[0]-1]?.scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }

    // 全問回答 → 採点して遷移
    const answers = ITEMS.map((_,i)=> Number(form.querySelector(`input[name="q${i}"]:checked`).value));
    const result  = score(answers);
    const code    = encodeResult(result);
    location.href = `result.html?code=${encodeURIComponent(code)}`;
  });
})();


/* ---------- 採点ユーティリティ ---------- */
const rev = (v)=>({1:6,2:5,3:4,4:3,5:2,6:1}[v]);
const norm100 = (v)=>((v-1)/5)*100;

const SECURE_FACETS = {
  self_stable:["confirm","assim","jealous","abandon"],
  other_trust:["confirm","jealous"],
  conflict_tolerant:["rational","suppress"],
  boundary_respect:["indep","freedom"],
};
const FEARFUL_FACETS = {
  ambivalent:["confirm","freedom"],
  trigger_avoid:["suppress","indep"],
  testing:["jealous","confirm"],
  boundary_flip:["freedom","rational"],
};

function score(answers){
  let A=[], V=[], fsum={}, fcnt={};
  answers.forEach((a,i)=>{
    const it=ITEMS[i];
    const s = it.reverse ? rev(a) : a;
    (it.axis==="anxiety"?A:V).push(s);
    fsum[it.facet]=(fsum[it.facet]||0)+s;
    fcnt[it.facet]=(fcnt[it.facet]||0)+1;
  });
  const meanA=A.reduce((x,y)=>x+y)/A.length;
  const meanV=V.reduce((x,y)=>x+y)/V.length;
  const A100=norm100(meanA), V100=norm100(meanV);

  const hi=x=>x>=55, lo=x=>x<=45;
  let style;
  if(hi(A100)&&hi(V100)) style="fearful";
  else if(hi(A100)&&(lo(V100)||(45<A100&&A100<55&&A100-50>V100-50))) style="anxious";
  else if(hi(V100)&&(lo(A100)||(45<A100&&A100<55&&V100-50>=A100-50))) style="avoidant";
  else style="secure";

  const facetScore={};
  Object.keys(fsum).forEach(k=>facetScore[k]=norm100(fsum[k]/fcnt[k]));

  let subtypeKey;
  if(style==="anxious"){
    subtypeKey=["confirm","assim","jealous","abandon"].sort((a,b)=>(facetScore[b]||0)-(facetScore[a]||0))[0];
  }else if(style==="avoidant"){
    subtypeKey=["indep","suppress","rational","freedom"].sort((a,b)=>(facetScore[b]||0)-(facetScore[a]||0))[0];
  }else if(style==="secure"){
    const cand=Object.entries(SECURE_FACETS).map(([sub,fl])=>{
      let s=0; fl.forEach(f=>{
        const v=facetScore[f]??50;
        s += (f==="indep"||f==="freedom") ? (100-Math.abs(v-50)) : (100-v);
      });
      return [sub, s/fl.length];
    }).sort((a,b)=>b[1]-a[1])[0];
    subtypeKey=cand[0];
  }else{ // fearful
    const cand=Object.entries(FEARFUL_FACETS).map(([sub,fl])=>{
      let s=0; fl.forEach(f=>{s+= (facetScore[f]??50);});
      return [sub, s/fl.length];
    }).sort((a,b)=>b[1]-a[1])[0];
    subtypeKey=cand[0];
  }

  return {A:A100,V:V100,style,subtypeKey,facetScore};
}

/* ---------- 結果コード（URLクエリ） ---------- */
function encodeResult(r){
  const order=["confirm","assim","jealous","abandon","indep","suppress","rational","freedom"];
  const facets=order.map(k=>Math.round(r.facetScore[k]??50)).join(",");
  return [r.style,r.subtypeKey,Math.round(r.A),Math.round(r.V),facets].join("|");
}
function decodeResult(code){
  const [style,subtypeKey,A,V,facetCsv]=decodeURIComponent(code).split("|");
  const order=["confirm","assim","jealous","abandon","indep","suppress","rational","freedom"];
  const nums=(facetCsv||"").split(",").map(n=>Number(n)||50);
  const facetScore={}; order.forEach((k,i)=>facetScore[k]=nums[i]??50);
  return {style,subtypeKey,A:Number(A),V:Number(V),facetScore};
}

/* ---------- 結果描画（画像＋本文＋レーダー） ---------- */
function renderResultFromQuery(){
  const p=new URLSearchParams(location.search);
  const code=p.get("code"); if(!code) return;

  const R=decodeResult(code);
  const meta=STYLE_META[R.style] || {label:"不明", desc:""};
  const T   =(SUBTYPES[R.style]||{})[R.subtypeKey];

  // 画像（サブタイプに紐づく PNG）
  const vis = document.querySelector("#typeVisual");
  if (vis) {
    const file = IMAGE_BY_SUBTYPE[R.subtypeKey];
    if (file) {
      const src = encodeURI(file);
      const cap = T ? `${STYLE_META[R.style].label} × ${T.name}` : STYLE_META[R.style].label;
      vis.innerHTML =
        `<img src="${src}" alt="${cap}" loading="lazy"
               onerror="this.style.display='none';
                        this.closest('figure').insertAdjacentHTML('beforeend',
                          '<div class=&quot;dim&quot;>画像が見つかりませんでした: ${src}</div>');">
         <figcaption>${cap}</figcaption>`;
    } else {
      vis.innerHTML = "";
    }
  }

  // タイトル＋要約
  const title = document.querySelector("#title");
  if(title) title.textContent = `主要スタイル：${meta.label}`;

  const summary = document.querySelector("#summary");
  if(summary){
    if(T){
      summary.innerHTML = `
        <div><strong>${meta.label} × ${T.name}</strong> ｜ <span class="dim">${T.blurb||""}</span></div>
        <div class="dim">${meta.desc}</div>
        <div class="dim">不安A=${R.A} / 回避V=${R.V}</div>`;
    }else{
      summary.innerHTML = `<div><strong>${meta.label}</strong></div><div class="dim">${meta.desc}</div>`;
    }
  }

  // 本文
  const put = (id, html)=>{ const el=document.querySelector("#"+id); if(el) el.innerHTML = html; };
  if(T?.long){
    put("basic", `<p>${T.long.basic.replace(/\n/g,"<br>")}</p>`);
    put("love",  `<p>${T.long.love.replace(/\n/g,"<br>")}</p>`);
    put("ideal", `<p>${T.long.ideal.replace(/\n/g,"<br>")}</p>`);

    if(T.long.match){
      const makeList=(arr,icon)=> (arr||[]).map(m=>`<li><b>${icon} ${m.label}</b><br><span class="dim">${m.why}</span></li>`).join("");
      const best = makeList(T.long.match.best,"💖");
      const good = makeList(T.long.match.good,"👍");
      const chal = makeList(T.long.match.challenge,"🌀");
      const html = `
        <div class="compat">
          <h3>💖 Best Type</h3><ul>${best}</ul>
          <h3>👍 Good Type</h3><ul>${good}</ul>
          <h3>🌀 Challenge Type</h3><ul>${chal}</ul>
        </div>`;
      put("match", html);
    }
  }else{
    put("basic","<p class='dim'>このサブタイプの詳細文は準備中です。</p>");
  }

  const a=document.querySelector("#share");
  if(a){ a.href=location.href; a.textContent=location.href; }

  drawRadar("bars", R.facetScore);
}

/* ---------- レーダーチャート描画 ---------- */
function drawRadar(id, facets){
  const order = ["confirm","assim","jealous","abandon","indep","suppress","rational","freedom"];
  const labels= ["確認欲求","同化傾向","嫉妬/警戒","見捨て恐怖","自立志向","感情抑制","合理偏重","自由志向"];
  const data  = order.map(k=> (facets[k]??50)/100);

  const c=document.getElementById(id); if(!c) return;
  const ctx=c.getContext("2d");
  const W=c.width, H=c.height;
  ctx.fillStyle = "#0e141c"; ctx.fillRect(0,0,W,H);

  const cx=W/2, cy=H/2+6, R=Math.min(W,H)/2-72;

  // グリッド
  ctx.strokeStyle="#1d2a39";
  for(let r=0.2;r<=1.0;r+=0.2){
    ctx.beginPath();
    for(let i=0;i<labels.length;i++){
      const ang=(Math.PI*2/labels.length)*i - Math.PI/2;
      const x=cx+R*r*Math.cos(ang), y=cy+R*r*Math.sin(ang);
      i?ctx.lineTo(x,y):ctx.moveTo(x,y);
    }
    ctx.closePath(); ctx.stroke();
  }
  // 軸とラベル
  ctx.strokeStyle="#1d2a39"; ctx.fillStyle="#9bb0c3";
  ctx.font="14px system-ui, -apple-system, 'Noto Sans JP', sans-serif";
  labels.forEach((lab,i)=>{
    const ang=(Math.PI*2/labels.length)*i - Math.PI/2;
    const x=cx+R*Math.cos(ang), y=cy+R*Math.sin(ang);
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(x,y); ctx.stroke();
    const lx=cx+(R+18)*Math.cos(ang), ly=cy+(R+18)*Math.sin(ang);
    ctx.textAlign = Math.cos(ang)>0.2?"left":(Math.cos(ang)<-0.2?"right":"center");
    ctx.fillText(lab,lx,ly);
  });
  // データ多角形
  ctx.beginPath();
  data.forEach((v,i)=>{
    const ang=(Math.PI*2/labels.length)*i - Math.PI/2;
    const x=cx+R*v*Math.cos(ang), y=cy+R*v*Math.sin(ang);
    i?ctx.lineTo(x,y):ctx.moveTo(x,y);
  });
  ctx.closePath();
  ctx.fillStyle="rgba(105,224,255,.18)";
  ctx.fill();
  ctx.strokeStyle="#69e0ff"; ctx.lineWidth=2; ctx.stroke();

  // データ点
  data.forEach((v,i)=>{
    const ang=(Math.PI*2/labels.length)*i - Math.PI/2;
    const x=cx+R*v*Math.cos(ang), y=cy+R*v*Math.sin(ang);
    ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fillStyle="#69e0ff"; ctx.fill();
  });
}

// 公開
window.renderResultFromQuery = renderResultFromQuery;
