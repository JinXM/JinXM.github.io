<html><head></head><body>$(document).ready(function(){
  var colors = [
  {
    "cnName": "粉鳳仙",
    "jpName": "フェンフォンシェン",
    "val": "#EAC0C"
  },
  {
    "cnName": "浅粉",
    "jpName": "チェンフェン",
    "val": "#E5B8C"
  },
  {
    "cnName": "淡粉",
    "jpName": "タンフェン",
    "val": "#E8AFC"
  },
  {
    "cnName": "紫薇花",
    "jpName": "ツーウェイホワ",
    "val": "#EEA5D"
  },
  {
    "cnName": "暗粉",
    "jpName": "アンフェン",
    "val": "#E18DA"
  },
  {
    "cnName": "荷花紅",
    "jpName": "フーホワホン",
    "val": "#EB7FA"
  },
  {
    "cnName": "紫水晶",
    "jpName": "ツーシュイチン",
    "val": "#C3A6C"
  },
  {
    "cnName": "浅石英紫",
    "jpName": "チェンシーインツー",
    "val": "#AB96C"
  },
  {
    "cnName": "浅鳳仙紫",
    "jpName": "チェンフォンシェンツー",
    "val": "#D294D"
  },
  {
    "cnName": "木槿紫",
    "jpName": "ムーチンツー",
    "val": "#A381B"
  },
  {
    "cnName": "長春花色",
    "jpName": "チァンチュンホワスー",
    "val": "#DE7AB"
  },
  {
    "cnName": "洋葱紫",
    "jpName": "ヤンツォンツー",
    "val": "#9C668"
  },
  {
    "cnName": "紅蓮灰",
    "jpName": "ホンリェンホイ",
    "val": "#C7607"
  },
  {
    "cnName": "艶粉",
    "jpName": "イェンフェン",
    "val": "#D3547"
  },
  {
    "cnName": "紫粉",
    "jpName": "ツーフェン",
    "val": "#A5435"
  },
  {
    "cnName": "牽牛紫",
    "jpName": "チェンニューツー",
    "val": "#A2207"
  },
  {
    "cnName": "品紅",
    "jpName": "ピンホン",
    "val": "#A7136"
  },
  {
    "cnName": "蘇木色",
    "jpName": "スームースー",
    "val": "#AE506"
  },
  {
    "cnName": "臙脂",
    "jpName": "イェンチ",
    "val": "#952E3"
  },
  {
    "cnName": "辰沙",
    "jpName": "チェンシァ",
    "val": "#AF5E5"
  },
  {
    "cnName": "磚紅",
    "jpName": "チュワンホン",
    "val": "#AA4D3"
  },
  {
    "cnName": "殷紅",
    "jpName": "イェンホン",
    "val": "#A4414"
  },
  {
    "cnName": "銀紅",
    "jpName": "インホン",
    "val": "#C5697"
  },
  {
    "cnName": "肉紅",
    "jpName": "ロウホン",
    "val": "#C1788"
  },
  {
    "cnName": "妃紅",
    "jpName": "フェイホン",
    "val": "#C3565"
  },
  {
    "cnName": "猩紅",
    "jpName": "シンホン",
    "val": "#C4373"
  },
  {
    "cnName": "血紅",
    "jpName": "シュエホン",
    "val": "#A03E2"
  },
  {
    "cnName": "月季紅",
    "jpName": "ユエチーホン",
    "val": "#BB1C3"
  },
  {
    "cnName": "茉莉花紅",
    "jpName": "モーリーホワホン",
    "val": "#B31F4"
  },
  {
    "cnName": "烏羅松紅",
    "jpName": "ウールオソンホン",
    "val": "#C5283"
  },
  {
    "cnName": "銀星海棠",
    "jpName": "インシンハイタン",
    "val": "#D1355"
  },
  {
    "cnName": "象牙紅",
    "jpName": "シァンヤーホン",
    "val": "#BC343"
  },
  {
    "cnName": "牡丹紅",
    "jpName": "ムータンホン",
    "val": "#B8023"
  },
  {
    "cnName": "艶紅",
    "jpName": "イェンホン",
    "val": "#CC353"
  },
  {
    "cnName": "蕉紅色",
    "jpName": "チャオホンスー",
    "val": "#CF292"
  },
  {
    "cnName": "銀朱",
    "jpName": "インチュー",
    "val": "#D15D5"
  },
  {
    "cnName": "硃砂",
    "jpName": "チューシャ",
    "val": "#B84B4"
  },
  {
    "cnName": "二硃",
    "jpName": "アルチュー",
    "val": "#C6574"
  },
  {
    "cnName": "硃膘",
    "jpName": "チューピャオ",
    "val": "#E35C3"
  },
  {
    "cnName": "章丹",
    "jpName": "チァンタン",
    "val": "#EB652"
  },
  {
    "cnName": "蕃茄紅",
    "jpName": "ファンチェホン",
    "val": "#C4473"
  },
  {
    "cnName": "榴花紅",
    "jpName": "リューホワホン",
    "val": "#D54B4"
  },
  {
    "cnName": "柿子色",
    "jpName": "シーツスー",
    "val": "#ED7A3"
  },
  {
    "cnName": "桔紅",
    "jpName": "チューホン",
    "val": "#E7693"
  },
  {
    "cnName": "桔黄",
    "jpName": "チューホワン",
    "val": "#E8853"
  },
  {
    "cnName": "紅扇貝色",
    "jpName": "ホンシャンペイスー",
    "val": "#E9745"
  },
  {
    "cnName": "粉橙色",
    "jpName": "フェンチョンスー",
    "val": "#F8915"
  },
  {
    "cnName": "金紅",
    "jpName": "チンホン",
    "val": "#F0754"
  },
  {
    "cnName": "雄精",
    "jpName": "ションチン",
    "val": "#E4754"
  },
  {
    "cnName": "金黄",
    "jpName": "チンホワン",
    "val": "#C77A3"
  },
  {
    "cnName": "雄黄",
    "jpName": "ションホワン",
    "val": "#D0853"
  },
  {
    "cnName": "蝦黄",
    "jpName": "シアホワン",
    "val": "#E1A14"
  },
  {
    "cnName": "艶黄",
    "jpName": "イェンホワン",
    "val": "#E1A10"
  },
  {
    "cnName": "鵝黄",
    "jpName": "ウーホワン",
    "val": "#F5A31"
  },
  {
    "cnName": "十様錦",
    "jpName": "シーヤンチン",
    "val": "#FCB1A"
  },
  {
    "cnName": "鳳仙粉",
    "jpName": "フォンシェンフェン",
    "val": "#F4A9A"
  },
  {
    "cnName": "肉粉",
    "jpName": "ロウフェン",
    "val": "#F1C7B"
  },
  {
    "cnName": "肉黄",
    "jpName": "ロウホワン",
    "val": "#F0B69"
  },
  {
    "cnName": "釉紅",
    "jpName": "ユーホン",
    "val": "#B65B4"
  },
  {
    "cnName": "紅灰蓮",
    "jpName": "ホンホイリェン",
    "val": "#BB848"
  },
  {
    "cnName": "蛤蜊粉",
    "jpName": "クーリーフェン",
    "val": "#DA958"
  },
  {
    "cnName": "土紅",
    "jpName": "トウホン",
    "val": "#A9535"
  },
  {
    "cnName": "瑪瑙色",
    "jpName": "マーナオスー",
    "val": "#C06B4"
  },
  {
    "cnName": "赭石色",
    "jpName": "チョーシースー",
    "val": "#C37E5"
  },
  {
    "cnName": "赭紅",
    "jpName": "チョーホン",
    "val": "#B56F5"
  },
  {
    "cnName": "紅狐色",
    "jpName": "ホンフースー",
    "val": "#C1845"
  },
  {
    "cnName": "黄棕色",
    "jpName": "ホワンツォンスー",
    "val": "#A5855"
  },
  {
    "cnName": "棕茶",
    "jpName": "ツォンチャ",
    "val": "#B8844"
  },
  {
    "cnName": "中駝",
    "jpName": "チョントゥオ",
    "val": "#9B7E6"
  },
  {
    "cnName": "土黄",
    "jpName": "トウホワン",
    "val": "#CE933"
  },
  {
    "cnName": "樹皮色",
    "jpName": "シューピースー",
    "val": "#B3734"
  },
  {
    "cnName": "桂皮色",
    "jpName": "クイピースー",
    "val": "#BB855"
  },
  {
    "cnName": "土布色",
    "jpName": "トウプースー",
    "val": "#E3B58"
  },
  {
    "cnName": "黄琉璃",
    "jpName": "ホワンリューリー",
    "val": "#E2AF4"
  },
  {
    "cnName": "琉璃色",
    "jpName": "リューリースー",
    "val": "#C48D3"
  },
  {
    "cnName": "檀香色",
    "jpName": "タンシァンスー",
    "val": "#DC943"
  },
  {
    "cnName": "蒼黄",
    "jpName": "ツァンホワン",
    "val": "#C6530"
  },
  {
    "cnName": "米紅",
    "jpName": "ミーホン",
    "val": "#E1BDA"
  },
  {
    "cnName": "瑪瑙粉",
    "jpName": "マーナオフェン",
    "val": "#D79B7"
  },
  {
    "cnName": "向日黄",
    "jpName": "シァンリーホワン",
    "val": "#F4B97"
  },
  {
    "cnName": "浅黄棕",
    "jpName": "チェンホワンツォン",
    "val": "#DEA87"
  },
  {
    "cnName": "南瓜黄",
    "jpName": "ナンクワホワン",
    "val": "#F1B67"
  },
  {
    "cnName": "駱駝色",
    "jpName": "ルオトゥオスー",
    "val": "#D8AD8"
  },
  {
    "cnName": "芦黄",
    "jpName": "ルーホワン",
    "val": "#E2C2A"
  },
  {
    "cnName": "浅桔黄",
    "jpName": "チェンチュホワン",
    "val": "#DA955"
  },
  {
    "cnName": "鹿皮色",
    "jpName": "ルーピースー",
    "val": "#E7BB7"
  },
  {
    "cnName": "鹿皮棕",
    "jpName": "ルーピーツォン",
    "val": "#BB975"
  },
  {
    "cnName": "真絲綢色",
    "jpName": "チェンスーチョウスー",
    "val": "#F4D7B"
  },
  {
    "cnName": "富春紡色",
    "jpName": "フーチュンファンスー",
    "val": "#F0D6A"
  },
  {
    "cnName": "乳白色",
    "jpName": "ルーパイスー",
    "val": "#EEE1C"
  },
  {
    "cnName": "乳黄色",
    "jpName": "ルーホワンスー",
    "val": "#EFE0B"
  },
  {
    "cnName": "甘石粉",
    "jpName": "カンシーフェン",
    "val": "#EADCD"
  },
  {
    "cnName": "浅血牙",
    "jpName": "チェンシュエヤー",
    "val": "#EACDD"
  },
  {
    "cnName": "浅棕灰",
    "jpName": "チェンツォンホイ",
    "val": "#E1DBC"
  },
  {
    "cnName": "粉棕",
    "jpName": "フェンツォン",
    "val": "#DAC5B"
  },
  {
    "cnName": "浅肉粉",
    "jpName": "チェンロウフェン",
    "val": "#EEDEC"
  },
  {
    "cnName": "浅駝色",
    "jpName": "チェントゥオスー",
    "val": "#C9AE8"
  },
  {
    "cnName": "浅棕茶",
    "jpName": "タンツォンチャ",
    "val": "#B0A08"
  },
  {
    "cnName": "肉棕灰",
    "jpName": "ロウツォンホイ",
    "val": "#B89A8"
  },
  {
    "cnName": "肉棕",
    "jpName": "ロウツォン",
    "val": "#D2AE8"
  },
  {
    "cnName": "中棕灰",
    "jpName": "チョンツォンホイ",
    "val": "#A9987"
  },
  {
    "cnName": "姜黄",
    "jpName": "チァンホワン",
    "val": "#B4943"
  },
  {
    "cnName": "新芽色",
    "jpName": "シンヤースー",
    "val": "#B4A76"
  },
  {
    "cnName": "卡其黄",
    "jpName": "カーチーホワン",
    "val": "#D5B88"
  },
  {
    "cnName": "石黄",
    "jpName": "シーホワン",
    "val": "#F2C04"
  },
  {
    "cnName": "乳棕",
    "jpName": "ルーツォン",
    "val": "#C9B48"
  },
  {
    "cnName": "乳灰",
    "jpName": "ルーホイ",
    "val": "#C5BBA"
  },
  {
    "cnName": "蝋黄",
    "jpName": "ラーホワン",
    "val": "#EBE1B"
  },
  {
    "cnName": "深銀灰",
    "jpName": "シェンインホイ",
    "val": "#B2AE9"
  },
  {
    "cnName": "米灰",
    "jpName": "ミーホイ",
    "val": "#C5BFA"
  },
  {
    "cnName": "牙黄",
    "jpName": "ヤーホワン",
    "val": "#EBE1B"
  },
  {
    "cnName": "枝黄",
    "jpName": "チーホワン",
    "val": "#DBC7A"
  },
  {
    "cnName": "丹東石",
    "jpName": "タントンシー",
    "val": "#D7C16"
  },
  {
    "cnName": "黄金色",
    "jpName": "ホワンチンスー",
    "val": "#CCCC6"
  },
  {
    "cnName": "藤黄",
    "jpName": "トンホワン",
    "val": "#F2DE7"
  },
  {
    "cnName": "蛋黄",
    "jpName": "タンホワン",
    "val": "#E7B55"
  },
  {
    "cnName": "槐黄",
    "jpName": "ホワイホワン",
    "val": "#EFE45"
  },
  {
    "cnName": "明黄",
    "jpName": "ミンホワン",
    "val": "#F0C64"
  },
  {
    "cnName": "絲瓜花黄",
    "jpName": "スークワホワホワン",
    "val": "#F7D55"
  },
  {
    "cnName": "嫩姜黄",
    "jpName": "ネンチァンホワン",
    "val": "#E2BD3"
  },
  {
    "cnName": "甘草黄",
    "jpName": "カンツァオホワン",
    "val": "#E4CF8"
  },
  {
    "cnName": "小鶏黄",
    "jpName": "シャオチーホワン",
    "val": "#E3D28"
  },
  {
    "cnName": "芽灰",
    "jpName": "ヤーホイ",
    "val": "#CCC3A"
  },
  {
    "cnName": "檸檬黄",
    "jpName": "ニンマンホワン",
    "val": "#E9DB3"
  },
  {
    "cnName": "楊桃色",
    "jpName": "ヤンタオスー",
    "val": "#D4D57"
  },
  {
    "cnName": "淡黄",
    "jpName": "タンホワン",
    "val": "#EAE3B"
  },
  {
    "cnName": "淡米色",
    "jpName": "タンミースー",
    "val": "#E9E6C"
  },
  {
    "cnName": "胡粉",
    "jpName": "フーフェン",
    "val": "#EBE8D"
  },
  {
    "cnName": "蛤粉",
    "jpName": "クーフェン",
    "val": "#EDEAD"
  },
  {
    "cnName": "立徳粉",
    "jpName": "リートーフェン",
    "val": "#EDEBE"
  },
  {
    "cnName": "牙緑",
    "jpName": "ヤーリュー",
    "val": "#D9E39"
  },
  {
    "cnName": "苦瓜緑",
    "jpName": "クークワリュー",
    "val": "#CDDB8"
  },
  {
    "cnName": "草黄",
    "jpName": "ツァオホワン",
    "val": "#DBCE5"
  },
  {
    "cnName": "枯緑",
    "jpName": "クーリュー",
    "val": "#B7B27"
  },
  {
    "cnName": "嫩草緑",
    "jpName": "ネンツォンリュー",
    "val": "#7EA17"
  },
  {
    "cnName": "浅草緑",
    "jpName": "チェンツァオリュー",
    "val": "#ABCC8"
  },
  {
    "cnName": "銅緑色",
    "jpName": "トンリュースー",
    "val": "#A5B79"
  },
  {
    "cnName": "青豆色",
    "jpName": "チントウスー",
    "val": "#9BAE8"
  },
  {
    "cnName": "黄緑",
    "jpName": "ホワンリュー",
    "val": "#94A65"
  },
  {
    "cnName": "深芽緑",
    "jpName": "シェンヤーリュー",
    "val": "#8C963"
  },
  {
    "cnName": "葱緑",
    "jpName": "ツォンリュー",
    "val": "#94C66"
  },
  {
    "cnName": "軍緑",
    "jpName": "チュンリュー",
    "val": "#CAD4B"
  },
  {
    "cnName": "冬瓜緑",
    "jpName": "トンクワリュー",
    "val": "#51967"
  },
  {
    "cnName": "荷茎緑",
    "jpName": "フーチンリュー",
    "val": "#96BB8"
  },
  {
    "cnName": "緑琉璃色",
    "jpName": "リューリューリースー",
    "val": "#4F7E5"
  },
  {
    "cnName": "嫩葱緑",
    "jpName": "ネンツォオリュー",
    "val": "#93B46"
  },
  {
    "cnName": "鸚鵡緑",
    "jpName": "インウーリュー",
    "val": "#008E5"
  },
  {
    "cnName": "湖緑",
    "jpName": "フーリュー",
    "val": "#46817"
  },
  {
    "cnName": "粗孔雀緑",
    "jpName": "ツーコンチュエリュー",
    "val": "#16857"
  },
  {
    "cnName": "深緑宝石",
    "jpName": "シェンリューパオシー",
    "val": "#2F8F6"
  },
  {
    "cnName": "灰緑",
    "jpName": "ホイリュー",
    "val": "#5C898"
  },
  {
    "cnName": "冬緑",
    "jpName": "トンリュー",
    "val": "#68927"
  },
  {
    "cnName": "巴黎緑",
    "jpName": "パリーリュー",
    "val": "#00B48"
  },
  {
    "cnName": "果緑",
    "jpName": "クオリュー",
    "val": "#8AC28"
  },
  {
    "cnName": "玉緑",
    "jpName": "ユーリュー",
    "val": "#88D5B"
  },
  {
    "cnName": "果灰",
    "jpName": "クオホイ",
    "val": "#88AEA"
  },
  {
    "cnName": "碧玉石",
    "jpName": "ピーユーシー",
    "val": "#56959"
  },
  {
    "cnName": "浅松緑",
    "jpName": "チェンソンリュー",
    "val": "#84C0B"
  },
  {
    "cnName": "深松緑",
    "jpName": "シェンソンリュー",
    "val": "#67B4B"
  },
  {
    "cnName": "浅鮮緑",
    "jpName": "チェンシェンリュー",
    "val": "#A9E1D"
  },
  {
    "cnName": "三緑",
    "jpName": "サンリュー",
    "val": "#90CAA"
  },
  {
    "cnName": "枝緑",
    "jpName": "チーリュー",
    "val": "#BADED"
  },
  {
    "cnName": "淡灰緑",
    "jpName": "タンホイリュー",
    "val": "#AEC4B"
  },
  {
    "cnName": "水黄",
    "jpName": "シュイホワン",
    "val": "#BED2B"
  },
  {
    "cnName": "淡緑",
    "jpName": "タンリュー",
    "val": "#B8D6C"
  },
  {
    "cnName": "鴨蛋青",
    "jpName": "ヤータンチン",
    "val": "#D1E3D"
  },
  {
    "cnName": "浅水緑",
    "jpName": "チェンシュイリュー",
    "val": "#BBE2D"
  },
  {
    "cnName": "浅青瓷釉色",
    "jpName": "チェンチンツーユースー",
    "val": "#CADDD"
  },
  {
    "cnName": "龍泉青瓷釉色",
    "jpName": "ロンチュエンチンツーユースー",
    "val": "#B1C5B"
  },
  {
    "cnName": "春緑",
    "jpName": "チュンリュー",
    "val": "#E3EFD"
  },
  {
    "cnName": "月白色",
    "jpName": "ユエパイスー",
    "val": "#D1E2D"
  },
  {
    "cnName": "銹緑",
    "jpName": "シューリュー",
    "val": "#B8C8B"
  },
  {
    "cnName": "蝋白",
    "jpName": "ラーパイ",
    "val": "#E7E5D"
  },
  {
    "cnName": "芦灰",
    "jpName": "ルーホイ",
    "val": "#A9B08"
  },
  {
    "cnName": "蝦灰",
    "jpName": "シアホイ",
    "val": "#B7B99"
  },
  {
    "cnName": "大理石色",
    "jpName": "ターリーシースー",
    "val": "#A2B2A"
  },
  {
    "cnName": "法国梧桐皮色",
    "jpName": "ファークオウトンピース",
    "val": "#91948"
  },
  {
    "cnName": "中条蝦緑",
    "jpName": "チョンティアオシアリュー",
    "val": "#7F877"
  },
  {
    "cnName": "灰米",
    "jpName": "ホイミー",
    "val": "#B6B19"
  },
  {
    "cnName": "松緑色",
    "jpName": "ソンリュースー",
    "val": "#BEC5B"
  },
  {
    "cnName": "銀藍",
    "jpName": "インラン",
    "val": "#B5C1C"
  },
  {
    "cnName": "雪灰",
    "jpName": "シュエホイ",
    "val": "#CAD0D"
  },
  {
    "cnName": "淡藕合",
    "jpName": "タンオウフー",
    "val": "#D5CCD"
  },
  {
    "cnName": "浅藤紫",
    "jpName": "チェントンツー",
    "val": "#C4C3C"
  },
  {
    "cnName": "蓮灰",
    "jpName": "リェンホイ",
    "val": "#A8A6B"
  },
  {
    "cnName": "雪青灰",
    "jpName": "シュエチンホイ",
    "val": "#9198A"
  },
  {
    "cnName": "雪藍",
    "jpName": "シュエラン",
    "val": "#7991D"
  },
  {
    "cnName": "紫藤灰",
    "jpName": "ツートンホイ",
    "val": "#857E9"
  },
  {
    "cnName": "鳳仙紫",
    "jpName": "フォンシェンツー",
    "val": "#8B658"
  },
  {
    "cnName": "獣皮色",
    "jpName": "ショーピースー",
    "val": "#B9986"
  },
  {
    "cnName": "橙色",
    "jpName": "チョンスー",
    "val": "#E67A2"
  },
  {
    "cnName": "蝶粉",
    "jpName": "ティエフェン",
    "val": "#F5C19"
  },
  {
    "cnName": "果肉色",
    "jpName": "クオロウスー",
    "val": "#F5CEB"
  },
  {
    "cnName": "紙棕",
    "jpName": "チーツォン",
    "val": "#BCA59"
  },
  {
    "cnName": "奶棕",
    "jpName": "ナイツォン",
    "val": "#C1A29"
  },
  {
    "cnName": "紅灰",
    "jpName": "ホンホイ",
    "val": "#82878"
  },
  {
    "cnName": "閃蝶紫",
    "jpName": "シァンティエツー",
    "val": "#8C90B"
  },
  {
    "cnName": "黄灰",
    "jpName": "ホワンホイ",
    "val": "#B0B7A"
  },
  {
    "cnName": "奶緑",
    "jpName": "ナイリュー",
    "val": "#AFC8B"
  }
];
  console.log("color");
})</body></html>