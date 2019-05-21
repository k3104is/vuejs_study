/* Vueアプリケーションの作成 */
var app = new Vue({ /* Vueインスタンスを作成 */
	/* mountする要素 */
	el: '#app',

	/* アプリケーションで使用するデータ */
	data:{
		message: 'Hello Vue.js!',    /* テキストのバインディング */
		list: ['apple', 'banana',　'ichigo'],	/* 繰り返しの描画 */
		show: true,	/* 条件分岐 */
		show2: true	/* トランジション&アニメーション */
	},

	/* 算出プロパティ */
	computed: {
		
	},

	/* ライフサイクルフック */
	created: function () {
		
	},

	/* アプリケーションで使用するメソッド */
	methods:{
		handleClick:function(event){	/* イベントの利用 */
			alert(event.target)
		}
	}
})
console.log(app.message)