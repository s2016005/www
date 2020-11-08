// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"基本的なパラメーターを設定するプラグインです。","parameters":{"cacheLimit":"50","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"on","textSpeed":"1","autoSaveFileId":"20","errorMessage":"エラーが発生しました。ページを再読み込みしてください。何度もこの画面が表示される場合、ブラウザの設定からキャッシュを削除してください。","showErrorDetail":"true","enableProgressBar":"false","maxRenderingFps":"0"}},
{"name":"DataCacheBlocker","status":true,"description":"キャッシュを阻止します。（dataフォルダのみ）","parameters":{}},
{"name":"StopSelfMovementWithPlayer","status":true,"description":"イベント起動中にイベントの自律移動を停止します。","parameters":{"Varidate Switch ID":"0"}},
{"name":"PlayMsgWndCharSE","status":true,"description":"(Ver1.1)メッセージウィンドウで文字ごとにSEを演奏します。","parameters":{"default SE":"1","battle default SE":"0","interval":"2","name1":"Cursor1","volume1":"90","pitch1":"100","name2":"Cursor1","volume2":"75","pitch2":"125"}},
{"name":"MPP_CharacterMake","status":true,"description":"【ver.1.7】ゲーム内でキャラクター生成を行えます。","parameters":{"=== Basic ===":"【基本的な設定】","Edit Color?":"true","Parts List":"[\"Face\",\"FrontHair\",\"RearHair\",\"Beard\",\"Ears\",\"Eyes\",\"Eyebrows\",\"Nose\",\"Mouth\",\"FacialMark\",\"BeastEars\",\"Tail\",\"Wing\",\"Clothing\",\"Cloak\",\"AccA\",\"AccB\",\"Glasses\"]","Preview List":"FG,TV,SV","Force Parts":"[\"Face\",\"Ears\",\"Eyes\",\"Eyebrows\",\"Nose\",\"Mouth\"]","Confirmation Scene?":"true","=== Random ===":"【ランダム生成】","Random Text":"Shift:  ランダム","Random Parts List":"[\"Face\",\"FrontHair\",\"RearHair\",\"Beard\",\"Ears\",\"Eyes\",\"Eyebrows\",\"Nose\",\"Mouth\",\"FacialMark\",\"Clothing\",\"AccA\",\"AccB\",\"Glasses\"]","Random Color List":"3,7,8","Random SE":"{\"Name\":\"Decision1\",\"Volume\":\"90\",\"Pitch\":\"100\",\"Pan\":\"0\"}","Random Background Type":"0","=== Terms ===":"【用語】","Command":"{\"Yes\":\"はい\",\"No\":\"いいえ\",\"Default\":\"元に戻す\",\"Ok\":\"決定\",\"Custom\":\"カスタム\",\"Bright\":\"ブライト\",\"Normal\":\"ノーマル\",\"Dark\":\"ダーク\"}","Message":"{\"Confirmation\":\"このグラフィックでよろしいですか？\",\"Loading\":\"Loading\"}","Base Kind":"{\"Male\":\"男性\",\"Female\":\"女性\",\"Kid\":\"子ども\"}","Parts":"{\"Face\":\"顔\",\"FrontHair\":\"前髪\",\"RearHair\":\"後髪\",\"Beard\":\"ヒゲ\",\"Ears\":\"耳\",\"Eyes\":\"目\",\"Eyebrows\":\"眉\",\"Nose\":\"鼻\",\"Mouth\":\"口\",\"FacialMark\":\"紋様\",\"BeastEars\":\"獣耳\",\"Tail\":\"尻尾\",\"Wing\":\"羽\",\"Clothing\":\"服\",\"Cloak\":\"マント\",\"AccA\":\"装身具1\",\"AccB\":\"装身具2\",\"Glasses\":\"メガネ\"}","Colors":"{\"Color1\":\"肌の色\",\"Color2\":\"目の色\",\"Color3\":\"毛の色\",\"Color4\":\"サブカラー\",\"Color5\":\"紋様の色\",\"Color6\":\"獣耳の色\",\"Color7\":\"メインカラー\",\"Color8\":\"サブカラー1\",\"Color9\":\"サブカラー2\",\"Color10\":\"サブカラー3\",\"Color11\":\"メインカラー\",\"Color12\":\"サブカラー1\",\"Color13\":\"メインカラー\",\"Color14\":\"サブカラー1\",\"Color15\":\"サブカラー2\",\"Color16\":\"メインカラー\",\"Color17\":\"サブカラー1\",\"Color18\":\"サブカラー2\",\"Color19\":\"サブカラー3\",\"Color20\":\"メインカラー\",\"Color21\":\"サブカラー1\",\"Color22\":\"サブカラー2\",\"Color23\":\"尻尾の色\",\"Color24\":\"羽の色\"}","=== Advanced ===":"【高度な設定】","Manual Color Indexs":"[\"{\\\"RGB\\\":\\\"255,235,157\\\",\\\"ColorIndex\\\":\\\"17\\\"}\",\"{\\\"RGB\\\":\\\"255,207,23\\\",\\\"ColorIndex\\\":\\\"17\\\"}\"]","=== Command ===":"【コマンド関連】","Plugin Commands":"{\"SetCharGeneBaseKind\":\"SetCharGeneBaseKind\",\"SetCharGeneDamage\":\"SetCharGeneDamage\",\"StartCharEdit\":\"StartCharEdit\"}"}},
{"name":"ThroughFailedToLoad","status":true,"description":"ロード失敗エラーのすり抜けプラグイン","parameters":{"テストプレー時無効":"true","Web版で無効":"false","無視種別":"3"}},
{"name":"TMNamePop","status":true,"description":"イベントの頭上に文字列を表示する機能を追加します。","parameters":{"backOpacity":"96","fontSize":"20","fontOutlineWidth":"4","fontOutlineColor":"rgba(0, 0, 0, 0.5)","width":"160","useRoundRect":"0","roundRectRadius":"6"}},
{"name":"UR65_SmartPhoneUI","status":true,"description":"スマホ用UI  ver 1.0.0\nUIのサイズをスマートフォン向けに最適化します。","parameters":{"タイトル":"1","メニュー":"1","アイテム":"1","スキル":"1","装備":"1","オプション":"1","ゲーム終了":"1","戦闘":"1","ショップ":"1","イベント関係":"1","アイコン位置修正":"1"}},
{"name":"MPP_HiddenPassage","status":true,"description":"【ver.2.1】指定したリージョンIDのタイルをプレイヤーより上に表示させます。","parameters":{"Passable Upper Region Ids":"32","Impassable Upper Region Ids":"33","=== Command ===":"【コマンド関連】","Plugin Commands":"{\"SetPlayerZ\":\"SetPlayerZ\"}"}},
{"name":"CommonPopupCore","status":true,"description":"ver1.06/汎用的なポップアップの仕組みを提供するためのベースプラグインです。","parameters":{"Text Back Color":"rgba(0,0,0,0.6)","Text Back FileName":"popup_back%d"}},
{"name":"GetInformation","status":true,"description":"ver1.16/アイテムの入手などにスライドアニメするインフォメーションを追加するプラグインです。","parameters":{"Info Disable Switch Id":"0","Use Battle Info":"true","Use Rewards Info":"true","Info Pattern":"GrowUp","Info Font Size":"20","Info Count":"180","Info Delay":"20","Info MoveWait":"160","Info MoveFade":"10","Enable Out Move":"false","Info Position":"Up","Info Slide Action":"Down","Info Sup X":"0","Info Sup Y":"0","Info Width":"816","Gold Icon Index":"314","Actor Icon Start Index":"320","Reward Popup Delay":"0","Log Key":"menu","Log Max":"100","Log Row":"2","Log Reverse":"false","Menu Info Log Name":"","Battle Show List":"item,gold,exp,skill,params,level,abp,classLevel","Get Gold Text":"「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[24]手に入れた！","Lost Gold Text":"「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[2]失った・・・","Get Item Text":"「\\I[_icon]_name」 を\\C[24]手に入れた！\\n\\C[6]_desc1","Lost Item Text":"「\\I[_icon]_name」 を\\C[2]失った・・・\\n\\C[6]_desc1","Get Item Text Num":"「\\I[_icon]_name」 を\\C[14]_num個\\C[24]手に入れた！\\n\\C[6]_desc1","Lost Item Text Num":"「\\I[_icon]_name」を\\C[14]_num個\\C[2]失った・・・\\n\\C[6]_desc1","Get Skill Text":"_actorは「\\I[_icon]_name」 を\\C[24]覚えた！\\n\\C[6]_desc1","Lost Skill Text":"_actorは「\\I[_icon]_name」を \\C[2]忘れてしまった・・・\\n\\C[6]_desc1","Exp Up Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！","Exp Down Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・","Lv Up Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Lv Down Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・","Param Up Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Param Down Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・","Abp Up Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！","Abp Down Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・","Class Lv Up Text":"_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Class Lv Down Text":"_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・","Formation Lv Up Text":"\\C[4]_nameの熟練度\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Formation Lv Max Text":"\\C[4]_name\\C[0]を\\C[14]マスターした！"}},
{"name":"MPP_ChoiceEX","status":true,"description":"【ver.3.11】選択肢の機能拡張","parameters":{"maxPageRow":"8","Disabled Index":"none","=== Command ===":"","Plugin Commands":"{\"ChoicePos\":\"ChoicePos\",\"ChoiceVariableId\":\"ChoiceVariableId\",\"ChoiceRect\":\"ChoiceRect\",\"ChoiceUnderMessage\":\"ChoiceUnderMessage\"}","Event Comment":"{\"ChoiceHelp\":\"選択肢ヘルプ\"}"}},
{"name":"AudioStreaming","status":true,"description":"音声読み込みを高速化し、oggファイルのみを使用します。","parameters":{"mode":"10","deleteM4a":"false"}},
{"name":"Lunatlazur_ActorNameWindow","status":true,"description":"名前ウィンドウ表示プラグイン","parameters":{"テキストカラー":"3"}},
{"name":"MadeWithMv","status":true,"description":"メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。","parameters":{"Show Made With MV":"true","Made with MV Image":"splash","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"1","Vertical BtnZoom":"1","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"true","DPad Visible":"true","DPad Size":"120","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"80","ActionBtn Margin":"10; 90","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"80","CancelBtn Margin":"110; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false","--!need AnalogMove.js!--":"","Analog Move":"false","Analog Sensitivity":"1.8"}},
{"name":"SceneSoundTest","status":true,"description":"サウンドテストプラグイン","parameters":{"コマンド名称":"サウンドテスト","タイトルに追加":"false","メニューに追加":"true","音量名称":"","ピッチ名称":"","位相名称":"","背景ピクチャ":"","読込形式":"CSV","管理番号":"","リスト操作タイプ":"1","説明文に曲名表示":"true"}},
{"name":"AudioStreaming","status":true,"description":"音声読み込みを高速化し、oggファイルのみを使用します。","parameters":{"mode":"10","deleteM4a":"false"}},
{"name":"DP_MapZoom","status":true,"description":"マップの拡大率を制御します。","parameters":{"Base Scale":"1","Encount Effect":"true","Camera Controll":"true","Weather Patch":"true","Picture Size Fixation":"true","Old Focus":"false","Easing Function":"t"}},
{"name":"LoadComSim","status":true,"description":"ver1.00 メニューコマンドにロードを追加します。","parameters":{"loadtext":"ロード"}},
{"name":"RegisterServiceWorker","status":true,"description":"まだ書いてないよ","parameters":{"ServiceWorkerScript":"service_worker.js"}},
{"name":"AnotherNewGame","status":true,"description":"アナザーニューゲーム追加プラグイン","parameters":{"anotherDataList":"[\"{\\\"name\\\":\\\"アップデート情報\\\",\\\"mapId\\\":\\\"4\\\",\\\"mapX\\\":\\\"1\\\",\\\"mapY\\\":\\\"1\\\",\\\"hidden\\\":\\\"false\\\",\\\"disable\\\":\\\"false\\\",\\\"addPosition\\\":\\\"0\\\",\\\"switchId\\\":\\\"0\\\",\\\"fileLoad\\\":\\\"false\\\",\\\"noFadeout\\\":\\\"false\\\"}\",\"{\\\"name\\\":\\\"クレジット\\\",\\\"mapId\\\":\\\"3\\\",\\\"mapX\\\":\\\"1\\\",\\\"mapY\\\":\\\"1\\\",\\\"hidden\\\":\\\"false\\\",\\\"disable\\\":\\\"false\\\",\\\"addPosition\\\":\\\"0\\\",\\\"switchId\\\":\\\"0\\\",\\\"fileLoad\\\":\\\"false\\\",\\\"noFadeout\\\":\\\"false\\\"}\"]","manageNumber":""}},
{"name":"Trb_LoadingAnimation","status":true,"description":"ローディング画面をアニメーションさせるプラグイン","parameters":{"コマ数":"1","再生速度":"30","x":"","y":""}},
{"name":"invitation_standalone","status":true,"description":"","parameters":{}},
{"name":"LoadingExtend","status":true,"description":"ロード中画像拡張プラグイン","parameters":{"イメージ列数":"1","イメージ行数":"60","表示タイプ":"2","アニメーション間隔":"2","表示位置X座標":"","表示位置Y座標":"","待機フレーム数":"0","点滅なし":"ON"}},
{"name":"Debug_ReportMemory","status":false,"description":"メモリ使用量を表示します。","parameters":{"Max Pixels In MPix":"100"}},
{"name":"MPP_PreloadBattleImage","status":true,"description":"【ver.1.1】戦闘に必要な画像を先読み込みすることで、戦闘開始時のロード時間をわずかに減らします。","parameters":{"Actor Image Preload?":"true","Enemy Image Preload?":"true"}},
{"name":"MPP_ActiveTimeBattle","status":false,"description":"【v2.15】戦闘システムをアクティブタイムバトルに変更します。","parameters":{"=== Base ===":"【基本設定】","ATB Mode Default _v2":"wait","ATB Speed Base":"6","AT Increment":"10","ATB Speed Default":"2","Mode Slow Fast Rate":"1.5","Mode Slow Rate":"0.5","Stop Time On Action":"false","=== Option ===":"【オプション画面】","ATB Mode Name _v2":"戦闘モード","ATB Mode Status _v2":"[\"active\",\"slow\",\"wait\",\"stop\"]","ATB Mode Texts _v2":"{\"active\":\"アクティブ\",\"slow\":\"スロー\",\"wait\":\"ウェイト\",\"stop\":\"ストップ\"}","ATB Speed Name":"戦闘速度","ATB Speed Status":"1,2,3,4,5","=== ATB Fast ===":"【加速ボタン関連】","ATB Fast Eneble?":"true","ATB Fast Rate":"2.0","Fast Cancel By Input":"true","Fast Log Eneble?":"true","=== Battle ===":"【戦闘関連】","Change Mode in Battle _v2":"false","Reset AT Die?":"true","Need Escape At":"100","Escape AT Cost":"75","Escape Anime?":"false","Input Step Forward?":"false","Active SE _v2":"{\"Name\":\"Decision1\",\"Volume\":\"90\",\"Pitch\":\"100\",\"Pan\":\"0\"}","Force Target Select?":"true","=== Window ===":"【ウィンドウ】","Help Window Pos":"1","Help Window Row":"1","Status Window Pos":"2","Skill Window HP Draw?":"false","=== AT Gauge ===":"【ATゲージ】","AT Gauge Name":"","AT Gauge Width":"60","AT Gauge Height":"12","AT Charge Color1":"192,192,192","AT Charge Color2":"255,255,255","AT Max Color1":"192,192,192","AT Max Color2":"255,255,192","Chanting View?":"true","AT Chanting Color1":"128,32,0","AT Chanting Color2":"255,64,0","Escaping Change?":"true","AT Escaping Color1":"192,192,192","AT Escaping Color2":"192,192,255"}},
{"name":"MovieManager","status":true,"description":"動画管理プラグイン","parameters":{}},
{"name":"RS_YoutubePlayer","status":true,"description":"ユーチューブプレイヤーです。<RS_YoutubePlayer>","parameters":{"Video Quality":"hd720","Size":"Normal","Looping":"false"}},
{"name":"TitleCommandPosition","status":true,"description":"タイトルコマンドウィンドウの位置を変更します。","parameters":{"Offset X":"0","Offset Y":"20","Width":"240","Background":"0"}},
{"name":"VersionSpecified","status":true,"description":"【MMP ver.1.0】タイトル画面にバージョンを明記します。","parameters":{"version":"Version 0.11.2 (α)","fontSize":"20","fontColor":"rgb(255, 255, 255)","windowX":"0","windowY":"0"}}
];
